'use client';

import { FocusRail, type FocusRailItem } from './FocusRail';

const PHYGITAL_ITEMS: FocusRailItem[] = [
  {
    id: 'genesis-pass',
    title: 'GENESIS PASS #001',
    description: 'Unlock exclusive access to future physical drops and ecosystem rewards.',
    meta: '0.85 ETH',
    imageSrc: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=600&q=80',
    href: '/explore',
  },
  {
    id: 'cyber-shell',
    title: 'CYBER-SHELL V.1',
    description: 'Digital twin of our upcoming technical shell jacket with RFID integration.',
    meta: '0.12 ETH',
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80',
    href: '/explore',
  },
  {
    id: 'velocity-x',
    title: 'VELOCITY-X SNEAKERS',
    description: 'Includes physical sneakers and a wearable avatar version for Metaverse.',
    meta: '0.45 ETH',
    imageSrc: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    href: '/explore',
  },
];

export default function LandingPhygital() {
  return (
    <section
      id="explore"
      className="w-full bg-neutral-950"
      aria-label="The Phygital Experience"
    >
      <FocusRail
        items={PHYGITAL_ITEMS}
        initialIndex={0}
        loop
        autoPlay
        interval={5000}
        className="min-h-[690px]"
      />
    </section>
  );
}
