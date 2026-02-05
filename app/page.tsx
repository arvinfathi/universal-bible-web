'use client';

import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';
import VersionSelector from '../components/VersionSelector';
import MobileMenu from '../components/MobileMenu';
import AboutPage from '../components/AboutPage';
import { BIBLE_INDEX, BibleLanguage, BibleVersion } from '../data/bibleIndex';

const PDFReader = dynamic(() => import('../components/PDFReader'), { ssr: false });

const App = () => {
  // State
  const [view, setView] = useState<'home' | 'versions' | 'reader' | 'about'>('home');
  const [selectedLang, setSelectedLang] = useState<BibleLanguage | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<BibleVersion | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Filter Logic (Search)
  const filteredLanguages = useMemo(() => {
    if (!searchQuery) return BIBLE_INDEX;
    const lowerQuery = searchQuery.toLowerCase();
    
    // Filter languages that match name OR have versions that match
    return BIBLE_INDEX.filter(lang => 
      lang.name.toLowerCase().includes(lowerQuery) ||
      lang.nativeName.toLowerCase().includes(lowerQuery) ||
      lang.versions.some(v => 
        v.name.toLowerCase().includes(lowerQuery) || 
        v.abbreviation.toLowerCase().includes(lowerQuery)
      )
    );
  }, [searchQuery]);

  // Handlers
  const handleLanguageSelect = (lang: BibleLanguage) => {
    setSelectedLang(lang);
    // If language only has one version, skip selection screen
    if (lang.versions.length === 1) {
      handleVersionSelect(lang.versions[0]);
    } else {
      setView('versions');
    }
  };

  const handleVersionSelect = (version: BibleVersion) => {
    setSelectedVersion(version);
    setView('reader');
  };

  const handleBack = () => {
    if (view === 'reader') {
      if (selectedLang && selectedLang.versions.length > 1) {
        setView('versions');
      } else {
        setView('home');
        setSelectedLang(null);
      }
      setSelectedVersion(null);
    } else if (view === 'versions') {
      setView('home');
      setSelectedLang(null);
    } else if (view === 'about') {
      setView('home');
    }
  };

  const resetHome = () => {
    setView('home');
    setSelectedLang(null);
    setSelectedVersion(null);
    setSearchQuery('');
    setSidebarOpen(false);
  };

  const goToAbout = () => {
    setView('about');
    setSidebarOpen(false);
  };


  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden">
      
      {view !== 'reader' && (
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          resetHome={resetHome}
          goToAbout={goToAbout}
        />
      )}

      {isSidebarOpen && <MobileMenu resetHome={resetHome} goToAbout={goToAbout} />}

      <main className="flex-1 flex flex-col relative overflow-y-auto">
        
        {view === 'home' && (
          <LanguageSelector 
            languages={filteredLanguages} 
            onSelect={handleLanguageSelect}
            searchQuery={searchQuery}
            clearSearch={() => setSearchQuery('')}
          />
        )}

        {view === 'about' && <AboutPage />}

        {view === 'versions' && selectedLang && (
          <VersionSelector 
            selectedLang={selectedLang}
            onSelect={handleVersionSelect}
            onBack={handleBack}
          />
        )}

        {view === 'reader' && selectedVersion && (
          <PDFReader 
            filename={selectedVersion.filename} 
            selectedLang={selectedLang}
            selectedVersion={selectedVersion}
            onBack={handleBack}
          />
        )}
      </main>

      {view !== 'reader' && (
        <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-slate-500 text-sm">
              UniversalBible App &copy; {new Date().getFullYear()}
            </p>
            <p className="text-slate-400 text-xs mt-2">
               Using Bible SuperSearch Data • Made with ❤️
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;