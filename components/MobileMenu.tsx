'use client';

import React from 'react';

interface MobileMenuProps {
  resetHome: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ resetHome }) => {
  return (
    <div className="fixed inset-0 bg-white z-40 md:hidden pt-20 px-6">
      <nav className="flex flex-col gap-6 text-lg font-medium">
        <a href="#" onClick={resetHome} className="text-blue-600">Home</a>
        <a href="#" className="text-slate-600">About Project</a>
        <a href="#" className="text-slate-600">Repository</a>
      </nav>
    </div>
  );
};

export default MobileMenu;
