'use client';

import { useState, useEffect } from 'react';
import RealisticAdBanner from './RealisticAdBanner';

const InterstitialAd = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show interstitial ad after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Special Offer!
          </h3>
          <p className="text-sm text-gray-600">
            Check out these amazing deals while you're here
          </p>
        </div>
        
        <div className="flex justify-center">
          <RealisticAdBanner format="rectangle" />
        </div>
        
        <div className="mt-4 flex justify-center">
          <button 
            onClick={handleClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          >
            Continue to Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterstitialAd; 