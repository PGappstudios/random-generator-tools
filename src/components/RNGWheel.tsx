'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import * as XLSX from 'xlsx';
import { motion, AnimatePresence } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import ShareButtons from './ShareButtons';

const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-200 rounded-full w-64 h-64 mx-auto" />
  )
});

// Define a larger color palette with vibrant colors
const wheelColors = [
  // Original colors
  '#ff8f43', '#70bd9b', '#938ba1', '#ffc22b',
  // Vibrant warm colors
  '#FF4B4B', '#FF7F50', '#FF69B4', '#FF1493',
  // Vibrant cool colors
  '#4169E1', '#00CED1', '#32CD32', '#7B68EE',
  // Rich jewel tones
  '#800080', '#4B0082', '#8B008B', '#483D8B',
  // Bright modern colors
  '#00BFFF', '#FF6B6B', '#4ECDC4', '#45B7D1',
  // Neon accents
  '#39FF14', '#FF2E63', '#00FFFF', '#FF1E56',
  // Deep rich colors
  '#9B111E', '#0066CC', '#FF9933', '#669900',
  // Pastel but vibrant
  '#FFB6C1', '#98FB98', '#87CEEB', '#DDA0DD',
  // Bold statement colors
  '#FF3366', '#3366FF', '#33CC33', '#FF33CC',
  // Modern web colors
  '#6366F1', '#EC4899', '#06B6D4', '#22C55E'
];

export default function RNGWheel() {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState<string>('');
  const [spinning, setSpinning] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showWinnerPopup, setShowWinnerPopup] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems(prev => [...prev, newItem.trim()]);
      setNewItem('');
      setError('');
    }
  };

  const handleRemoveItem = (index: number) => {
    if (items.length > 2) {
      setItems(items.filter((_, i) => i !== index));
      setError('');
    } else {
      setError('You need at least 2 items on the wheel');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = event.target?.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];
          
          const newItems = jsonData
            .flat()
            .filter(value => value && typeof value === 'string')
            .map(value => value.toString().trim());

          if (newItems.length === 0) {
            setError('No valid items found in the Excel file');
            return;
          }

          setItems(prev => [...prev, ...newItems]);
          setError('');
        } catch (error) {
          setError('Error parsing Excel file. Please make sure it\'s a valid Excel file.');
        }
      };
      reader.onerror = () => {
        setError('Error reading file');
      };
      reader.readAsBinaryString(file);
    }
  };

  const handleSpin = () => {
    if (!spinning && items.length >= 2) {
      const newPrizeNumber = Math.floor(Math.random() * items.length);
      setSelectedItem(newPrizeNumber);
      setSpinning(true);
      setError('');
      setShowConfetti(false);
      setShowWinnerPopup(false);
    } else if (items.length < 2) {
      setError('You need at least 2 items to spin the wheel');
    }
  };

  const handleStopSpinning = () => {
    setSpinning(false);
    setShowConfetti(true);
    setShowWinnerPopup(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const wheelData = items.map((item) => ({ option: item }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      <h2 className="text-2xl font-bold mb-4">Random Wheel Spinner</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add new item"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleAddItem}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2 rounded-full font-medium shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(34,197,94,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Add
            </button>
          </div>

          <div className="flex justify-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".xlsx,.xls"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 w-full"
            >
              Upload Excel File
            </button>
          </div>

          <div className="max-h-[400px] overflow-y-auto space-y-2">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-between bg-gray-50 p-2 rounded"
              >
                <span className="truncate flex-1 mr-2">{item}</span>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-500 hover:text-red-600"
                  disabled={items.length <= 2}
                >
                  ✕
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 relative">
            <Wheel
              mustStartSpinning={spinning}
              prizeNumber={selectedItem}
              data={wheelData}
              onStopSpinning={handleStopSpinning}
              backgroundColors={wheelColors}
              textColors={['#ffffff']}
              outerBorderColor="#f9f9f9"
              radiusLineColor="#f9f9f9"
              radiusLineWidth={1}
              fontSize={16}
              textDistance={60}
            />
            {spinning && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <div className="text-lg font-bold text-white">
                  Spinning...
                </div>
              </motion.div>
            )}
          </div>
          <button
            onClick={handleSpin}
            disabled={spinning || items.length < 2}
            className={`w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 ${
              spinning || items.length < 2
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:shadow-[0_8px_24px_rgba(99,102,241,0.25)] hover:from-indigo-600 hover:to-purple-600 transform hover:-translate-y-0.5'
            }`}
          >
            {spinning ? 'Spinning...' : 'Spin the Wheel'}
          </button>
        </div>
      </div>

      {/* Winner Popup */}
      <AnimatePresence>
        {showWinnerPopup && items[selectedItem] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
            onClick={() => setShowWinnerPopup(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
            >
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
                🎉 Winner! 🎉
              </h3>
              <div className="text-center">
                <p className="text-xl mb-6">{items[selectedItem]}</p>
                <p className="text-sm text-gray-500 mb-6">
                  {new Date().toLocaleString()}
                </p>
                <ShareButtons 
                  result={`The wheel landed on: ${items[selectedItem]}`}
                  title="Random Wheel Spinner Result"
                />
              </div>
              <button
                onClick={() => setShowWinnerPopup(false)}
                className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-2 rounded-full font-medium shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 