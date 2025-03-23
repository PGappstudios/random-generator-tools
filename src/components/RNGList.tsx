'use client';

import { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import { motion, AnimatePresence } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import ShareButtons from './ShareButtons';

export default function RNGList() {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showWinnerPopup, setShowWinnerPopup] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      setError('You need at least 2 items in the list');
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

  const handleRandomize = () => {
    if (items.length >= 2) {
      setSelectedItem(null);
      setShowConfetti(false);
      setShowWinnerPopup(false);
      
      // Animate through items before selecting final winner
      let count = 0;
      const maxIterations = 20;
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * items.length);
        setSelectedItem(items[randomIndex]);
        count++;
        
        if (count >= maxIterations) {
          clearInterval(interval);
          const finalIndex = Math.floor(Math.random() * items.length);
          setSelectedItem(items[finalIndex]);
          setShowConfetti(true);
          setShowWinnerPopup(true);
          setTimeout(() => {
            setShowConfetti(false);
          }, 5000);
        }
      }, 100);
    } else {
      setError('You need at least 2 items to randomize');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      {showConfetti && (
        <ReactConfetti
          width={typeof window !== 'undefined' ? window.innerWidth : 0}
          height={typeof window !== 'undefined' ? window.innerHeight : 0}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      <h2 className="text-2xl font-bold mb-4">Random List Picker</h2>
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
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={item + index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`flex items-center justify-between p-2 rounded ${
                    selectedItem === item && !showWinnerPopup
                      ? 'bg-blue-100 border-2 border-blue-500'
                      : 'bg-gray-50'
                  }`}
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
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleRandomize}
            disabled={items.length < 2}
            className={`w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 ${
              items.length < 2 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-[0_8px_24px_rgba(99,102,241,0.25)] hover:from-indigo-600 hover:to-purple-600 transform hover:-translate-y-0.5'
            }`}
          >
            Pick Random Item
          </button>
        </div>
      </div>

      {/* Winner Popup */}
      <AnimatePresence>
        {showWinnerPopup && selectedItem && (
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
                <p className="text-xl mb-6">{selectedItem}</p>
                <p className="text-sm text-gray-500 mb-6">
                  {new Date().toLocaleString()}
                </p>
                <ShareButtons 
                  result={`Random selection result: ${selectedItem}`}
                  title="Random List Picker Result"
                />
                <button
                  onClick={() => setShowWinnerPopup(false)}
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