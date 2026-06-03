"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: "✓",
    title: "Integrity",
    desc: "Acting with absolute transparency, keeping both client and candidate interests at the fore of every decision we make.",
  },
  {
    icon: "★",
    title: "Excellence",
    desc: "Striving for perfection in candidate selection, ensuring every recommendation reflects the very best we can provide.",
  },
  {
    icon: "♡",
    title: "People First",
    desc: "Placing the human element at the center, recognising that culture behind the job is just as crucial as the role itself.",
  },
  {
    icon: "◎",
    title: "Partnership",
    desc: "Cultivating deep, long-standing relationships that keep all stakeholders as true partners in each other's success.",
  },
  {
    icon: "◈",
    title: "Innovation",
    desc: "Leveraging data-driven tools and forward thinking, high-touch approach to build exceptional teams.",
  },
];

export default function Values() {
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
      id="values"
      ref={ref}
      style={{
        width: "100%",
        background:
          "radial-gradient(circle at 50% 0%, rgba(152,251,152,0.32) 0%, transparent 34%), linear-gradient(180deg, #fffde8 0%, #f2fff2 52%, #f8fffe 100%)",
        padding: "72px 24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 56,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, hsl(120, 84%, 52%) 0%, #06a51e 45%, #025728 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              marginBottom: 14,
            }}
          >
            The Pillars of E Choices
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#6b9e97",
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              lineHeight: 1.75,
              maxWidth: 440,
              margin: "0 auto",
              padding: "0 12px",
            }}
          >
            Our values aren't just words on a wall; they are the filters through which we make every decision.
          </p>
        </div>

        {/* 5-column cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 20,
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.title}
              style={{
                background: i % 2 === 0 ? "linear-gradient(145deg, #f0fdf9, #e8fffe)" : "#fff",
                border: "1.5px solid rgba(46,196,182,0.15)",
                borderRadius: 20,
                padding: "28px 18px",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(46,196,182,0.07)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${0.08 + i * 0.12}s, transform 0.7s ease ${0.08 + i * 0.12}s`,
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: i % 2 === 0
                    ? "linear-gradient(135deg, #e0f7f5, #a8e6e1)"
                    : "linear-gradient(135deg, #fefce8, #fef9c3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  color: "#2ec4b6",
                  margin: "0 auto 20px",
                  border: i % 2 === 0
                    ? "1.5px solid rgba(46,196,182,0.25)"
                    : "1.5px solid rgba(245,230,66,0.4)",
                }}
              >
                {p.icon}
              </div>

              <h4
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                  fontWeight: 700,
                  color: "#0d2b28",
                  marginBottom: 12,
                }}
              >
                {p.title}
              </h4>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#6b9e97",
                  fontSize: "clamp(0.78rem, 0.83vw, 0.83rem)",
                  lineHeight: 1.72,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #values > div > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #values > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          #values > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #values {
            padding: 56px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
