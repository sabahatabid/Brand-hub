'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                PakFashion
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#brands" className="text-gray-700 hover:text-pink-600 transition-colors">
              Brands
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-pink-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#brands"
              className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
