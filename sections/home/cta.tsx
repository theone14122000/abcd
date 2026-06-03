"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 4vw, 40px)",
        background: "linear-gradient(135deg, #1e3528 0%, #2d4a35 40%, #3d6347 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: -100, right: -100, width: "clamp(200px, 40vw, 400px)", height: "clamp(200px, 40vw, 400px)", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: "clamp(150px, 30vw, 300px)", height: "clamp(150px, 30vw, 300px)", borderRadius: "50%", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", left: "15%", width: "clamp(60px, 12vw, 120px)", height: "clamp(60px, 12vw, 120px)", borderRadius: "50%", background: "rgba(255,255,255,0.02)", pointerEvents: "none" }} />

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s ease",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "clamp(4px, 1.5vw, 6px) clamp(12px, 3vw, 18px)",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 50,
            fontSize: "clamp(0.6rem, 1.8vw, 0.72rem)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "clamp(16px, 3vw, 24px)",
            textTransform: "uppercase",
          }}
        >
          Ready to Get Started?
        </div>

        <h2
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.6rem)",
            fontWeight: 800,
            background:"linear-gradient(135deg, #53a506 0%, #099c1d 45%, #1deb16 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            lineHeight: 1.25,
            marginBottom: "clamp(12px, 2vw, 18px)",
          }}
        >
          Empowering Careers &amp; Transforming Businesses
        </h2>
        <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "clamp(0.85rem, 2.2vw, 1rem)", lineHeight: 1.8, marginBottom: "clamp(28px, 5vw, 44px)" }}>
          Ready to find your dream team or land your next career milestone?
          Let&apos;s start the conversation today.
        </p>

        <div style={{ display: "flex", gap: "clamp(10px, 3vw, 16px)", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/contact"
            style={{
              padding: "clamp(12px, 3vw, 15px) clamp(24px, 5vw, 36px)",
              background: "#fff",
              color: "#2d4a35",
              fontWeight: 800,
              fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
              borderRadius: 50,
              boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.2)"; }}
          >
            Get Started →
          </a>
          <a
            href="/contact"
            style={{
              padding: "clamp(12px, 3vw, 15px) clamp(24px, 5vw, 36px)",
              background: "transparent",
              color: "#fff",
              fontWeight: 600,
              fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
              borderRadius: 50,
              border: "1.5px solid rgba(255,255,255,0.4)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
