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
          className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto w-full"
        >
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 order-2 lg:order-1 w-full lg:max-w-lg"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center md:text-center sm:text-center gap-2 px-2 py-2 rounded-full bg-blue-500/10 border border-blue-500/30"
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
              className="space-y-4 md:w-full"
            >
              <h1 className="text-5xl md:text-5xl font-bold">
                Hey! I'm{" "}
                <span className="bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent relative">
                  Hurayra
                </span>
              </h1>
              <h1 className="text-4xl md:text-4xl sm:text-3xl sd:text-2x1 font-bold text-white">
                A{" "}
                <span className="text-blue-400">
                  <RotatingDecryptedText />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400 text-base leading-relaxed max-w-2xl"
            >
              I’m Abu Hurayra, a passionate Software Developer and Founder of hurayraCodes Technologies. I specialize in building fast, scalable, and secure web applications using the MERN stack (MongoDB, Express, React, Node.js). with over 2+ years of experience in
              building modern, responsive web applications.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              {[
                {
                  icon: Code,
                  href: "https://github.com/hurayracodes/abuhurayra",
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

          {/* Image Section - Original sizes fixed */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2 w-full"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto transform transition duration-500 hover:scale-105">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-400 via-purple-800 to-cyan-900 blur-2xl opacity-30 -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative bg-gray-950/60 backdrop-blur-md border border-gray-800 rounded-full shadow-lg hover:border-cyan-400 hover:shadow-cyan-400/30 hover:shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer z-10"
              >
                <img
                  className="object-cover w-full h-full"
                  src="assets/2.png"
                  alt="Abu Huraira"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400 rounded-full shadow-lg animate-pulse"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full shadow-lg animate-bounce"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="absolute top-1/2 -right-6 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full shadow-lg animate-pulse"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
