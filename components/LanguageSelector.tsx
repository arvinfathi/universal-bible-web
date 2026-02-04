'use client';

import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { BibleLanguage } from '../data/bibleIndex';
import { HOME_TRANSLATIONS } from '../data/homeTranslations';

interface LanguageSelectorProps {
  languages: BibleLanguage[];
  onSelect: (lang: BibleLanguage) => void;
  searchQuery: string;
  clearSearch: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages, onSelect, searchQuery, clearSearch }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % HOME_TRANSLATIONS.length);
        setFade(true);
      }, 500); // Wait for fade out
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTranslation = HOME_TRANSLATIONS[currentIndex];

  return (
    <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div 
        className="text-center mb-10 sm:mb-16 min-h-[280px] sm:min-h-[160px] flex flex-col justify-center items-center"
        dir={currentTranslation.dir || 'ltr'}
      >
        <h2 
          className={`text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          {currentTranslation.title}
        </h2>
        <p 
          className={`text-slate-600 max-w-2xl mx-auto transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          {currentTranslation.subtitle}
        </p>
      </div>

      {languages.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <Globe className="mx-auto mb-4 opacity-50" size={48} />
          <p>No languages found matching "{searchQuery}"</p>
          <button 
            onClick={clearSearch}
            className="mt-4 text-blue-600 hover:underline"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => onSelect(lang)}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all text-left flex flex-col justify-between h-32 sm:h-40"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {lang.nativeName}
                </h3>
                <p className="text-slate-500 text-sm">{lang.name}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                  {lang.versions.length} {lang.versions.length === 1 ? 'Version' : 'Versions'}
                </span>
                <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
