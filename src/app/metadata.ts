import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://random-generator-tools.vercel.app'), // Update with your actual domain
  title: {
    default: 'Random Generator Tools - Free Online Wheel Spinner, List Randomizer & Number Generator',
    template: '%s | Random Generator Tools - Free Online Randomizer'
  },
  description: 'Free online random generator tools including wheel spinner, list randomizer, dice roller, and number generator. Perfect for making decisions, picking winners, random selection, and classroom activities. No signup required!',
  keywords: [
    // Primary keywords
    'random wheel spinner',
    'random list picker',
    'random number generator',
    'dice roller online',
    'decision maker tool',
    'random name picker',
    'random team generator',
    'random winner selector',
    'random choice maker',
    'online randomizer',
    'free random picker',
    // Long-tail keywords
    'spin the wheel online free',
    'random list generator from text',
    'random number picker 1-100',
    'online dice roller d20',
    'random team picker for classroom',
    'random name generator for contests',
    'wheel of fortune spinner online',
    'random selection tool for teachers',
    'random picker for giveaways',
    'random decision maker wheel',
    // Educational keywords
    'classroom random picker',
    'teacher random selector',
    'student name picker',
    'random group generator',
    'educational randomizer tools',
    // Gaming keywords
    'dnd dice roller',
    'dungeons and dragons dice',
    'rpg dice roller',
    'random encounter generator',
    'game randomizer tools',
    // Business keywords
    'random employee picker',
    'random meeting selector',
    'random task assigner',
    'random order generator',
    // Location-based keywords
    'random generator tools usa',
    'online randomizer worldwide',
    'free random tools global'
  ],
  authors: [{ name: 'Random Generator Tools Team' }],
  creator: 'Random Generator Tools',
  publisher: 'Random Generator Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Random Generator Tools - Free Online Wheel Spinner, List Randomizer & Number Generator',
    description: 'Free online random generator tools including wheel spinner, list randomizer, dice roller, and number generator. Perfect for making decisions, picking winners, and random selection. No signup required!',
    url: 'https://random-generator-tools.vercel.app',
    siteName: 'Random Generator Tools',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Random Generator Tools - Free Online Randomizer Tools Preview',
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 600,
        height: 600,
        alt: 'Random Generator Tools Square Logo',
        type: 'image/png',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Generator Tools - Free Online Randomizer',
    description: 'Free online random generator tools including wheel spinner, list randomizer, dice roller, and number generator. Perfect for making decisions and random selection!',
    images: ['/og-image.png'],
    creator: '@randomgentools',
    site: '@randomgentools',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://random-generator-tools.vercel.app',
    languages: {
      'en-US': 'https://random-generator-tools.vercel.app',
      'x-default': 'https://random-generator-tools.vercel.app',
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    yandex: 'your-yandex-verification-code', // Add Yandex verification if needed
    yahoo: 'your-yahoo-verification-code', // Add Yahoo verification if needed
  },
  category: 'Technology',
  classification: 'Free Online Tools',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Random Generator Tools',
  },
  applicationName: 'Random Generator Tools',
  generator: 'Next.js',
  abstract: 'Free online random generator tools for decision making, random selection, and educational purposes.',
  archives: ['https://random-generator-tools.vercel.app'],
  assets: ['https://random-generator-tools.vercel.app'],
  bookmarks: ['https://random-generator-tools.vercel.app'],
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Random Generator Tools',
    'application-name': 'Random Generator Tools',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#3b82f6',
    'color-scheme': 'light',
    'supported-color-schemes': 'light',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'expires': 'never',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'google-adsense-account': 'ca-pub-XXXXXXXXX', // Replace with your AdSense publisher ID
    'google-adsense-platform-account': 'ca-host-pub-XXXXXXXXX', // If using AdSense platform
  },
} 