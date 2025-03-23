'use client';

import { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'wheel', label: 'Wheel Spinner' },
  { id: 'number', label: 'Number Generator' },
  { id: 'dice', label: 'Dice Roller' },
  { id: 'list', label: 'List Randomizer' },
];

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('wheel');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveItem(id);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md mb-8 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                activeItem === item.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'text-gray-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
} 