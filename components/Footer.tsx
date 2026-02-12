import Link from 'next/link';
import UnicornStudioEmbed from '@/components/UnicornStudioEmbed';

const LANDING_FOOTER_LINKS = [
  { label: 'PRIVACY', href: '/privacy' },
  { label: 'TERMS', href: '/terms' },
  { label: 'TWITTER', href: 'https://twitter.com/awebo' },
  { label: 'DISCORD', href: 'https://discord.gg/awebo' },
];

type FooterVariant = 'app' | 'landing';

export default function Footer({ variant = 'app' }: { variant?: FooterVariant }) {
  if (variant === 'landing') {
    return (
      <footer role="contentinfo" className="w-full bg-white border-t border-gray-200">
        <UnicornStudioEmbed />
      </footer>
    );
  }

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto">
      <div className="w-screen overflow-hidden py-4">
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-12">
          <span className="font-rapid-response text-[12rem] md:text-[16rem] lg:text-[18rem] text-accent leading-none">A</span>
          <span className="font-rapid-response text-[12rem] md:text-[16rem] lg:text-[18rem] text-accent leading-none">W</span>
          <span className="font-rapid-response text-[12rem] md:text-[16rem] lg:text-[18rem] text-accent leading-none">E</span>
          <span className="font-rapid-response text-[12rem] md:text-[16rem] lg:text-[18rem] text-accent leading-none">B</span>
          <span className="font-rapid-response text-[12rem] md:text-[16rem] lg:text-[18rem] text-accent leading-none">O</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full border border-gray-300" />
            <div className="w-4 h-4 border border-gray-300 flex items-center justify-center">
              <span className="text-xs text-gray-400">×</span>
            </div>
          </div>
          <div className="text-accent text-sm">
            © 2025 Awebo.wtf. All rights reserved.
          </div>
          <Link
            href="/terms"
            className="text-accent hover:opacity-80 text-sm transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
