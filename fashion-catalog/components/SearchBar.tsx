'use client';

import { useState, useEffect, useRef } from 'react';
import brandsData from '@/data/brands.json';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      // Get all unique searchable terms
      const allTerms = new Set<string>();
      
      brandsData.forEach((brand: any) => {
        // Add brand name
        allTerms.add(brand.name);
        
        // Add colors
        brand.colors.forEach((color: string) => allTerms.add(color));
        
        // Add category
        allTerms.add(brand.category);
        
        // Add price range keywords
        if (brand.priceRange.includes('1,500') || brand.priceRange.includes('2,000')) {
          allTerms.add('Affordable');
          allTerms.add('Budget');
        }
        if (brand.priceRange.includes('15,000') || brand.priceRange.includes('20,000')) {
          allTerms.add('Premium');
          allTerms.add('Luxury');
        }
      });

      // Filter suggestions based on search term
      const filtered = Array.from(allTerms)
        .filter(term => term.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 8); // Limit to 8 suggestions

      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    onSearchChange(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-12" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search brands, colors, or price range..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => searchTerm.length > 0 && suggestions.length > 0 && setShowSuggestions(true)}
          className="w-full px-6 py-4 pl-14 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-pink-500 transition-all shadow-lg"
        />
        <svg
          className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Clear button */}
        {searchTerm && (
          <button
            onClick={() => {
              onSearchChange('');
              setShowSuggestions(false);
            }}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Suggestions dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-slideDown">
            <div className="py-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-6 py-3 text-left hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all flex items-center space-x-3 group"
                >
                  <svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-pink-500 transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-gray-700 group-hover:text-pink-600 font-medium transition-colors">
                    {suggestion}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
