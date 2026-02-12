import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WelcomeModal from '@/components/WelcomeModal';
import Hero from '@/components/Hero';
import HorizontalGrid from '@/components/HorizontalGrid';
import ContentGrid from '@/components/ContentGrid';
import Banner from '@/components/Banner';
import FeaturedContent from '@/components/FeaturedContent';
import CallToAction from '@/components/CallToAction';

export default function AppHome() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      {/* Hero Section - Full Width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
      </div>
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* First Content Grid - 7 items horizontal */}
        <HorizontalGrid items={7} />

        {/* Second Content Grid - 2 rows of 7 items */}
        <ContentGrid items={7} rows={2} />

        {/* Secondary Banner */}
        <Banner height="h-40" />

        {/* Third Content Grid - 2 rows of 6 items */}
        <ContentGrid items={6} rows={2} />

        {/* Featured Content - 2 column layout */}
        <FeaturedContent />

        {/* Call-to-Action */}
        <CallToAction />
      </main>

      <Footer />
      <WelcomeModal />
    </div>
  );
}
