import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  LandingHero,
  LandingPhygital,
  LandingHowItWorks,
  LandingEcosystem,
  LandingCtaBanner,
} from '@/components/landing';

export const metadata = {
  title: 'AWEBO — Launch and trade tokens on L1X',
  description:
    'AWEBO is a launchpad for culture-backed brands: tokens, merchandise, and global logistics. Design once, launch globally.',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-seashell">
      <Navigation variant="landing" />

      <LandingHero />

      <main className="flex-1 w-full">
        <LandingPhygital />
        <LandingHowItWorks />
        <LandingEcosystem />
        <LandingCtaBanner />
      </main>

      <Footer variant="landing" />
    </div>
  );
}
