"use client";

import { useEffect, useRef, useState } from "react";

const leaders = [
  {
    name: "Elena Cho",
    title: "Founder & CEO",
    image: "/images/about/elena.jpg",
    avatarBg: "linear-gradient(135deg, #a8e6e1, #2ec4b6)",
    quote:
      "\"Recruitment is the art of seeing potential when others see titles on a page.\"",
  },
  {
    name: "Marcus Vane",
    title: "Head of Talent Strategy",
    image: "/images/about/marcus.jpg",
    avatarBg: "linear-gradient(135deg, #0e7a70, #0d2b28)",
    quote:
      "\"We leverage data to confirm what our intuition already whispers.\"",
  },
  {
    name: "Sarah Jenkins",
    title: "Director of Client Experience",
    image: "/images/about/sarah.png",
    avatarBg: "linear-gradient(135deg, #fef9c3, #f5e642)",
    quote:
      "\"Efficiency is only valuable when it doesn't sacrifice the candidate experience.\"",
  },
];

export default function Leadership() {
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
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
    id="leadership"
      ref={ref}
      style={{
        width: "100%",
        background:"radial-gradient(circle at 20% 10%, rgba(46,196,182,0.18) 0%, transparent 28%), linear-gradient(180deg, #eaffea 0%, #f8fffe 52%, #fffde8 100%)",
        padding: "100px 64px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 72,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Meet the Team
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "2.4rem",
              fontWeight: 700,
              background:"linear-gradient(135deg, hsl(78, 83%, 56%) 0%, #0cc228 45%, #98c007 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              marginBottom: 14,
            }}
          >
            Visionary Leadership
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#6b9e97",
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: 440,
              margin: "0 auto",
            }}
          >
            Led by experts who have navigated the evolving world of talent
            management for decades.
          </p>
        </div>

        {/* Leader cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="lift"
              style={{
                background: "#fff",
                border: "1.5px solid rgba(46,196,182,0.14)",
                borderRadius: 24,
                padding: "44px 36px",
                textAlign: "center",
                boxShadow: "0 6px 32px rgba(46,196,182,0.08)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(44px)",
                transition: `opacity 0.75s ease ${
                  0.08 + index * 0.15
                }s, transform 0.75s ease ${0.08 + index * 0.15}s`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  
                }}
              />

              {/* Avatar image circle */}
              <div
                style={{
                  width: 108,
                  height: 108,
                  borderRadius: "50%",
                  background: leader.avatarBg,
                  margin: "0 auto 24px",
                  boxShadow: "0 12px 36px rgba(46,196,182,0.25)",
                  border: "4px solid rgba(255,255,255,0.95)",
                  outline: "2px solid rgba(46,196,182,0.2)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                  }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0d2b28",
                  marginBottom: 6,
                }}
              >
                {leader.name}
              </h3>

              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#2ec4b6",
                  letterSpacing: "0.04em",
                  marginBottom: 24,
                  textTransform: "uppercase",
                }}
              >
                {leader.title}
              </div>

              <div
                style={{
                  width: 48,
                  height: 2,
                  background: "linear-gradient(90deg, #2ec4b6, #f5e642)",
                  borderRadius: 2,
                  margin: "0 auto 20px",
                }}
              />

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#6b9e97",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                {leader.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
