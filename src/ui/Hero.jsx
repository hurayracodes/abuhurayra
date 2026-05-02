import { Code, Instagram, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Code, href: "https://github.com/hurayracodes/abuhurayra", label: "CODE" },
  { icon: Instagram, href: "https://instagram.com/hurayracodes/", label: "INSTAGRAM" },
  { icon: Github, href: "https://github.com/hurayracodes", label: "GITHUB" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hurayracodes/", label: "LINKEDIN" },
];

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: isMobile ? "100px 24px 40px" : "120px 60px 60px", // Top padding aur badha di hai safety ke liye
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Top Bar */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "#eee", fontSize: isMobile ? "14px" : "15px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "20px" }}>👋</span>
          <span>Hey! It's me Abu Hurayra,</span>
        </div>
      </div>

      {/* Main Headline - Short & Balanced */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", margin: "40px 0" }}>
        <h1
          style={{
            fontSize: isMobile ? "36px" : "clamp(42px, 6vw, 72px)", // Font size ko thoda chota kiya hai
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Building <span style={{ color: "#8aff4c" }}>impactful</span> 
          <br /> 
          digital <span style={{ color: "#8aff4c" }}>solutions</span> 
          <br />
          that matter.
        </h1>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          alignItems: isMobile ? "flex-start" : "flex-end",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* Left: Social Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: isMobile ? "100%" : "auto" }}>
          <div style={{ width: isMobile ? "100%" : "300px", height: "1px", background: "#333" }} />
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#666",
                  textDecoration: "none",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8aff4c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right: Text & CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "flex-end", gap: "20px" }}>
          <p
            style={{
              color: "#888",
              fontSize: "14px",
              lineHeight: 1.6,
              maxWidth: "350px",
              textAlign: isMobile ? "left" : "right",
              margin: 0,
            }}
          >
            I build high-performance web apps using the MERN stack, focusing on clean code and great user experiences.
          </p>
          <a
            href="#about"
            style={{
              background: "transparent",
              border: "1px solid #444",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#8aff4c";
              e.currentTarget.style.color = "#8aff4c";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#444";
              e.currentTarget.style.color = "#fff";
            }}
          >
            About me
          </a>
        </div>
      </div>
    </section>
  );
}