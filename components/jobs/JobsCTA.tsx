"use client";

import { useEffect, useRef, useState } from "react";

export default function JobsCTA() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ width: "100%", background: "linear-gradient(180deg, #ede9db 0%, #f4f1e8 100%)", padding: "0 0 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="cta-card-animate"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "center",
            borderRadius: 34,
            padding: "52px 40px",
            border: "1px solid rgba(46,196,182,0.18)",
            boxShadow: "0 24px 70px rgba(13,43,40,0.08)",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.8s ease",
          }}
        >
          {/* Left */}
          <div>
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2.4rem)", fontWeight: 700, color: "#0d2b28", lineHeight: 1.2, marginBottom: 18 }}>
              Elevate Your Hiring Experience with Our Premium Support
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2d5c55", fontSize: "clamp(0.85rem, 0.92vw, 0.92rem)", lineHeight: 1.85, marginBottom: 28, maxWidth: 480 }}>
              We don't just post jobs; we build careers. Join thousands of professionals who found their dream role through E Choices' human-centric recruitment model.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button style={{ padding: "13px 28px", borderRadius: 50, background: "linear-gradient(135deg, #0e7a70, #0d2b28)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 8px 24px rgba(14,122,112,0.3)", transition: "opacity 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >Submit Resume</button>
              <button style={{ padding: "13px 28px", borderRadius: 50, background: "transparent", color: "#0e7a70", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, border: "1.5px solid #0e7a70", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#0e7a70"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0e7a70"; }}
              >Talk to a Consultant</button>
            </div>
          </div>

          {/* Right */}
          <div style={{ background: "rgba(255,255,255,0.5)", borderRadius: 26, minHeight: 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid rgba(46,196,182,0.12)", boxShadow: "0 12px 36px rgba(13,43,40,0.06)", padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 22px", background: "#fff", borderRadius: 20, boxShadow: "0 8px 24px rgba(13,43,40,0.08)", marginBottom: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: 4 }}>
                {["#2ec4b6", "#f5e642", "#0e7a70", "#88f588"].map((c, i) => (
                  <div key={i} style={{ width: 22, height: 22, borderRadius: "50%", background: c, border: "2px solid #fff", marginLeft: i > 0 ? -6 : 0 }} />
                ))}
              </div>
              <div>
                <p style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, color: "#0d2b28", fontSize: "0.95rem" }}>98% Success</p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", color: "#6b9e97" }}>Candidates placed in top Fortune 500s</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8rem", color: "#6b9e97" }}>Image Placeholder</p>
          </div>
        </div>
      </div>

      <style>{`
        .cta-card-animate {
          background: radial-gradient(circle at 15% 20%, rgba(46,196,182,0.18), transparent 32%),
            linear-gradient(120deg, #9dd4cc, #88f588, #f7eb6c, #a4eba4, #9df7e9);
          background-size: 180% 180%;
          animation: ctaCardFlow 8s ease-in-out infinite;
        }
        @keyframes ctaCardFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 900px) {
          .cta-card-animate { grid-template-columns: 1fr !important; padding: 36px 24px !important; }
        }
      `}</style>
    </section>
  );
}
