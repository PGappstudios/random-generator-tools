'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButtons from './ShareButtons';

export default function RNGNumber() {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [result, setResult] = useState<number | null>(null);
  const [showResultPopup, setShowResultPopup] = useState(false);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(randomNum);
    setShowResultPopup(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Random Number Generator</h2>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="min" className="block text-sm font-medium text-gray-700 mb-1">
              Minimum
            </label>
            <input
              type="number"
              id="min"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="max" className="block text-sm font-medium text-gray-700 mb-1">
              Maximum
            </label>
            <input
              type="number"
              id="max"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button
          onClick={generateNumber}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Generate Number
        </button>
      </div>

      {/* Result Popup */}
      <AnimatePresence>
        {showResultPopup && result !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
            onClick={() => setShowResultPopup(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
            >
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">
                🎲 Random Number 🎲
              </h3>
              <div className="text-center">
                <p className="text-4xl font-bold mb-6 text-indigo-600">{result}</p>
                <p className="text-sm text-gray-500 mb-6">
                  {new Date().toLocaleString()}
                </p>
                <ShareButtons 
                  result={`Generated random number between ${min} and ${max}: ${result}`}
                  title="Random Number Generator Result"
                />
                <button
                  onClick={() => setShowResultPopup(false)}
                  className="mt-6 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-6 py-2 rounded-full font-medium shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 