"use client";

import { useEffect, useRef, useState } from "react";

const leaders = [
  {
    name: "Anirudh Savita",
    title: "Founder & CEO",
    quote:
      "“Great recruitment is not about filling positions — it is about shaping futures, building trust, and creating lasting impact.”",
    accent: "linear-gradient(135deg, #2ec4b6 0%, #0e7a70 100%)",
    glow: "rgba(46,196,182,0.22)",
  },
  {
    name: "Himanshu Singh",
    title: "Co-founder & COO",
    quote:
      "“Exceptional hiring experiences begin with listening carefully, acting thoughtfully, and delivering with consistency and care.”",
    accent: "linear-gradient(135deg, #f5e642 0%, #9bb60a 100%)",
    glow: "rgba(245,230,66,0.22)",
  },
  {
    name: "Saurabh Dhingra",
    title: "Head of Talent Strategy",
    quote:
      "“The strongest teams are built where insight meets empathy, and where strategy is guided by a deep understanding of people.”",
    accent: "linear-gradient(135deg, #0d2b28 0%, #1a9e92 100%)",
    glow: "rgba(14,122,112,0.18)",
  },
  
];

export default function Leadership() {
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
      id="leadership"
      ref={ref}
      style={{
        width: "100%",
        background:
          "radial-gradient(circle at 20% 10%, rgba(46,196,182,0.18) 0%, transparent 28%), radial-gradient(circle at 85% 20%, rgba(245,230,66,0.16) 0%, transparent 30%), linear-gradient(180deg, #eaffea 0%, #f8fffe 52%, #fffde8 100%)",
        padding: "76px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow blobs */}
      <div className="leadership-blob leadership-blob-1" />
      <div className="leadership-blob leadership-blob-2" />

      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 58,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(30px)",
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
              marginBottom: 20,
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
              Meet the Leadership
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #0d2b28 0%, #0e7a70 45%, #89ab08 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              marginBottom: 14,
              lineHeight: 1.1,
            }}
          >
            Leadership With Vision,
            <br />
            Recruitment With Purpose
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#6b9e97",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              lineHeight: 1.8,
              maxWidth: 600,
              margin: "0 auto",
              padding: "0 12px",
            }}
          >
            Guided by experience, empathy, and strategy, our leadership team is
            committed to building meaningful partnerships and long-term success.
          </p>
        </div>

        {/* Leader cards */}
        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className={`leader-card ${vis ? "show" : ""}`}
              style={
                {
                  transitionDelay: `${0.08 + index * 0.14}s`,
                  ["--card-glow" as string]: leader.glow,
                  ["--card-accent" as string]: leader.accent,
                } as React.CSSProperties
              }
            >
              <div className="leader-card-inner">
                <div className="leader-top-line" />

                <div className="leader-role-pill">{leader.title}</div>

                <h3 className="leader-name">{leader.name}</h3>

                <div className="leader-divider" />

                <p className="leader-quote">{leader.quote}</p>

                <div className="leader-footer">
                  <span className="leader-footer-text">People • Precision • Partnership</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .leadership-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          animation: leadershipFloat 10s ease-in-out infinite;
        }

        .leadership-blob-1 {
          width: 260px;
          height: 260px;
          left: -40px;
          top: 80px;
          background: rgba(46,196,182,0.15);
        }

        .leadership-blob-2 {
          width: 240px;
          height: 240px;
          right: -30px;
          bottom: 50px;
          background: rgba(245,230,66,0.16);
          animation-delay: -4s;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .leader-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.7));
          border: 1px solid rgba(46,196,182,0.16);
          box-shadow:
            0 12px 36px rgba(13,43,40,0.06),
            0 6px 18px rgba(46,196,182,0.04);
          opacity: 0;
          transform: translateY(44px);
          transition:
            transform 0.75s ease,
            opacity 0.75s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          isolation: isolate;
        }

        .leader-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .leader-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.05) 30%,
            rgba(255,255,255,0.55) 48%,
            rgba(255,255,255,0.08) 62%,
            transparent 100%
          );
          transform: translateX(-140%);
          transition: transform 0.9s ease;
          z-index: 1;
          pointer-events: none;
        }

        .leader-card::after {
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

        .leader-card:hover {
          transform: translateY(-12px) scale(1.01);
          border-color: rgba(46,196,182,0.28);
          box-shadow:
            0 26px 60px rgba(13,43,40,0.1),
            0 10px 30px var(--card-glow);
        }

        .leader-card:hover::before {
          transform: translateX(140%);
        }

        .leader-card-inner {
          position: relative;
          z-index: 2;
          padding: 34px 28px 30px;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background:
            radial-gradient(circle at 15% 18%, rgba(46,196,182,0.08), transparent 30%),
            radial-gradient(circle at 85% 12%, rgba(245,230,66,0.08), transparent 26%);
        }

        .leader-top-line {
          width: 72px;
          height: 5px;
          border-radius: 999px;
          background: var(--card-accent);
          margin-bottom: 20px;
          box-shadow: 0 6px 18px var(--card-glow);
        }

        .leader-role-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.78);
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

        .leader-name {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(1.4rem, 1.8vw, 1.8rem);
          font-weight: 700;
          color: #0d2b28;
          margin: 0 0 14px;
          line-height: 1.1;
        }

        .leader-divider {
          width: 54px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #2ec4b6, #f5e642);
          margin-bottom: 20px;
        }

        .leader-quote {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #4f746d;
          font-size: 0.94rem;
          line-height: 1.9;
          font-style: italic;
          margin: 0;
          flex: 1;
        }

        .leader-footer {
          margin-top: 24px;
          padding-top: 18px;
          width: 100%;
          border-top: 1px solid rgba(13,43,40,0.06);
        }

        .leader-footer-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.78rem;
          color: #7ba6a0;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 700;
        }

        @keyframes leadershipFloat {
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
          .leadership-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          #leadership {
            padding: 58px 16px !important;
          }

          .leadership-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .leader-card-inner {
            padding: 28px 22px 24px;
          }

          .leader-role-pill {
            font-size: 0.68rem;
            padding: 7px 14px;
          }

          .leader-quote {
            font-size: 0.9rem;
            line-height: 1.8;
          }
        }
      `}</style>
    </section>
  );
}