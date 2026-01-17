import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      {/* NAVBAR */}
      <nav
        className="
          w-full
          bg-gradient-to-r from-gray-900/90 to-black/80
          backdrop-blur-md shadow-lg
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            flex items-center justify-between
            px-4 sm:px-6 md:px-8
            py-4
            lg:rounded-full lg:mt-4
          "
        >
          {/* Logo */}
          <div className="text-white font-bold text-lg sm:text-xl">
            Portfolio
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 text-white font-medium text-lg">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* GitHub (Desktop) */}
          <a
            href="https://github.com/Miss-prachi-guptaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2
                       bg-white/10 hover:bg-yellow-400 hover:text-black
                       transition text-white px-4 py-2 rounded-full font-semibold"
          >
            <FaGithub />
            GitHub
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 bg-black/95 backdrop-blur-md
          flex flex-col items-center justify-center
          gap-6 text-white text-xl font-medium
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            {item}
          </a>
        ))}

        <a
          href="https://github.com/Miss-prachi-guptaa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2
                     bg-white/10 hover:bg-yellow-400 hover:text-black
                     transition px-6 py-3 rounded-full font-semibold"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </header>
  );
}
