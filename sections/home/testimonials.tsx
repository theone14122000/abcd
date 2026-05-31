"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    stars: 5,
    quote: "E Choices found us a CTO within 3 weeks when other agencies failed for months. Their understanding of our culture is truly exceptional.",
    name: "Jessica Wilson",
    role: "CEO, TechStart Corp",
    initials: "JW",
    avatarBg: "#d4e8d0",
  },
  {
    stars: 5,
    quote: "The level of personalization they offer is incredible. They don't just send resumes — they understand the future leaders your company needs.",
    name: "Diana Rodriguez",
    role: "HR Director, HealthCare Corp",
    initials: "DR",
    avatarBg: "#e8e4d0",
  },
  {
    stars: 5,
    quote: "No hesitation. They perfectly matched our career aspirations and work-life values. I recommend E Choices to every executive I know.",
    name: "David King",
    role: "Director, Cloud Development",
    initials: "DK",
    avatarBg: "#d0dce8",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ width: "100%", padding: "96px 40px", background: "#f5f5ef" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: 56,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.7s ease",
          }}
        >
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.14em", color: "#4a7c59", fontWeight: 700, marginBottom: 12, textTransform: "uppercase" }}>
            Testimonials
          </p>
          <h2 style={{ fontSize: "2.1rem", fontWeight: 800, background:"linear-gradient(135deg, #7f71fa 0%, #143df5 45%, #0a1aa7 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent", }}>What Our Partners Say</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: "#fff",
                border: "1px solid #ebebE3",
                borderRadius: 22,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.15}s, transform 0.7s ease ${0.1 + i * 0.15}s`,
              }}
            >
              {/* Quote mark */}
              <div style={{ fontSize: "3rem", color: "#d4e8d0", lineHeight: 1, fontFamily: "Georgia, serif", marginBottom: -8 }}>&ldquo;</div>

              <div style={{ color: "#f59e0b", fontSize: "0.95rem", letterSpacing: 3 }}>{"★".repeat(t.stars)}</div>

              <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.8, flex: 1 }}>
                {t.quote}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid #f0f0ea" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: t.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: "#4a7c59",
                    flexShrink: 0,
                    border: "2px solid rgba(74,124,89,0.15)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a" }}>{t.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "#9ca3af" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
