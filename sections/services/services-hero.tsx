"use client";

import { useEffect, useState } from "react";

export default function ServicesHero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  return (
    <section
      id="services-hero"
      style={{
        width: "100%",
        minHeight: "40vh",
        background:
          "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 76,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative rings */}
      <div className="spin-slow" style={{ position: "absolute", top: "8%", right: "6%", width: 220, height: 220, borderRadius: "50%", border: "1.5px dashed rgba(46,196,182,0.2)", pointerEvents: "none", display: "none" }} />
      <div className="spin-slow" style={{ position: "absolute", bottom: "8%", left: "4%", width: 140, height: 140, borderRadius: "50%", border: "1px dashed rgba(245,230,66,0.35)", pointerEvents: "none", animationDirection: "reverse", display: "none" }} />
      <div className="blob-drift" style={{ position: "absolute", top: "-10%", left: "-8%", width: 400, height: 400, background: "rgba(46,196,182,0.07)", borderRadius: "50%", filter: "blur(56px)", pointerEvents: "none" }} />

      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "60px 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "7px 22px",
            background: "rgba(245,230,66,0.25)",
            border: "1.5px solid rgba(200,180,0,0.35)",
            borderRadius: 50,
            marginBottom: 24,
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(-18px)",
            transition: "all 0.65s ease",
          }}
        >
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.16em", color: "#6a5a00", textTransform: "uppercase" }}>
            Our Expertise
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)",
            fontWeight: 700,
            background:"linear-gradient(135deg, #3ef13e 0%, #27bd3b 45%, #15ac10 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            lineHeight: 1.13,
            marginBottom: 18,
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.75s ease 0.1s",
          }}
        >
          Strategic Talent Solutions for the
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #10e7ee 0%, #0fb9e4 45%, #0c8fe7 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Modern Workforce
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#2d5c55",
            fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)",
            lineHeight: 1.8,
            maxWidth: 520,
            margin: "0 auto",
            padding: "0 12px",
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(18px)",
            transition: "all 0.75s ease 0.2s",
          }}
        >
          Connecting exceptional talent with forward-thinking organizations through
          our human-centric, precision-driven recruitment services.
        </p>
      </div>
    </section>
  );
}
