import "./Hero.css";
import { Code, Github, Linkedin, Mail, Sparkles, Facebook } from "lucide-react";
import { motion } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero() {
  const img = "/assets/hero-bg.svg";

  return (
    <div className="relative overflow-hidden">
      <section className="min-h-screen  flex items-center justify-center px-6 lg:px-16 text-white">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
        >
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
              <Sparkles className="rounded-full animate-pulse" />
              <p className="text-sm text-blue-400 font-medium tracking-widest uppercase">
                Website Developer
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm{" "}
                <span
                  className="text-transparent
                font-black
                bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 relative"
                >
                  Abu Hurayra
                  <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"></div>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-lg max-w-lg animate-smooth-fade-up">
              Fronted Website development with over 3+ years of experience in
              building modern, responsive web applications.
            </p>

            {/* Social Links */}
             <div className="flex items-start gap-4">
            {[
              { icon: Code, href: "https://github.com/hurayracodes/abuhurayra", label: "Code" },
              {
                icon: Facebook,
                href: "https://web.facebook.com/hurayracodes/",
                label: "GitHub",
              },
              {
                icon: Github,
                href: "https://github.com/hurayracodes",
                label: "GitHub",
              },
              { icon: Linkedin, href: "https://www.linkedin.com/in/hurayracodes/", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl border border-white/10 hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={img}
                alt="Developer workspace"
                className="rounded-3xl w-full object-cover shadow-2xl shadow-blue-500/20 animate-float-bounce"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl scale-110"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
