'use client';

import { useEffect, useState } from 'react';

interface RealisticAdBannerProps {
  format: 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper' | 'mobile-banner' | 'square';
  className?: string;
}

const RealisticAdBanner = ({ format, className = '' }: RealisticAdBannerProps) => {
  const [adData, setAdData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const adDimensions = {
    banner: { width: 728, height: 90 },
    rectangle: { width: 300, height: 250 },
    leaderboard: { width: 728, height: 90 },
    skyscraper: { width: 160, height: 600 },
    'mobile-banner': { width: 320, height: 50 },
    square: { width: 250, height: 250 }
  };

  const realisticAds = [
    {
      title: "Win Big at Online Casino",
      description: "Play slots, poker & blackjack. $1000 welcome bonus!",
      displayUrl: "bestcasino2024.com",
      targetUrl: "https://bestcasino2024.com",
      logoEmoji: "🎰",
      bgColor: "#1a73e8",
      category: "Gaming"
    },
    {
      title: "Random Number Generator API",
      description: "Enterprise-grade RNG for developers. Free tier available.",
      displayUrl: "randomapi.dev",
      targetUrl: "https://randomapi.dev",
      logoEmoji: "🔢",
      bgColor: "#34a853",
      category: "Developer Tools"
    },
    {
      title: "Lottery Prediction Software",
      description: "Increase your odds with AI-powered number analysis.",
      displayUrl: "lotteryai.com",
      targetUrl: "https://lotteryai.com",
      logoEmoji: "🎲",
      bgColor: "#ea4335",
      category: "Lottery"
    },
    {
      title: "Gaming Keyboards 50% Off",
      description: "Mechanical keyboards for serious gamers. Limited time!",
      displayUrl: "gamingdeals.store",
      targetUrl: "https://gamingdeals.store",
      logoEmoji: "⌨️",
      bgColor: "#fbbc04",
      category: "Gaming Gear"
    },
    {
      title: "Statistics & Probability Course",
      description: "Master statistics online. Certificate included.",
      displayUrl: "mathacademy.edu",
      targetUrl: "https://mathacademy.edu",
      logoEmoji: "📊",
      bgColor: "#9c27b0",
      category: "Education"
    },
    {
      title: "Crypto Trading Bot",
      description: "Automated trading with proven strategies. Start free.",
      displayUrl: "cryptobot.ai",
      targetUrl: "https://cryptobot.ai",
      logoEmoji: "₿",
      bgColor: "#ff9800",
      category: "Crypto"
    }
  ];

  useEffect(() => {
    const loadAd = () => {
      setIsLoading(true);
      setTimeout(() => {
        const randomAd = realisticAds[Math.floor(Math.random() * realisticAds.length)];
        setAdData(randomAd);
        setIsLoading(false);
      }, Math.random() * 1000 + 500); // Simulate real ad loading time
    };

    loadAd();
  }, []);

  const { width, height } = adDimensions[format];
  const isSmallFormat = width <= 320 || height <= 90;
  const isTallFormat = height >= 600;

  if (isLoading) {
    return (
      <div 
        className={`ad-loading border border-gray-200 rounded ${className}`}
        style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      </div>
    );
  }

  if (!adData) return null;

  return (
    <div 
      className={`google-ad ${className}`}
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}
    >
      {/* Ad Label */}
      <div className="absolute top-1 right-2 text-xs text-gray-500 bg-gray-100 px-1 rounded">
        Ad
      </div>

      <div className="google-ad-content h-full">
        {isTallFormat ? (
          // Vertical layout for skyscraper ads
          <div className="flex flex-col items-center text-center space-y-3 p-2">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl"
              style={{ backgroundColor: adData.bgColor }}
            >
              {adData.logoEmoji}
            </div>
            <div className="space-y-1">
              <h3 className="google-ad-title text-xs font-semibold leading-tight">
                {adData.title}
              </h3>
              <p className="google-ad-description text-xs">
                {adData.description}
              </p>
              <div className="google-ad-url text-xs">
                {adData.displayUrl}
              </div>
            </div>
            <button 
              className="text-white px-3 py-1 rounded text-xs font-medium mt-2"
              style={{ backgroundColor: adData.bgColor }}
            >
              Learn More
            </button>
          </div>
        ) : (
          // Horizontal layout for other formats
          <div className="flex items-center h-full p-3 space-x-3">
            <div 
              className="google-ad-image flex-shrink-0"
              style={{ backgroundColor: adData.bgColor + '20' }}
            >
              <span className="text-lg">{adData.logoEmoji}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className={`google-ad-title ${isSmallFormat ? 'text-xs' : 'text-sm'} font-semibold`}>
                {adData.title}
              </h3>
              {!isSmallFormat && (
                <p className="google-ad-description text-xs mt-1">
                  {adData.description}
                </p>
              )}
              <div className={`google-ad-url ${isSmallFormat ? 'text-xs' : 'text-sm'} mt-1`}>
                {adData.displayUrl}
              </div>
            </div>
            
            <button 
              className={`text-white px-3 py-1 rounded font-medium flex-shrink-0 ${isSmallFormat ? 'text-xs' : 'text-sm'}`}
              style={{ backgroundColor: adData.bgColor }}
            >
              {isSmallFormat ? 'Visit' : 'Learn More'}
            </button>
          </div>
        )}
      </div>

      {/* Google Branding */}
      <div className="google-branding">
        Ads by Google
      </div>
    </div>
  );
};

export default RealisticAdBanner; 