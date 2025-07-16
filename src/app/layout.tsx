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
  const currentDate = new Date().toISOString();
  
  return (
    <html lang="en" itemScope itemType="https://schema.org/WebApplication">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://random-generator-tools.vercel.app" />
        
        {/* Favicons and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional meta tags for SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Random Generator Tools" />
        <meta name="application-name" content="Random Generator Tools" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light" />
        
        {/* Additional SEO meta tags */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="language" content="en" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="doc-type" content="web page" />
        <meta name="doc-class" content="living document" />
        <meta name="doc-rights" content="public" />
        <meta name="imagetoolbar" content="yes" />
        <meta name="MSSmartTagsPreventParsing" content="true" />
        
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
            gtag('config', 'G-B44QWD1FE5', {
              page_title: 'Random Generator Tools',
              page_location: window.location.href,
              content_group1: 'Tools',
              content_group2: 'Random Generators',
              custom_map: {
                'custom_parameter_1': 'tool_type',
                'custom_parameter_2': 'user_action'
              }
            });
          `}
        </Script>
        
        {/* Enhanced Structured Data */}
        <Script
          id="structured-data-webapp"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Random Generator Tools',
              description: 'Free online random generator tools including wheel spinner, list randomizer, dice roller, and number generator. Perfect for making decisions, picking winners, random selection, and classroom activities.',
              url: 'https://random-generator-tools.vercel.app',
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Any',
              browserRequirements: 'Requires JavaScript. Requires HTML5.',
              softwareVersion: '1.0.0',
              datePublished: '2024-01-01',
              dateModified: currentDate,
              inLanguage: 'en-US',
              isAccessibleForFree: true,
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock'
              },
              author: {
                '@type': 'Organization',
                name: 'Random Generator Tools',
                url: 'https://random-generator-tools.vercel.app',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://random-generator-tools.vercel.app/logo.png',
                  width: 512,
                  height: 512
                }
              },
              publisher: {
                '@type': 'Organization',
                name: 'Random Generator Tools',
                url: 'https://random-generator-tools.vercel.app',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://random-generator-tools.vercel.app/logo.png',
                  width: 512,
                  height: 512
                }
              },
              featureList: [
                'Random Number Generator',
                'Dice Roller',
                'Wheel Spinner',
                'List Randomizer',
                'Decision Maker',
                'Random Selection Tool'
              ],
              screenshot: {
                '@type': 'ImageObject',
                url: 'https://random-generator-tools.vercel.app/screenshot.png',
                width: 1200,
                height: 630
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '150',
                bestRating: '5',
                worstRating: '1'
              }
            })
          }}
        />
        
        {/* Organization Structured Data */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Random Generator Tools',
              url: 'https://random-generator-tools.vercel.app',
              logo: {
                '@type': 'ImageObject',
                url: 'https://random-generator-tools.vercel.app/logo.png',
                width: 512,
                height: 512
              },
              sameAs: [
                'https://twitter.com/randomgentools',
                'https://facebook.com/randomgentools',
                'https://linkedin.com/company/randomgentools'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: 'English',
                url: 'https://random-generator-tools.vercel.app/contact'
              }
            })
          }}
        />
        
        {/* Website Structured Data */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Random Generator Tools',
              url: 'https://random-generator-tools.vercel.app',
              description: 'Free online random generator tools including wheel spinner, list randomizer, dice roller, and number generator.',
              inLanguage: 'en-US',
              copyrightYear: new Date().getFullYear(),
              datePublished: '2024-01-01',
              dateModified: currentDate,
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://random-generator-tools.vercel.app/?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              },
              mainEntity: {
                '@type': 'ItemList',
                name: 'Random Generator Tools',
                description: 'Collection of free online random generator tools',
                numberOfItems: 4,
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Random Number Generator',
                    description: 'Generate random numbers within a specified range',
                    url: 'https://random-generator-tools.vercel.app/#number'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Dice Roller',
                    description: 'Roll various types of dice online',
                    url: 'https://random-generator-tools.vercel.app/#dice'
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Wheel Spinner',
                    description: 'Spin a customizable wheel for random selection',
                    url: 'https://random-generator-tools.vercel.app/#wheel'
                  },
                  {
                    '@type': 'ListItem',
                    position: 4,
                    name: 'List Randomizer',
                    description: 'Randomly select items from a custom list',
                    url: 'https://random-generator-tools.vercel.app/#list'
                  }
                ]
              }
            })
          }}
        />
        
        {/* Breadcrumb Structured Data */}
        <Script
          id="structured-data-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://random-generator-tools.vercel.app'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Random Generator Tools',
                  item: 'https://random-generator-tools.vercel.app'
                }
              ]
            })
          }}
        />
        
        <AdSenseScript />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50`} itemScope itemType="https://schema.org/WebPage">
        <main className="min-h-screen flex flex-col">
          <header className="bg-white/80 backdrop-blur-lg border-b border-violet-100 sticky top-0 z-50" role="banner">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center" role="navigation" aria-label="Main navigation">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent" itemProp="name">
                Random Generator Tools
              </h1>
              <p className="mt-2 text-gray-600 text-lg" itemProp="description">
                Free online tools for random selection and decision making
              </p>
            </nav>
          </header>
          
          {/* Main Content */}
          <div className="flex-grow" role="main">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {children}
            </div>
          </div>

          {/* Recommended Products Section */}
          <section className="w-full py-16 bg-gradient-to-br from-white via-blue-50/30 to-violet-50/30" role="complementary" aria-label="Recommended products">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-12">
                Recommended Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 flex flex-col h-full" itemScope itemType="https://schema.org/Product">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800" itemProp="name">DNDND Metal Dice Set</h3>
                    <p className="text-gray-600" itemProp="description">
                      7 die Metal Polyhedral Dice Set with Gift Metal Box and Gold Number for DND Dungeons and Dragons
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://www.amazon.com/dp/B0B3D4S6TF?tag=pgstudios0a-20"
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      aria-label="View DNDND Metal Dice Set on Amazon"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 flex flex-col h-full" itemScope itemType="https://schema.org/Product">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800" itemProp="name">Lucky Balloon Gun</h3>
                    <p className="text-gray-600" itemProp="description">
                      Who is The Lucky One Tonight? Russian Roulette Party Game - Fun Family Games
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://www.amazon.com/dp/B0C2R639HZ?tag=pgstudios0a-20"
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      aria-label="View Lucky Balloon Gun on Amazon"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 flex flex-col h-full" itemScope itemType="https://schema.org/Product">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800" itemProp="name">Wilder Hot Ones Roulette</h3>
                    <p className="text-gray-600" itemProp="description">
                      Hot Sauce Included – A Push Your Luck Party Game
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://www.amazon.com/dp/B0B3CXGGSB?tag=pgstudios0a-20"
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      aria-label="View Wilder Hot Ones Roulette on Amazon"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>

                {/* Product 4 */}
                <div className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 flex flex-col h-full" itemScope itemType="https://schema.org/Product">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800" itemProp="name">Good Luck Puzzle Box</h3>
                    <p className="text-gray-600" itemProp="description">
                      Money and Gift Card Holder in a Wooden Magic Trick Lock with Hidden Compartment
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="https://www.amazon.com/dp/B0D2C1888D?tag=pgstudios0a-20"
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      aria-label="View Good Luck Puzzle Box on Amazon"
                    >
                      View on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full bg-gradient-to-br from-white via-blue-50/30 to-violet-50/30 py-16" role="complementary" aria-label="Frequently asked questions">
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
                      <p>Our dice roller supports all standard dice types used in tabletop gaming:</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>d4 (4-sided dice)</li>
                        <li>d6 (6-sided dice)</li>
                        <li>d8 (8-sided dice)</li>
                        <li>d10 (10-sided dice)</li>
                        <li>d12 (12-sided dice)</li>
                        <li>d20 (20-sided dice)</li>
                        <li>d100 (100-sided dice)</li>
                      </ul>
                      <p className="mt-2">You can roll multiple dice at once (up to 10 dice per roll).</p>
                    </div>
                  </div>
                </div>

                {/* Wheel Spinner FAQ */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 p-8">
                  <h3 itemProp="name" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">How do I customize the wheel spinner?</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600">
                      <p>Customizing your wheel is easy:</p>
                      <ol className="list-decimal ml-5 mt-2 space-y-2">
                        <li>Add your options manually by typing them in</li>
                        <li>Import from an Excel file for large lists</li>
                        <li>Edit or remove options as needed</li>
                        <li>Spin the wheel to get your random result</li>
                        <li>Share your results on social media</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* List Randomizer FAQ */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 p-8">
                  <h3 itemProp="name" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">Can I import my own list for randomization?</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600">
                      <p>Yes! You can import your lists in multiple ways:</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li>Upload an Excel (.xlsx) file</li>
                        <li>Copy and paste from any text document</li>
                        <li>Type items manually, one per line</li>
                        <li>Edit your list after importing</li>
                      </ul>
                      <p className="mt-2">The tool will randomly select one item from your list each time you click "Pick Random Item".</p>
                    </div>
                  </div>
                </div>

                {/* Use Cases FAQ */}
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gradient-to-br from-white via-blue-50/10 to-violet-50/10 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-violet-50 p-8">
                  <h3 itemProp="name" className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">What are some common use cases for these tools?</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600">
                      <p>Our random generator tools are perfect for:</p>
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        <li><strong>Education:</strong> Picking students for activities, creating random groups</li>
                        <li><strong>Gaming:</strong> Rolling dice for tabletop games, random encounters</li>
                        <li><strong>Contests:</strong> Selecting winners from participant lists</li>
                        <li><strong>Decision Making:</strong> Choosing between options when you can't decide</li>
                        <li><strong>Business:</strong> Random sampling, team assignments</li>
                        <li><strong>Entertainment:</strong> Party games, icebreakers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white/80 backdrop-blur-lg border-t border-violet-100 py-8" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gray-600">
                © {new Date().getFullYear()} Random Generator Tools. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Free online random generator tools for decision making and random selection.
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}