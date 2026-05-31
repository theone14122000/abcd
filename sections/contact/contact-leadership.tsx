"use client";

import { useEffect, useRef, useState } from "react";

const leaders = [
  {
    name: "Anirudh Savita",
    role: "Founder",
    text: "Bringing 4+ years of specialized experience in recruitment to drive excellence.",
  },
  {
    name: "Himanshu Singh",
    role: "Co-Founder",
    text: "Dedicated to building sustainable talent pipelines and innovative staffing strategies.",
  },
  {
    name: "Saurabh Dingra",
    role: "Co-Founder",
    text: "Leading operational excellence and fostering key partnerships across diverse industries.",
  },
];

export default function ContactLeadership() {
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
      ref={ref}
      style={{
        width: "100%",
        padding: "88px 0",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.55) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
      }}
    >
      <div className="inner">
        <div
          style={{
            textAlign: "center",
            marginBottom: 58,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.7s ease",
          }}
        >
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            The Driving Force
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "2.3rem",
              fontWeight: 700,
              color: "#0d2b28",
            }}
          >
            Our Leadership
          </h2>
        </div>

        <div
          className="contact-leadership-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="lift"
              style={{
                background: "rgba(255,255,255,0.82)",
                border: "1.5px solid rgba(46,196,182,0.16)",
                borderRadius: 22,
                padding: "42px 32px",
                textAlign: "center",
                boxShadow: "0 18px 50px rgba(13,43,40,0.06)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(38px)",
                transition: `all 0.7s ease ${index * 0.12}s`,
              }}
            >
              <div
                style={{
                  width: 78,
                  height: 78,
                  margin: "0 auto 24px",
                  borderRadius: "50%",
                  background: "#e4f1df",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2f6b37",
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                }}
              >
                {leader.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>

              <h3
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0d2b28",
                  marginBottom: 4,
                }}
              >
                {leader.name}
              </h3>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.76rem",
                  color: "#6b9e97",
                  marginBottom: 16,
                }}
              >
                {leader.role}
              </p>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.86rem",
                  color: "#2d5c55",
                  lineHeight: 1.75,
                }}
              >
                {leader.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-leadership-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
