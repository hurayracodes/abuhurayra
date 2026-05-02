import { Code, Instagram, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    icon: Code,
    href: "https://github.com/hurayracodes/abuhurayra",
    label: "CODE",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/hurayracodes/",
    label: "INSTAGRAM",
  },
  {
    icon: Github,
    href: "https://github.com/hurayracodes",
    label: "GITHUB",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/hurayracodes/",
    label: "LINKEDIN",
  },
];

export default function HeroSection() {
  return (
    <section
      style={{
        // background: "#0a0a0a",
        minHeight: "100vh",
        padding: "32px 48px 48px",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: "15px",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "20px" }}>👋</span>
          <span>Hey! It's me Abu Hurayra,</span>
        </div>
      </div>

      {/* Main Headline */}
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <h1
          style={{
            fontSize: "clamp(42px, 7.5vw, 88px)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#ffffff",
            letterSpacing: "-3px",
            margin: 0,
          }}
        >
          Crafting{" "}
          <span style={{ color: "#8aff4c" }}>purpose driven</span>
          <br />
          <span style={{ color: "#8aff4c" }}>experiences</span> that inspire
          <br />
          &amp; engage.
        </h1>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "32px",
        }}
      >
        {/* Left: Divider + Social Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              width: "420px",
              height: "1px",
              background: "#2a2a2a",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#666",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8aff4c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
              >
                {label}
                <span
                  style={{
                    display: "inline-block",
                    transform: "rotate(-45deg)",
                    fontSize: "13px",
                    lineHeight: 1,
                  }}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Tagline + CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "20px",
          }}
        >
          <p
            style={{
              color: "#777",
              fontSize: "14px",
              lineHeight: 1.7,
              maxWidth: "360px",
              textAlign: "right",
              margin: 0,
            }}
          >
            I work with brands globally to build pixel-perfect, engaging, and
            accessible digital experiences using the MERN stack — driving
            results and achieving business goals.
          </p>
          <a
            href="#about"
            style={{
              background: "transparent",
              border: "1.5px solid #444",
              color: "#fff",
              padding: "13px 30px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
              textDecoration: "none",
              display: "inline-block",
              transition: "border-color 0.2s, color 0.2s",
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
            Know me better
          </a>
        </div>
      </div>
    </section>
  );
}