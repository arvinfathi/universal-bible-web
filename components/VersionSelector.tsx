'use client';

import React from 'react';
import { ChevronLeft, BookOpen } from 'lucide-react';
import { BibleLanguage, BibleVersion } from '../data/bibleIndex';

interface VersionSelectorProps {
  selectedLang: BibleLanguage;
  onSelect: (version: BibleVersion) => void;
  onBack: () => void;
}

const VersionSelector: React.FC<VersionSelectorProps> = ({ selectedLang, onSelect, onBack }) => {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-8 sm:py-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
      >
        <ChevronLeft size={16} className="mr-1" /> Back to Languages
      </button>
      
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">
        Select a Version
      </h2>
      <p className="text-slate-600 mb-8">
        Available translations for <span className="font-semibold text-slate-900">{selectedLang.name}</span>
      </p>

      <div className="space-y-3">
        {selectedLang.versions.map((ver) => (
          <button
            key={ver.id}
            onClick={() => onSelect(ver)}
            className="w-full bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex items-center justify-between text-left group"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-lg text-slate-800">{ver.abbreviation}</span>
                <span className="h-4 w-px bg-slate-300"></span>
                <span className="text-slate-600 group-hover:text-slate-900">{ver.name}</span>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              <BookOpen size={16} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VersionSelector;
