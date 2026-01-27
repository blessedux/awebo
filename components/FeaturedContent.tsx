export default function FeaturedContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Large Image/Content Block */}
      <div className="md:col-span-2 bg-gray-100 rounded-lg h-64 flex items-center justify-center">
        <span className="text-gray-400">Featured Image</span>
      </div>
      
      {/* Text Content */}
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg h-8"></div>
        <div className="bg-gray-100 rounded-lg h-6"></div>
        <div className="space-y-2">
          <div className="bg-gray-100 rounded-lg h-4"></div>
          <div className="bg-gray-100 rounded-lg h-4"></div>
          <div className="bg-gray-100 rounded-lg h-4 w-3/4"></div>
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-100 rounded-lg h-10 w-20"></div>
          <div className="bg-gray-100 rounded-lg h-10 w-20"></div>
        </div>
      </div>
    </div>
  );
}
