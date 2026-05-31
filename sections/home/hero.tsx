"use client";


import Image from "next/image";
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
        background:"radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 76,
      }}
    >
      {/* BG blobs */}
      <div className="blob-drift" style={{ position: "absolute", top: "5%", left: "-8%", width: 500, height: 500, background: "rgba(46,196,182,0.08)", filter: "blur(48px)", pointerEvents: "none", zIndex: 0 }} />
      <div className="blob-drift" style={{ position: "absolute", bottom: "0%", right: "-5%", width: 420, height: 420, background: "rgba(245,230,66,0.1)", filter: "blur(40px)", pointerEvents: "none", zIndex: 0, animationDelay: "-4s" }} />
      <div style={{ position: "absolute", top: "25%", right: "20%", width: 180, height: 180, background: "rgba(46,196,182,0.05)", borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Decorative circle outline */}
      <div className="spin-slow" style={{ position: "absolute", top: "10%", right: "8%", width: 260, height: 260, borderRadius: "50%", border: "1.5px dashed rgba(46,196,182,0.18)", pointerEvents: "none", zIndex: 0 }} />

      {/* Content */}
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "72px 64px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
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
              padding: "8px 18px",
              background: "rgba(46,196,182,0.1)",
              border: "1px solid rgba(46,196,182,0.25)",
              borderRadius: 50,
              marginBottom: 32,
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(-20px)",
              transition: "all 0.65s ease",
            }}
          >
            <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#2ec4b6", display: "inline-block" }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", color: "#1a9e92", textTransform: "uppercase" }}>
              The Future of Talent
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
              fontWeight: 700,
              background:"linear-gradient(135deg, #3abbee 0%, #13a0f1 45%, #055c7e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: 24,
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            Connecting{" "}
         <span
            style={{
              background:"linear-gradient(135deg, #3ef13e 0%, #27bd3b 45%, #15ac10 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              
            }}>   
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
    background:
      "linear-gradient(135deg, #3ef13e 0%, #27bd3b 45%, #15ac10 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    
  }}>To Drive Success</span>
          </h1>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#2d5c55",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: 480,
              marginBottom: 44,
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
            <a
              href="/services"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: "15px 34px",
                background: "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.9rem",
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
                padding: "15px 34px",
                background: "rgba(255,255,255,0.85)",
                color: "#0d2b28",
                fontWeight: 700,
                fontSize: "0.9rem",
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
              padding: 36,
              boxShadow: "0 32px 80px rgba(46,196,182,0.14), 0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            {/* Card header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
              <div>
                <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#0d2b28", marginBottom: 4 }}>Analytics Overview</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#6b9e97" }}>Real-time placement tracking</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {["#fc9fa5", "#fcd490", "#86d9d0"].map((c, i) => (
                  <span key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "inline-block" }} />
                ))}
              </div>
            </div>

            {/* Bar chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 130, marginBottom: 28 }}>
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

            <div style={{ height: 1, background: "rgba(46,196,182,0.12)", marginBottom: 22 }} />

            {/* Candidates */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {candidates.map((c) => (
                <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      position: "relative",
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "2px solid rgba(46,196,182,0.25)",
                      background: c.abg,
                    }}
                  >
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#0d2b28" }}>{c.name}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", color: "#6b9e97" }}>{c.role}</div>
                  </div>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 50,
                      fontSize: "0.67rem",
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
    </section>
  );
}