"use client";

import { useEffect, useRef, useState } from "react";

const industries = [
  { label: "IT & Technologies", image: "/industries/it.webp", icon: "💻", color: "#2ec4b6", sub: "Software · Cloud · AI" },
  { label: "BPO", image: "/industries/bpo.webp", icon: "📞", color: "#e7ad3c", sub: "Support · Operations · CX" },
  { label: "Finance", image: "/industries/banking.jpeg", icon: "🏦", color: "#0e7a70", sub: "Banking · Fintech · Risk" },
  { label: "Sales", image: "/industries/marketing.png", icon: "📈", color: "#f5e642", sub: "Marketing · Growth · Brand" },
  { label: "Health", image: "/industries/healthcare.jpeg", icon: "🏥", color: "#ef4444", sub: "Clinical · Pharma · Admin" },
  { label: "Manufacturing", image: "/industries/manufacturing.jpeg", icon: "🏭", color: "#3b82f6", sub: "Engineering · Ops · QA" },
];

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        padding: "100px 0 120px",
        background:
          "radial-gradient(circle at 10% 20%, rgba(46,196,182,0.12) 0%, transparent 40%), " +
          "radial-gradient(circle at 90% 80%, rgba(245,230,66,0.15) 0%, transparent 40%), " +
          "linear-gradient(180deg, #eaffea 0%, #f8fffe 60%, #fffde8 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient background blobs */}
      <div style={{ position: "absolute", top: "5%", left: "3%", width: 280, height: 280, borderRadius: "50%", background: "rgba(46,196,182,0.08)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "8%", right: "4%", width: 240, height: 240, borderRadius: "50%", background: "rgba(245,230,66,0.12)", filter: "blur(70px)", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 72,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 18px",
              background: "rgba(46,196,182,0.12)",
              border: "1px solid rgba(46,196,182,0.25)",
              borderRadius: 50,
              fontSize: "0.72rem",
              fontWeight: 800,
              color: "#0e7a70",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Our Specialized Sectors
          </span>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              marginBottom: 14,
              background: "linear-gradient(135deg, #0d2b28 0%, #0e7a70 50%, #2ec4b6 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Industries We Power
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#6b9e97",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto 20px",
            }}
          >
            Deep domain expertise across sectors that shape the future of work.
          </p>

          <div
            style={{
              width: 56,
              height: 4,
              background: "linear-gradient(90deg, #2ec4b6, #f5e642)",
              margin: "0 auto",
              borderRadius: 4,
            }}
          />
        </div>

        {/* Circle Cards Grid — 3 per row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(28px, 4vw, 52px)",
            justifyItems: "center",
          }}
          className="industries-grid"
        >
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              className="circle-card-wrap"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${0.08 + i * 0.1}s`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
                cursor: "pointer",
              }}
            >
              {/* Circle */}
              <div
                className="circle-card"
                style={{
                  width: "clamp(160px, 22vw, 220px)",
                  height: "clamp(160px, 22vw, 220px)",
                  borderRadius: "50%",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: `0 12px 40px ${ind.color}44, 0 4px 16px rgba(13,43,40,0.12)`,
                  border: `3px solid ${ind.color}55`,
                  transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  flexShrink: 0,
                }}
              >
                {/* Image */}
                <div
                  className="circle-bg"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${ind.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                />

                {/* Base Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(13,43,40,0.1) 0%, rgba(13,43,40,0.55) 100%)",
                    transition: "opacity 0.5s ease",
                  }}
                  className="base-overlay"
                />

                {/* Hover Color Overlay */}
                <div
                  className="color-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `${ind.color}99`,
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                  }}
                />

                {/* Shimmer sweep */}
                <div
                  className="circle-shimmer"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-120%",
                    width: "60%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                    transform: "skewX(-20deg)",
                    transition: "left 0.8s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* Icon in center */}
                <div
                  className="circle-icon"
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                    transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    transform: "scale(1)",
                  }}
                >
                  {ind.icon}
                </div>
              </div>

              {/* Label Below Circle */}
              <div
                style={{ textAlign: "center" }}
                className="circle-label"
              >
                <h3
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    fontWeight: 700,
                    color: "#0d2b28",
                    margin: "0 0 5px",
                    transition: "color 0.3s ease",
                  }}
                  className="circle-title"
                >
                  {ind.label}
                </h3>

                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#6b9e97",
                    margin: "0 0 10px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {ind.sub}
                </p>

                <a
                  href={`/jobs/${ind.label.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                  className="explore-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: ind.color,
                    textDecoration: "none",
                    opacity: 0,
                    transform: "translateY(6px)",
                    transition: "all 0.4s ease",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: 72,
            opacity: vis ? 1 : 0,
            transition: "opacity 0.8s ease 0.8s",
          }}
        >
          <a
            href="/industries"
            className="industries-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "15px 32px",
              background: "linear-gradient(135deg, #0e7a70, #0d2b28)",
              color: "#fff",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.92rem",
              boxShadow: "0 12px 30px rgba(13,43,40,0.2)",
              transition: "all 0.35s ease",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 18px 40px rgba(46,196,182,0.3)";
              e.currentTarget.style.background = "linear-gradient(135deg, #2ec4b6, #0e7a70)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(13,43,40,0.2)";
              e.currentTarget.style.background = "linear-gradient(135deg, #0e7a70, #0d2b28)";
            }}
          >
            View All Industries
            <span style={{ fontSize: "1.1rem" }}>→</span>
          </a>
        </div>
      </div>

      <style>{`
        /* ─── Circle Card Hover ─────────────────────────── */
        .circle-card-wrap:hover .circle-card {
          transform: translateY(-14px) scale(1.07);
          box-shadow: 0 28px 60px var(--card-glow, rgba(46,196,182,0.4)),
                      0 8px 20px rgba(13,43,40,0.2) !important;
          border-color: currentColor !important;
        }

        .circle-card-wrap:hover .circle-bg {
          transform: scale(1.12);
        }

        .circle-card-wrap:hover .color-overlay {
          opacity: 1 !important;
        }

        .circle-card-wrap:hover .base-overlay {
          opacity: 0.3 !important;
        }

        .circle-card-wrap:hover .circle-shimmer {
          left: 180% !important;
        }

        .circle-card-wrap:hover .circle-icon {
          transform: scale(1.25) !important;
          filter: drop-shadow(0 4px 16px rgba(255,255,255,0.6)) !important;
        }

        .circle-card-wrap:hover .circle-title {
          color: #0e7a70 !important;
        }

        .circle-card-wrap:hover .explore-link {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* ─── Responsive ────────────────────────────────── */
        @media (max-width: 768px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 480px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}