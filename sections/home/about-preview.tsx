"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: "◆",
    bg: "#e0f7f5",
    title: "Integrity",
    desc: "Complete transparency and honesty in every interaction with clients and candidates.",
  },
  {
    icon: "◈",
    bg: "#fef9c3",
    title: "Excellence",
    desc: "Delivering superior results that exceed expectations and create lasting impact.",
  },
  {
    icon: "◉",
    bg: "#e0f7f5",
    title: "Innovation",
    desc: "Cutting-edge strategies and technology to solve complex talent acquisition challenges.",
  },
];

export default function AboutPreview() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  const [missionHover, setMissionHover] = useState(false);

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
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        padding: "clamp(60px, 10vw, 100px) 0",
        background:
          "radial-gradient(circle at 14% 18%, rgba(240, 221, 12, 0.2) 0%, transparent 30%), radial-gradient(circle at 88% 72%, rgba(46,196,182,0.18) 0%, transparent 32%), linear-gradient(135deg, #f8fffe 0%, #ecfff2 48%, #fff9c9 100%)",
      }}
    >
      <div
        className="about-preview-grid"
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 64px)",
          display: "grid",
          gap: "clamp(40px, 8vw, 80px)",
          alignItems: "center",
        }}
      >
        {/* LEFT image */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-52px)",
            transition: "all 0.85s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              aspectRatio: "4/3",
              background:
                "linear-gradient(135deg, #a8e6e1 0%, #2ec4b6 60%, #0e7a70 100%)",
              boxShadow: "0 32px 80px rgba(46,196,182,0.22)",
            }}
          >
            <img
              src="/images/about/about-office.jpg"
              alt="Office"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(13,43,40,0.5) 0%, transparent 55%)",
              }}
            />

            <a
              href="/about#mission-vision"
              onMouseEnter={() => setMissionHover(true)}
              onMouseLeave={() => setMissionHover(false)}
              style={{
                position: "absolute",
                bottom: "clamp(14px, 3vw, 22px)",
                left: "clamp(14px, 3vw, 22px)",
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(16px)",
                borderRadius: 16,
                padding: "clamp(10px, 2vw, 14px) clamp(14px, 3vw, 22px)",
                display: "flex",
                alignItems: "center",
                gap: "clamp(10px, 2vw, 14px)",
                boxShadow: missionHover
                  ? "0 16px 38px rgba(46,196,182,0.28)"
                  : "0 8px 28px rgba(0,0,0,0.12)",
                textDecoration: "none",
                cursor: "pointer",
                transform: missionHover
                  ? "translateY(-5px) scale(1.02)"
                  : "translateY(0) scale(1)",
                transition:
                  "transform 0.28s ease, box-shadow 0.28s ease, background 0.28s ease",
              }}
            >
              <div
                style={{
                  width: "clamp(36px, 8vw, 42px)",
                  height: "clamp(36px, 8vw, 42px)",
                  borderRadius: 12,
                  background: missionHover
                    ? "linear-gradient(135deg, #f5e642, #2ec4b6)"
                    : "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                  transition: "background 0.28s ease, transform 0.28s ease",
                  transform: missionHover ? "rotate(8deg)" : "rotate(0deg)",
                }}
              >
                ★
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
                    color: "#0d2b28",
                  }}
                >
                  Our Mission
                </div>

                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(0.65rem, 1.8vw, 0.75rem)",
                    color: missionHover ? "#0e7a70" : "#6b9e97",
                    transition: "color 0.28s ease",
                  }}
                >
                  Building sustainable careers →
                </div>
              </div>
            </a>

            <div
              style={{
                position: "absolute",
                top: "clamp(14px, 3vw, 20px)",
                right: "clamp(14px, 3vw, 20px)",
                background: "rgba(245,230,66,0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: 14,
                padding: "clamp(6px, 1.5vw, 10px) clamp(12px, 2.5vw, 18px)",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(245,230,66,0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                  fontWeight: 700,
                  color: "#0d2b28",
                  lineHeight: 1,
                }}
              >
                98%
              </div>

              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(0.55rem, 1.5vw, 0.68rem)",
                  color: "#5a4a00",
                  fontWeight: 600,
                }}
              >
                Client Retention
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT content */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(52px)",
            transition: "all 0.85s cubic-bezier(0.22,1,0.36,1) 0.12s",
          }}
        >
          <div
            style={{
              fontSize: "clamp(0.65rem, 2vw, 0.72rem)",
              letterSpacing: "0.14em",
              color: "#4a7c59",
              fontWeight: 700,
              marginBottom: 12,
              textTransform: "uppercase",
            }}
          >
            Who We Are
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.5rem, 5vw, 2.4rem)",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #05fd05 0%, #05b61d 45%, #0b6808 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.18,
              marginBottom: "clamp(14px, 3vw, 20px)",
            }}
          >
            Redefining Recruitment Through{" "}
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
              Human-Centric Values
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#2d5c55",
              fontSize: "clamp(0.85rem, 2.2vw, 0.975rem)",
              lineHeight: 1.85,
              marginBottom: "clamp(24px, 5vw, 40px)",
            }}
          >
            At E Choices, we believe recruitment is more than just filling
            positions — it&apos;s about building sustainable careers and
            thriving organizations that stand the test of time.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px, 3vw, 24px)",
            }}
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "clamp(12px, 2.5vw, 18px)",
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateX(0)" : "translateX(28px)",
                  transition: `all 0.65s ease ${0.3 + index * 0.12}s`,
                }}
              >
                <div
                  style={{
                    width: "clamp(38px, 8vw, 44px)",
                    height: "clamp(38px, 8vw, 44px)",
                    background: value.bg,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                    color: "#2ec4b6",
                    flexShrink: 0,
                    marginTop: 2,
                    border: "1.5px solid rgba(46,196,182,0.2)",
                  }}
                >
                  {value.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 700,
                      color: "#0d2b28",
                      fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                      marginBottom: 5,
                    }}
                  >
                    {value.title}
                  </div>

                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#6b9e97",
                      fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                      lineHeight: 1.7,
                    }}
                  >
                    {value.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-preview-grid {
          grid-template-columns: 1fr;
        }

        @media (min-width: 900px) {
          .about-preview-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
