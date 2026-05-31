"use client";

import { useEffect, useRef, useState } from "react";

export default function ServicesCTA() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      style={{
        width: "100%",
        padding: "0 64px 96px",
        background: "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.55) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #0d2b28 0%, #1a4a42 60%, #0e7a70 100%)",
            borderRadius: 28,
            padding: "72px 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(13,43,40,0.25)",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(48px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* BG blobs */}
          <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(46,196,182,0.1)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -50, left: -50, width: 240, height: 240, borderRadius: "50%", background: "rgba(245,230,66,0.06)", pointerEvents: "none" }} />
          {/* Yellow top line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #f5e642, #2ec4b6, #f5e642)" }} />

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              background:"linear-gradient(135deg, #0bb171 0%, #0dad7d 45%, #077579 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
              marginBottom: 16,
              position: "relative",
              zIndex: 1,
            }}
          >
            Ready to Find Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f5e642 0%, #f0dc3a 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Next Hire?
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              background:"linear-gradient(135deg, #4cbdc7 0%, #80c6e9 45%, #bfcceb 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: 500,
              margin: "0 auto 44px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Let's discuss how our bespoke recruitment solutions can transform your organizational growth.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
            <a
              href="/contact"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: "14px 34px",
                background: "linear-gradient(135deg, #f5e642, #f0dc3a)",
                color: "#0d2b28",
                fontWeight: 800,
                fontSize: "0.9rem",
                borderRadius: 50,
                boxShadow: "0 8px 28px rgba(245,230,66,0.4)",
                transition: "all 0.25s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(245,230,66,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,230,66,0.4)"; }}
            >
              Book a Consultation
            </a>
            <a
              href="/industries"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: "14px 34px",
                background: "transparent",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.9rem",
                borderRadius: 50,
                border: "1.5px solid rgba(255,255,255,0.35)",
                transition: "all 0.25s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View All Sectors
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
