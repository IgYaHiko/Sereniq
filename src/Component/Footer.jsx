import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-bold">Sereniq</h2>
          <p className="mt-2 text-gray-400">
            Your go-to platform for creativity and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Explore</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-2 text-gray-400">
            Email: <a href="mailto:sereniq459@gmail.com" className="text-blue-400 hover:underline">
              sereniq459@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://www.instagram.com/s.e.r.e.n.i.q?utm_source=qr&igsh=MXNoeTUwc2N5MG94bA==" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:text-gray-300">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:text-gray-300"><FaFacebook size={22} /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter size={22} /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin size={22} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Sereniq. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;