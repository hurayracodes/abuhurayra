import "./Hero.css";
import { Code, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import RotatingDecryptedText from "./DecryptText";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <canvas
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 text-white pt-20 pb-12 lg:pt-0 lg:pb-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-1 gap-10 items-center max-w-4xl mx-auto w-full"
        >
          {/* Content - Centered */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 w-full text-center mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center justify-center gap-2 px-2 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mx-auto"
            >
              <p className="text-sm text-blue-400 font-medium">
                Full Stack Web Developer
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                I'm{" "}
                <span className="bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent relative">
                  Abu Hurayra
                </span>
              </h1>
              <h1 className="text-3xl sm:text-4xl text-gray-300 mb-4 font-mono">
                A{" "}
                <span className="text-blue-400">
                  <RotatingDecryptedText />
                </span>
              </h1>
            </motion.div>

            {/* Description - Updated correctly */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto"
            >
              I'm Abu Hurayra, a passionate Software Developer and Founder of hurayraCodes Technologies. I specialize in building fast, scalable, and secure web applications using the MERN stack (MongoDB, Express, React, Node.js) with over 2+ years of experience in building modern, responsive web applications.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4"
            >
              {[
                {
                  icon: Code,
                  href: "https://github.com/hurayracodes",
                  label: "Code",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/hurayracodes/",
                  label: "instagram",
                },
                {
                  icon: Github,
                  href: "https://github.com/hurayracodes",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/hurayracodes/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl border border-white/10 hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;