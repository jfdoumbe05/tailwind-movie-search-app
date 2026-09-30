 function Footer() {
  return (
    <footer className="bg-brand-950 text-white mt-auto">
      <div className="max-w-[1180px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h2 className="font-bold text-lg mb-2">MovieFind</h2>
          <p className="text-sm text-white/70">
            Find movies and series you love.
          </p>
        </div>

        <div className="md:text-center">
          <h2 className="font-bold text-lg mb-2">Explore</h2>
          <p className="text-sm text-white/70">Movies</p>
          <p className="text-sm text-white/70">Favorites</p>
        </div>

        <div className="md:text-right">
          <h2 className="font-bold text-lg mb-2">Powered By</h2>
          <p className="text-sm text-white/70">OMDb API</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;