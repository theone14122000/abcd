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
    <section ref={ref} style={{ width: "100%", padding: "clamp(60px, 10vw, 96px) clamp(20px, 4vw, 40px)", background: "#f5f5ef" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(36px, 6vw, 56px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.7s ease",
          }}
        >
          <p style={{ fontSize: "clamp(0.6rem, 2vw, 0.72rem)", letterSpacing: "0.14em", color: "#4a7c59", fontWeight: 700, marginBottom: 12, textTransform: "uppercase" }}>
            Testimonials
          </p>
          <h2 style={{ fontSize: "clamp(1.4rem, 4.5vw, 2.1rem)", fontWeight: 800, background:"linear-gradient(135deg, #7f71fa 0%, #143df5 45%, #0a1aa7 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent", }}>What Our Partners Say</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(260px, 80vw, 340px), 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                background: "#fff",
                border: "1px solid #ebebE3",
                borderRadius: 22,
                padding: "clamp(20px, 4vw, 32px) clamp(20px, 4vw, 28px)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(12px, 2vw, 18px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.15}s, transform 0.7s ease ${0.1 + i * 0.15}s`,
              }}
            >
              {/* Quote mark */}
              <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#d4e8d0", lineHeight: 1, fontFamily: "Georgia, serif", marginBottom: -8 }}>&ldquo;</div>

              <div style={{ color: "#f59e0b", fontSize: "clamp(0.8rem, 2vw, 0.95rem)", letterSpacing: 3 }}>{""}{"★".repeat(t.stars)}</div>

              <p style={{ color: "#374151", fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)", lineHeight: 1.8, flex: 1 }}>
                {t.quote}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 12px)", paddingTop: "clamp(12px, 2vw, 16px)", borderTop: "1px solid #f0f0ea" }}>
                <div
                  style={{
                    width: "clamp(38px, 8vw, 44px)",
                    height: "clamp(38px, 8vw, 44px)",
                    borderRadius: "50%",
                    background: t.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                    fontWeight: 800,
                    color: "#4a7c59",
                    flexShrink: 0,
                    border: "2px solid rgba(74,124,89,0.15)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "clamp(0.8rem, 2vw, 0.9rem)", color: "#1a1a1a" }}>{t.name}</div>
                  <div style={{ fontSize: "clamp(0.65rem, 1.8vw, 0.78rem)", color: "#9ca3af" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.08);
        }
      `}</style>
    </section>
  );
}
