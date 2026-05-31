"use client";

import { useEffect, useRef, useState } from "react";

const checks = [
  "Rigorous multi-stage vetting process",
  "Cultural alignment assessment",
  "98% retention rate after first year",
];

const stats = [
  { value: "6k+", label: <b>Hires Made</b> },
  { value: "15 Days", label: <b>Avg. Time-to-Hire</b> },
];

export default function PermanentPlacement() {
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
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="permanent-placement"
      ref={ref}
      style={{
        width: "100%",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.55) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
        padding: "0 64px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "96px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* LEFT — text */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-48px)",
            transition: "all 0.85s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "rgba(46,196,182,0.15)",
              border: "1.5px solid rgba(46,196,182,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              marginBottom: 24,
            }}
          >
            👥
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "2.2rem",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #10f110 0%, #09be21 45%, #0d9608 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              marginBottom: 16,
              lineHeight: 1.18,
            }}
          >
            Permanent{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #09ccda 0%, #0da5c0 45%, #0e5df0 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Placement
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#2d5c55",
              fontSize: "0.96rem",
              lineHeight: 1.82,
              marginBottom: 28,
            }}
          >
            Building lasting foundations for your business. We identify
            individuals who not only possess the skills but align perfectly with
            your organizational culture and long-term vision.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 36,
            }}
          >
            {checks.map((check) => (
              <div
                key={check}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{ color: "#fff", fontSize: "0.7rem", fontWeight: 700 }}
                  >
                    ✓
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.88rem",
                    color: "#2d5c55",
                    fontWeight: 500,
                  }}
                >
                  {check}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 40 }}>
            {stats.map((stat, index) => (
              <div
                key={`${stat.value}-${index}`}
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.6s ease ${0.4 + index * 0.12}s`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "#0d2b28",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#6b9e97",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image card */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(48px)",
            transition: "all 0.85s cubic-bezier(0.22,1,0.36,1) 0.12s",
          }}
        >
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "4/3",
              
              boxShadow: "0 28px 72px rgba(14,122,112,0.25)",
              position: "relative",
            }}
          >
            <img
              src="/images/services/placement.jpg"
              alt="Permanent Placement"
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
                  "linear-gradient(135deg, rgba(14,122,112,0.3) 0%, transparent 60%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
