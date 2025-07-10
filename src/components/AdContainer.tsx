'use client';

import { useEffect, useState } from 'react';
import AdPlaceholder from './AdPlaceholder';

interface AdContainerProps {
  position: 'header' | 'sidebar' | 'content' | 'footer';
  className?: string;
}

const AdContainer = ({ position, className = '' }: AdContainerProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderAdsByPosition = () => {
    switch (position) {
      case 'header':
        return (
          <div className="w-full flex justify-center">
            <AdPlaceholder format={isMobile ? 'mobile-banner' : 'leaderboard'} />
          </div>
        );
      
      case 'sidebar':
        return (
          <div className="space-y-4">
            {!isMobile && <AdPlaceholder format="skyscraper" className="mx-auto" />}
            <AdPlaceholder format="rectangle" className="mx-auto" />
            <AdPlaceholder format="square" className="mx-auto" />
          </div>
        );
      
      case 'content':
        return (
          <div className="flex justify-center">
            <AdPlaceholder format={isMobile ? 'mobile-banner' : 'rectangle'} />
          </div>
        );
      
      case 'footer':
        return (
          <div className="space-y-4">
            <div className="flex justify-center">
              <AdPlaceholder format={isMobile ? 'mobile-banner' : 'banner'} />
            </div>
            <div className="flex justify-center">
              <AdPlaceholder format={isMobile ? 'mobile-banner' : 'leaderboard'} />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`ad-container ${className}`}>
      {renderAdsByPosition()}
    </div>
  );
};

export default AdContainer; 