interface BannerProps {
  height?: string;
  className?: string;
}

export default function Banner({ height = 'h-48', className = '' }: BannerProps) {
  return (
    <div className={`w-full ${height} bg-gray-100 rounded-lg flex items-center justify-center ${className}`}>
      <span className="text-gray-400">Banner</span>
    </div>
  );
}
