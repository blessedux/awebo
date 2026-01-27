import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full rounded-[20px] bg-[#EBEBEB] flex items-center justify-center py-12 md:py-16 lg:py-20">
      <div className="relative">
        <Image
          src="/RapidResponse/img/awebo_logo.jpg"
          alt="Awebo Logo"
          width={400}
          height={400}
          className="w-auto h-auto max-w-full rounded-[1000px]"
          priority
        />
      </div>
    </div>
  );
}
