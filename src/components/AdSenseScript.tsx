'use client';

import Script from 'next/script';

export default function AdSenseScript() {
  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9894683094010434"
    />
  );
}