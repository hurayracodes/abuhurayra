import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Creative Director",
    company: "Digital Agency",
    image: "👩‍💼",
    quote: "Abuhurayra's work transcends traditional web development. His ability to blend technical expertise with artistic vision resulted in a portfolio that truly stands out in our industry.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Tech Lead",
    company: "Startup Inc",
    image: "👨‍💻",
    quote: "Working with Abu Hurayra was incredible. He delivered a complex 3D interactive experience that exceeded all expectations. His attention to detail and innovative approach is unmatched.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Volkov",
    title: "Product Manager",
    company: "Tech Corp",
    image: "👩‍💻",
    quote: "abuhurara brings a unique perspective to every project. His futuristic designs and smooth animations have significantly improved our user engagement metrics.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Kim",
    title: "CEO",
    company: "Innovation Labs",
    image: "👨‍💼",
    quote: "Outstanding developer with an eye for design. Abu Hurayra created an immersive experience that perfectly captured our brand vision. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
    const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const [index, setIndex] = useState(0);

  useEffect(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);

  }, []);

  const { name, title, company, image, quote, rating } = testimonials[index];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-600"}`}
      >
        ★
      </motion.span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="border border-gray-800 rounded-3xl p-8 shadow-2xl">
              <motion.div
                key={index}
                className="text-center"
              >
                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className={`w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-2xl shadow-lg`}>
                    {image}
                  </motion.div>
                  <div className="text-left">
                    <motion.h4
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-white font-semibold text-lg"
                    >
                      {name}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-400 text-sm"
                    >
                      {title} • {company}
                    </motion.p>
                  </div>
                </div>

                {/* Quote */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className=" mt-8 text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-light max-w-2xl mx-auto"
                >
                  {quote}
                </motion.p>
                 {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {renderStars(rating)}
                </div>
              </motion.div>
          </div>

          {/* Pagination Dots */}
                   <div className="flex items-center justify-center gap-6 mt-8">
                     {/* Left Arrow */}
                     <motion.button
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       onClick={prevTestimonial}
                       className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-purple-600/30 transition-all duration-300 hover:border-purple-400"
                     >
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                       </svg>
                     </motion.button>
         
                     {/* Dots */}
                     <div className="flex gap-3">
                       {testimonials.map((_, i) => (
                         <motion.button
                           key={i}
                           whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           onClick={() => setIndex(i)}
                           className={`w-3 h-3 rounded-full transition-all duration-300 ${
                             index === i
                               ? "bg-linear-to-r from-purple-500 to-pink-500 scale-125"
                               : "bg-gray-600 hover:bg-gray-500"
                           }`}
                         />
                       ))}
                     </div>
         
                     {/* Right Arrow */}
                     <motion.button
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       onClick={nextTestimonial}
                       className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-purple-600/30 transition-all duration-300 hover:border-purple-400"
                     >
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                       </svg>
                     </motion.button>
                   </div>
        </div>
      </div>
    </section>
  );
}