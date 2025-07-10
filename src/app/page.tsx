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
      
      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4" role="main">
        {/* Header Ad - Leaderboard */}
        <div className="flex justify-center mb-8" role="banner" aria-label="Advertisement">
          <RealisticAdBanner format="leaderboard" />
        </div>

        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-6">
            Free Online Random Generator Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of free online random generator tools. Perfect for making decisions, 
            picking winners, classroom activities, gaming, and random selection. No signup required - start using instantly!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="bg-blue-50 px-3 py-1 rounded-full">✨ 100% Free</span>
            <span className="bg-violet-50 px-3 py-1 rounded-full">🚀 No Registration</span>
            <span className="bg-green-50 px-3 py-1 rounded-full">📱 Mobile Friendly</span>
            <span className="bg-orange-50 px-3 py-1 rounded-full">🔒 Secure & Private</span>
          </div>
        </header>
        
        {/* Top Banner Ad */}
        <div className="flex justify-center mb-12" role="banner" aria-label="Advertisement">
          <RealisticAdBanner format="banner" />
        </div>
        
        {/* Tools Introduction */}
        <section className="mb-16" aria-labelledby="tools-intro">
          <h2 id="tools-intro" className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Choose Your Random Generator Tool
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🎡 Wheel Spinner</h3>
              <p className="text-sm text-gray-600">Spin a customizable wheel to make random selections from your options.</p>
            </div>
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-lg font-semibold text-violet-600 mb-2">🔢 Number Generator</h3>
              <p className="text-sm text-gray-600">Generate random numbers within any range you specify instantly.</p>
            </div>
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🎲 Dice Roller</h3>
              <p className="text-sm text-gray-600">Roll various dice types (d4-d100) for gaming and random selection.</p>
            </div>
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-lg font-semibold text-violet-600 mb-2">📝 List Randomizer</h3>
              <p className="text-sm text-gray-600">Pick random items from your custom lists or imported Excel files.</p>
            </div>
          </div>
        </section>
        
        {/* Main Tools Content - Full Width */}
        <div className="w-full">
          <div className="space-y-16">
            {/* Random Wheel Spinner Section */}
            <section id="wheel" className="scroll-mt-32" aria-labelledby="wheel-heading">
              <div className="text-center mb-8">
                <h2 id="wheel-heading" className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Random Wheel Spinner - Decision Maker
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Create your own spinning wheel with custom options. Perfect for making decisions, selecting winners, 
                  classroom activities, and random choices. Add items manually or import from Excel files.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Decision Making</span>
                  <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded">Winner Selection</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Classroom Tool</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Excel Import</span>
                </div>
              </div>
              <RNGWheel />
            </section>
            
            {/* Ad between sections */}
            <div className="flex justify-center" role="banner" aria-label="Advertisement">
              <RealisticAdBanner format="rectangle" />
            </div>
            
            {/* Random Number Generator Section */}
            <section id="number" className="scroll-mt-32" aria-labelledby="number-heading">
              <div className="text-center mb-8">
                <h2 id="number-heading" className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Random Number Generator - True Randomness
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Generate truly random numbers within any range using cryptographically secure algorithms. 
                  Perfect for statistical sampling, lottery numbers, password generation, and fair random selection.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Cryptographically Secure</span>
                  <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded">Any Range</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Statistical Use</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Instant Results</span>
                </div>
              </div>
              <RNGNumber />
            </section>
            
            {/* Mobile Banner Ad */}
            <div className="flex justify-center lg:hidden" role="banner" aria-label="Advertisement">
              <RealisticAdBanner format="mobile-banner" />
            </div>
            
            {/* Horizontal Banner Ad */}
            <div className="flex justify-center" role="banner" aria-label="Advertisement">
              <RealisticAdBanner format="banner" />
            </div>
            
            {/* Dice Roller Section */}
            <section id="dice" className="scroll-mt-32" aria-labelledby="dice-heading">
              <div className="text-center mb-8">
                <h2 id="dice-heading" className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Online Dice Roller - D&D and RPG Dice
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Roll all standard tabletop gaming dice online. Supports d4, d6, d8, d10, d12, d20, and d100 dice. 
                  Perfect for Dungeons & Dragons, Pathfinder, and other role-playing games. Roll multiple dice at once.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">D&D Compatible</span>
                  <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded">All Dice Types</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Multiple Dice</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">RPG Gaming</span>
                </div>
              </div>
              <RNGDice />
            </section>
            
            {/* Another ad between sections */}
            <div className="flex justify-center" role="banner" aria-label="Advertisement">
              <RealisticAdBanner format="rectangle" />
            </div>
            
            {/* List Randomizer Section */}
            <section id="list" className="scroll-mt-32" aria-labelledby="list-heading">
              <div className="text-center mb-8">
                <h2 id="list-heading" className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Random List Picker - Name and Item Selector
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Randomly select items from your custom lists. Import from Excel files, add items manually, 
                  or paste from any text source. Ideal for name picking, team selection, and random sampling.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Excel Import</span>
                  <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded">Name Picker</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Team Selection</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Text Import</span>
                </div>
              </div>
              <RNGList />
            </section>
          </div>
        </div>
        
        {/* Use Cases Section */}
        <section className="mt-20 mb-16" aria-labelledby="use-cases-heading">
          <h2 id="use-cases-heading" className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Popular Use Cases for Random Generator Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🎓 Education & Classroom</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Pick students for presentations</li>
                <li>• Create random groups and teams</li>
                <li>• Select questions for quizzes</li>
                <li>• Assign random topics or roles</li>
                <li>• Classroom icebreaker activities</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-xl font-semibold text-violet-600 mb-4">🎮 Gaming & Entertainment</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Roll dice for D&D and RPGs</li>
                <li>• Random encounter generation</li>
                <li>• Party games and activities</li>
                <li>• Spin the bottle alternatives</li>
                <li>• Random challenge selection</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🏆 Contests & Giveaways</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Select contest winners fairly</li>
                <li>• Random prize distribution</li>
                <li>• Social media giveaways</li>
                <li>• Raffle and lottery draws</li>
                <li>• Fair participant selection</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">💼 Business & Work</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Random employee selection</li>
                <li>• Task and project assignment</li>
                <li>• Meeting presentation order</li>
                <li>• Random sampling for surveys</li>
                <li>• Quality control selection</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🎯 Decision Making</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Choose between options</li>
                <li>• Restaurant and movie selection</li>
                <li>• Travel destination picking</li>
                <li>• Activity and hobby selection</li>
                <li>• Breaking ties and deadlocks</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-violet-100">
              <h3 className="text-xl font-semibold text-red-600 mb-4">🔬 Research & Statistics</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Random sampling methods</li>
                <li>• Statistical data generation</li>
                <li>• A/B testing participant selection</li>
                <li>• Research group assignment</li>
                <li>• Randomized controlled trials</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Bottom Banner Ads */}
        <div className="mt-16 space-y-6" role="banner" aria-label="Advertisements">
          <div className="flex justify-center">
            <RealisticAdBanner format="banner" />
          </div>
          <div className="flex justify-center">
            <RealisticAdBanner format="leaderboard" />
          </div>
        </div>
        
        {/* Footer Ad Section */}
        <div className="mt-8 mb-8 flex justify-center" role="banner" aria-label="Advertisement">
          <RealisticAdBanner format="rectangle" />
        </div>
      </main>
      
      {/* Floating Ad */}
      <FloatingAd />
      
      {/* Interstitial Ad */}
      <InterstitialAd />
    </>
  );
}