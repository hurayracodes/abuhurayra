"use client";
import { motion } from "framer-motion";
import RotatingDecryptedText from "./DecryptText";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
  }),
};

function Hero() {
  return (
    <div className="relative overflow-hidden z-0">
      {/* Ambient glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute rounded-full"
          style={{
            top: "10%",
            left: "55%",
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <section className="relative flex items-center justify-center px-6 lg:px-10 text-white pt-28 pb-20 lg:min-h-screen z-20">
        <div className="max-w-5xl mx-auto w-full">
          {/* ── Name — h2 (SEO fix) ── */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="font-mono font-extrabold tracking-tight text-white/95"
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              I'm Abu Hurayra
            </h2>
          </motion.div>

          {/* ── Divider line ── */}
          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mx-auto my-1"
            style={{ maxWidth: "560px" }}
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-400/40" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-cyan-300/70">
              full stack developer
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-400/40" />
          </motion.div>

          {/* ── Main h1 ── */}
          <motion.div
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-8 mb-8"
          >
            <h1 className="text-3xl font-mono sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/90 tracking-tight font-extralight">
              Build{" "}
              <span className="inline-flex items-center justify-center rotating-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-2">
                <RotatingDecryptedText
                  texts={[
                    "UI/UX Design",
                    "Backend Logic",
                    "Debug Issues",
                    "Fast Solutions",
                  ]}
                  animateOn="auto"
                  rotationInterval={3000}
                  speed={40}
                  revealDirection="start"
                  encryptedClassName="opacity-40"
                  className="text-cyan-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight"
                  parentClassName="inline-block"
                />
              </span>
            </h1>
            <p className="text-3xl font-mono sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/90 tracking-tight font-extralight">
              That Delivers Results
            </p>
          </motion.div>

          {/* ── Description ── */}
          <motion.p
            custom={4}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 text-center mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              maxWidth: "600px",
              margin: "16px auto",
              lineHeight: 1.8,
            }}
          >
            A passionate Full Stack Developer who turns complex problems into
            simple, elegant solutions. I build web applications that users
            actually love to use.
          </motion.p>

           {/* ── CTA Buttons (Full Width on Mobile) ── */}
          <motion.div
            custom={5}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",

              justifyContent: "center",

              gap: "16px",

              flexWrap: "wrap",
            }}
          >
            <a href="/Abuhurara.pdf" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  padding: "14px 36px",

                  borderRadius: "999px",

                  background:
                    "linear-gradient(135deg, #6d28d9 0%, #0891b2 100%)",

                  color: "#fff",

                  fontWeight: 600,

                  fontSize: "1rem",

                  border: "none",

                  cursor: "pointer",

                  letterSpacing: "0.03em",

                  boxShadow: "0 0 28px rgba(6,182,212,0.25)",

                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";

                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(6,182,212,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";

                  e.currentTarget.style.boxShadow =
                    "0 0 28px rgba(6,182,212,0.25)";
                }}
              >
                View Resume
              </button>
            </a>

            <a href="#projects">
              <button
                style={{
                  padding: "14px 36px",

                  borderRadius: "999px",

                  background: "transparent",

                  color: "rgba(255,255,255,0.75)",

                  fontWeight: 500,

                  fontSize: "1rem",

                  border: "1px solid rgba(255,255,255,0.18)",

                  cursor: "pointer",

                  letterSpacing: "0.03em",

                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)";

                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";

                  e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                }}
              >
                See My Work
              </button>
            </a>
          </motion.div>

          {/* ── Scroll Indicator ── */}
          <motion.div
            custom={6}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 mt-16"
          >
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/25">
              scroll
            </span>

            {/* Mouse shell */}
            <div
              className="relative flex justify-center"
              style={{
                width: "24px",
                height: "38px",
                borderRadius: "12px",
                border: "1.5px solid rgba(255,255,255,0.15)",
              }}
            >
              {/* Scrolling dot inside mouse */}
              <div
                style={{
                  width: "4px",
                  height: "8px",
                  borderRadius: "2px",
                  background: "rgba(6,182,212,0.7)",
                  marginTop: "6px",
                  animation: "scrollPulse 1.6s ease-in-out infinite",
                }}
              />
            </div>

            {/* Chevron arrows */}
            <div className="flex flex-col items-center gap-0.5">
              {[0, 1, 2].map((i) => (
                <svg
                  key={i}
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    animation: `scrollPulse 1.6s ease-in-out infinite`,
                    animationDelay: `${i * 0.18}s`,
                    opacity: 0.3,
                  }}
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="rgba(6,182,212,0.8)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* scrollPulse keyframe — properly used now */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50%       { opacity: 1;   transform: scaleY(1);   }
        }
      `}</style>
    </div>
  );
}

export default Hero;
