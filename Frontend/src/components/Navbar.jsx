import React, { useState } from "react";
import heroImage from "../assets/images/neerajgupta.jpg"


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="Navbar w-full bg-green-900 rounded-full px-4 py-3 mt-5 flex items-center justify-between relative">
      {/* left: logo + name */}
      <div className="flex items-center gap-3">
        <div className="img w-12 h-12 rounded-full bg-amber-400 overflow-hidden flex-shrink-0">
          <img
            src={`${heroImage}`}
            alt="Neeraj-Gupta"
            className="w-full h-full object-cover scale-x-[-1]"
          />
        </div>
        <div className="name text-white text-xl md:text-5xl font-semibold noto-sans-jp-NeerajGuptaName">
          Neeraj
        </div>
      </div>

      {/* center: links (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-8 text-2xl text-white font-semibold poppins-medium">
        <a href="#hero" className="active:text-red-500">
          Home
        </a>
        <a href="#about" className="active:text-red-500">
          About
        </a>
        <a href="#projects" className="active:text-red-500">
          Projects
        </a>
        <a href="#service" className="active:text-red-500">
          Services
        </a>
        <a href="#skills" className="active:text-red-500">
          Skills
        </a>
      </div>

      {/* right: contact button (hidden on mobile) and mobile toggle */}
      <div className="flex items-center gap-3 poppins-medium">
        <div className="hidden md:block">
          <a href="#contact">
            <button
              type="button"
              className="px-5 py-2 text-lg text-gray-700 bg-white font-semibold rounded-full"
            >
              Contact Me
            </button>
          </a>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="md:hidden absolute right-4 top-full mt-3 bg-green-900 rounded-lg p-4 flex flex-col gap-3 w-48 z-50 poppins-medium">
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="text-white text-lg"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-white text-lg"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="text-white text-lg"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="text-white text-lg"
          >
            Skills
          </a>
          <a
            href="#service"
            onClick={() => setOpen(false)}
            className="text-white text-lg"
          >
            Service
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            <button
              type="button"
              className="w-full mt-2 px-4 py-2 text-gray-700 bg-white font-semibold rounded-full"
            >
              Contact Me
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
