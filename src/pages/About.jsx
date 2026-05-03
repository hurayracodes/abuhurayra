"use client";
import {
  Briefcase,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  User,
} from "lucide-react";

function About() {
  return (
    <div className="relative pt-10 overflow-hidden" id="about">
      <canvas
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <main id="about" className="min-h-screen flex items-center justify-center flex-col pb-12 px-4 sm:px-6 lg:px-16 text-slate-300">
        {/* Heading - Left aligned */}
        <div className="w-full max-w-7xl mx-auto mb-8 md:mb-12">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-left">
            LET ME{" "}
              INTRODUCE
            MYSELF
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto w-full">
          {/* Left side content */}
          <section className="space-y-5 font-normal text-justify order-2 lg:order-1 w-full tracking-tight text-base sm:text-lg">
            <p className="text-lg font-mono text-gray-300">
              👋Welcome to my World, Nice to see you here.
            </p>

            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              I fell in love with programming, my journey as a JavaScript
              Developer started with Simple Ideas and now I am building complex
              web applications. I am fluent in classics like Javascript and a
              deep expertise in{" "}
              <span className="text-gray-300 font-mono underline">
                full-stack development
              </span>
            </p>

            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              I specialize transforming innovative ideas into reality. My skill
              spread out from dynamic frontend interfaces using{" "}
              <span className=" font-mono underline text-gray-200">
                React, Next.js, React.Native
              </span>{" "}
              to robust backend solutions with{" "}
              <span className="underline font-mono text-gray-300">
                Node.js, Express & MongoDB{" "}
              </span>
              with over 2+ years of experience in creating modern, responsive
              web solutions.
            </p>

            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              I'm committed to learning new things and working with others all
              the time, and I make sure that every project I work on is not only
              efficient and scalable, but also innovative.
            </p>
            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ab reiciendis distinctio. Minus excepturi blanditiis suscipit
              tempore dolorum! Ab, voluptas consectetur! Vitae.
            </p>
            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              nisi soluta unde.
            </p>
          </section>

          {/* Right side image with icons */}
          <section className="relative flex flex-col items-center justify-center order-1 lg:order-2 w-full">
            <div className="relative flex justify-center items-center">
              {/* Image Container */}
              <div className="relative transition-all duration-300 cursor-grab w-50 h-50 sm:w-62 sm:h-62 md:w-70 md:h-70 group border-4 border-cyan-400/30 rounded-full">
                <img
                  src="/hurayracodes.png"
                  alt="Abu Hurayra"
                  className="w-full h-full object-cover p-1 rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Social Icons - Below the image */}
              <div className="flex absolute -bottom-3 items-center justify-center gap-4 mt-6">
                <a
                  href="https://github.com/hurayracodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm rounded-full bg-slate-950/20 border border-white/10 hover:border-cyan-400 text-slate-400 hover:text-cyan-200"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hurayracodes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm rounded-full bg-slate-950/20 border border-white/10 hover:border-cyan-400 text-slate-400 hover:text-cyan-200"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="mailto:abuhuraira3912l@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm rounded-full bg-slate-950/20 border border-white/10 hover:border-cyan-400 text-slate-400 hover:text-cyan-200"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Hover Text */}
            <div className="mt-5 text-center">
              <p className="text-sm text-slate-400">
                Hover on the image to 💡 it up.
              </p>
            </div>

             {/* Additional Content Section */}
            <div className="w-full mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-sm">Heapware Software Tec. lhr</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-sm">Intermediate Computer Science</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-sm">Ccw, Punjab Pakistan</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <User className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-sm">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default About;
