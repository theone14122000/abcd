"use client";

import { useEffect, useRef, useState } from "react";

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={ref}
      style={{
        width: "100%",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 14% 18%, rgba(245,230,66,0.2) 0%, transparent 30%), radial-gradient(circle at 88% 72%, rgba(46,196,182,0.18) 0%, transparent 32%), linear-gradient(135deg, #f8fffe 0%, #ecfff2 48%, #fff9c9 100%)",
      }}
    >

      {/* STORY CONTENT */}
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "72px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        {/* IMAGE CARD */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-52px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 30,
              overflow: "hidden",
              aspectRatio: "4 / 3",
              background:
                "linear-gradient(135deg, rgba(46,196,182,0.22), rgba(245,230,66,0.2))",
              boxShadow: "0 30px 80px rgba(13,43,40,0.16)",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            <img
              src="/images/about/story.png"
              alt="Team at E Choices"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(13,43,40,0.64) 0%, rgba(13,43,40,0.18) 48%, transparent 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                borderRadius: 999,
                padding: "9px 16px",
                background: "rgba(255,255,255,0.86)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 10px 28px rgba(13,43,40,0.12)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0e7a70",
              }}
            >
              Human-first hiring
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                borderRadius: 20,
                padding: "18px 20px",
                background: "rgba(245,230,66,0.94)",
                boxShadow: "0 16px 34px rgba(245,230,66,0.28)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.86rem",
                  color: "#0d2b28",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                }}
              >
                "We do not just fill roles; we build the future of
                organizational culture, one individual at a time."
              </p>
            </div>
          </div>
        </div>

        {/* TEXT CARD */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(52px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.22s",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 20px",
              background: "rgba(46,196,182,0.1)",
              border: "1px solid rgba(46,196,182,0.22)",
              borderRadius: 50,
              marginBottom: 20,
            }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", color: "#1a9e92", textTransform: "uppercase", fontStyle: "italic" }}>
              The E Choices Genesis
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#0d2b28",
              lineHeight: 1.12,
              letterSpacing: "-0.04em",
              marginBottom: 24,
            }}
          >
            <span style={{
              background: "linear-gradient(135deg, hsl(120, 90%, 42%) 0%, #0cc228 45%, #066b03 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}>
              From a focused hiring vision to a{" "}
            </span>
            <span style={{
              background: "linear-gradient(135deg, hsl(194, 92%, 43%) 0%, #056988 45%, #03416b 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}>
              career solutions partner.
            </span>
          </h2>

          <div style={{ display: "grid", gap: 18 }}>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#000f0d",
                fontSize: "clamp(0.875rem, 0.96vw, 0.96rem)",
                lineHeight: 1.9,
              }}
            >
              In 2021, E Choices began with a singular vision: to dismantle
              the cold, transactional nature of the staffing industry. We saw
              talented individuals being treated as resumes and companies
              losing their identity in the hiring process.
            </p>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#000c0a",
                fontSize: "clamp(0.875rem, 0.94vw, 0.94rem)",
                lineHeight: 1.9,
              }}
            >
              Today, we stand as a human-centric recruitment partner. Our
              philosophy is rooted in the "E" of our name: Excellence,
              Empathy, and Evolution. We continue to grow while staying
              focused on the individual stories behind every successful
              placement.
            </p>
          </div>

          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            {["Excellence", "Empathy", "Evolution"].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 18,
                  padding: "16px 14px",
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(46,196,182,0.18)",
                  boxShadow: "0 10px 28px rgba(13,43,40,0.05)",
                  textAlign: "center",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#000808",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #story > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          #story > div:nth-child(2) > div:first-child {
            order: 2;
          }
        }
        @media (max-width: 640px) {
          #story > div:nth-child(2) {
            padding: 48px 16px !important;
            gap: 36px !important;
          }
          #story > div:first-child > div {
            grid-template-columns: 1fr !important;
          }
          #story > div:first-child > div > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(168, 230, 225, 0.16);
          }
          #story > div:first-child > div > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
