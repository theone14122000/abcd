"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { num: "01", title: "Consultation", desc: "We understand your talent goals, culture, and the specific competencies needed for long-term success.", icon: "💬" },
  { num: "02", title: "Sourcing", desc: "Multi-channel search combining our extensive network, AI technology, and deep market knowledge.", icon: "🔎" },
  { num: "03", title: "Shortlisting", desc: "Rigorous screening and assessment to present only the most qualified, culture-fit candidates.", icon: "✅" },
  { num: "04", title: "Onboarding", desc: "Smooth transition support ensuring your new hire integrates and succeeds from day one.", icon: "🚀" },
];

export default function Process() {
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
    <section ref={ref} style={{ width: "100%", padding: "clamp(60px, 10vw, 96px) clamp(20px, 4vw, 40px)", background:"radial-gradient(circle at 10% 20%, rgba(152,251,152,0.35) 0%, transparent 32%), radial-gradient(circle at 90% 10%, rgba(245,230,66,0.24) 0%, transparent 30%), linear-gradient(180deg, #f8fffe 0%, #dfffdc 100%)", }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 7vw, 64px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease",
          }}
        >
          <p style={{ fontSize: "clamp(0.6rem, 2vw, 0.72rem)", letterSpacing: "0.14em", color: "#4a7c59", fontWeight: 700, marginBottom: 12, textTransform: "uppercase" }}>
            How It Works
          </p>
          <h2 style={{ fontSize: "clamp(1.4rem, 4.5vw, 2.1rem)", fontWeight: 800, background:"linear-gradient(135deg, #0786ad 0%, #1287e7 45%, #046583 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent", marginBottom: 14 }}>
            Our Proven Recruitment Process
          </h2>
          <p style={{ color: "#6b7280", fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)", lineHeight: 1.8, maxWidth: "clamp(260px, 80vw, 500px)", margin: "0 auto" }}>
            A streamlined, transparent methodology that ensures the perfect match every single time.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 45vw, 260px), 1fr))", gap: "clamp(24px, 5vw, 32px)", position: "relative" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                textAlign: "center",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.15}s, transform 0.7s ease ${0.1 + i * 0.15}s`,
              }}
            >
              {/* Circle */}
              <div
                style={{
                  width: "clamp(56px, 12vw, 72px)",
                  height: "clamp(56px, 12vw, 72px)",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4a7c59, #2d5a3d)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto clamp(16px, 3vw, 28px)",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 8px 24px rgba(74,124,89,0.35)",
                }}
              >
                <span style={{ fontSize: "clamp(0.5rem, 1.5vw, 0.65rem)", color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: "0.05em" }}>{step.num}</span>
                <span style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", lineHeight: 1 }}>{step.icon}</span>
              </div>

              {/* Card */}
              <div
                className="card-hover"
                style={{
                  background: "#f9f9f6",
                  border: "1px solid #ebebE3",
                  borderRadius: 18,
                  padding: "clamp(16px, 3vw, 24px)",
                }}
              >
                <h3 style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "clamp(0.7rem, 2vw, 0.84rem)", lineHeight: 1.65 }}>{step.desc}</p>
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
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
        }
      `}</style>
    </section>
  );
}
