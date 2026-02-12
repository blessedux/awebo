import Link from 'next/link';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.awebo.wtf';

export default function LandingCtaBanner() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      aria-label="Call to action"
    >
      <div className="rounded-2xl bg-gray-900 px-8 py-16 sm:px-12 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Tokenize Your Brand?
        </h2>
        <p className="mt-4 text-white/90 text-lg max-w-xl mx-auto">
          Join the next generation of culture-defining creators on AWEBO.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-lg bg-air-force-blue text-white font-semibold px-6 py-3 hover:bg-air-force-blue/90 transition-colors"
          >
            Launch Brand
          </Link>
          <Link
            href="#ecosystem"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white font-semibold px-6 py-3 hover:bg-white/10 transition-colors"
          >
            View Ecosystem
          </Link>
        </div>
      </div>
    </section>
  );
}
