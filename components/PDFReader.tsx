'use client';

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Search as SearchIcon, Loader2 } from 'lucide-react';
import { BibleLanguage, BibleVersion } from '../data/bibleIndex';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const pdfOptions = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

interface PDFReaderProps {
  filename: string;
  selectedLang?: BibleLanguage | null;
  selectedVersion?: BibleVersion | null;
  onBack: () => void;
}

const PDFReader: React.FC<PDFReaderProps> = ({ filename, selectedLang, selectedVersion, onBack }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [loading, setLoading] = useState<boolean>(true);

  // When filename changes, reset
  useEffect(() => {
    setPageNumber(1);
    setLoading(true);
  }, [filename]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPage = prevPageNumber + offset;
      return Math.min(Math.max(1, newPage), numPages);
    });
  };

  const changeScale = (delta: number) => {
    setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 3.0));
  };

  // Build the correct URL for the PDF
  // Use the local proxy to avoid CORS issues with GitHub Releases
  const pdfUrl = `/api/pdf?url=${encodeURIComponent(filename)}`;

  return (
    <div className="flex flex-col h-full bg-slate-100">
      {/* TOOLBAR */}
      <div className="bg-white border-b border-gray-200 p-2 sm:p-4 flex justify-between items-center shadow-sm z-10 sticky top-0">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-slate-100"
        >
          <ChevronLeft size={20} />
          <span className="ml-1 font-medium hidden sm:inline">Back</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
           {/* Zoom Controls */}
           <div className="flex items-center bg-slate-50 rounded-lg p-1 border border-slate-200">
            <button onClick={() => changeScale(-0.1)} className="p-1 hover:bg-slate-200 rounded text-slate-600" title="Zoom Out">
              <ZoomOut size={18} />
            </button>
            <span className="text-xs font-mono w-12 text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => changeScale(0.1)} className="p-1 hover:bg-slate-200 rounded text-slate-600" title="Zoom In">
              <ZoomIn size={18} />
            </button>
          </div>

          {/* Pagination */}
          <div className="flex items-center bg-slate-50 rounded-lg p-1 border border-slate-200">
            <button 
              onClick={() => changePage(-1)} 
              disabled={pageNumber <= 1}
              className="p-1 hover:bg-slate-200 rounded text-slate-600 disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem('pageInput') as HTMLInputElement;
                const newPage = parseInt(input.value, 10);
                if (!isNaN(newPage)) {
                   setPageNumber(Math.min(Math.max(1, newPage), numPages));
                }
                input.blur();
              }}
              className="flex items-center"
            >
              <input
                name="pageInput"
                type="number"
                min={1}
                max={numPages}
                defaultValue={pageNumber}
                key={pageNumber} // Key ensures input updates when external pageNumber changes
                className="w-12 text-center text-xs font-mono bg-transparent border-none focus:ring-1 focus:ring-blue-500 rounded px-0 py-1"
                onFocus={(e) => e.target.select()}
              />
              <span className="text-xs font-mono text-slate-400 mr-2">
                / {numPages || '--'}
              </span>
            </form>

            <button 
              onClick={() => changePage(1)} 
              disabled={pageNumber >= numPages}
              className="p-1 hover:bg-slate-200 rounded text-slate-600 disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="hidden sm:block w-24"></div> {/* Spacer */}
      </div>

      {/* DOCUMENT VIEW */}
      <div className="flex-1 relative overflow-auto flex justify-center p-4 sm:p-8" id="pdf-container">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          options={pdfOptions}
          loading={
            <div className="flex items-center justify-center p-12 text-slate-400">
              <Loader2 className="animate-spin mr-2" /> Loading Bible...
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center p-12 text-red-400">
              <p>Failed to load PDF.</p>
              <p className="text-xs mt-2 text-slate-500">Check if file exists at {pdfUrl}</p>
            </div>
          }
          className="shadow-2xl"
        >
          <Page 
            pageNumber={pageNumber} 
            scale={scale} 
            className="bg-white shadow-lg"
            renderAnnotationLayer={true}
            renderTextLayer={true}
          />
        </Document>
      </div>

      {/* Floating Page Number for Mobile */}
      <div className="sm:hidden absolute bottom-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm z-20">
        Page {pageNumber}
      </div>
    </div>
  );
};

export default PDFReader;
