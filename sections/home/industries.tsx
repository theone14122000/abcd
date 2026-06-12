"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const industries = [
  {
    label: "IT & Technologies",
    image: "/industries/it.webp",
    icon: "💻",
    color: "#2ec4b6",
    sub: "Software · Cloud · AI",
    href: "/jobs/it-technologies",
  },
  {
    label: "BPO",
    image: "/industries/bpo.webp",
    icon: "🎧",
    color: "#e7ad3c",
    sub: "Support · Operations · CX",
    href: "/jobs/bpo",
  },
  {
    label: "Finance",
    image: "/industries/banking.jpeg",
    icon: "💼",
    color: "#0e7a70",
    sub: "Banking · Fintech · Risk",
    href: "/jobs/finance",
  },
  {
    label: "Sales",
    image: "/industries/marketing.png",
    icon: "📣",
    color: "#d4a017",
    sub: "Marketing · Growth · Brand",
    href: "/jobs/sale",
  },
  {
    label: "Health",
    image: "/industries/healthcare.jpeg",
    icon: "⚕️",
    color: "#ef4444",
    sub: "Clinical · Pharma · Admin",
    href: "/jobs/health",
  },
  {
    label: "Manufacturing",
    image: "/industries/manufacturing.jpeg",
    icon: "🏭",
    color: "#3b82f6",
    sub: "Engineering · Ops · QA",
    href: "/jobs/manufacturing",
  },
];

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  const router = useRouter();

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
        padding: "clamp(70px, 10vw, 100px) 0 clamp(84px, 12vw, 120px)",
        background:
          "radial-gradient(circle at 10% 20%, rgba(46,196,182,0.12) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(245,230,66,0.15) 0%, transparent 40%), linear-gradient(180deg, #eaffea 0%, #f8fffe 60%, #fffde8 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "3%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(46,196,182,0.08)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "8%",
          right: "4%",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(245,230,66,0.12)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 24px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(46px, 8vw, 72px)",
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
              background:
                "linear-gradient(135deg, #0d2b28 0%, #0e7a70 50%, #2ec4b6 100%)",
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

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              className="circle-card-wrap"
              onClick={() => router.push(ind.href)}
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateY(0) scale(1)"
                  : "translateY(40px) scale(0.92)",
                transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${
                  0.08 + i * 0.08
                }s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${
                  0.08 + i * 0.08
                }s`,
              }}
            >
              <div
                className="circle-card"
                style={{
                  width: "clamp(126px, 34vw, 210px)",
                  height: "clamp(126px, 34vw, 210px)",
                  ["--accent" as string]: ind.color,
                }}
              >
                {/* Rotating gradient ring */}
                <div className="ring-glow" />

                <div
                  className="circle-bg"
                  style={{
                    backgroundImage: `url(${ind.image})`,
                  }}
                />

                <div className="base-overlay" />

                <div
                  className="color-tint"
                  style={{
                    background: `linear-gradient(180deg, transparent 30%, ${ind.color}cc 100%)`,
                  }}
                />

                <div className="circle-icon">{ind.icon}</div>
              </div>

              <div className="circle-label">
                <h3 className="circle-title">{ind.label}</h3>

                <p className="circle-sub">{ind.sub}</p>

                <span className="explore-link" style={{ color: ind.color }}>
                  Explore
                  <svg
                    className="explore-arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 72,
            opacity: vis ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          <a href="/jobs" className="industries-cta">
            View Jobs in All Industries
            <svg
              className="cta-arrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 36px 18px;
          justify-items: center;
        }

        /* ─── CARD WRAPPER ─── */
        .circle-card-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          cursor: pointer;
        }

        /* ─── CIRCLE ─── */
        .circle-card {
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          isolation: isolate;
          box-shadow:
            0 10px 30px rgba(13,43,40,0.1),
            0 2px 8px rgba(13,43,40,0.06);
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        /* Subtle gradient ring that appears on hover */
        .ring-glow {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          padding: 3px;
          background: conic-gradient(
            from 0deg,
            var(--accent),
            transparent 40%,
            transparent 60%,
            var(--accent)
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: ringSpin 6s linear infinite;
          z-index: 4;
          pointer-events: none;
        }

        @keyframes ringSpin {
          to { transform: rotate(360deg); }
        }

        .circle-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 0;
        }

        .base-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(13,43,40,0.05) 0%, rgba(13,43,40,0.45) 100%);
          transition: opacity 0.5s ease;
          z-index: 1;
        }

        .color-tint {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 2;
        }

        .circle-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1.7rem, 4vw, 2.6rem);
          filter: drop-shadow(0 3px 10px rgba(0,0,0,0.35));
          transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 3;
        }

        /* ─── LABEL ─── */
        .circle-label {
          text-align: center;
          max-width: 210px;
        }

        .circle-title {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          font-weight: 700;
          color: #0d2b28;
          margin: 0 0 5px;
          transition: color 0.35s ease;
        }

        .circle-sub {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          color: #6b9e97;
          margin: 0 0 10px;
          letter-spacing: 0.04em;
        }

        .explore-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          text-decoration: none;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .explore-arrow {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ─── HOVER STATES (PROFESSIONAL) ─── */
        .circle-card-wrap:hover .circle-card {
          transform: translateY(-10px);
          box-shadow:
            0 24px 48px var(--accent, rgba(46,196,182,0.3)),
            0 8px 20px rgba(13,43,40,0.15);
        }

        .circle-card-wrap:hover .circle-bg {
          transform: scale(1.08);
        }

        .circle-card-wrap:hover .color-tint {
          opacity: 0.85;
        }

        .circle-card-wrap:hover .base-overlay {
          opacity: 0.4;
        }

        .circle-card-wrap:hover .ring-glow {
          opacity: 1;
        }

        .circle-card-wrap:hover .circle-icon {
          transform: scale(1.15) translateY(-2px);
        }

        .circle-card-wrap:hover .circle-title {
          color: #0e7a70;
        }

        .circle-card-wrap:hover .explore-link {
          opacity: 1;
          transform: translateY(0);
        }

        .circle-card-wrap:hover .explore-arrow {
          transform: translateX(3px);
        }

        /* ─── CTA BUTTON ─── */
        .industries-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 34px;
          background: linear-gradient(135deg, #0e7a70, #0d2b28);
          color: #fff;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.92rem;
          box-shadow: 0 10px 28px rgba(13,43,40,0.18);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.4s ease,
                      background 0.4s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .industries-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #2ec4b6, #0e7a70);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .industries-cta > * {
          position: relative;
          z-index: 1;
        }

        .industries-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 42px rgba(46,196,182,0.32);
        }

        .industries-cta:hover::before {
          opacity: 1;
        }

        .cta-arrow {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .industries-cta:hover .cta-arrow {
          transform: translateX(4px);
        }

        /* ─── RESPONSIVE ─── */
        @media (min-width: 768px) {
          .industries-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: clamp(36px, 4vw, 56px);
          }
        }

        @media (max-width: 380px) {
          .industries-grid {
            gap: 28px 12px;
          }

          .circle-label {
            max-width: 140px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ring-glow { animation: none; }
          .circle-card-wrap:hover .circle-card { transform: none; }
        }
      `}</style>
    </section>
  );
}