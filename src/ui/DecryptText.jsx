import { useEffect, useState } from "react";
import DecryptedText from "../components/DecryptedText";

const titles = [
  "MERN Stack Developer",
  "Software Developer",
  "Founder HurayraCodes",
];

export default function RotatingDecryptedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // har 3 sec baad change

    return () => clearInterval(interval);
  }, []);

  return (
    <DecryptedText
      key={titles[index]}   // IMPORTANT: re-trigger animation
      text={titles[index]}
      animateOn="view"
      sequential={true}
      revealDirection="start"
      speed={40}
      className="text-white"
      encryptedClassName="opacity-70"
    />
  );
}
