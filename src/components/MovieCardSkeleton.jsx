 function MovieCardSkeleton() {
  return (
    <div className="overflow-hidden min-h-96 rounded-3xl bg-white/10 border border-white/10 animate-pulse">
      <div className="w-full h-72 bg-white/10"></div>

      <div className="px-4 pt-4">
        <div className="h-4 bg-white/10 rounded w-3/4 mb-3"></div>
        <div className="h-3 bg-white/10 rounded w-1/3"></div>
      </div>
    </div>
  );
}

export default MovieCardSkeleton;