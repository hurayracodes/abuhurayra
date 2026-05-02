import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

// Styles object
const styles = {
  wrapper: {
    display: "inline-block",
    whiteSpace: "pre-wrap",
  },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
  },
};

// Default characters
const DEFAULT_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export default function RotatingDecryptedText({
  texts = [
    "MERN Stack Developer",
    "Software Developer",
    "Founder HurayraCodes",
  ],
  speed = 40,
  maxIterations = 100,
  revealDirection = "start",
  characters = DEFAULT_CHARACTERS,
  className = "",
  parentClassName = "",
  encryptedClassName = "opacity-70",
  animateOn = "view",
  rotationInterval = 3000, // Time between text rotations in ms
}) {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const rotationIntervalRef = useRef(null);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Cleanup rotation interval
  const cleanupRotation = useCallback(() => {
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
      rotationIntervalRef.current = null;
    }
  }, []);

  // Shuffle text function
  const shuffleText = useCallback((originalText, revealed) => {
    if (!originalText) return "";
    
    return originalText
      .split("")
      .map((char, i) => {
        if (char === " ") return " ";
        if (revealed?.has(i)) return originalText[i];
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");
  }, [characters]);

  // Start scrambling effect
  const startScrambling = useCallback((textToScramble = texts[currentIndex]) => {
    if (!textToScramble) return;
    
    cleanup();
    setIsScrambling(true);

    // Reveal punctuation/space immediately
    const baseSet = new Set();
    for (let i = 0; i < textToScramble.length; i++) {
      const ch = textToScramble[i];
      if (ch === " " || /[^a-zA-Z0-9]/.test(ch)) {
        baseSet.add(i);
      }
    }
    setRevealedIndices(baseSet);
    setDisplayText(shuffleText(textToScramble, baseSet));

    let iterations = 0;
    
    intervalRef.current = setInterval(() => {
      setRevealedIndices((prev) => {
        if (!textToScramble) {
          cleanup();
          return prev;
        }
        
        if (prev.size < textToScramble.length && iterations < maxIterations) {
          const nextSet = new Set(prev);
          
          if (revealDirection === "start") {
            const idx = prev.size;
            if (textToScramble[idx] && textToScramble[idx] !== " ") {
              nextSet.add(idx);
            }
          } else if (revealDirection === "end") {
            const idx = textToScramble.length - 1 - prev.size;
            if (textToScramble[idx] && textToScramble[idx] !== " ") {
              nextSet.add(idx);
            }
          } else if (revealDirection === "center") {
            const center = Math.floor(textToScramble.length / 2);
            const offset = Math.floor(prev.size / 2);
            const left = center - offset;
            const right = center + offset;
            if (left >= 0 && textToScramble[left] && textToScramble[left] !== " ") {
              nextSet.add(left);
            }
            if (right < textToScramble.length && textToScramble[right] && textToScramble[right] !== " ") {
              nextSet.add(right);
            }
          }
          
          setDisplayText(shuffleText(textToScramble, nextSet));
          iterations++;
          return nextSet;
        } else {
          cleanup();
          setIsScrambling(false);
          setDisplayText(textToScramble);
          return prev;
        }
      });
    }, speed);
  }, [currentIndex, texts, speed, revealDirection, maxIterations, shuffleText, cleanup]);

  // Handle text rotation
  const rotateToNextText = useCallback(() => {
    const nextIndex = (currentIndex + 1) % texts.length;
    setCurrentIndex(nextIndex);
    
    // Small delay before starting new scramble for smooth transition
    setTimeout(() => {
      startScrambling(texts[nextIndex]);
    }, 100);
  }, [currentIndex, texts, startScrambling]);

  // Setup rotation interval
  useEffect(() => {
    if (animateOn === "view" || animateOn === "auto") {
      cleanupRotation();
      rotationIntervalRef.current = setInterval(rotateToNextText, rotationInterval);
    }
    
    return () => cleanupRotation();
  }, [animateOn, rotationInterval, rotateToNextText, cleanupRotation]);

  // Handle view animation trigger
  useEffect(() => {
    if (animateOn === "view" && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startScrambling(texts[currentIndex]);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn, startScrambling, texts, currentIndex]);

  // Handle hover events
  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      startScrambling(texts[currentIndex]);
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === "hover") {
      cleanup();
      setIsScrambling(false);
      setDisplayText(texts[currentIndex] || "");
      setRevealedIndices(new Set());
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
      cleanupRotation();
    };
  }, [cleanup, cleanupRotation]);

  return (
    <motion.span
      ref={containerRef}
      className={parentClassName}
      style={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Screen reader only text for accessibility */}
      <span style={styles.srOnly}>{texts[currentIndex]}</span>
      
      {/* Visual scrambled text */}
      <span aria-hidden="true">
        {(displayText || "").split("").map((char, index) => (
          <span
            key={index}
            className={
              revealedIndices.has(index) || !isScrambling
                ? className
                : encryptedClassName
            }
          >
            {char}
          </span>
        ))}
      </span>
    </motion.span>
  );
}