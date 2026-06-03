"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    num: "01",
    title: "Global Network",
    desc: "Access to passive talent across 6 continents.",
  },
  {
    num: "02",
    title: "Deep Intel",
    desc: "Proprietary leadership competency mapping.",
  },
  {
    num: "03",
    title: "Success Fee",
    desc: "Performance-based models aligned with goals.",
  },
];

export default function ExecutiveSearch() {
  const ref = useRef<HTMLElement | null>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="executive-search"
      ref={ref}
      style={{
        width: "100%",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.55) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
        padding: "72px 24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto" }}>
        {/* Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            border: "1.5px solid rgba(46,196,182,0.18)",
            borderRadius: 28,
            padding: "48px 36px",
            boxShadow: "0 24px 80px rgba(46,196,182,0.1)",
            position: "relative",
            overflow: "hidden",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(48px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* bg decoration */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "rgba(46,196,182,0.05)",
              pointerEvents: "none",
            }}
          />

          {/* Star / medal decoration top right */}
          <div
            style={{
              position: "absolute",
              top: 30,
              right: 40,
              fontSize: "4rem",
              opacity: 0.08,
              pointerEvents: "none",
              transform: "rotate(-10deg)",
            }}
          >
            🏅
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            {/* LEFT */}
            <div>
              {/* elite badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 14px",
                  background: "rgba(46,196,182,0.1)",
                  border: "1px solid rgba(46,196,182,0.2)",
                  borderRadius: 50,
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>🌐</span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "#1a9e92",
                    textTransform: "uppercase",
                  }}
                >
                  Elite Service
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "clamp(1.8rem, 2.4vw, 2.4rem)",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #3ef13e 0%, #27bd3b 45%, #15ac10 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 14,
                  lineHeight: 1.15,
                }}
              >
                Executive{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #0ec0ec 0%, #0ab5cc 45%, #0f7de4 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Search
                </span>
              </h2>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#6b9e97",
                  fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)",
                  lineHeight: 1.82,
                  marginBottom: 32,
                }}
              >
                Discreet, thorough, and highly personalized. We specialize in
                identifying transformative leadership talent for C-suite and
                senior-level roles across diverse global industries.
              </p>

              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  padding: "13px 28px",
                  background: "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  borderRadius: 50,
                  boxShadow: "0 8px 24px rgba(46,196,182,0.35)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 32px rgba(46,196,182,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(46,196,182,0.35)";
                }}
              >
                Inquire for Details →
              </a>
            </div>

            {/* RIGHT — 3 pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {pillars.map((p, i) => (
                <div
                  key={p.num}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateX(0)" : "translateX(24px)",
                    transition: `all 0.65s ease ${0.3 + i * 0.13}s`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#2ec4b6",
                      letterSpacing: "0.06em",
                      minWidth: 24,
                      paddingTop: 4,
                    }}
                  >
                    {p.num}
                  </div>

                  <div style={{ flex: 1, borderTop: "1px solid rgba(46,196,182,0.15)", paddingTop: 12 }}>
                    <div
                      style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(0.95rem, 1vw, 1rem)",
                        color: "#0d2b28",
                        marginBottom: 4,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(0.8rem, 0.85vw, 0.85rem)",
                        color: "#6b9e97",
                        lineHeight: 1.65,
                      }}
                    >
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #executive-search > div > div > div {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 640px) {
          #executive-search {
            padding: 56px 16px !important;
          }
          #executive-search > div > div {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
