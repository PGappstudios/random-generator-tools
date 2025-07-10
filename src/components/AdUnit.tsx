'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  style?: React.CSSProperties;
}

const AdUnit = ({ slot, format = 'auto', responsive = true, style }: AdUnitProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const isAdInitialized = useRef(false);

  useEffect(() => {
    const initAd = () => {
      try {
        if (!isAdInitialized.current && (window as any).adsbygoogle) {
          console.log('Pushing ad to queue for slot:', slot);
          (window as any).adsbygoogle.push({});
          isAdInitialized.current = true;
          console.log('Ad initialization complete for slot:', slot);
        }
      } catch (err) {
        console.error('AdSense error for slot', slot, ':', err);
      }
    };

    // Try to initialize immediately
    initAd();

    // Also set up a backup initialization after a delay
    const timeoutId = setTimeout(initAd, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [slot]);

  return (
    <div className="ad-container my-4" style={{ textAlign: 'center', minHeight: '100px', background: '#f0f0f0' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', margin: '0 auto', minHeight: '100px', ...style }}
        data-ad-client="ca-pub-9894683094010434"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdUnit; 