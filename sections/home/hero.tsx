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
        background: "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(60px, 10vw, 76px)",
      }}
    >
      {/* BG blobs */}
      <div className="blob-drift" style={{ position: "absolute", top: "5%", left: "-8%", width: "clamp(200px, 30vw, 500px)", height: "clamp(200px, 30vw, 500px)", background: "rgba(46,196,182,0.08)", filter: "blur(48px)", pointerEvents: "none", zIndex: 0 }} />
      <div className="blob-drift" style={{ position: "absolute", bottom: "0%", right: "-5%", width: "clamp(180px, 25vw, 420px)", height: "clamp(180px, 25vw, 420px)", background: "rgba(245,230,66,0.1)", filter: "blur(40px)", pointerEvents: "none", zIndex: 0, animationDelay: "-4s" }} />
      <div style={{ position: "absolute", top: "25%", right: "20%", width: "clamp(80px, 12vw, 180px)", height: "clamp(80px, 12vw, 180px)", background: "rgba(46,196,182,0.05)", borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Decorative circle outline */}
      <div className="spin-slow" style={{ position: "absolute", top: "10%", right: "8%", width: "clamp(120px, 18vw, 260px)", height: "clamp(120px, 18vw, 260px)", borderRadius: "50%", border: "1.5px dashed rgba(46,196,182,0.18)", pointerEvents: "none", zIndex: 0 }} />

      {/* Content */}
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(24px, 5vw, 72px) clamp(20px, 4vw, 64px)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(32px, 6vw, 72px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "clamp(6px, 2vw, 8px) clamp(12px, 3vw, 18px)",
              background: "rgba(46,196,182,0.1)",
              border: "1px solid rgba(46,196,182,0.25)",
              borderRadius: 50,
              marginBottom: "clamp(20px, 4vw, 32px)",
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(-20px)",
              transition: "all 0.65s ease",
            }}
          >
            <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#2ec4b6", display: "inline-block" }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(0.55rem, 2vw, 0.7rem)", fontWeight: 700, letterSpacing: "0.12em", color: "#1a9e92", textTransform: "uppercase" }}>
              The Future of Talent
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2rem, 8vw, 4.2rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, #3abbee 0%, #13a0f1 45%, #055c7e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: "clamp(16px, 3vw, 24px)",
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            Connecting{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3ef13e 0%, #27bd3b 45%, #15ac10 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                position: "relative",
                display: "inline-block",
              }}
            >
              Talent
              <svg style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 8 }} viewBox="0 0 120 8" preserveAspectRatio="none">
                <path d="M0,6 Q30,1 60,5 Q90,9 120,4" stroke="#f5e642" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            With Opportunity
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #3ef13e 0%, #27bd3b 45%, #15ac10 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              To Drive Success
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#2d5c55",
              fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
              lineHeight: 1.8,
              maxWidth: "clamp(280px, 80vw, 480px)",
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
              gap: "clamp(10px, 3vw, 16px)",
              flexWrap: "wrap",
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            <a
              href="/services"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: "clamp(12px, 3vw, 15px) clamp(24px, 5vw, 34px)",
                background: "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                borderRadius: 50,
                boxShadow: "0 8px 28px rgba(46,196,182,0.4)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(46,196,182,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(46,196,182,0.4)"; }}
            >
              Explore Services →
            </a>
            <a
              href="/contact"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: "clamp(12px, 3vw, 15px) clamp(24px, 5vw, 34px)",
                background: "rgba(255,255,255,0.85)",
                color: "#0d2b28",
                fontWeight: 700,
                fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                borderRadius: 50,
                border: "1.5px solid rgba(46,196,182,0.3)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2ec4b6"; e.currentTarget.style.background = "rgba(46,196,182,0.06)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(46,196,182,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.85)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT — floating card */}
        <div
          className="float"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateX(0)" : "translateX(48px)",
            transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.78)",
              backdropFilter: "blur(24px)",
              border: "1.5px solid rgba(46,196,182,0.2)",
              borderRadius: 28,
              padding: "clamp(20px, 4vw, 36px)",
              boxShadow: "0 32px 80px rgba(46,196,182,0.14), 0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            {/* Card header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "clamp(16px, 3vw, 28px)" }}>
              <div>
                <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", color: "#0d2b28", marginBottom: 4 }}>Analytics Overview</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(0.65rem, 2vw, 0.78rem)", color: "#6b9e97" }}>Real-time placement tracking</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {["#fc9fa5", "#fcd490", "#86d9d0"].map((c, i) => (
                  <span key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "inline-block" }} />
                ))}
              </div>
            </div>

            {/* Bar chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "clamp(6px, 2vw, 10px)", height: "clamp(100px, 20vw, 130px)", marginBottom: "clamp(16px, 3vw, 28px)" }}>
              {bars.map((b, i) => (
                <div key={i} style={{ flex: 1, height: "100%", display: "flex", alignItems: "flex-end" }}>
                  <div
                    style={{
                      width: "100%",
                      height: bars2 ? `${b.h}%` : "4%",
                      background: b.bg,
                      borderRadius: "8px 8px 0 0",
                      transition: `height 0.9s cubic-bezier(0.34,1.3,0.64,1) ${i * 0.1}s`,
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: "rgba(46,196,182,0.12)", marginBottom: "clamp(14px, 3vw, 22px)" }} />

            {/* Candidates */}
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 2vw, 14px)" }}>
              {candidates.map((c) => (
                <div key={c.name} style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 12px)" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "clamp(36px, 8vw, 42px)",
                      height: "clamp(36px, 8vw, 42px)",
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "2px solid rgba(46,196,182,0.25)",
                      background: c.abg,
                    }}
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (e.target as HTMLImageElement).parentElement!.style.background = c.abg;
                      }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(0.75rem, 2vw, 0.88rem)", color: "#0d2b28" }}>{c.name}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(0.6rem, 1.8vw, 0.75rem)", color: "#6b9e97" }}>{c.role}</div>
                  </div>
                  <span
                    style={{
                      padding: "clamp(3px, 1vw, 4px) clamp(8px, 2vw, 12px)",
                      borderRadius: 50,
                      fontSize: "clamp(0.55rem, 1.5vw, 0.67rem)",
                      fontWeight: 700,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      letterSpacing: "0.06em",
                      background: c.bbg,
                      color: c.bc,
                      flexShrink: 0,
                    }}
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
        @media (min-width: 768px) {
          section > div:last-child {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes blob-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 20px) scale(0.95); }
        }
        
        .blob-drift {
          animation: blob-drift 8s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
