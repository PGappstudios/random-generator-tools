'use client';

import { useEffect } from 'react';

export default function AdSenseInit() {
  useEffect(() => {
    try {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9894683094010434`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);

      // Initialize adsbygoogle
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    } catch (err) {
      console.error('Error loading AdSense script:', err);
    }
  }, []);

  return null;
} 