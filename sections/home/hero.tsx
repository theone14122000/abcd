"use client";

import { useEffect, useState } from "react";

const bars = [
  { h: 52, bg: "#a8e6e1" },
  { h: 70, bg: "#2ec4b6" },
  { h: 62, bg: "#a8e6e1" },
  { h: 88, bg: "#0e7a70" },
  { h: 45, bg: "#a8e6e1" },
];

const candidates = [
  {
    init: "A",
    name: "Shubham Sharma",
    role: "Senior UX Designer",
    badge: "MATCHED",
    bbg: "#d1fae5",
    bc: "#065f46",
    abg: "#c8f5f1",
    image: "/images/candidates/shubham.jpg",
  },
  {
    init: "S",
    name: "Saurabh Singh",
    role: "CTO",
    badge: "REVIEW",
    bbg: "#fef9c3",
    bc: "#854d0e",
    abg: "#fef3c7",
    image: "/images/candidates/saurabh.jpg",
  },
];

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [bars2, setBars2] = useState(false);

  useEffect(() => {
    setReady(true);
    const t = setTimeout(() => setBars2(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(60px, 10vw, 76px)",
      }}
    >
      <div
        className="hero-content"
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(24px, 5vw, 72px) clamp(20px, 4vw, 64px)",
          display: "grid",
          gap: "clamp(32px, 6vw, 72px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              background: "rgba(46,196,182,0.1)",
              border: "1px solid rgba(46,196,182,0.25)",
              borderRadius: 50,
              marginBottom: "clamp(20px, 4vw, 32px)",
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(-20px)",
              transition: "all 0.65s ease",
            }}
          >
            <span className="pulse-dot" />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#1a9e92",
                textTransform: "uppercase",
              }}
            >
              The Future of Talent
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2rem, 8vw, 4.2rem)",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #3abbee 0%, #13a0f1 45%, #055c7e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.08,
              marginBottom: "clamp(16px, 3vw, 24px)",
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            Connecting{" "}
            <span className="green-text">
              Talent
              <svg
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "100%",
                  height: 8,
                }}
                viewBox="0 0 120 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 Q30,1 60,5 Q90,9 120,4"
                  stroke="#f5e642"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            With Opportunity
            <br />
            <span className="green-text">To Drive Success</span>
          </h1>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#2d5c55",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: 480,
              marginBottom: "clamp(28px, 5vw, 44px)",
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            We bridge the gap between world-class professionals and industry-leading
            organizations through strategic recruitment and staffing solutions.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            <a className="primary-btn" href="/services">
              Explore Services →
            </a>
            <a className="secondary-btn" href="/contact">
              Contact Us
            </a>
          </div>
        </div>

        <div
          className="hero-card-wrap"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateX(0)" : "translateX(48px)",
            transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
          }}
        >
          <div className="float-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 28,
              }}
            >
              <div>
                <div className="card-title">Analytics Overview</div>
                <div className="card-subtitle">Real-time placement tracking</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {["#fc9fa5", "#fcd490", "#86d9d0"].map((c, i) => (
                  <span key={i} className="window-dot" style={{ background: c }} />
                ))}
              </div>
            </div>

            <div className="bar-chart">
              {bars.map((b, i) => (
                <div key={i} className="bar-track">
                  <div
                    style={{
                      width: "100%",
                      height: bars2 ? `${b.h}%` : "4%",
                      background: b.bg,
                      borderRadius: "8px 8px 0 0",
                      transition: `height 0.9s cubic-bezier(0.34,1.3,0.64,1) ${
                        i * 0.1
                      }s`,
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="divider" />

            <div className="candidate-list">
              {candidates.map((c) => (
                <div key={c.name} className="candidate-row">
                  <div className="avatar" style={{ background: c.abg }}>
                    <span className="avatar-fallback">{c.init}</span>
                    <img
                      src={c.image}
                      alt={c.name}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="candidate-name">{c.name}</div>
                    <div className="candidate-role">{c.role}</div>
                  </div>

                  <span
                    className="candidate-badge"
                    style={{ background: c.bbg, color: c.bc }}
                  >
                    {c.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-content {
          grid-template-columns: 1fr;
        }

        .hero-card-wrap {
          width: 100%;
          max-width: 460px;
        }

        @media (min-width: 900px) {
          .hero-content {
            grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
          }

          .hero-card-wrap {
            justify-self: end;
            align-self: center;
            max-width: 480px;
          }
        }

        .green-text {
          background: linear-gradient(135deg, #3ef13e 0%, #27bd3b 45%, #15ac10 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }

        .primary-btn,
        .secondary-btn {
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 15px 34px;
          font-weight: 700;
          font-size: 0.9rem;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .primary-btn {
          background: linear-gradient(135deg, #2ec4b6, #0e7a70);
          color: #fff;
          box-shadow: 0 8px 28px rgba(46,196,182,0.4);
        }

        .secondary-btn {
          background: rgba(255,255,255,0.85);
          color: #0d2b28;
          border: 1.5px solid rgba(46,196,182,0.3);
        }

        .float-card {
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(24px);
          border: 1.5px solid rgba(46,196,182,0.2);
          border-radius: 28px;
          padding: clamp(20px, 4vw, 36px);
          box-shadow: 0 32px 80px rgba(46,196,182,0.14), 0 8px 24px rgba(0,0,0,0.06);
          animation: float 4s ease-in-out infinite;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2ec4b6;
          display: inline-block;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .card-title {
          font-family: 'Clash Display', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #0d2b28;
          margin-bottom: 4px;
        }

        .card-subtitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.78rem;
          color: #6b9e97;
        }

        .window-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          display: inline-block;
        }

        .bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          height: 130px;
          margin-bottom: 28px;
        }

        .bar-track {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: flex-end;
        }

        .divider {
          height: 1px;
          background: rgba(46,196,182,0.12);
          margin-bottom: 22px;
        }

        .candidate-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .candidate-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(46,196,182,0.25);
          display: grid;
          place-items: center;
        }

        .avatar img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-fallback {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          color: #0e7a70;
        }

        .candidate-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          color: #0d2b28;
        }

        .candidate-role {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          color: #6b9e97;
        }

        .candidate-badge {
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.67rem;
          font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.06em;
          flex-shrink: 0;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
