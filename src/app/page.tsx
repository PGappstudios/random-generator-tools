import { GoogleAnalytics } from '@next/third-parties/google';
import RNGList from '@/components/RNGList';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <GoogleAnalytics gaId="G-B44QWD1FE5" />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RNGList />
      </div>
    </>
  );
}