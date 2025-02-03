import React, { useState } from "react";
import { LOGO, LOGOS } from "../assets/Images/im";
import { Menu } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  return (
    <header className="h-[7vh] w-full flex items-center justify-between px-6 md:px-12 bg-gradient-to-r from-blue-50 to-purple-200 fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div>
        <img src={LOGOS} className="w-15" alt="Logo" />
      </div>

      {/* Navigation (Hidden on Mobile) */}
      <nav className="hidden md:flex gap-8 text-xl font-medium items-center">
        {["Service", "Course", "About", "Contact", "Login"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-black hover:text-blue-500 transition"
          >
            {item}
          </a>
        ))}
        {/* Language Dropdown (Desktop) */}
        <div className="relative">
          <button
            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            className="text-black hover:text-blue-500 transition"
          >
            Language
          </button>
          {languageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
              <ul>
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                    English
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                    Bengali
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                    Hindi
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Book Now Button (Hidden on Mobile) */}
      <a
        href="#book"
        className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
      >
        Book Now
      </a>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={28} />
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[7vh] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          {["Service", "Course", "About", "Contact", "Login"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium hover:text-blue-500 transition"
            >
              {item}
            </a>
          ))}
          {/* Language Dropdown (Mobile) */}
          <div className="relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="text-lg font-medium hover:text-blue-500 transition"
            >
              Language
            </button>
            {languageDropdownOpen && (
              <div className="mt-2 w-40 bg-white border rounded shadow-lg">
                <ul>
                  <li>
                    <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                      English
                    </button>
                  </li>
                  <li>
                    <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                      Spanish
                    </button>
                  </li>
                  <li>
                    <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
                      French
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a
            href="#book"
            className="bg-blue-600 text-white px-6 py-2 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
