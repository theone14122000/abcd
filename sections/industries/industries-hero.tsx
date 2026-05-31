"use client";

import { useEffect, useState } from "react";

export default function IndustriesHero() {
  const [ready, setReady] = useState(false);
  const [exploreHover, setExploreHover] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const scrollToSectors = () => {
    const target = document.getElementById("industry-sectors");

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      style={{
        width: "100%",
        minHeight: "52vh",
        background:
          "radial-gradient(circle at 14% 18%, rgba(240,221,12,0.2) 0%, transparent 30%), radial-gradient(circle at 88% 72%, rgba(46,196,182,0.18) 0%, transparent 32%), linear-gradient(135deg, #f8fffe 0%, #ecfff2 48%, #fff9c9 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 76,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Spinning rings */}
      <div
        className="spin-slow"
        style={{
          position: "absolute",
          top: "8%",
          right: "6%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "1.5px dashed rgba(46,196,182,0.2)",
          pointerEvents: "none",
        }}
      />

      <div
        className="spin-slow"
        style={{
          position: "absolute",
          bottom: "8%",
          left: "4%",
          width: 130,
          height: 130,
          borderRadius: "50%",
          border: "1px dashed rgba(240,221,12,0.3)",
          pointerEvents: "none",
          animationDirection: "reverse",
        }}
      />

      <div
        className="blob-drift"
        style={{
          position: "absolute",
          top: "-8%",
          left: "-6%",
          width: 380,
          height: 380,
          background: "rgba(46,196,182,0.07)",
          borderRadius: "50%",
          filter: "blur(52px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="blob-drift"
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-4%",
          width: 320,
          height: 320,
          background: "rgba(240,221,12,0.09)",
          borderRadius: "50%",
          filter: "blur(44px)",
          pointerEvents: "none",
          animationDelay: "-3s",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 64px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(2.6rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#0d2b28",
            lineHeight: 1.12,
            marginBottom: 20,
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.75s ease 0.05s",
          }}
        >
          Expertise Across{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #05fd05 0%, #05b61d 45%, #0b6808 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Diverse
          </span>
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #04c0b7 0%, #069eb9 45%, #0768a0 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Industries
          </span>
        </h1>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#2d5c55",
            fontSize: "1.05rem",
            lineHeight: 1.82,
            maxWidth: 520,
            margin: "0 auto 40px",
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.75s ease 0.18s",
          }}
        >
          We specialize in connecting top-tier talent with industry leaders,
          ensuring a cultural and professional fit that drives sustainable
          growth and innovation.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(18px)",
            transition: "all 0.75s ease 0.28s",
          }}
        >
          <button
            type="button"
            onClick={scrollToSectors}
            onMouseEnter={() => setExploreHover(true)}
            onMouseLeave={() => setExploreHover(false)}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              minWidth: 168,
              padding: "14px 34px",
              background: exploreHover
                ? "linear-gradient(135deg, #2ec4b6, #0e7a70)"
                : "linear-gradient(135deg, #0e7a70, #0d2b28)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              borderRadius: 50,
              border: "none",
              cursor: "pointer",
              boxShadow: exploreHover
                ? "0 16px 36px rgba(14,122,112,0.45)"
                : "0 8px 28px rgba(14,122,112,0.35)",
              transform: exploreHover ? "translateY(-3px)" : "translateY(0)",
              transition: "all 0.25s ease",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {exploreHover ? (
              <>
                Scroll Down <span style={{ fontSize: "1rem" }}>↓</span>
              </>
            ) : (
              "Explore Sectors"
            )}
          </button>

          <a
            href="/contact"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              padding: "14px 34px",
              background: "transparent",
              color: "#0d2b28",
              fontWeight: 600,
              fontSize: "0.9rem",
              borderRadius: 50,
              border: "1.5px solid rgba(14,122,112,0.3)",
              transition: "all 0.25s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2ec4b6";
              e.currentTarget.style.color = "#0e7a70";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(14,122,112,0.3)";
              e.currentTarget.style.color = "#0d2b28";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
