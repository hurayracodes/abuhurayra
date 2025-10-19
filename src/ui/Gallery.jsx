import React from "react";

const galleryItems = [
  { id: 3, title: "Holographic Interface", category: "AR/VR Design", image: "🔮", description: "Immersive holographic user interface concept", link: "#" },
  { id: 4, title: "Quantum Computing UI", category: "Interface Design", image: "⚛️", description: "Next-generation quantum computing interface", link: "#" },
  { id: 5, title: "Cyberpunk Portfolio", category: "Web Design", image: "🌃", description: "Dark cyberpunk-themed portfolio website", link: "#" },
  { id: 6, title: "AI Assistant Interface", category: "AI/ML Design", image: "🤖", description: "Conversational AI assistant with emotion recognition", link: "#" },
  { id: 7, title: "Space Mission Control", category: "Dashboard Design", image: "🚀", description: "Mission control dashboard for space exploration", link: "#" },
  { id: 8, title: "Metaverse Gateway", category: "3D Design", image: "https://images.pexels.com/photos/32055930/pexels-photo-32055930.jpeg", description: "Portal interface for metaverse experiences", link: "#" },
];

const Gallery = () => {
  return (
    <div className="relative min-h-screen py-16  px-8 overflow-hidden">
          {/* Header Section */}
        <div className="text-center flex flex-col pb-6 gap-3">
          <h2 className="text-5xl font-bold bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions that blend creativity with cutting-edge technology
          </p>
        </div>
      {/* ⭐ Star background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: "white",
              opacity: Math.random() * 0.7 + 0.3,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      {/* ✨ Gallery Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map(({ id, title, category, image, description, link }) => (
          <div
  key={id}
  href={link}
  className="group relative block rounded-xl border border-white/20 overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:bg-gradient-to-br hover:from-[#21204ba9] hover:to-[#261935a4] transform transition duration-500 hover:rotate-3"
>
  {/* Image Section (fixed height) */}
  <div className="h-44 flex justify-center items-center bg-white/5 p-4">
    {typeof image === "string" && image.startsWith("http") ? (
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
    ) : (
      <div className="text-7xl">{image}</div>
    )}
  </div>

  {/* Content Section */}
  <div className="p-6 flex flex-col justify-between min-h-[180px]">
    <div>
      <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
      <p className="text-purple-300 text-sm mb-2">{category}</p>
      <p className="text-white/90 text-sm mb-4">{description}</p>
    </div>
    <div className="text-right">
      <a
            href={link}
            className="inline-flex  hover:translate-x-2 items-center text-white hover:text-purple-400 transition-all duration-300 font-medium group"
          >
            Check Live site
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
    </div>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Gallery;
