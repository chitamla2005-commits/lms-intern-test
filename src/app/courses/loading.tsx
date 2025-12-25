export default function Loading() {
  return (
    <div className="container p-6 mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-slate-700 w-1/4 mb-6 rounded"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-40 bg-gray-100 dark:bg-slate-800 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}