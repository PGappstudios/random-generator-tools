'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButtons from './ShareButtons';

type DiceType = 4 | 6 | 8 | 10 | 12 | 20 | 100;

interface DiceResult {
  type: DiceType;
  value: number;
}

export default function RNGDice() {
  const diceTypes: DiceType[] = [4, 6, 8, 10, 12, 20, 100];
  const [selectedDice, setSelectedDice] = useState<DiceType>(6);
  const [quantity, setQuantity] = useState<number>(1);
  const [results, setResults] = useState<DiceResult[]>([]);
  const [showResultPopup, setShowResultPopup] = useState(false);

  const rollDice = () => {
    const newResults: DiceResult[] = Array.from({ length: quantity }, () => ({
      type: selectedDice,
      value: Math.floor(Math.random() * selectedDice) + 1,
    }));
    setResults(newResults);
    setShowResultPopup(true);
  };

  const total = results.reduce((sum, die) => sum + die.value, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dice Roller</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dice Type
            </label>
            <select
              value={selectedDice}
              onChange={(e) => setSelectedDice(Number(e.target.value) as DiceType)}
              className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {diceTypes.map((type) => (
                <option key={type} value={type}>
                  d{type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Dice
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Math.min(10, Math.max(1, Number(e.target.value))))}
              className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button
          onClick={rollDice}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Roll Dice
        </button>
      </div>

      {/* Result Popup */}
      <AnimatePresence>
        {showResultPopup && results.length > 0 && (
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
                🎲 Dice Roll Results 🎲
              </h3>
              <div className="text-center">
                <div className="flex flex-wrap gap-3 justify-center mb-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg font-bold text-lg text-white shadow-lg"
                    >
                      {result.value}
                    </motion.div>
                  ))}
                </div>
                {results.length > 1 && (
                  <p className="text-2xl font-bold mb-4 text-indigo-600">
                    Total: {total}
                  </p>
                )}
                <p className="text-sm text-gray-500 mb-6">
                  {new Date().toLocaleString()}
                </p>
                <ShareButtons 
                  result={`Rolled ${quantity}d${selectedDice}: [${results.map(r => r.value).join(', ')}]${results.length > 1 ? ` (Total: ${total})` : ''}`}
                  title="Dice Roller Result"
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