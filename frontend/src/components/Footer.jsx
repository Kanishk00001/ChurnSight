import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-white">Resources</h2>
            <ul className="mt-3 space-y-2">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/ourteam" className="hover:text-white transition">Our Team</Link></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <ul className="mt-3 space-y-2">
              <li><a href="https://github.com/HarshAgrawal7672" target="_blank" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/HarshAgrawal7672/" target="_blank" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm">
        © 2025 <a href="/" className="hover:underline text-white">ChurnSite</a>. All Rights Reserved.
      </div>
    </footer>
  );
}
