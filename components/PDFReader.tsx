'use client';

import React, { useEffect, useEffectEvent, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import {
  EventBus,
  FindState,
  LinkTarget,
  PDFFindController,
  PDFLinkService,
  PDFViewer,
} from 'pdfjs-dist/web/pdf_viewer.mjs';
import {
  CaseSensitive,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Loader2,
  RotateCcw,
  Search,
  WholeWord,
  X,
  ZoomIn,
} from 'lucide-react';
import { BibleLanguage, BibleVersion } from '../data/bibleIndex';

import 'pdfjs-dist/web/pdf_viewer.css';
import './PDFReader.css';


pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const CMAP_URL = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/cmaps/`;
const STANDARD_FONT_DATA_URL = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/standard_fonts/`;

const MIN_SCALE = 0.5;
const MAX_SCALE = 3.0;
const clampScale = (scale: number) => Math.min(Math.max(MIN_SCALE, scale), MAX_SCALE);

// Some PDFs (e.g. the Chinese Union Version) put a space between every Chinese character,
// so also search for the query with those spaces added. pdf.js matches any term in an array.
const HAN_PAIR = /(\p{Script=Han})(?=\p{Script=Han})/gu;
const toFindQuery = (query: string): string | string[] => {
  const spaced = query.replace(HAN_PAIR, '$1 ');
  return spaced === query ? query : [query, spaced];
};

type FindType = '' | 'again' | 'casesensitivitychange' | 'entirewordchange' | 'highlightallchange';

interface FindOptions {
  query: string;
  caseSensitive: boolean;
  entireWord: boolean;
  findPrevious: boolean;
}

interface MatchesCount {
  current: number;
  total: number;
}

interface PDFReaderProps {
  filename: string;
  selectedLang?: BibleLanguage | null;
  selectedVersion?: BibleVersion | null;
  onBack: () => void;
}

interface ReaderProps {
  filename: string;
  onBack: () => void;
  onRetry: () => void;
}

const Reader: React.FC<ReaderProps> = ({ filename, onBack, onRetry }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pdfViewerRef = useRef<PDFViewer | null>(null);
  const eventBusRef = useRef<EventBus | null>(null);

  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [loadProgress, setLoadProgress] = useState<number | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [entireWord, setEntireWord] = useState(false);
  const [findState, setFindState] = useState<number | null>(null);
  const [matches, setMatches] = useState<MatchesCount>({ current: 0, total: 0 });

  // pdf.js owns the DOM inside the container: it lays out every page but only renders
  // the ones near the viewport, and its find controller searches the whole document.
  useEffect(() => {
    const container = containerRef.current!;
    const viewer = viewerRef.current!;
    const abortController = new AbortController();
    const { signal } = abortController;

    const eventBus = new EventBus();
    const linkService = new PDFLinkService({ eventBus, externalLinkTarget: LinkTarget.BLANK });
    const findController = new PDFFindController({ eventBus, linkService });
    // `abortSignal` (detaches pdf.js's scroll and resize listeners on cleanup) is missing from the typings
    const pdfViewer = new PDFViewer({
      container,
      viewer,
      eventBus,
      linkService,
      findController,
      removePageBorders: true,
      abortSignal: signal,
    } as ConstructorParameters<typeof PDFViewer>[0]);
    linkService.setViewer(pdfViewer);
    pdfViewerRef.current = pdfViewer;
    eventBusRef.current = eventBus;

    eventBus.on('pagesinit', () => {
      pdfViewer.currentScaleValue = 'auto';
      setStatus('ready');
    });
    eventBus.on('pagechanging', ({ pageNumber }: { pageNumber: number }) => setPageNumber(pageNumber));
    eventBus.on('scalechanging', ({ scale }: { scale: number }) => setScale(scale));
    eventBus.on('updatefindmatchescount', ({ matchesCount }: { matchesCount: MatchesCount }) => {
      setMatches(matchesCount);
    });
    eventBus.on('updatefindcontrolstate', ({ state, matchesCount }: { state: number; matchesCount: MatchesCount }) => {
      setFindState(state);
      setMatches(matchesCount);
    });

    // Ctrl/Cmd + wheel (and trackpad pinch, which browsers report the same way) zooms around the cursor.
    // Registered natively because React's wheel listener is passive and can't preventDefault.
    container.addEventListener('wheel', (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      const current = pdfViewer.currentScale;
      // Capped so one mouse-wheel notch is ~10%; trackpad pinch deltas are already small
      const delta = Math.max(-10, Math.min(10, e.deltaY));
      const next = clampScale(current * Math.exp(-delta / 100));
      if (next !== current) {
        pdfViewer.updateScale({ drawingDelay: 400, scaleFactor: next / current, origin: [e.clientX, e.clientY] });
      }
    }, { passive: false, signal });

    const loadingTask = pdfjsLib.getDocument({
      url: `/api/pdf?url=${encodeURIComponent(filename)}`,
      cMapUrl: CMAP_URL,
      cMapPacked: true,
      standardFontDataUrl: STANDARD_FONT_DATA_URL,
    });
    loadingTask.onProgress = ({ loaded, total }: { loaded: number; total: number }) => {
      if (total > 0) setLoadProgress(Math.min(1, loaded / total));
    };
    loadingTask.promise.then(
      (pdfDocument) => {
        if (signal.aborted) return;
        setNumPages(pdfDocument.numPages);
        pdfViewer.setDocument(pdfDocument);
        linkService.setDocument(pdfDocument);
      },
      (error) => {
        if (signal.aborted) return;
        console.error('Failed to load PDF:', error);
        setStatus('error');
      },
    );

    return () => {
      abortController.abort();
      // The typings don't allow null, but this is how pdf.js's own viewer closes a document.
      pdfViewer.setDocument(null as unknown as PDFDocumentProxy);
      linkService.setDocument(null);
      loadingTask.destroy();
      pdfViewerRef.current = null;
      eventBusRef.current = null;
    };
  }, [filename]);

  const setZoom = (value: number | 'auto') => {
    const pdfViewer = pdfViewerRef.current;
    if (!pdfViewer) return;
    if (value === 'auto') {
      pdfViewer.currentScaleValue = 'auto';
    } else {
      pdfViewer.currentScale = clampScale(value);
    }
  };

  const commitZoomInput = (input: HTMLInputElement) => {
    const percent = parseInt(input.value, 10);
    const newScale = isNaN(percent) ? scale : clampScale(percent / 100);
    input.value = String(Math.round(newScale * 100));
    setZoom(newScale);
  };

  const commitPageInput = (input: HTMLInputElement) => {
    const pdfViewer = pdfViewerRef.current;
    const newPage = parseInt(input.value, 10);
    if (!pdfViewer || isNaN(newPage)) {
      input.value = String(pageNumber);
      return;
    }
    const clamped = Math.min(Math.max(1, newPage), numPages);
    input.value = String(clamped);
    pdfViewer.currentPageNumber = clamped;
  };

  const dispatchFind = (type: FindType, options: Partial<FindOptions> = {}) => {
    const { query: findQuery, ...rest } = { query, caseSensitive, entireWord, findPrevious: false, ...options };
    eventBusRef.current?.dispatch('find', {
      source: null,
      type,
      query: toFindQuery(findQuery),
      highlightAll: true,
      matchDiacritics: false,
      ...rest,
    });
  };

  const openSearch = () => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
      return;
    }
    setSearchOpen(true);
    // Bring back the highlights that were hidden when the search bar was closed
    if (query) dispatchFind('highlightallchange');
  };

  const closeSearch = () => {
    setSearchOpen(false);
    eventBusRef.current?.dispatch('findbarclose', { source: null });
  };

  // Take over Ctrl/Cmd+F: the browser's own find only sees the few pages that are currently rendered.
  const onWindowKeyDown = useEffectEvent((e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && e.key.toLowerCase() === 'f') {
      e.preventDefault();
      openSearch();
    }
  });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => onWindowKeyDown(e);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const ready = status === 'ready';

  let searchStatus = '';
  if (query) {
    if (matches.total > 0) {
      searchStatus = `${matches.current} of ${matches.total}`;
    } else if (findState === FindState.NOT_FOUND) {
      searchStatus = 'No results';
    } else if (findState === FindState.PENDING) {
      searchStatus = 'Searching…';
    }
  }

  const toggleClass = (active: boolean) =>
    `p-1 rounded transition-colors ${active ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-200'}`;

  return (
    <div className="flex flex-col h-dvh bg-slate-100">
      <div className="bg-white border-b border-gray-200 p-2 sm:p-4 flex justify-between items-center gap-2 shadow-sm z-10 sticky top-0">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-slate-100"
        >
          <ChevronLeft size={20} />
          <span className="ml-1 font-medium hidden sm:inline">Back</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center bg-slate-50 rounded-lg p-1 border border-slate-200 gap-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget.elements.namedItem('zoomInput') as HTMLInputElement).blur();
              }}
              className="flex items-center bg-white border border-slate-300 rounded overflow-hidden"
            >
              <div className="bg-slate-100 p-1 border-r border-slate-300 text-slate-500">
                <ZoomIn size={14} />
              </div>
              <input
                name="zoomInput"
                type="number"
                min={MIN_SCALE * 100}
                max={MAX_SCALE * 100}
                defaultValue={Math.round(scale * 100)}
                key={Math.round(scale * 100)}
                disabled={!ready}
                onFocus={(e) => e.target.select()}
                onBlur={(e) => commitZoomInput(e.currentTarget)}
                className="w-12 h-6 text-xs text-center border-none focus:ring-0 p-0"
                title="Zoom %"
              />
            </form>
            <input
              type="range"
              min={MIN_SCALE}
              max={MAX_SCALE}
              step="0.1"
              value={scale}
              disabled={!ready}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-24 sm:w-32 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hidden md:block"
              title={`Zoom: ${Math.round(scale * 100)}%`}
            />
            <div className="w-px h-4 bg-slate-300 hidden md:block"></div>
            <button
              onClick={() => setZoom('auto')}
              disabled={!ready}
              className="p-1 hover:bg-slate-200 rounded text-slate-600 disabled:opacity-30"
              title="Reset Zoom"
            >
              <RotateCcw size={14} />
            </button>
          </div>

          <div className="flex items-center bg-slate-50 rounded-lg p-1 border border-slate-200">
            <button
              onClick={() => pdfViewerRef.current?.previousPage()}
              disabled={!ready || pageNumber <= 1}
              className="p-1 hover:bg-slate-200 rounded text-slate-600 disabled:opacity-30"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget.elements.namedItem('pageInput') as HTMLInputElement).blur();
              }}
              className="flex items-center"
            >
              <input
                name="pageInput"
                type="number"
                min={1}
                max={numPages}
                defaultValue={pageNumber}
                key={pageNumber}
                disabled={!ready}
                onFocus={(e) => e.target.select()}
                onBlur={(e) => commitPageInput(e.currentTarget)}
                className="w-10 text-center text-xs font-mono bg-transparent border-none focus:ring-1 focus:ring-blue-500 rounded px-0 py-1"
                aria-label="Page number"
              />
              <span className="min-w-9 text-xs font-mono text-slate-400 mr-2">
                / {numPages || '--'}
              </span>
            </form>

            <button
              onClick={() => pdfViewerRef.current?.nextPage()}
              disabled={!ready || pageNumber >= numPages}
              className="p-1 hover:bg-slate-200 rounded text-slate-600 disabled:opacity-30"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <button
          onClick={isSearchOpen ? closeSearch : openSearch}
          disabled={!ready}
          className={`flex items-center px-2 py-1 rounded transition-colors disabled:opacity-30 ${
            isSearchOpen ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-slate-100'
          }`}
          title="Search (Ctrl+F)"
          aria-label="Search this Bible"
          aria-expanded={isSearchOpen}
        >
          <Search size={18} />
          <span className="ml-1 font-medium hidden sm:inline">Search</span>
        </button>
      </div>

      {isSearchOpen && (
        <div className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2 shadow-sm z-10">
          <div className="max-w-2xl mx-auto flex items-center gap-1 sm:gap-2">
            <div className="relative flex-1 min-w-0">
              <Search size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                ref={searchInputRef}
                autoFocus
                type="text"
                enterKeyHint="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  dispatchFind('', { query: e.target.value });
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    dispatchFind('again', { findPrevious: e.shiftKey });
                  } else if (e.key === 'Escape') {
                    e.preventDefault();
                    closeSearch();
                  }
                }}
                onFocus={(e) => e.target.select()}
                placeholder="Search this Bible"
                aria-label="Search this Bible"
                className="w-full h-9 pl-8 pr-20 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
              <span
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 pointer-events-none"
                aria-live="polite"
              >
                {searchStatus}
              </span>
            </div>

            <div className="flex items-center bg-slate-50 rounded-lg p-1 border border-slate-200">
              <button
                onClick={() => dispatchFind('again', { findPrevious: true })}
                disabled={!matches.total}
                className="p-1 hover:bg-slate-200 rounded text-slate-600 disabled:opacity-30"
                title="Previous match (Shift+Enter)"
                aria-label="Previous match"
              >
                <ChevronUp size={18} />
              </button>
              <button
                onClick={() => dispatchFind('again')}
                disabled={!matches.total}
                className="p-1 hover:bg-slate-200 rounded text-slate-600 disabled:opacity-30"
                title="Next match (Enter)"
                aria-label="Next match"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            <div className="hidden sm:flex items-center bg-slate-50 rounded-lg p-1 border border-slate-200 gap-1">
              <button
                onClick={() => {
                  setCaseSensitive(!caseSensitive);
                  dispatchFind('casesensitivitychange', { caseSensitive: !caseSensitive });
                }}
                className={toggleClass(caseSensitive)}
                title="Match case"
                aria-label="Match case"
                aria-pressed={caseSensitive}
              >
                <CaseSensitive size={18} />
              </button>
              <button
                onClick={() => {
                  setEntireWord(!entireWord);
                  dispatchFind('entirewordchange', { entireWord: !entireWord });
                }}
                className={toggleClass(entireWord)}
                title="Whole words"
                aria-label="Whole words"
                aria-pressed={entireWord}
              >
                <WholeWord size={18} />
              </button>
            </div>

            <button
              onClick={closeSearch}
              className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              title="Close (Esc)"
              aria-label="Close search"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      <div className="relative flex-1">
        <div ref={containerRef} className="absolute inset-0 overflow-auto">
          <div ref={viewerRef} className="pdfViewer" />
        </div>

        {status === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center p-12 bg-slate-100 text-slate-400">
            <Loader2 className="animate-spin mr-2" /> Loading Bible...
            {loadProgress !== null && <span className="ml-1 tabular-nums">{Math.round(loadProgress * 100)}%</span>}
          </div>
        )}

        {status === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 bg-slate-100 text-red-400">
            <p>Failed to load PDF.</p>
            <button onClick={onRetry} className="mt-4 text-sm text-blue-600 hover:underline">
              Try again
            </button>
          </div>
        )}

        {ready && (
          <div className="sm:hidden absolute bottom-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm z-20">
            Page {pageNumber}
          </div>
        )}
      </div>
    </div>
  );
};

const PDFReader: React.FC<PDFReaderProps> = ({ filename, onBack }) => {
  const [attempt, setAttempt] = useState(0);

  // Keyed so all reader state starts fresh for each file and each retry
  return (
    <Reader
      key={`${filename}#${attempt}`}
      filename={filename}
      onBack={onBack}
      onRetry={() => setAttempt(a => a + 1)}
    />
  );
};

export default PDFReader;
