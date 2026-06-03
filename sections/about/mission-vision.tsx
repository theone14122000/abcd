"use client";

import { useEffect, useRef, useState } from "react";

const missionTags = ["Ethical Sourcing", "Career Coaching", "Culture Matching"];

export default function MissionVision() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="mission-vision"
      ref={ref}
      style={{
        width: "100%",
        background:
          "radial-gradient(circle at 85% 20%, rgba(46,196,182,0.2) 0%, transparent 30%), linear-gradient(180deg, #f0fdf9 0%, #e8ffe8 45%, #fff9cc 100%)",
        padding: "72px 24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        {/* Mission card (light) */}
        <div
          style={{
            background: "#fff",
            border: "1.5px solid rgba(46,196,182,0.18)",
            borderRadius: 24,
            padding: "40px 36px",
            boxShadow: "0 8px 40px rgba(46,196,182,0.08)",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "linear-gradient(135deg, #e0f7f5, #a8e6e1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              marginBottom: 28,
              border: "1.5px solid rgba(46,196,182,0.2)",
            }}
          >
            🧭
          </div>

          <h3
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.4rem, 1.7vw, 1.7rem)",
              fontWeight: 700,
              color: "#0d2b28",
              marginBottom: 16,
            }}
          >
            Our Mission
          </h3>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#6b9e97",
              fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)",
              lineHeight: 1.82,
              marginBottom: 32,
            }}
          >
            We are dedicated to empowering careers and transforming businesses by delivering
            exceptional, high-impact talent solutions that inspire growth and innovation. We combine deep industry
            expertise with a strong global outlook to provide recruitment services rooted in trust, integrity,
            and excellence.
            Our brand embodies ambition, professionalism, and a forward-thinking vision. From our identity
            to our messaging, every element reflects clarity and purpose. By fostering long-term partnerships
            and maintaining a strong focus on quality and precision, we enable organizations and
            professionals to achieve sustainable success.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {missionTags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#1a9e92",
                  background: "rgba(46,196,182,0.1)",
                  border: "1px solid rgba(46,196,182,0.2)",
                  borderRadius: 50,
                  padding: "5px 14px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Approach card (dark teal) */}
        <div
          style={{
            background: "linear-gradient(145deg, #0e7a70 0%, #0d2b28 100%)",
            borderRadius: 24,
            padding: "40px 36px",
            boxShadow: "0 8px 40px rgba(14,122,112,0.3)",
            position: "relative",
            overflow: "hidden",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.12s",
          }}
        >
          {/* BG decoration */}
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(46,196,182,0.12)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -30, left: -30, width: 150, height: 150, borderRadius: "50%", background: "rgba(245,230,66,0.06)", pointerEvents: "none" }} />

          {/* Icon */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "rgba(46,196,182,0.2)",
              border: "1.5px solid rgba(46,196,182,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              marginBottom: 28,
              position: "relative",
              zIndex: 1,
            }}
          >
            👁️
          </div>

          <h3
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.4rem, 1.7vw, 1.7rem)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
              position: "relative",
              zIndex: 1,
            }}
          >
            Our Approach
          </h3>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(168,230,225,0.85)",
              fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)",
              lineHeight: 1.82,
              position: "relative",
              zIndex: 1,
            }}
          >
            Consultation:- Understanding Requirements
            We begin by understanding your business goals, company culture, and specific hiring needs to
            ensure the right alignment from the start.
            Talent Sourcing:- Evaluation
            Using our strong network and proven methods, we identify, engage, and carefully assess
            qualified candidates to ensure the right fit.

            2. Delivery:- Ongoing Support

            Shortlisting:- Interview Coordination
            We present a well-screened shortlist of suitable candidates, coordinate interviews, and provide
            structured feedback to support informed decisions.
            Onboarding:- Continued Engagement
            Our partnership extends beyond placement, ensuring smooth onboarding and long-term success
            for both the organization and the candidate.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #mission-vision > div {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          #mission-vision {
            padding: 56px 16px !important;
          }
          #mission-vision > div > div {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
