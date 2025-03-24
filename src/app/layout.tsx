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
          <section className="max-w-4xl mx-auto px-4 py-12 mt-12 border-t border-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              {/* Rest of your FAQ sections */}
            </div>
          </section>

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
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Random Generator Tools. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}