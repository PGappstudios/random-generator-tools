'use client';

import RNGWheel from '@/components/RNGWheel';
import RNGNumber from '@/components/RNGNumber';
import RNGDice from '@/components/RNGDice';
import RNGList from '@/components/RNGList';
import Navigation from '@/components/Navigation';
import RealisticAdBanner from '@/components/RealisticAdBanner';
import FloatingAd from '@/components/FloatingAd';
import StickyHeaderAd from '@/components/StickyHeaderAd';
import InterstitialAd from '@/components/InterstitialAd';

export default function Home() {
  return (
    <>
      <Navigation />
      <StickyHeaderAd />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Ad - Leaderboard */}
        <div className="flex justify-center mb-8">
          <RealisticAdBanner format="leaderboard" />
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">Random Generator Hub</h1>
        
        {/* Top Banner Ad */}
        <div className="flex justify-center mb-8">
          <RealisticAdBanner format="banner" />
        </div>
        
        {/* Main Content - Full Width */}
        <div className="w-full">
          <div className="space-y-12">
            <section id="wheel" className="scroll-mt-32">
              <RNGWheel />
            </section>
            
            {/* Ad between sections */}
            <div className="flex justify-center">
              <RealisticAdBanner format="rectangle" />
            </div>
            
            <section id="number" className="scroll-mt-32">
              <RNGNumber />
            </section>
            
            {/* Mobile Banner Ad */}
            <div className="flex justify-center lg:hidden">
              <RealisticAdBanner format="mobile-banner" />
            </div>
            
            {/* Horizontal Banner Ad */}
            <div className="flex justify-center">
              <RealisticAdBanner format="banner" />
            </div>
            
            <section id="dice" className="scroll-mt-32">
              <RNGDice />
            </section>
            
            {/* Another ad between sections */}
            <div className="flex justify-center">
              <RealisticAdBanner format="rectangle" />
            </div>
            
            <section id="list" className="scroll-mt-32">
              <RNGList />
            </section>
          </div>
        </div>
        
        {/* Bottom Banner Ads */}
        <div className="mt-12 space-y-6">
          <div className="flex justify-center">
            <RealisticAdBanner format="banner" />
          </div>
          <div className="flex justify-center">
            <RealisticAdBanner format="leaderboard" />
          </div>
        </div>
        
        {/* Footer Ad Section */}
        <div className="mt-8 mb-8 flex justify-center">
          <RealisticAdBanner format="rectangle" />
        </div>
      </div>
      
      {/* Floating Ad */}
      <FloatingAd />
      
      {/* Interstitial Ad */}
      <InterstitialAd />
    </>
  );
}