"use client";

import { useEffect, useState } from "react";

export default function AboutHero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section
      id="about-hero"
      style={{
        width: "100%",
        minHeight: "50vh",
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
      {/* BG blobs */}
      <div
        className="blob-drift"
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: 440,
          height: 440,
          background: "rgba(46,196,182,0.07)",
          borderRadius: "50%",
          filter: "blur(56px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="blob-drift"
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: 380,
          height: 380,
          background: "rgba(245,230,66,0.09)",
          borderRadius: "50%",
          filter: "blur(48px)",
          pointerEvents: "none",
          animationDelay: "-3s",
        }}
      />

      <div
        className="spin-slow"
        style={{
          position: "absolute",
          top: "15%",
          right: "6%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "1.5px dashed rgba(46,196,182,0.18)",
          pointerEvents: "none",
          display: "none",
        }}
      />

      <div
        className="spin-slow"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "4%",
          width: 140,
          height: 140,
          borderRadius: "50%",
          border: "1px dashed rgba(245,230,66,0.25)",
          pointerEvents: "none",
          animationDirection: "reverse",
          display: "none",
        }}
      />

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
        <div
          className="about-hero-card"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            borderRadius: 34,
            padding: "48px 32px",
            textAlign: "center",
            border: "1px solid rgba(46,196,182,0.18)",
            boxShadow: "0 24px 70px rgba(13,43,40,0.08)",
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.75s ease",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 20px",
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(46,196,182,0.24)",
              borderRadius: 50,
              marginBottom: 28,
              boxShadow: "0 10px 24px rgba(13,43,40,0.06)",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#2ec4b6",
                display: "inline-block",
              }}
            />

            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#1a9e92",
                textTransform: "uppercase",
              }}
            >
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.8rem, 4.5vw, 4rem)",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #0d2b28 0%, #0e7a70 45%, #2f6b37 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.12,
              marginBottom: 22,
            }}
          >
            Humanizing Recruitment Through
            <br />
            <span
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontStyle: "italic",
                background:
                  "linear-gradient(135deg, #03828b 0%, #058292 45%, #063f80 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                position: "relative",
                display: "inline-block",
              }}
            >
              Meaningful Connections
              <svg
                style={{
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "100%",
                  height: 10,
                }}
                viewBox="0 0 340 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,7 Q42,1 85,6 Q127,11 170,5 Q212,0 255,6 Q297,11 340,5"
                  stroke="#a79908"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.9"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#2d5c55",
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              lineHeight: 1.88,
              maxWidth: 940,
              margin: "0 auto",
              padding: "0 8px",
            }}
          >
            <b>Integrity:</b> we operate with honesty, transparency, and
            accountability in every interaction with clients and candidates.
            This standard works with our pursuit of <b>Excellence</b>, where we
            deliver quality talent solutions that consistently exceed
            expectations. Driven by a <b>People First</b> philosophy, we empower
            businesses and professionals to achieve lasting success through{" "}
            <b>Partnership</b>, <b>Innovation</b>, and a strong{" "}
            <b>Commitment to Success</b>.
          </p>
        </div>
      </div>

      <style>{`
        .about-hero-card {
          background:
            radial-gradient(circle at 15% 20%, rgba(46,196,182,0.18), transparent 32%),
            linear-gradient(120deg, #9dd4cc, #88f588, #f7eb6c, #a4eba4, #9df7e9);
          background-size: 180% 180%;
          animation:
            aboutHeroIn 0.75s ease both,
            aboutColorFlow 8s ease-in-out infinite;
        }

        @keyframes aboutHeroIn {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutColorFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 720px) {
          .about-hero-card {
            padding: 36px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
