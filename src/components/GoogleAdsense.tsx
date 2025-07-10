'use client';

import { useEffect } from 'react';

interface GoogleAdsenseProps {
  client: string;
  slot: string;
  style?: React.CSSProperties;
  format?: 'auto' | 'fluid';
  responsive?: boolean;
  layoutKey?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function GoogleAdsense({
  client,
  slot,
  style = { display: 'block' },
  format = 'auto',
  responsive = true,
  layoutKey = '-6t+ed+2i-1n-4w',
}: GoogleAdsenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
      data-layout-key={layoutKey}
    />
  );
} 