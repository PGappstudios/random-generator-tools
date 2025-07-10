import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { metadata as siteMetadata } from './metadata';
import AdSenseScript from '@/components/AdSenseScript';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = siteMetadata;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B44QWD1FE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B44QWD1FE5');
          `}
        </Script>
        <link rel="canonical" href="https://random-generator-tools.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Random Generator Tools',
              description: 'Free online random generator tools including wheel spinner, list randomizer, and number generator.',
              url: 'https://random-generator-tools.com',
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              },
              author: {
                '@type': 'Organization',
                name: 'Random Generator Tools'
              }
            })
          }}
        />
        <AdSenseScript />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50`}>
        <main className="min-h-screen flex flex-col">
          <header className="bg-white/80 backdrop-blur-lg border-b border-violet-100 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Random Generator Tools
              </h1>
              <p className="mt-2 text-gray-600 text-lg">
                Free online tools for random selection and decision making
              </p>
            </nav>
          </header>
          
          {/* Main Content */}
          <div className="flex-grow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {children}
            </div>
          </div>

          {/* Recommended Products Section */}
          <section className="w-full py-16 bg-gradient-to-br from-white via-blue-50/30 to-violet-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-12">
                Recommended Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 flex flex-col h-full">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">DNDND Metal Dice Set</h3>
                    <p className="text-gray-600">
                      7 die Metal Polyhedral Dice Set with Gift Metal Box and Gold Number for DND Dungeons and Dragons
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://amzn.to/4kW05mb"
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 flex flex-col h-full">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Lucky Balloon Gun</h3>
                    <p className="text-gray-600">
                      Who is The Lucky One Tonight? Russian Roulette Party Game - Fun Family Games
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://amzn.to/41QnyML"
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 flex flex-col h-full">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Wilder Hot Ones Roulette</h3>
                    <p className="text-gray-600">
                      Hot Sauce Included – A Push Your Luck Party Game
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://amzn.to/4ivKxnx"
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>

                {/* Product 4 */}
                <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 flex flex-col h-full">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Good Luck Puzzle Box</h3>
                    <p className="text-gray-600">
                      Money and Gift Card Holder in a Wooden Magic Trick Lock with Hidden Compartment
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://amzn.to/4kKmh2B"
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full bg-gradient-to-br from-white via-blue-50/30 to-violet-50/30 py-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-8" itemScope itemType="https://schema.org/FAQPage">
                {/* Random Number Generator FAQ */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 p-8">
                  <h3 itemProp="name" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">How does the Random Number Generator work?</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600">
                      <p>Our Random Number Generator uses a cryptographically secure algorithm to generate truly random numbers within your specified range. Simply:</p>
                      <ol className="list-decimal ml-5 mt-2 space-y-2">
                        <li>Enter your minimum number</li>
                        <li>Enter your maximum number</li>
                        <li>Click "Generate Number"</li>
                        <li>Get your random result instantly</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Dice Roller FAQ */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 p-8">
                  <h3 itemProp="name" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">What types of dice can I roll?</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600">
                      <p>Our Dice Roller supports all standard RPG dice types:</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>d4 (4-sided)</li>
                        <li>d6 (6-sided)</li>
                        <li>d8 (8-sided)</li>
                        <li>d10 (10-sided)</li>
                        <li>d12 (12-sided)</li>
                        <li>d20 (20-sided)</li>
                        <li>d100 (percentile)</li>
                      </ul>
                      <p className="mt-2">You can roll up to 10 dice simultaneously and get instant totals!</p>
                    </div>
                  </div>
                </div>

                {/* Random Wheel FAQ */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 p-8">
                  <h3 itemProp="name" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">How can I use the Random Wheel Spinner?</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600">
                      <p>The Random Wheel Spinner is perfect for making decisions or selecting winners. Here's how to use it:</p>
                      <ol className="list-decimal ml-5 mt-2 space-y-2">
                        <li>Add your items one by one or upload an Excel file</li>
                        <li>Customize the wheel with your entries</li>
                        <li>Click "Spin the Wheel"</li>
                        <li>Watch the animation and get your random selection</li>
                        <li>Share the result on social media</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Random List FAQ */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 p-8">
                  <h3 itemProp="name" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">Can I import items from Excel for the Random List Picker?</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600">
                      <p>Yes! Our Random List Picker supports Excel file imports. Here's how:</p>
                      <ol className="list-decimal ml-5 mt-2 space-y-2">
                        <li>Create an Excel file with your items (one per row)</li>
                        <li>Click "Upload Excel File" in the tool</li>
                        <li>Select your file to import all items automatically</li>
                        <li>Click "Pick Random Item" to make a selection</li>
                      </ol>
                      <p className="mt-2">You can also manually add or remove items at any time!</p>
                    </div>
                  </div>
                </div>

                {/* General Usage FAQ */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 p-8">
                  <h3 itemProp="name" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">Are these random generators truly random?</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600">
                      <p>Yes! Our random generators use cryptographically secure algorithms to ensure true randomness. They're perfect for:</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>Games and role-playing</li>
                        <li>Contest winner selection</li>
                        <li>Decision making</li>
                        <li>Team member selection</li>
                        <li>Educational purposes</li>
                        <li>Fair distribution of tasks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mobile Usage FAQ */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 p-8">
                  <h3 itemProp="name" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">Can I use these tools on mobile devices?</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600">
                      <p>Absolutely! All our random generator tools are:</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>Fully responsive on all devices</li>
                        <li>Touch-screen optimized</li>
                        <li>Fast-loading on mobile networks</li>
                        <li>Easy to use on any screen size</li>
                        <li>Shareable via mobile messaging apps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Add this script for FAQ structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does the Random Number Generator work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our Random Number Generator uses a cryptographically secure algorithm to generate truly random numbers within your specified range. Simply enter your minimum and maximum numbers, click 'Generate Number', and get your random result instantly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What types of dice can I roll?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our Dice Roller supports all standard RPG dice types: d4 (4-sided), d6 (6-sided), d8 (8-sided), d10 (10-sided), d12 (12-sided), d20 (20-sided), and d100 (percentile). You can roll up to 10 dice simultaneously and get instant totals!"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I use the Random Wheel Spinner?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The Random Wheel Spinner is perfect for making decisions or selecting winners. Add your items one by one or upload an Excel file, customize the wheel with your entries, click 'Spin the Wheel', watch the animation, and get your random selection. You can then share the result on social media."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I import items from Excel for the Random List Picker?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Create an Excel file with your items (one per row), click 'Upload Excel File' in the tool, select your file to import all items automatically, and click 'Pick Random Item' to make a selection. You can also manually add or remove items at any time!"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are these random generators truly random?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! Our random generators use cryptographically secure algorithms to ensure true randomness. They're perfect for games and role-playing, contest winner selection, decision making, team member selection, educational purposes, and fair distribution of tasks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use these tools on mobile devices?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely! All our random generator tools are fully responsive on all devices, touch-screen optimized, fast-loading on mobile networks, easy to use on any screen size, and shareable via mobile messaging apps."
                    }
                  }
                ]
              })
            }}
          />

          <footer className="bg-white/80 backdrop-blur-lg border-t border-violet-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-6">
                  About Random Generator Tools
                </h2>
                <p className="mb-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  Our free online random generator tools help you make unbiased decisions quickly and easily. 
                  Whether you need to pick a random winner, generate random numbers, or make a random selection 
                  from a list, our tools are here to help.
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Random Generator Tools. All rights reserved.
                  </p>
                  <p className="text-sm">
                    Created by{' '}
                    <a 
                      href="https://www.pgappstudios.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-violet-600 transition-colors duration-300 font-medium"
                    >
                      PG App Studios
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}