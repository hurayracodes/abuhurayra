import "./Hero.css";
import { Code, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function Hero() {
  const img = "/assets/bg-bg.png";

  return (
    <div className="relative overflow-hidden">
      <section className="min-h-screen flex items-center mt-15 justify-center px-6 lg:px-16 text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
        >
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30"
            >
              <p className="text-sm text-blue-400 font-medium tracking-widest uppercase">
                Mern Stack Developer
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
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm{" "}
                <span
                  className="bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent relative"
                >
                  Abu Hurayra
                  <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"></div>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed text-lg max-w-lg animate-smooth-fade-up"
            >
              Full Stack Website development with over 2+ years of experience in
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
                { icon: Code, href: "https://github.com/hurayracodes/abuhurayra", label: "Code" },
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
                { icon: Linkedin, href: "https://www.linkedin.com/in/hurayracodes/", label: "LinkedIn" },
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

          {/* Image Section */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src={img}
                alt="Developer workspace"
                className="rounded-3xl w-full object-cover shadow-2xl shadow-blue-500/20 animate-float-bounce"
              />

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"
              ></motion.div>
            </motion.div>

            {/* Background glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl scale-110"
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;