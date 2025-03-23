import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { metadata as siteMetadata } from './metadata';

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
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50`}>
        <main className="min-h-screen">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}