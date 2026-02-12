const FEATURES = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: 'MULTICHAIN ECOSYSTEM.',
    description:
      'Support for Ethereum, Solana, Polygon, and zero gas fees. Launch where your community lives.',
    color: 'text-air-force-blue',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: 'SUSTAINABLE STREETWEAR.',
    description:
      'Organic cottons and ethical labor practices. Quality that lasts and respects the planet.',
    color: 'text-emerald-600',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'CREATOR DIRECT.',
    description:
      'Own your data and community relationship. Smart contract revenue splits built in.',
    color: 'text-purple-500',
  },
];

export default function LandingEcosystem() {
  return (
    <section
      id="ecosystem"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      aria-label="Ecosystem & features"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: decorative box with cloud-like shapes */}
        <div className="relative w-full aspect-[4/3] max-h-[360px] rounded-2xl bg-gray-200 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center gap-8 p-8">
            <div className="w-24 h-24 rounded-full bg-white/60 blur-xl" />
            <div className="w-32 h-32 rounded-full bg-white/50 blur-2xl" />
            <div className="w-20 h-20 rounded-full bg-white/70 blur-xl" />
            <div className="w-28 h-28 rounded-full bg-white/40 blur-2xl" />
          </div>
        </div>

        {/* Right: feature list */}
        <div className="space-y-10">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center ${feature.color}`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
