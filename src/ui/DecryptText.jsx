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
const DEFAULT_CHARACTERS = "huraira_sudo_mode";

export default function RotatingDecryptedText({
  texts = [
    "MERN Stack Developer",
    "Software Developer",
    "Founder HurayraCodes",
  ],
  speed = 60,
  maxIterations = 40,
  revealDirection = "start",
  characters = DEFAULT_CHARACTERS,
  className = "",
  parentClassName = "",
  encryptedClassName = "opacity-50",
  animateOn = "view",
  rotationInterval = 3000,
}) {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const rotationIntervalRef = useRef(null);
  const iterationsRef = useRef(0); // Use ref to track iterations

  // Cleanup function
  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    iterationsRef.current = 0; // Reset iterations on cleanup
  }, []);

  // Cleanup rotation interval
  const cleanupRotation = useCallback(() => {
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
      rotationIntervalRef.current = null;
    }
  }, []);

  // Shuffle text function
  const shuffleText = useCallback(
    (originalText, revealed) => {
      if (!originalText) return "";

      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (revealed?.has(i)) return originalText[i];
          // Make sure characters is an array or string
          const charsArray = Array.isArray(characters)
            ? characters
            : characters.split("");
          return charsArray[Math.floor(Math.random() * charsArray.length)];
        })
        .join("");
    },
    [characters],
  );

  // Start scrambling effect
  const startScrambling = useCallback(
    (textToScramble = texts[currentIndex]) => {
      if (!textToScramble) return;

      cleanup();
      setIsScrambling(true);
      iterationsRef.current = 0; // Reset iterations

      // Don't reveal anything initially - start fully scrambled
      const baseSet = new Set();
      // Only preserve spaces initially
      for (let i = 0; i < textToScramble.length; i++) {
        const ch = textToScramble[i];
        if (ch === " ") {
          baseSet.add(i);
        }
      }

      setRevealedIndices(baseSet);
      setDisplayText(shuffleText(textToScramble, baseSet));

      intervalRef.current = setInterval(() => {
        setRevealedIndices((prev) => {
          if (!textToScramble) {
            cleanup();
            return prev;
          }

          // Check if we should continue
          if (
            prev.size < textToScramble.length &&
            iterationsRef.current < maxIterations
          ) {
            const nextSet = new Set(prev);

            // Add one new index based on direction
            if (revealDirection === "start") {
              // Find the next non-space character from start
              for (let i = 0; i < textToScramble.length; i++) {
                if (!nextSet.has(i) && textToScramble[i] !== " ") {
                  nextSet.add(i);
                  break;
                }
              }
            } else if (revealDirection === "end") {
              // Find the next non-space character from end
              for (let i = textToScramble.length - 1; i >= 0; i--) {
                if (!nextSet.has(i) && textToScramble[i] !== " ") {
                  nextSet.add(i);
                  break;
                }
              }
            } else if (revealDirection === "center") {
              // Alternate revealing from center outward
              const center = Math.floor(textToScramble.length / 2);
              let left = center;
              let right = center;

              // Try to find next character to reveal
              for (let offset = 0; offset < textToScramble.length; offset++) {
                if (
                  center - offset >= 0 &&
                  !nextSet.has(center - offset) &&
                  textToScramble[center - offset] !== " "
                ) {
                  nextSet.add(center - offset);
                  break;
                }
                if (
                  center + offset < textToScramble.length &&
                  !nextSet.has(center + offset) &&
                  textToScramble[center + offset] !== " "
                ) {
                  nextSet.add(center + offset);
                  break;
                }
              }
            }

            setDisplayText(shuffleText(textToScramble, nextSet));
            iterationsRef.current++;

            return nextSet;
          } else {
            // Animation complete
            cleanup();
            setIsScrambling(false);
            setDisplayText(textToScramble);
            return prev;
          }
        });
      }, speed);
    },
    [
      currentIndex,
      texts,
      speed,
      revealDirection,
      maxIterations,
      shuffleText,
      cleanup,
    ],
  );

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
      rotationIntervalRef.current = setInterval(
        rotateToNextText,
        rotationInterval,
      );
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
        { threshold: 0.1 },
      );

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn, startScrambling, texts, currentIndex]);

  // Start animation when component mounts or index changes (for "view" mode)
  useEffect(() => {
    if (animateOn === "view") {
      startScrambling(texts[currentIndex]);
    }
  }, [currentIndex, animateOn, startScrambling, texts]);

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
