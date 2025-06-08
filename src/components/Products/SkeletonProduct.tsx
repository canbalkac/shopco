const SkeletonProduct = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse">
      <div className="bg-gray-200 h-[500px] w-full rounded-xl" />
      <div className="space-y-4">
        <div className="bg-gray-200 h-10 w-3/4 rounded" />
        <div className="bg-gray-200 h-5 w-24 rounded" />
        <div className="flex gap-4">
          <div className="bg-gray-200 h-8 w-20 rounded" />
          <div className="bg-gray-200 h-8 w-16 rounded" />
          <div className="bg-gray-200 h-8 w-10 rounded" />
        </div>
        <div className="bg-gray-200 h-4 w-full rounded" />
        <div className="bg-gray-200 h-4 w-5/6 rounded" />
        <div className="bg-gray-200 h-4 w-1/2 rounded" />
        <div className="flex gap-2 mt-6">
          <div className="h-10 w-24 bg-gray-300 rounded-full" />
          <div className="h-10 w-32 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
