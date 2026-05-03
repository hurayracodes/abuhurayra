"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "This changed everything for me.",
    author: "Sarah Chen",
    role: "Designer at Figma",
    avatar: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    quote: "Simply brilliant. Nothing else compares.",
    author: "Marcus Johnson",
    role: "Engineer at Vercel",
    avatar: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    quote: "The attention to detail is unmatched.",
    author: "Elena Rodriguez",
    role: "Founder at Craft",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (index) => {
    if (index === activeIndex || animating) return
    setAnimating(true)
    setTimeout(() => {
      setActiveIndex(index)
      setAnimating(false)
    }, 300)
  }

  const prev = () => goTo((activeIndex - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((activeIndex + 1) % testimonials.length)

  const current = testimonials[activeIndex]

  return (
    <section className="bg-[#0a0f1e] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top row: left heading + right card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — heading */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <span className="text-green-400 text-xs font-semibold tracking-widest uppercase">Testimonials</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              What others<br />say
            </h2>

            <p className="text-slate-400 text-base leading-relaxed max-w-xs">
              I've worked with some amazing people over the years, here is what they have to say about me.
            </p>
          </div>

          {/* Right — testimonial card */}
          <div
            className={`bg-[#161b2e] border border-white/8 rounded-2xl p-8 transition-all duration-300 ${
              animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Author row */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-white/10"
              />
              <div>
                <p className="text-white font-semibold text-base">{current.author}</p>
                <p className="text-slate-400 text-sm">{current.role}</p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-slate-300 text-base leading-relaxed">
              {current.quote}
            </p>
          </div>
        </div>

        {/* Bottom row: LinkedIn link + counter + arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-6">

          {/* LinkedIn */}
          <a
            href={current.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-sm font-medium border-b border-white/30 pb-0.5 hover:border-white transition-colors duration-200"
          >
            Check it out on LinkedIn
            <ExternalLink size={14} />
          </a>

          {/* Counter + Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              <ArrowLeft size={16} />
            </button>

            <span className="text-slate-400 text-sm tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}