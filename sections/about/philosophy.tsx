"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  {
    icon: "🧠",
    title: "Behavioral Alignment",
    desc: "We assess soft skills and cognitive agility, not just technical checkboxes.",
  },
  {
    icon: "⚖️",
    title: "Inclusion by Design",
    desc: "Our sourcing protocols are built to eliminate bias and foster diverse workplaces.",
  },
  {
    icon: "📈",
    title: "Long-term Trajectory",
    desc: "We look 3 years ahead to ensure the placement serves the candidate's life goals.",
  },
];

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      ref={ref}
      style={{
        width: "100%",
        background: "#fefce8",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "72px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        {/* LEFT — text */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-52px)",
            transition: "all 0.85s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 20px",
              background: "rgba(46,196,182,0.1)",
              border: "1px solid rgba(46,196,182,0.22)",
              borderRadius: 50,
              marginBottom: 24,
            }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", color: "#1a9e92", textTransform: "uppercase" }}>
              Our Approach
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.5rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, hsl(120, 90%, 42%) 0%, #0cc228 45%, #066b03 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.15,
              marginBottom: 32,
            }}
          >
            Our Philosophy:
            <br />
            <span
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontStyle: "italic",
                background: "linear-gradient(135deg, hsl(184, 94%, 35%) 0%, #067aa8 45%, #054c8f 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Holistic Match
            </span>
          </h2>

          {/* Bullet points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {points.map((pt, i) => (
              <div
                key={pt.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateX(0)" : "translateX(-28px)",
                  transition: `all 0.65s ease ${0.25 + i * 0.13}s`,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(46,196,182,0.12)",
                    border: "1.5px solid rgba(46,196,182,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  {pt.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#0d2b28",
                      marginBottom: 5,
                    }}
                  >
                    {pt.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#6b9e97",
                      fontSize: "0.88rem",
                      lineHeight: 1.72,
                    }}
                  >
                    {pt.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(52px)",
            transition: "all 0.85s cubic-bezier(0.22,1,0.36,1) 0.15s",
          }}
        >
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "4/3",
              background: "linear-gradient(135deg, #1a4a42, #0d2b28)",
              boxShadow: "0 28px 72px rgba(13,43,40,0.25)",
              position: "relative",
            }}
          >
            <img
              src="/images/about/philosophy.jpg"
              alt="Philosophy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            {/* Subtle overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,43,40,0.35) 0%, transparent 60%)" }} />
            {/* Yellow accent corner */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, background: "linear-gradient(90deg, #f5e642, transparent)" }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #philosophy > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          #philosophy {
            padding: 0 16px !important;
          }
          #philosophy > div {
            padding: 48px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
