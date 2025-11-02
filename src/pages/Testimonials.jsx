import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Creative Director",
    company: "Digital Agency",
    image: "👩‍💼",
    quote:
      "abuhurara's work transcends traditional web development. His ability to blend technical expertise with artistic vision resulted in a portfolio that truly stands out in our industry.",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Tech Lead",
    company: "Startup Inc",
    image: "👨‍💻",
    quote:
      "Working with abuhurara was incredible. He delivered a complex 3D interactive experience that exceeded all expectations. His attention to detail and innovative approach is unmatched.",
  },
  {
    id: 3,
    name: "Elena Volkov",
    title: "Product Manager",
    company: "Tech Corp",
    image: "👩‍💻",
    quote:
      "abuhurara brings a unique perspective to every project. His futuristic designs and smooth animations have significantly improved our user engagement metrics.",
  },
  {
    id: 4,
    name: "David Kim",
    title: "CEO",
    company: "Innovation Labs",
    image: "👨‍💼",
    quote:
      "Outstanding developer with an eye for design. Milad created an immersive experience that perfectly captured our brand vision. Highly recommended!",
  },
];

function Testimonials() {
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section id="testimonils" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* 🌟 Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col gap-5 p-3 mb-10">
          <h2 className="text-5xl w-full font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        {/* Swiper */}
        {swiperReady && (
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            onInit={(swiper) => {
              swiper.params.pagination.el = ".custom-pagination";
              swiper.pagination.init();
              swiper.pagination.update();
            }}
            className="overflow-hidden"
          >
            {testimonials.map(({ id, name, company, image, quote, title }) => (
              <SwiperSlide key={id}>
                <div className="glass  p-4 sm:p-8 md:p-12 rounded-2xl bg-linear-to-br from-[#18183bbe] to-[#241238] border-white/20 sm:rounded-3xl text-center max-w-full sm:max-w-4xl mx-auto transition-all duration-500">
                  {/* Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 shadow-[0_0_35px_10px_rgba(59,130,246,0.5)] border bg-linear-to-br from-[#18183bbe] to-[#241238] border-white/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transform transition duration-500 hover:scale-105 rounded-full flex items-center justify-center text-2xl sm:text-3xl">
                    {image}
                  </div>

                  {/* Quote */}
                  <div className="text-sm text-white sm:text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 sm:mb-8 font-light italic">
                    {quote}
                  </div>

                  {/* Info */}
                  <div>
                    <h4 className="text-lg bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent font-semibold mb-2 drop-shadow">
                      {name}
                    </h4>
                    <p className="text-xs text-gray-300 sm:text-sm text-accent/80">
                      {title} at {company}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* ✅ Pagination only */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <div className="custom-pagination flex justify-center  gap-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
