"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    icon: "📊",
    iconBg: "rgba(5,182,29,0.1)",
    iconBorder: "rgba(5,182,29,0.2)",
    title: "Market Intelligence",
    titleGrad: "linear-gradient(135deg, #05fd05 0%, #05b61d 45%, #0b6808 100%)",
    desc: "Deep data-driven insights into industry salary benchmarks, talent availability, and emerging trends.",
  },
  {
    icon: "🧭",
    iconBg: "rgba(6,158,185,0.1)",
    iconBorder: "rgba(6,158,185,0.2)",
    title: "Cultural Mapping",
    titleGrad: "linear-gradient(135deg, #04c0b7 0%, #069eb9 45%, #0768a0 100%)",
    desc: "A bespoke screening process that ensures the \"human\" in Human Resources is never overlooked.",
  },
  {
    icon: "⚡",
    iconBg: "rgba(5,182,29,0.1)",
    iconBorder: "rgba(5,182,29,0.2)",
    title: "Agile Response",
    titleGrad: "linear-gradient(135deg, #05fd05 0%, #05b61d 45%, #0b6808 100%)",
    desc: "Rapid-turnaround talent solutions without compromising on the quality or integrity of the hire.",
  },
];

export default function VerticalExpertise() {
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
      ref={ref}
      style={{
        width: "100%",
        background:
          "radial-gradient(circle at 14% 18%, rgba(240,221,12,0.2) 0%, transparent 30%), radial-gradient(circle at 88% 72%, rgba(46,196,182,0.18) 0%, transparent 32%), linear-gradient(135deg, #f8fffe 0%, #ecfff2 48%, #fff9c9 100%)",
        padding: "96px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large faint text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "18rem",
          fontWeight: 700,
          color: "rgba(46,196,182,0.03)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          letterSpacing: "-0.04em",
        }}
      >
        EXPERTISE
      </div>

      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 64,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.75s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "2.4rem",
              fontWeight: 700,
              color: "#0d2b28",
              marginBottom: 14,
              lineHeight: 1.2,
            }}
          >
            Vertical-Specific{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #04c0b7 0%, #069eb9 45%, #0768a0 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Expertise
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#6b9e97",
              fontSize: "1rem",
              lineHeight: 1.78,
              maxWidth: 460,
              margin: "0 auto",
            }}
          >
            We don't just find employees; we find industry-native specialists who
            understand the pulse of your specific sector.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {cards.map((c, i) => (
            <div
              key={c.title}
              style={{
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(16px)",
                border: "1.5px solid rgba(46,196,182,0.15)",
                borderRadius: 22,
                padding: "40px 34px",
                boxShadow: "0 6px 32px rgba(46,196,182,0.07)",
                position: "relative",
                overflow: "hidden",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(44px)",
                transition: `opacity 0.75s ease ${0.1 + i * 0.14}s, transform 0.75s ease ${0.1 + i * 0.14}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-8px) scale(1.01)";
                el.style.boxShadow = "0 24px 60px rgba(46,196,182,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "0 6px 32px rgba(46,196,182,0.07)";
              }}
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: c.titleGrad }} />

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: c.iconBg,
                  border: `1.5px solid ${c.iconBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: 22,
                }}
              >
                {c.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                <span
                  style={{
                    background: c.titleGrad,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {c.title}
                </span>
              </h3>

              {/* Desc */}
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#6b9e97",
                  fontSize: "0.9rem",
                  lineHeight: 1.78,
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
