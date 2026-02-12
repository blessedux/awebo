const STEPS = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    title: 'Design.',
    description:
      'Design your brand and products using our creator toolkit.',
    color: 'text-air-force-blue',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    title: 'Tokenize.',
    description: 'Mint your products as NFTs to establish ownership and provenance.',
    color: 'text-purple-500',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Drop.',
    description: 'Launch to your community with our curated drop mechanics.',
    color: 'text-emerald-600',
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
    title: 'Fulfill.',
    description:
      'We handle the high-end production and global logistics.',
    color: 'text-air-force-blue',
  },
];

export default function LandingHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      aria-label="How it works"
    >
      <h2 className="text-3xl font-bold text-gray-900">
        How It <span className="text-air-force-blue">Works</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connector line (desktop) */}
        <div
          className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200"
          style={{ top: '4.5rem' }}
          aria-hidden
        />
        {STEPS.map((step, i) => (
          <div key={step.title} className="relative flex flex-col items-start">
            <div
              className={`${step.color} flex-shrink-0 w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center border-2 border-white shadow-sm relative z-10`}
            >
              {step.icon}
            </div>
            <h3 className="mt-4 font-bold text-gray-900">{step.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
