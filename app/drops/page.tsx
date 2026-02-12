import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Drops — AWEBO',
  description: 'Upcoming and live token and merch drops. All prices in ETH.',
};

export default function DropsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-seashell">
      <Navigation variant="landing" />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Drops</h1>
        <p className="text-gray-600 max-w-2xl mb-8">
          Upcoming and live drops. Mint and collect — all prices in ETH.
        </p>
        <div className="space-y-4">
          {['Genesis Pass', 'Cyber-Shell V.1', 'Velocity-X'].map((name, i) => (
            <div
              key={name}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center gap-6"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-lg shrink-0" />
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-gray-900">{name}</h2>
                <p className="text-sm text-gray-500">Live · 0.05 – 0.85 ETH</p>
              </div>
              <Link
                href="/"
                className="shrink-0 rounded-lg bg-air-force-blue text-white px-4 py-2 text-sm font-medium hover:bg-air-force-blue/90"
              >
                View drop
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer variant="landing" />
    </div>
  );
}
