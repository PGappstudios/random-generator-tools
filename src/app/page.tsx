'use client';

import RNGWheel from '@/components/RNGWheel';
import RNGNumber from '@/components/RNGNumber';
import RNGDice from '@/components/RNGDice';
import RNGList from '@/components/RNGList';
import Navigation from '@/components/Navigation';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Home() {
  return (
    <>
      <GoogleAnalytics gaId="G-B44QWD1FE5" />
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