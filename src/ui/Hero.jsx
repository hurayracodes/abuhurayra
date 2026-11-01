"use client";
import { motion } from "framer-motion";
import RotatingDecryptedText from "./DecryptText";
import { Images } from "lucide-react";

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

      <section className="relative flex items-center justify-center px-6 lg:px-10 text-heading pt-28 pb-20 lg:min-h-screen z-20">
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
              className="font-mono font-extrabold tracking-tight text-heading/95"
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
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent/40" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent/80">
              full stack developer
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent/40" />
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
            <h1 className="text-3xl font-mono sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-heading/90 tracking-tight font-extralight">
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
                  className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-tight"
                  parentClassName="inline-block"
                />
              </span>
            </h1>
            <p className="text-3xl font-mono sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-heading/90 tracking-tight font-extralight">
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
            className="text-body text-center mx-auto leading-relaxed"
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

          {/* ── CTA Buttons ── */}
          <motion.div
            custom={5}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/Abuhurara.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer rounded-full bg-linear-to-br from-violet-700 to-cyan-600
                         px-9 py-3.5 text-base font-semibold tracking-[0.03em] text-white
                         shadow-[0_0_28px_rgba(6,182,212,0.25)] transition duration-200
                         hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
            >
              View Resume
            </a>

            <a
              href="#projects"
              className="inline-block cursor-pointer rounded-full border border-line-strong
                         px-9 py-3.5 text-base font-medium tracking-[0.03em] text-strong
                         transition duration-200 hover:border-accent/50 hover:text-heading"
            >
              See My Work
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
