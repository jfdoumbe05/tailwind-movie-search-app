 import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-950 text-white">
      <div className="max-w-[1180px] mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">MovieFind</h1>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-brand-500">
            Home
          </a>

          <a href="#" className="hover:text-brand-500">
            Movies
          </a>

          <a href="#" className="hover:text-brand-500">
            Favorites
          </a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div> 

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <a href="#" className="hover:text-brand-500">
            Home
          </a>

          <a href="#" className="hover:text-brand-500">
            Movies
          </a>

          <a href="#" className="hover:text-brand-500">
            Favorites
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;