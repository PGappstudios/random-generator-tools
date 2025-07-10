'use client';

import { useState, useEffect } from 'react';

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
    console.log('Scrolling to section:', id);
    const element = document.getElementById(id);
    if (element) {
      console.log('Element found:', element);
      // Calculate offset to account for sticky header
      const headerOffset = 120;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      console.log('Scrolling to position:', offsetPosition);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveItem(id);
    } else {
      console.error('Element not found:', id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (activeItem !== item.id) {
              console.log('Active section changed to:', item.id);
              setActiveItem(item.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeItem]);

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