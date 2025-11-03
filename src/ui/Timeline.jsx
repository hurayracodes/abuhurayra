import React, { useEffect, useRef } from "react";

const Timeline = () => {
  const timeline = [
    { year: '2020', title: 'Frontend Foundation', tech: 'HTML, CSS, JavaScript' },
    { year: '2021', title: 'React Mastery', tech: 'React, Redux, Hooks' },
    { year: '2022', title: 'Full-Stack Evolution', tech: 'Node.js, Express, MongoDB' },
    { year: '2023', title: 'Modern Web & 3D', tech: 'Next.js, WebGL, Three.js' },
  ];
  return (
    <section
      id="cta"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Right: Timeline */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            Journey Timeline
          </h2>
            
            {timeline.map((item, index) => (
              <div 
                key={item.year} 
                className=" p-6 rounded-2xl relative border border-white/20 bg-linear-to-br from-[#0e0d23a9] to-[#180a25ce] group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                    <span className="text-blue-500 font-bold">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 text-muted-foreground">{item.tech}</p>
                  </div>
                </div>
                
                {/* Connecting line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-full h-6 w-px from-[#0e0d23a9] to-[#180a25ce]" />
                )}
              </div>
            ))}
          </div>
    </section>
  );
};

export default Timeline;
