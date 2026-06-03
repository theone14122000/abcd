"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "👥",
    title: "Permanent Placement",
    desc: "Finding long-term leaders who align with your corporate culture and future vision.",
    bg: "linear-gradient(135deg, #e0f7f5, #c8f5f1)",
    border: "rgba(46,196,182,0.25)",
    accent: "#1a9e92",
    href: "/services#permanent-placement",
  },
  {
    icon: "⚡",
    title: "Contract Staffing",
    desc: "Agile solutions for seasonal surges or project-based specialised talent needs.",
    bg: "linear-gradient(135deg, #fefce8, #fef9c3)",
    border: "rgba(245,230,66,0.4)",
    accent: "#8a7a00",
    href: "/services#staffing",
  },
  {
    icon: "🔍",
    title: "Executive Search",
    desc: "Headhunting for C-suite and high-level leadership positions with true discretion.",
    bg: "linear-gradient(135deg, #e0f7f5, #c8f5f1)",
    border: "rgba(46,196,182,0.25)",
    accent: "#1a9e92",
    href: "/services#executive-search",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        padding: "clamp(60px, 10vw, 100px) 0",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(194, 241, 194, 0.51) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 64px)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 7vw, 64px)",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              fontSize: "clamp(0.65rem, 2vw, 0.72rem)",
              letterSpacing: "0.14em",
              color: "#4a7c59",
              fontWeight: 700,
              marginBottom: 12,
              textTransform: "uppercase",
            }}
          >
            What We Do
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #12db12 0%, #08a71e 45%, #076b03 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              marginBottom: "clamp(12px, 3vw, 16px)",
            }}
          >
            Comprehensive Staffing Solutions
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#6b9e97",
              fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
              maxWidth: "clamp(280px, 80vw, 540px)",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Tailored recruitment strategies designed to scale your business and
            empower your workforce.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="lift"
              style={{
                background: service.bg,
                border: `1.5px solid ${service.border}`,
                borderRadius: 24,
                padding: "clamp(28px, 5vw, 40px) clamp(24px, 5vw, 34px)",
                position: "relative",
                overflow: "hidden",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(44px)",
                transition: `opacity 0.7s ease ${
                  0.1 + index * 0.15
                }s, transform 0.7s ease ${0.1 + index * 0.15}s`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.45)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  marginBottom: "clamp(16px, 3vw, 22px)",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "clamp(1rem, 3vw, 1.15rem)",
                  fontWeight: 700,
                  color: "#0d2b28",
                  marginBottom: "clamp(10px, 2vw, 14px)",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#2d5c55",
                  fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)",
                  lineHeight: 1.78,
                  marginBottom: "clamp(20px, 4vw, 28px)",
                }}
              >
                {service.desc}
              </p>

              <a
                href={service.href}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                  fontWeight: 700,
                  color: service.accent,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = "12px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = "6px";
                }}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(20px, 4vw, 28px);
        }

        @media (min-width: 700px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .lift:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(46,196,182,0.15) !important;
        }
      `}</style>
    </section>
  );
}
