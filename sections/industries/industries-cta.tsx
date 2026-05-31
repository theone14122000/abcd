"use client";

import { useEffect, useRef, useState } from "react";

export default function IndustriesCTA() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        background:
          "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
        padding: "96px 64px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto" }}>
        {/* CTA card */}
        <div
          style={{
            background: "linear-gradient(135deg, #0d2b28 0%, #1a4a42 55%, #0e7a70 100%)",
            borderRadius: 28,
            padding: "72px 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 32px 88px rgba(13,43,40,0.28)",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0) scale(1)" : "translateY(52px) scale(0.97)",
            transition: "all 0.95s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Animated gradient top border */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: "linear-gradient(90deg, #05fd05, #2ec4b6, #f5e642, #05fd05)",
              backgroundSize: "300% 100%",
              animation: "borderSlide 4s linear infinite",
            }}
          />

          {/* BG decorations */}
          <div className="blob-drift" style={{ position: "absolute", top: -70, right: -70, width: 320, height: 320, borderRadius: "50%", background: "rgba(46,196,182,0.1)", filter: "blur(40px)", pointerEvents: "none" }} />
          <div className="blob-drift" style={{ position: "absolute", bottom: -50, left: -50, width: 260, height: 260, borderRadius: "50%", background: "rgba(245,230,66,0.07)", filter: "blur(36px)", pointerEvents: "none", animationDelay: "-3s" }} />

          {/* Spinning rings */}
          <div className="spin-slow" style={{ position: "absolute", top: 20, right: 40, width: 100, height: 100, borderRadius: "50%", border: "1px dashed rgba(245,230,66,0.2)", pointerEvents: "none" }} />
          <div className="spin-slow" style={{ position: "absolute", bottom: 20, left: 40, width: 70, height: 70, borderRadius: "50%", border: "1px dashed rgba(46,196,182,0.2)", pointerEvents: "none", animationDirection: "reverse" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 16,
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.75s ease 0.2s",
              }}
            >
              Ready to Hire in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f5e642 0%, #f0dc3a 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Your Sector?
                <svg style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 8 }} viewBox="0 0 160 8" preserveAspectRatio="none">
                  <path d="M0,6 Q40,1 80,5 Q120,9 160,4" stroke="#2ec4b6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h2>

            {/* Sub */}
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(168,230,225,0.82)",
                fontSize: "1rem",
                lineHeight: 1.82,
                maxWidth: 480,
                margin: "0 auto 44px",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.75s ease 0.3s",
              }}
            >
              Partner with recruitment specialists who speak your industry's language.
              Let's build your dream team today.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.75s ease 0.4s",
              }}
            >
              <a
                href="/contact"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  padding: "14px 36px",
                  background: "linear-gradient(135deg, #05fd05 0%, #05b61d 100%)",
                  color: "#0d2b28",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  borderRadius: 50,
                  boxShadow: "0 8px 28px rgba(5,182,29,0.4)",
                  transition: "all 0.25s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 18px 40px rgba(5,182,29,0.55)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(5,182,29,0.4)"; }}
              >
                Book a Consultation
              </a>
              <a
                href="/services"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  padding: "14px 36px",
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: 50,
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  transition: "all 0.25s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.65)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                View Openings
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes borderSlide {
          0%   { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </section>
  );
}
