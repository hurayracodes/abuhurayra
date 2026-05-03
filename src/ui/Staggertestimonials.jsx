"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  { tempId: 0, testimonial: "My favorite solution in the market. We work 5x faster with COMPANY.", by: "Alex, CEO at TechCorp", imgSrc: "https://i.pravatar.cc/150?img=1" },
  { tempId: 1, testimonial: "I'm confident my data is safe with COMPANY. I can't say that about other providers.", by: "Dan, CTO at SecureNet", imgSrc: "https://i.pravatar.cc/150?img=2" },
  { tempId: 2, testimonial: "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!", by: "Stephanie, COO at InnovateCo", imgSrc: "https://i.pravatar.cc/150?img=3" },
  { tempId: 3, testimonial: "COMPANY's products make planning for the future seamless. Can't recommend them enough!", by: "Marie, CFO at FuturePlanning", imgSrc: "https://i.pravatar.cc/150?img=4" },
  { tempId: 4, testimonial: "If I could give 11 stars, I'd give 12.", by: "Andre, Head of Design at CreativeSolutions", imgSrc: "https://i.pravatar.cc/150?img=5" },
  { tempId: 5, testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.", by: "Jeremy, Product Manager at TimeWise", imgSrc: "https://i.pravatar.cc/150?img=6" },
  { tempId: 6, testimonial: "Took some convincing, but now that we're on COMPANY, we're never going back.", by: "Pam, Marketing Director at BrandBuilders", imgSrc: "https://i.pravatar.cc/150?img=7" },
  { tempId: 7, testimonial: "I would be lost without COMPANY's in-depth analytics. The ROI is EASILY 100X for us.", by: "Daniel, Data Scientist at AnalyticsPro", imgSrc: "https://i.pravatar.cc/150?img=8" },
  { tempId: 8, testimonial: "It's just the best. Period.", by: "Fernando, UX Designer at UserFirst", imgSrc: "https://i.pravatar.cc/150?img=9" },
  { tempId: 9, testimonial: "I switched 5 years ago and never looked back.", by: "Andy, DevOps Engineer at CloudMasters", imgSrc: "https://i.pravatar.cc/150?img=10" },
  { tempId: 10, testimonial: "I've been searching for a solution like COMPANY for YEARS. So glad I finally found one!", by: "Pete, Sales Director at RevenueRockets", imgSrc: "https://i.pravatar.cc/150?img=11" },
  { tempId: 11, testimonial: "It's so simple and intuitive, we got the team up to speed in 10 minutes.", by: "Marina, HR Manager at TalentForge", imgSrc: "https://i.pravatar.cc/150?img=12" },
  { tempId: 12, testimonial: "COMPANY's customer support is unparalleled. They're always there when we need them.", by: "Olivia, Customer Success Manager at ClientCare", imgSrc: "https://i.pravatar.cc/150?img=13" },
  { tempId: 13, testimonial: "The efficiency gains we've seen since implementing COMPANY are off the charts!", by: "Raj, Operations Manager at StreamlineSolutions", imgSrc: "https://i.pravatar.cc/150?img=14" },
  { tempId: 14, testimonial: "COMPANY has revolutionized how we handle our workflow. It's a game-changer!", by: "Lila, Workflow Specialist at ProcessPro", imgSrc: "https://i.pravatar.cc/150?img=15" },
  { tempId: 15, testimonial: "The scalability of COMPANY's solution is impressive. It grows with our business seamlessly.", by: "Trevor, Scaling Officer at GrowthGurus", imgSrc: "https://i.pravatar.cc/150?img=16" },
  { tempId: 16, testimonial: "I appreciate how COMPANY continually innovates. They're always one step ahead.", by: "Naomi, Innovation Lead at FutureTech", imgSrc: "https://i.pravatar.cc/150?img=17" },
  { tempId: 17, testimonial: "The ROI we've seen with COMPANY is incredible. It's paid for itself many times over.", by: "Victor, Finance Analyst at ProfitPeak", imgSrc: "https://i.pravatar.cc/150?img=18" },
  { tempId: 18, testimonial: "COMPANY's platform is so robust, yet easy to use. It's the perfect balance.", by: "Yuki, Tech Lead at BalancedTech", imgSrc: "https://i.pravatar.cc/150?img=19" },
  { tempId: 19, testimonial: "We've tried many solutions, but COMPANY stands out in terms of reliability and performance.", by: "Zoe, Performance Manager at ReliableSystems", imgSrc: "https://i.pravatar.cc/150?img=20" }
];

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => handleMove(position)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        cursor: "pointer",
        padding: "32px",
        width: cardSize,
        height: cardSize,
        transition: "all 0.5s ease-in-out",
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        zIndex: isCenter ? 10 : 0,
        backgroundColor: isCenter ? "#ffffff" : "#1c1c1c",
        border: `2px solid ${isCenter ? "#ffffff" : hovered ? "#555555" : "#2a2a2a"}`,
        boxShadow: isCenter ? "0px 8px 0px 4px #3a3a3a" : "none",
      }}
    >
      {/* Diagonal corner cut line */}
      <span
        style={{
          position: "absolute",
          display: "block",
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
          backgroundColor: isCenter ? "#bbbbbb" : "#2a2a2a",
          transformOrigin: "top right",
          transform: "rotate(45deg)",
        }}
      />

      {/* Avatar image */}
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(',')[0]}
        style={{
          display: "block",
          marginBottom: "16px",
          height: "56px",
          width: "48px",
          objectFit: "cover",
          objectPosition: "top",
          backgroundColor: "#333",
          boxShadow: isCenter ? "3px 3px 0px #dddddd" : "3px 3px 0px #0a0a0a",
        }}
      />

      {/* Quote text */}
      <h3
        style={{
          fontSize: cardSize < 320 ? "14px" : "17px",
          fontWeight: 500,
          color: isCenter ? "#111111" : "#e0e0e0",
          margin: 0,
          lineHeight: 1.55,
        }}
      >
        "{testimonial.testimonial}"
      </h3>

      {/* Author name */}
      <p
        style={{
          position: "absolute",
          bottom: "32px",
          left: "32px",
          right: "32px",
          margin: 0,
          fontSize: "13px",
          fontStyle: "italic",
          color: isCenter ? "#555555" : "#777777",
        }}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const [btnHover, setBtnHover] = useState(null);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const btnStyle = (side) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "56px",
    width: "56px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: btnHover === side ? "#ffffff" : "#1c1c1c",
    color: btnHover === side ? "#111111" : "#e0e0e0",
    border: `2px solid ${btnHover === side ? "#ffffff" : "#2a2a2a"}`,
    outline: "none",
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: 600,
      }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      {/* Navigation */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        <button
          onClick={() => handleMove(-1)}
          onMouseEnter={() => setBtnHover("left")}
          onMouseLeave={() => setBtnHover(null)}
          style={btnStyle("left")}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleMove(1)}
          onMouseEnter={() => setBtnHover("right")}
          onMouseLeave={() => setBtnHover(null)}
          style={btnStyle("right")}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};