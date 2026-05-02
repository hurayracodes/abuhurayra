import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

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

export default function DecryptedText({
  text = "",
  speed = 20,
  maxIterations = 12,
  sequential = true,
  revealDirection = "start",
  characters = "QuraibaSuperSecretHurayra!@$%&*",
  className = "",
  parentClassName = "",
  encryptedClassName = "opacity-60",
  animateOn = "view",
}) {
  // Handle empty string to prevent errors
  const safeText = text || "";
  const [displayText, setDisplayText] = useState(safeText);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const containerRef = useRef(null);

  useEffect(() => {
    let interval;

    // Return early if text is empty
    if (!safeText || safeText.length === 0) {
      setDisplayText("");
      setIsScrambling(false);
      return;
    }

    const shuffleText = (originalText, revealed) => {
      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (revealed.has(i)) return originalText[i];
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");
    };

    setIsScrambling(true);

    interval = setInterval(() => {
      setRevealedIndices((prev) => {
        if (prev.size < safeText.length) {
          const next = prev.size;
          const nextSet = new Set(prev);
          nextSet.add(next);
          setDisplayText(shuffleText(safeText, nextSet));
          return nextSet;
        } else {
          clearInterval(interval);
          setIsScrambling(false);
          setDisplayText(safeText);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [safeText, speed, characters]);

  return (
    <motion.span
      ref={containerRef}
      className={parentClassName}
      style={styles.wrapper}
    >
      <span aria-hidden="true">
        {displayText.split("").map((char, index) => (
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
