import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const fullText = "Initializing Portfolio...";

  // ✅ Custom typing sound using local audio file
  const playTypeSound = () => {
    const audio = new Audio('/assets/sounds/type.mp3'); 
    // 👆 Replace with your actual sound path, for example:
    // "/sounds/keyclick.wav" or "/audio/type-sound.mp3"
    audio.volume = 0.3; // adjust volume (0 to 1)
    audio.play().catch(() => {}); // prevent errors if autoplay blocked
  };

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Typing animation
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setCurrentText(fullText.slice(0, charIndex));

        if (charIndex > 0 && fullText[charIndex - 1] !== ' ') {
          playTypeSound(); // ✅ play your sound here
        }

        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }
  }, [progress, onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background matrix rain */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-500 text-xs font-mono opacity-20"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: '100vh', opacity: [0, 1, 0] }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
              style={{ left: `${Math.random() * 100}%` }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-6 relative z-10">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center shadow-2xl shadow-cyan-500/20"
          >
            <span className="text-2xl text-cyan-400 font-bold">AH</span>
          </motion.div>

          {/* Typing text */}
          <motion.h2
            key={currentText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-mono text-cyan-400 mb-2"
          >
            {currentText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 text-cyan-400"
            >
              █
            </motion.span>
          </motion.h2>

          {/* Terminal lines */}
          <div className="opacity-70 space-y-1 mt-6">
            {[
              "> Initializing system...",
              "> Loading components...",
              "> Compiling assets...",
              "> Starting server...",
              "> Ready to launch..."
            ].map((line, index) => (
              <motion.div
                key={index}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.3 }}
                className="text-cyan-400 font-mono text-xs md:text-sm text-left max-w-xs mx-auto"
              >
                {line}
                {progress >= (index + 1) * 20 && (
                  <span className="text-green-400 ml-2">✓</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress bar below lines */}
          <div className="mt-8">
            <div className="w-64 md:w-80 mx-auto bg-gray-800 rounded-full h-3 border border-gray-700">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-cyan-400 font-mono text-sm mt-2"
            >
              {progress}%
            </motion.p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
