import React from "react";
import { Link } from "react-router-dom";
import logo3 from "../assets/logo3.png"
import logo2 from "../assets/logo2.png"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <img
              src={logo3}
              className=" h-12"
              alt="Logo"
            />
             <img
              src={logo2}
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
