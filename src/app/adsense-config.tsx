'use client';

import { useEffect } from 'react';

export default function AdsenseConfig() {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    } catch (err) {
      console.error('AdSense initialization error:', err);
    }
  }, []);

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9894683094010434"
        crossOrigin="anonymous"
      />
      <meta name="google-adsense-account" content="ca-pub-9894683094010434" />
    </>
  );
} 