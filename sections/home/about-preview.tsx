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
        padding: "100px 0",
        background:
          "radial-gradient(circle at 14% 18%, rgba(240, 221, 12, 0.2) 0%, transparent 30%), radial-gradient(circle at 88% 72%, rgba(46,196,182,0.18) 0%, transparent 32%), linear-gradient(135deg, #f8fffe 0%, #ecfff2 48%, #fff9c9 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
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

            {/* Bottom clickable mission badge */}
            <a
              href="/about#mission-vision"
              onMouseEnter={() => setMissionHover(true)}
              onMouseLeave={() => setMissionHover(false)}
              style={{
                position: "absolute",
                bottom: 22,
                left: 22,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(16px)",
                borderRadius: 16,
                padding: "14px 22px",
                display: "flex",
                alignItems: "center",
                gap: 14,
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
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: missionHover
                    ? "linear-gradient(135deg, #f5e642, #2ec4b6)"
                    : "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
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
                    fontSize: "0.9rem",
                    color: "#0d2b28",
                  }}
                >
                  Our Mission
                </div>

                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: missionHover ? "#0e7a70" : "#6b9e97",
                    transition: "color 0.28s ease",
                  }}
                >
                  Building sustainable careers →
                </div>
              </div>
            </a>

            {/* Top-right bubble */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "rgba(245,230,66,0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: 14,
                padding: "10px 18px",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(245,230,66,0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "1.5rem",
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
                  fontSize: "0.68rem",
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
          <div className="eyebrow">Who We Are</div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "2.4rem",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #05fd05 0%, #05b61d 45%, #0b6808 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.18,
              marginBottom: 20,
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
              fontSize: "0.975rem",
              lineHeight: 1.85,
              marginBottom: 40,
            }}
          >
            At E Choices, we believe recruitment is more than just filling
            positions — it&apos;s about building sustainable careers and
            thriving organizations that stand the test of time.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {values.map((value, index) => (
              <div
                key={value.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 18,
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateX(0)" : "translateX(28px)",
                  transition: `all 0.65s ease ${0.3 + index * 0.12}s`,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: value.bg,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
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
                      fontSize: "0.95rem",
                      marginBottom: 5,
                    }}
                  >
                    {value.title}
                  </div>

                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#6b9e97",
                      fontSize: "0.875rem",
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
    </section>
  );
}
