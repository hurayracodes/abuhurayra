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
      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "55%",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <section className="relative flex items-center justify-center px-6 lg:px-10 text-white pt-28 pb-20 lg:min-h-screen z-20">
        <div className="max-w-5xl mx-auto w-full">
          {/* ── Name (Top Par) ── */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h1
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "clamp(2rem, 8vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "rgba(255,255,255,0.95)",
                margin: 0,
              }}
            >
              I'm Abu Hurayra
            </h1>
          </motion.div>

          {/* ── Divider line ── */}
          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              margin: "3px auto",
              maxWidth: "560px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, rgba(6,182,212,0.4))",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "12px",
                letterSpacing: "0.2em",
                color: "rgba(103,232,249,0.7)",
                textTransform: "uppercase",
              }}
            >
              full stack developer
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(to left, transparent, rgba(6,182,212,0.4))",
              }}
            />
          </motion.div>

          {/* ── Main Build Section ── */}
          <motion.div
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <h1 className="text-3xl font-mono sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/90 tracking-tight font-extralight">
              Build{" "}
              <span className="inline-flex items-center rotating-text justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-2">
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
              </span>{" "}
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
            style={{
              color: "rgba(156,163,175,1)",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              maxWidth: "600px",
              margin: "16px auto",
              lineHeight: 1.8,
              textAlign: "center",
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

          

          <style>{`
            .cta-container {
              display: flex;
              justify-content: center;
              gap: 16px;
              flex-wrap: wrap;
            }

            .btn-wrapper {
              display: inline-block;
            }

            .btn-primary {
              padding: 14px 36px;
              border-radius: 999px;
              background: linear-gradient(135deg, #6d28d9 0%, #0891b2 100%);
              color: #fff;
              font-weight: 600;
              font-size: 1rem;
              border: none;
              cursor: pointer;
              box-shadow: 0 0 28px rgba(6,182,212,0.25);
              transition: all 0.3s ease;
            }

            .btn-secondary {
              padding: 14px 36px;
              border-radius: 999px;
              background: transparent;
              color: rgba(255,255,255,0.8);
              font-weight: 500;
              font-size: 1rem;
              border: 1px solid rgba(255,255,255,0.18);
              cursor: pointer;
              transition: all 0.3s ease;
            }

            .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 40px rgba(6,182,212,0.4); }
            .btn-secondary:hover { border-color: rgba(6,182,212,0.5); color: #fff; }

            @media (max-width: 640px) {
              .cta-container {
                flex-direction: column;
                padding: 0 20px;
                gap: 12px;
              }
              .btn-wrapper, .btn-primary, .btn-secondary {
                width: 100%;
              }
            }

            @keyframes scrollPulse {
              0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
              50% { opacity: 1; transform: scaleY(1); }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}

export default Hero;