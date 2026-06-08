"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const leaders = [
  {
    name: "Anirudh Savita",
    role: "Founder",
    quote:
      "“Driven by over 4 years of specialized recruitment experience, he brings clarity, consistency, and a people-first vision to every hiring journey.”",
    accent: "linear-gradient(135deg, #2ec4b6 0%, #0e7a70 100%)",
    glow: "rgba(46,196,182,0.22)",
  },
  {
    name: "Himanshu Singh",
    role: "Co-Founder",
    quote:
      "“Focused on building sustainable talent pipelines, he believes meaningful hiring begins with strategy, trust, and long-term thinking.”",
    accent: "linear-gradient(135deg, #0d2b28 0%, #1a9e92 100%)",
    glow: "rgba(14,122,112,0.18)",
  },
  {
    name: "Saurabh Dingra",
    role: "Co-Founder",
    quote:
      "“With a sharp eye on operations and partnerships, he transforms collaboration into growth across industries and evolving talent landscapes.”",
    accent: "linear-gradient(135deg, #f5e642 0%, #9bb60a 100%)",
    glow: "rgba(245,230,66,0.22)",
  },
];

export default function ContactLeadership() {
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
      id="contact-leadership"
      ref={ref}
      style={{
        width: "100%",
        padding: "76px 24px",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.28) 0%, transparent 34%), radial-gradient(circle at 85% 78%, rgba(245,230,66,0.18) 0%, transparent 30%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div className="contact-leadership-blob blob-one" />
      <div className="contact-leadership-blob blob-two" />

      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 52,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 20px",
              background: "rgba(46,196,182,0.1)",
              border: "1px solid rgba(46,196,182,0.22)",
              borderRadius: 50,
              marginBottom: 14,
              boxShadow: "0 10px 24px rgba(46,196,182,0.08)",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#1a9e92",
                textTransform: "uppercase",
              }}
            >
              The Driving Force
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: 14,
              background:
                "linear-gradient(135deg, #0d2b28 0%, #0e7a70 45%, #87aa08 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Leadership That Inspires
            <br />
            Growth & Trust
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#4f746d",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              lineHeight: 1.8,
              maxWidth: 620,
              margin: "0 auto",
              padding: "0 12px",
            }}
          >
            Meet the people shaping our vision with strategy, partnership, and
            a commitment to meaningful recruitment experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="contact-leadership-grid">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className={`contact-leader-card ${vis ? "show" : ""}`}
              style={
                {
                  transitionDelay: `${0.08 + index * 0.14}s`,
                  ["--card-accent" as string]: leader.accent,
                  ["--card-glow" as string]: leader.glow,
                } as CSSProperties
              }
            >
              <div className="contact-leader-card-inner">
                <div className="contact-card-shine" />
                <div className="contact-leader-top-line" />

                <div className="contact-role-pill">{leader.role}</div>

                <h3 className="contact-leader-name">{leader.name}</h3>

                <div className="contact-leader-divider" />

                <p className="contact-leader-quote">{leader.quote}</p>

                <div className="contact-leader-footer">
                  <span className="contact-leader-footer-text">
                    Vision • People • Excellence
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .contact-leadership-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          animation: contactLeadershipFloat 10s ease-in-out infinite;
        }

        .blob-one {
          width: 260px;
          height: 260px;
          top: 80px;
          left: -40px;
          background: rgba(46,196,182,0.16);
        }

        .blob-two {
          width: 240px;
          height: 240px;
          right: -30px;
          bottom: 40px;
          background: rgba(245,230,66,0.16);
          animation-delay: -4s;
        }

        .contact-leadership-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .contact-leader-card {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.86), rgba(255,255,255,0.72));
          border: 1px solid rgba(46,196,182,0.16);
          box-shadow:
            0 14px 36px rgba(13,43,40,0.06),
            0 6px 20px rgba(46,196,182,0.04);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(42px);
          transition:
            transform 0.75s ease,
            opacity 0.75s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
          isolation: isolate;
        }

        .contact-leader-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-leader-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.04) 28%,
            rgba(255,255,255,0.55) 48%,
            rgba(255,255,255,0.08) 62%,
            transparent 100%
          );
          transform: translateX(-140%);
          transition: transform 0.95s ease;
          z-index: 1;
          pointer-events: none;
        }

        .contact-leader-card::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: 27px;
          padding: 1px;
          background: var(--card-accent);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.22;
          pointer-events: none;
        }

        .contact-leader-card:hover {
          transform: translateY(-12px) scale(1.01);
          border-color: rgba(46,196,182,0.28);
          box-shadow:
            0 26px 60px rgba(13,43,40,0.1),
            0 10px 30px var(--card-glow);
        }

        .contact-leader-card:hover::before {
          transform: translateX(140%);
        }

        .contact-leader-card-inner {
          position: relative;
          z-index: 2;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 34px 28px 30px;
          background:
            radial-gradient(circle at 15% 18%, rgba(46,196,182,0.08), transparent 30%),
            radial-gradient(circle at 84% 14%, rgba(245,230,66,0.08), transparent 26%);
        }

        .contact-card-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.35), transparent 28%);
          z-index: -1;
        }

        .contact-leader-top-line {
          width: 72px;
          height: 5px;
          border-radius: 999px;
          background: var(--card-accent);
          margin-bottom: 20px;
          box-shadow: 0 6px 18px var(--card-glow);
        }

        .contact-role-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(46,196,182,0.14);
          color: #1a9e92;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 20px;
          box-shadow: 0 10px 22px rgba(13,43,40,0.05);
        }

        .contact-leader-name {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(1.3rem, 1.7vw, 1.75rem);
          font-weight: 700;
          color: #0d2b28;
          line-height: 1.1;
          margin: 0 0 14px;
        }

        .contact-leader-divider {
          width: 54px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #2ec4b6, #f5e642);
          margin-bottom: 20px;
        }

        .contact-leader-quote {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.94rem;
          color: #4f746d;
          line-height: 1.9;
          font-style: italic;
          margin: 0;
          flex: 1;
        }

        .contact-leader-footer {
          width: 100%;
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid rgba(13,43,40,0.06);
        }

        .contact-leader-footer-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.78rem;
          color: #7ba6a0;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 700;
        }

        @keyframes contactLeadershipFloat {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10px, -18px) scale(1.04);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @media (max-width: 980px) {
          .contact-leadership-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          #contact-leadership {
            padding: 58px 16px !important;
          }

          .contact-leadership-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-leader-card-inner {
            padding: 28px 22px 24px;
          }

          .contact-role-pill {
            font-size: 0.68rem;
            padding: 7px 14px;
          }

          .contact-leader-quote {
            font-size: 0.9rem;
            line-height: 1.8;
          }
        }
      `}</style>
    </section>
  );
}