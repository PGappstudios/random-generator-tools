'use client';

import { useEffect, useRef } from 'react';

interface AdsenseContainerProps {
  slot: string;
  style?: React.CSSProperties;
  className?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  layout?: 'in-article' | 'display';
}

const AdsenseContainer: React.FC<AdsenseContainerProps> = ({
  slot,
  style,
  className = '',
  format = 'auto',
  layout
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const isAdInitialized = useRef(false);

  useEffect(() => {
    const initAd = () => {
      try {
        if (
          !isAdInitialized.current &&
          typeof window !== 'undefined' &&
          (window as any).adsbygoogle
        ) {
          (window as any).adsbygoogle.push({});
          isAdInitialized.current = true;
          console.log('Ad initialized for slot:', slot);
        }
      } catch (error) {
        console.error('Error initializing ad:', error);
      }
    };

    // Try to initialize immediately
    initAd();

    // Fallback initialization after a delay
    const timeoutId = setTimeout(initAd, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [slot]);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100px',
    margin: '20px 0',
    ...style
  };

  return (
    <div style={containerStyle} className={`adsense-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          minHeight: '100px'
        }}
        data-ad-client="ca-pub-9894683094010434"
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdsenseContainer;