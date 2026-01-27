export default function Navigation() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      {/* Top separator line */}
      <div className="w-full h-px bg-gray-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <div className="flex items-center justify-between py-4 flex-wrap gap-2">
          {/* Left Navigation Group */}
          <div className="flex items-center gap-2 sm:gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={`left-${index}`}
                className="bg-gray-100 rounded-lg h-6 w-12 sm:w-16"
              ></div>
            ))}
          </div>

          {/* Right Navigation Group */}
          <div className="flex items-center gap-2 sm:gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={`right-${index}`}
                className="bg-gray-100 rounded-lg h-6 w-12 sm:w-16"
              ></div>
            ))}
          </div>
        </div>

        {/* Centered Search Bar */}
        <div className="flex justify-center pb-4">
          <div className="bg-gray-100 rounded-lg h-8 w-64"></div>
        </div>
      </div>
    </nav>
  );
}
