'use client';

import { useState, useEffect } from 'react';
import RealisticAdBanner from './RealisticAdBanner';

const StickyHeaderAd = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 ${
        isScrolled ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex justify-center">
            <RealisticAdBanner format="banner" />
          </div>
          <button 
            onClick={handleClose}
            className="ml-2 text-gray-400 hover:text-gray-600 text-sm w-6 h-6 flex items-center justify-center"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyHeaderAd; 