'use client';

import { useState, useEffect } from 'react';
import RealisticAdBanner from './RealisticAdBanner';

const FloatingAd = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show floating ad after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isMinimized ? 'w-16 h-16' : 'w-auto h-auto'
      }`}
    >
      {isMinimized ? (
        <div 
          className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-600 transition-colors"
          onClick={handleMinimize}
        >
          <span className="text-white text-xl">💰</span>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">Advertisement</span>
            <div className="flex gap-1">
              <button 
                onClick={handleMinimize}
                className="text-gray-400 hover:text-gray-600 text-xs w-4 h-4 flex items-center justify-center"
              >
                −
              </button>
              <button 
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 text-xs w-4 h-4 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          </div>
          <RealisticAdBanner format="rectangle" />
        </div>
      )}
    </div>
  );
};

export default FloatingAd; 