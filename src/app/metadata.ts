import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://random-generator-tools.com'), // Replace with your actual domain
  title: {
    default: 'Random Generator Tools | Wheel, List & Number Randomizer',
    template: '%s | Random Generator Tools'
  },
  description: 'Free online random generator tools including wheel spinner, list randomizer, and number generator. Perfect for making decisions, picking winners, and random selection.',
  keywords: [
    'random wheel spinner',
    'random list picker',
    'random number generator',
    'decision maker',
    'random name picker',
    'random team generator',
    'random winner selector',
    'random choice maker',
    'online randomizer',
    'free random picker'
  ],
  openGraph: {
    title: 'Random Generator Tools | Wheel, List & Number Randomizer',
    description: 'Free online random generator tools including wheel spinner, list randomizer, and number generator. Perfect for making decisions, picking winners, and random selection.',
    url: 'https://random-generator-tools.com',
    siteName: 'Random Generator Tools',
    images: [
      {
        url: '/og-image.png', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Random Generator Tools Preview'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Generator Tools | Wheel, List & Number Randomizer',
    description: 'Free online random generator tools including wheel spinner, list randomizer, and number generator.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://random-generator-tools.com'
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
} 