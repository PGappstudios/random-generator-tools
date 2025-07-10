'use client';

import { useEffect, useState } from 'react';

interface AdPlaceholderProps {
  format: 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper' | 'mobile-banner' | 'square';
  className?: string;
}

const AdPlaceholder = ({ format, className = '' }: AdPlaceholderProps) => {
  const [adContent, setAdContent] = useState<any>(null);

  const adFormats = {
    banner: { width: 728, height: 90 },
    rectangle: { width: 300, height: 250 },
    leaderboard: { width: 728, height: 90 },
    skyscraper: { width: 160, height: 600 },
    'mobile-banner': { width: 320, height: 50 },
    square: { width: 250, height: 250 }
  };

  const sampleAds = [
    {
      title: "Best Online Casino 2024",
      description: "Play Now & Get $500 Bonus",
      url: "casino-games.com",
      image: "🎰",
      backgroundColor: "#1a73e8"
    },
    {
      title: "Random Number Generator Pro",
      description: "Advanced RNG Tools for Developers",
      url: "rng-tools.com",
      image: "🔢",
      backgroundColor: "#34a853"
    },
    {
      title: "Lottery Number Picker",
      description: "Increase Your Winning Chances",
      url: "lottery-helper.com",
      image: "🎲",
      backgroundColor: "#ea4335"
    },
    {
      title: "Gaming Equipment Sale",
      description: "Up to 70% Off Gaming Gear",
      url: "gaming-store.com",
      image: "🎮",
      backgroundColor: "#fbbc04"
    },
    {
      title: "Statistics Course Online",
      description: "Learn Probability & Statistics",
      url: "math-courses.com",
      image: "📊",
      backgroundColor: "#9c27b0"
    }
  ];

  useEffect(() => {
    // Simulate ad loading
    const timer = setTimeout(() => {
      const randomAd = sampleAds[Math.floor(Math.random() * sampleAds.length)];
      setAdContent(randomAd);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const { width, height } = adFormats[format];
  const isSmallAd = width <= 320 || height <= 90;

  if (!adContent) {
    return (
      <div 
        className={`bg-gray-100 border border-gray-200 flex items-center justify-center ${className}`}
        style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}
      >
        <div className="text-gray-400 text-sm">Loading ad...</div>
      </div>
    );
  }

  return (
    <div 
      className={`relative bg-white border border-gray-200 shadow-sm overflow-hidden ${className}`}
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}
    >
      {/* Google AdSense styling */}
      <div className="absolute top-0 right-0 bg-gray-100 px-1 py-0.5 text-xs text-gray-500 border-l border-b border-gray-200">
        AdSense
      </div>
      
      <div className="h-full flex">
        {/* Ad content */}
        <div 
          className="flex-1 p-3 flex flex-col justify-center"
          style={{ backgroundColor: adContent.backgroundColor + '10' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{adContent.image}</span>
            <div className="flex-1 min-w-0">
              <h3 className={`font-semibold text-gray-800 leading-tight ${isSmallAd ? 'text-xs' : 'text-sm'}`}>
                {adContent.title}
              </h3>
              {!isSmallAd && (
                <p className="text-xs text-gray-600 mt-1 leading-tight">
                  {adContent.description}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-auto">
            <span className={`text-green-600 font-medium ${isSmallAd ? 'text-xs' : 'text-sm'}`}>
              {adContent.url}
            </span>
            <button 
              className={`px-2 py-1 rounded text-white font-medium ${isSmallAd ? 'text-xs' : 'text-sm'}`}
              style={{ backgroundColor: adContent.backgroundColor }}
            >
              {isSmallAd ? 'Visit' : 'Learn More'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Google branding */}
      <div className="absolute bottom-0 left-0 bg-white px-1 py-0.5 text-xs text-gray-400 border-t border-r border-gray-200">
        Ads by Google
      </div>
    </div>
  );
};

export default AdPlaceholder; 