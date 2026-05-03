"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote: "The attention to detail is unmatched. Every interaction feels intentional.",
    author: "Sarah Chen",
    role: "Design Director",
    company: "Linear",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "Finally, someone who understands that simplicity is the ultimate sophistication.",
    author: "Marcus Webb",
    role: "Creative Lead",
    company: "Vercel",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    quote: "This work redefined our entire approach to digital experiences.",
    author: "Elena Frost",
    role: "Head of Product",
    company: "Stripe",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote: "We work 5x faster. Best solution in the market, hands down.",
    author: "Alex Kim",
    role: "CEO",
    company: "TechCorp",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    quote: "I'm confident my data is safe here. Can't say that about anyone else.",
    author: "Dan Cole",
    role: "CTO",
    company: "SecureNet",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote: "So simple and intuitive — got the whole team up to speed in 10 minutes.",
    author: "Marina Cruz",
    role: "HR Manager",
    company: "TalentForge",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
]

function usePreloadImages(images) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])
}

function SplitText({ text }) {
  const words = text.split(" ")
  return (
    <span style={{ display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)

  usePreloadImages(testimonials.map((t) => t.avatar))

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY]
  )

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const current = testimonials[activeIndex]

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "560px",
        margin: "0 auto",
        padding: "5rem 2rem",
        cursor: "none",
        backgroundColor: "#0a0a0a",
        minHeight: "400px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNext}
    >
      {/* Custom cursor */}
      <motion.div
        style={{
          pointerEvents: "none",
          position: "absolute",
          zIndex: 50,
          mixBlendMode: "difference",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          style={{
            borderRadius: "9999px",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          animate={{
            width: isHovered ? 80 : 0,
            height: isHovered ? 80 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <motion.span
            style={{
              color: "#000000",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            Next
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Index counter — top right */}
      <motion.div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          display: "flex",
          alignItems: "baseline",
          gap: "4px",
          fontFamily: "monospace",
          fontSize: "12px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          style={{ fontSize: "24px", fontWeight: 300, color: "#f0f0f0" }}
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span style={{ color: "#555555" }}>/</span>
        <span style={{ color: "#555555" }}>{String(testimonials.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Stacked avatar previews — top left */}
      <motion.div
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          display: "flex",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "9999px",
              border: "2px solid #0a0a0a",
              overflow: "hidden",
              marginLeft: i === 0 ? 0 : "-8px",
              filter: i === activeIndex ? "none" : "grayscale(100%)",
              opacity: i === activeIndex ? 1 : 0.5,
              outline: i === activeIndex ? "1px solid #a855f7" : "none",
              outlineOffset: "1px",
              transition: "all 0.3s",
            }}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={t.avatar}
              alt={t.author}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main quote + author */}
      <div style={{ position: "relative" }}>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            style={{
              fontSize: "22px",
              fontWeight: 300,
              lineHeight: 1.65,
              letterSpacing: "-0.01em",
              color: "#f0f0f0",
              margin: 0,
            }}
          >
            <SplitText text={current.quote} />
          </motion.blockquote>
        </AnimatePresence>

        {/* Author row */}
        <motion.div style={{ marginTop: "3rem", position: "relative" }} layout>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

            {/* Avatar stack */}
            <div style={{ position: "relative", width: "48px", height: "48px" }}>
              <motion.div
                style={{
                  position: "absolute",
                  inset: "-6px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(168,85,247,0.4)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) => (
                <motion.img
                  key={t.avatar}
                  src={t.avatar}
                  alt={t.author}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "48px",
                    height: "48px",
                    borderRadius: "9999px",
                    objectFit: "cover",
                  }}
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    zIndex: i === activeIndex ? 1 : 0,
                    filter: i === activeIndex ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Name + role */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                style={{ position: "relative", paddingLeft: "16px" }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Accent left line */}
                <motion.div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "1px",
                    backgroundColor: "#a855f7",
                    transformOrigin: "top",
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
                <span style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#f0f0f0",
                  letterSpacing: "0.02em",
                }}>
                  {current.author}
                </span>
                <span style={{
                  display: "block",
                  fontSize: "11px",
                  color: "#555555",
                  marginTop: "2px",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}>
                  {current.role} — {current.company}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div
          style={{
            marginTop: "4rem",
            height: "1px",
            backgroundColor: "#1e1e1e",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "#a855f7",
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Click hint */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0.2 }}
        transition={{ duration: 0.3 }}
      >
        <span style={{
          fontSize: "10px",
          color: "#555555",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontFamily: "monospace",
        }}>
          Click anywhere
        </span>
      </motion.div>
    </div>
  )
}