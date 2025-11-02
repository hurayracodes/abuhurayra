import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "Holographic Interface",
    category: "AR/VR Design",
    image: "🔮",
    description: "Immersive holographic user interface concept",
    link: "#",
    color: "#1788ae",
  },
  {
    id: 2,
    title: "Quantum Computing UI",
    category: "Interface Design",
    image: "⚛️",
    description: "Next-generation quantum computing interface",
    link: "#",
    color: "#47afa1",
  },
  {
    id: 3,
    title: "Cyberpunk Portfolio",
    category: "Web Design",
    image: "🌃",
    description: "Dark cyberpunk-themed portfolio website",
    link: "#",
    color: "#ffe578",
  },
  {
    id: 4,
    title: "AI Assistant Interface",
    category: "AI/ML Design",
    image: "🤖",
    description: "Conversational AI assistant with emotion recognition",
    link: "#",
    color: "#fc815c",
  },
  {
    id: 5,
    title: "Space Mission Control",
    category: "Dashboard Design",
    image: "🚀",
    description: "Mission control dashboard for space exploration",
    link: "#",
    color: "#459bd5",
  },
  {
    id: 6,
    title: "Metaverse Gateway",
    category: "3D Design",
    image:
      "https://images.pexels.com/photos/32055930/pexels-photo-32055930.jpeg",
    description: "Portal interface for metaverse experiences",
    link: "#",
    color: "#7a4fff",
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
                  <div className="max-w-[400px] w-full flex justify-center items-center bg-white/5 rounded-lg drop-shadow-[0_0_60px_rgba(59,130,246,0.6)] h-[220px]">
                    {item.image.startsWith("http") ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-7xl">{item.image}</span>
                    )}
                  </div>
                  <span
                    className="flex group-hover:-top-14 ease-jump duration-200 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-3 py-1 text-sm sm:text-base mt-3 rounded w-max items-center gap-1 text-black"
                    style={{
                      background: item.color,
                    }}
                  >
                    {item.title}
                  </span>
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
                    #react.js
                  </li>
                  <li className="border rounded-full border-[#999] px-[10px] py-[5px] text-sm">
                    #tailwindcss
                  </li>
                  <li className="border rounded-full border-[#999] px-[10px] py-[5px] text-sm">
                    #javascript
                  </li>
                  <li className="border rounded-full border-[#999] px-[10px] py-[5px] text-sm">
                    #figma
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
