"use client";

import { useEffect, useRef, useState } from "react";

const consultingTags = ["Employer Brand", "Process Audit", "Diversity & Inclusion"];
const outplacementTags = ["Resume Prep", "Career Coaching", "Interview Skills"];

export default function Consulting() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Card = ({
    icon, title, desc, tags, delay, accent,
  }: {
    icon: string; title: string; desc: string; tags: string[]; delay: number; accent: string;
  }) => (
    <div
      className="lift"
      style={{
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(16px)",
        border: "1.5px solid rgba(46,196,182,0.16)",
        borderRadius: 22,
        padding: "40px 36px",
        boxShadow: "0 8px 36px rgba(46,196,182,0.08)",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: accent }} />

      {/* Icon */}
      <div style={{ fontSize: "2rem", marginBottom: 22 }}>{icon}</div>

      <h3
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "1.55rem",
          fontWeight: 700,
          background:"linear-gradient(135deg, #18f118 0%, #07c220 45%, #0c8d07 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
          marginBottom: 14,
          lineHeight: 1.2,
        }}
      >
        {title.split(" ").slice(0, -1).join(" ")}{" "}
        <span style={{ background: "linear-gradient(135deg, #1eafe9 0%, #0894a7 45%, #143ae7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", WebkitTextFillColor: "transparent" }}>
          {title.split(" ").slice(-1)}
        </span>
      </h3>

      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6b9e97", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 28 }}>
        {desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#1a9e92",
              background: "rgba(46,196,182,0.1)",
              border: "1px solid rgba(46,196,182,0.2)",
              borderRadius: 50,
              padding: "4px 12px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        background: "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
        padding: "96px 64px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        <Card
          icon="🔧"
          title="Recruitment Consulting"
          desc="Optimize your internal processes. From employer branding to ATS implementation, we refine how you attract and retain talent."
          tags={consultingTags}
          delay={0.1}
          accent="linear-gradient(90deg, #2ec4b6, #f5e642)"
        />
        <Card
          icon="🤝"
          title="Outplacement Support"
          desc="Compassionate transition services for employees. We provide career coaching, resume workshops, and direct networking opportunities."
          tags={outplacementTags}
          delay={0.22}
          accent="linear-gradient(90deg, #f5e642, #2ec4b6)"
        />
      </div>
    </section>
  );
}
