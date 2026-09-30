function SearchBar({ value, onChange }) {
  return (
    <div className="text-center mb-6 md:mb-8">
      <h1 className=" text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-none tracking-tight mt-8 mb-6">
        Find Movies
      </h1>
     <input
  type="text"
  placeholder="Search by title"
  value={value}
  onChange={onChange}
  className="w-full max-w-xl mx-auto block px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
/>
    </div>
  );
}

export default SearchBar;
