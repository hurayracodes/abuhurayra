import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "Social Media Dashboard Interface",
    category: "Socail Media Profile",
    image: "/assets/project-img-1.png",
    description: "Immersive Design with user interface concept",
    link: "https://hurayracodes.github.io/social-media-app/",
    color: "#1788ae",
  },
  {
    id: 2,
    title: "Online Learning Platform UI",
    category: "Education Design",
    image: "/assets/project-img-2.png",
    description: "Next-generation Learning interface",
    link: "https://hurayracodes.github.io/Education-website/",
    color: "#47afa1",
  },

  {
    id: 3,
    title: "UI Modern Website base template",
    category: "Dashboard Design",
    image: "/assets/project-img-5.png",
    description: "Modern design dashboard",
    link: "https://hurayracodes.github.io/base-template/",
    color: "#459bd5",
  },
];

const Gallery = () => {
  return (
    <section
      id="projects"
      className="relative max-w-screen-xl mx-auto px-4 sm:px-8 py-16 sm:pb-24 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center flex flex-col gap-5 p-3 mb-10">
        <h2 className="text-5xl w-full font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
          Featured Projects
        </h2>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
        {/* Projects */}
        <div className="relative z-10 flex flex-col gap-16 sm:gap-28 mt-12 sm:mt-20">
          {galleryItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-[80px] relative ${
                  !isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Dot & Line */}
                <div
                  className={`absolute top-1/2 hidden sm:block ${
                    isEven ? "left-[25%] right-1/2" : "left-1/2 right-[25%]"
                  }`}
                  style={{ height: "1px", backgroundColor: item.color }}
                ></div>

                <div
                  className="w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hidden sm:block"
                  style={{ borderColor: item.color }}
                ></div>
                <div
                  className={`w-4 h-4 rounded-full border-[3px] border-[${item.color}] absolute left-1/2 -translate-x-1/2 bg-[#f00] z-10 hidden sm:block`}
                ></div>

                {/* Image */}
                <a
                  href={item.link}
                  className={`flex w-full relative justify-center ${
                    isEven ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  <div
                    className={`flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 ${
                      isEven ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <div className="relative max-w-[400px] w-full h-[220px] rounded-lg overflow-hidden drop-shadow-[0_0_60px_rgba(59,130,246,0.6)] group">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:blur-[2px] group-hover:scale-105"
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* View Project button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium flex items-center gap-2 border border-white/30 backdrop-blur-md">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Text */}
                <div className="w-full text-white">
                  <h3
                    className="font-bold text-2xl md:text-4xl"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="text-base md:text-lg"
                    style={{ color: item.color }}
                  >
                    ({item.category})
                  </span>
                  <p className="text-sm md:text-base mt-2 text-justify text-white/90">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    <li className="border rounded-full border-[#999] px-[10px] py-[5px] text-sm">
                      #Html5
                    </li>
                    <li className="border rounded-full border-[#999] px-[10px] py-[5px] text-sm">
                      #CSS
                    </li>
                    <li className="border rounded-full border-[#999] px-[10px] py-[5px] text-sm">
                      #javascript
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
