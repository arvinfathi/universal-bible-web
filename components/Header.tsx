'use client';

import React from 'react';
import { Search, BookOpen, Menu, X } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  resetHome: () => void;
  goToAbout: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  isSidebarOpen, 
  setSidebarOpen, 
  resetHome,
  goToAbout 
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer gap-2" 
          onClick={resetHome}
        >
          <BookOpen className="text-blue-600" size={28} />
          <h1 className="text-xl font-serif font-bold tracking-tight text-slate-900">
            Universal<span className="text-blue-600">Bible</span>
          </h1>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search languages or versions..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Desktop About Link */}
        <div className="hidden md:flex items-center ml-4">
          <a onClick={goToAbout} className="text-slate-500 hover:text-blue-600 font-medium cursor-pointer transition-colors">
            About Project
          </a>
        </div>

        <button 
          className="md:hidden text-slate-600"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Search Bar (only shows if menu closed) */}
      {!isSidebarOpen && (
         <div className="md:hidden px-4 py-3 border-t border-slate-100 bg-slate-50">
           <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Find a language..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
         </div>
      )}
    </header>
  );
};

export default Header;
