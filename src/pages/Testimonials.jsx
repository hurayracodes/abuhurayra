import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Creative Director",
    company: "Digital Agency",
    image: "👩‍💼",
    quote:
      "abuhurara's work transcends traditional web development. His ability to blend technical expertise with artistic vision resulted in a portfolio that truly stands out in our industry.",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Tech Lead",
    company: "Startup Inc",
    image: "👨‍💻",
    quote:
      "Working with abuhurara was incredible. He delivered a complex 3D interactive experience that exceeded all expectations. His attention to detail and innovative approach is unmatched.",
  },
  {
    id: 3,
    name: "Elena Volkov",
    title: "Product Manager",
    company: "Tech Corp",
    image: "👩‍💻",
    quote:
      "abuhurara brings a unique perspective to every project. His futuristic designs and smooth animations have significantly improved our user engagement metrics.",
  },
  {
    id: 4,
    name: "David Kim",
    title: "CEO",
    company: "Innovation Labs",
    image: "👨‍💼",
    quote:
      "Outstanding developer with an eye for design. Milad created an immersive experience that perfectly captured our brand vision. Highly recommended!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { name, title, company, image, quote } = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col gap-5 p-3 mb-10">
          <h2 className="text-5xl w-full font-bold bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          className="relative overflow-hidden p-4 rounded-[24px] border border-[#222] mx-auto"
          style={{
            width: "720px",
            background: "linear-gradient(135deg, #18183bbe, #241238)",
          }}
        >
          <div className="flex flex-col items-center justify-center text-center px-8 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateY: -25 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -40, rotateY: 25 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center text-4xl bg-[#060010] border border-white/20 rounded-full shadow-[0_0_25px_10px_rgba(59,130,246,0.3)]">
                  {image}
                </div>
                <p className="text-gray-200 text-lg italic mb-6 leading-relaxed max-w-xl">
                  {quote}
                </p>
                <h4 className="text-xl bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent font-semibold">
                  {name}
                </h4>
                <p className="text-sm text-gray-400">
                  {title} at {company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex w-full justify-center mt-6">
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-200 ${
                    index === i
                      ? "bg-[#333]"
                      : "bg-[rgba(51,51,51,0.4)]"
                  }`}
                  animate={{
                    scale: index === i ? 1.3 : 1,
                  }}
                  onClick={() => setIndex(i)}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
