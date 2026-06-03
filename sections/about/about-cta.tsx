"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutCTA() {
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
      id="about-cta"
      ref={ref}
      style={{
        width: "100%",
        background: "radial-gradient(circle at 10% 20%, rgba(152,251,152,0.35) 0%, transparent 32%), radial-gradient(circle at 90% 10%, rgba(245,230,66,0.24) 0%, transparent 30%), linear-gradient(180deg, #f8fffe 0%, #dfffdc 100%)",
        padding: "72px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div className="blob-drift" style={{ position: "absolute", top: "-15%", left: "-5%", width: 400, height: 400, background: "rgba(46,196,182,0.07)", borderRadius: "50%", filter: "blur(56px)", pointerEvents: "none" }} />
      <div className="blob-drift" style={{ position: "absolute", bottom: "-15%", right: "-5%", width: 360, height: 360, background: "rgba(245,230,66,0.09)", borderRadius: "50%", filter: "blur(48px)", pointerEvents: "none", animationDelay: "-4s" }} />

      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.85s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "7px 20px",
            background: "rgba(46,196,182,0.1)",
            border: "1px solid rgba(46,196,182,0.22)",
            borderRadius: 50,
            marginBottom: 28,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2ec4b6", display: "inline-block" }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", color: "#1a9e92", textTransform: "uppercase" }}>
            Take the Next Step
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
            fontWeight: 700,
            background: "linear-gradient(135deg, hsl(120, 90%, 42%) 0%, #0cc228 45%, #066b03 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
            marginBottom: 18,
          }}
        >
          Ready to make your{" "}
          <span style={{
            background: "linear-gradient(135deg, hsl(182, 93%, 34%) 0%, #05a7a7 45%, #076fac 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            fontStyle: "italic"
          }}>next choice?</span>
        </h2>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#6b9e97",
            fontSize: "clamp(0.875rem, 1vw, 1rem)",
            lineHeight: 1.8,
            maxWidth: 500,
            margin: "0 auto 40px",
            padding: "0 12px",
          }}
        >
          Whether you're looking for your dream role or your next star employee, we'd
          here to guide the way.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/contact"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              padding: "15px 32px",
              background: "linear-gradient(135deg, #2ec4b6, #0e7a70)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              borderRadius: 50,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 8px 28px rgba(46,196,182,0.38)",
              transition: "all 0.25s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(46,196,182,0.48)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(46,196,182,0.38)"; }}
          >
            Explore Career Opportunities →
          </a>

          <a
            href="/contact"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              padding: "15px 32px",
              background: "rgba(255,255,255,0.85)",
              color: "#0d2b28",
              fontWeight: 700,
              fontSize: "0.9rem",
              borderRadius: 50,
              border: "1.5px solid rgba(46,196,182,0.28)",
              transition: "all 0.25s ease",
              backdropFilter: "blur(8px)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2ec4b6"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(46,196,182,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(46,196,182,0.28)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.85)"; }}
          >
            Hire Top Talent
          </a>
        </div>
      </div>
    </section>
  );
}
