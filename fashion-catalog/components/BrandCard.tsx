'use client';

import Image from 'next/image';

interface Brand {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  website: string;
  colors: string[];
  priceRange: string;
}

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={brand.image}
          alt={brand.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-pink-600 shadow-lg z-10">
          {brand.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">{brand.name}</h3>
        <p className="text-gray-600 mb-5 line-clamp-2 leading-relaxed">{brand.description}</p>
        
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <span className="mr-2">🎨</span> Available Colors:
          </p>
          <div className="flex flex-wrap gap-2">
            {brand.colors.slice(0, 5).map((color, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:border-pink-300 transition-colors"
              >
                {color}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
          <p className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
            <span className="mr-2">💰</span> Price Range:
          </p>
          <p className="text-pink-600 font-bold text-lg">{brand.priceRange}</p>
        </div>
        
        <div className="flex gap-3">
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-xl text-center font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Visit Store →
          </a>
          <button 
            className="bg-gradient-to-r from-gray-100 to-gray-200 text-pink-600 py-3 px-5 rounded-xl font-semibold hover:from-pink-100 hover:to-pink-200 transition-all transform hover:scale-105 shadow-md"
            aria-label="Add to favorites"
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}
