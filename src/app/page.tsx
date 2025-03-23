'use client';

import RNGWheel from '@/components/RNGWheel';
import RNGNumber from '@/components/RNGNumber';
import RNGDice from '@/components/RNGDice';
import RNGList from '@/components/RNGList';
import Navigation from '@/components/Navigation';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-B44QWD1FE5`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-B44QWD1FE5');
        `}
      </Script>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Random Generator Hub</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <section id="wheel">
            <RNGWheel />
          </section>
          
          <section id="number">
            <RNGNumber />
          </section>
          
          <section id="dice">
            <RNGDice />
          </section>
          
          <section id="list">
            <RNGList />
          </section>
        </div>
      </div>
    </>
  );
}