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
        padding: "100px 0",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(194, 241, 194, 0.51) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 64,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            What We Do
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "2.4rem",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #12db12 0%, #08a71e 45%, #076b03 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              marginBottom: 16,
            }}
          >
            Comprehensive Staffing Solutions
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#6b9e97",
              fontSize: "1rem",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Tailored recruitment strategies designed to scale your business and
            empower your workforce.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="lift"
              style={{
                background: service.bg,
                border: `1.5px solid ${service.border}`,
                borderRadius: 24,
                padding: "40px 34px",
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

              <div style={{ fontSize: "2rem", marginBottom: 22 }}>
                {service.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#0d2b28",
                  marginBottom: 14,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#2d5c55",
                  fontSize: "0.9rem",
                  lineHeight: 1.78,
                  marginBottom: 28,
                }}
              >
                {service.desc}
              </p>

              <a
                href={service.href}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.875rem",
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
    </section>
  );
}
