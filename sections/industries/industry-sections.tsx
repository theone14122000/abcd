"use client";

import { useEffect, useRef, useState } from "react";

type Industry = {
  id: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  title: string;
  titleGrad: string;
  desc: string;
  checks: string[];
  tags: string[];
  imageBg: string;
  imageUrl: string;
  imageAlt: string;
  reverse: boolean;
  bg: string;
};

const industries: Industry[] = [
  {
    id: "bpo",
    badge: "STAFFING EXCELLENCE",
    badgeColor: "#05b61d",
    badgeBg: "rgba(32, 189, 53, 0.1)",
    title: "BPO & Contact",
    titleGrad: "linear-gradient(135deg, #05fd05 0%, #05b61d 45%, #0b6808 100%)",
    desc: "In the fast-paced world of Business Process Outsourcing, scalability and language proficiency are the predictors of success. We provide human-centric recruitment solutions that prioritize emotional intelligence and technical adaptability.",
    checks: [
      "Scalability and high-volume recruitment experts.",
      "Rigorous language and communication assessments.",
      "Focus on attrition reduction through cultural mapping.",
    ],
    tags: ["Customer Support", "Technical Helpdesk", "Team Leaders"],
    imageBg: "linear-gradient(135deg, #072781 0%, #0aceba 100%)",
    imageUrl: "/images/industries/bpo.png",
    imageAlt: "BPO & Contact Centers",
    reverse: false,
    bg: "radial-gradient(circle at 14% 18%, rgba(240,221,12,0.2) 0%, transparent 30%), radial-gradient(circle at 88% 72%, rgba(46,196,182,0.18) 0%, transparent 32%), linear-gradient(135deg, #f8fffe 0%, #ecfff2 48%, #fff9c9 100%)",
  },
  {
    id: "it",
    badge: "INNOVATION & TECH",
    badgeColor: "#069eb9",
    badgeBg: "rgba(6,158,185,0.1)",
    title: "Information Technology",
    titleGrad: "linear-gradient(135deg, #04c0b7 0%, #069eb9 45%, #0768a0 100%)",
    desc: "Empowering digital transformation by sourcing the architects of tomorrow. From software engineering to cloud infrastructure and AI, we bridge the gap between complex tech requirements and elite human talent.",
    checks: [
      "Agile-certified recruitment specialists.",
      "Deep networks in AI, DevOps, and Full-stack engineering.",
      "Technical screening by industry-active consultants.",
    ],
    tags: ["DevOps Engineers", "Cloud Architects", "Cybersecurity"],
    imageBg: "linear-gradient(135deg, #0d2b28 0%, #dfe6ec 100%)",
    imageUrl: "/images/industries/it.png",
    imageAlt: "Information Technology",
    reverse: true,
    bg: "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
  },
  {
    id: "sales",
    badge: "GROWTH & REVENUE",
    badgeColor: "#05b61d",
    badgeBg: "rgba(5,182,29,0.1)",
    title: "Sales & Marketing",
    titleGrad: "linear-gradient(135deg, #05fd05 0%, #05b61d 45%, #0b6808 100%)",
    desc: "Driving brand strategy and revenue generation through personality-led recruitment. We find the storytellers and the closers who resonate with your brand's unique mission and core values.",
    checks: [
      "Performance-driven candidate profiling.",
      "Creative and strategic marketing leadership.",
    ],
    tags: ["CMO Roles", "Brand Managers", "Inside Sales"],
    imageBg: "linear-gradient(135deg, #1a7a55 0%, #2ec4b6 100%)",
    imageUrl: "/images/industries/sales.png",
    imageAlt: "Sales & Marketing",
    reverse: false,
    bg: "radial-gradient(circle at 14% 18%, rgba(240,221,12,0.2) 0%, transparent 30%), radial-gradient(circle at 88% 72%, rgba(46,196,182,0.18) 0%, transparent 32%), linear-gradient(135deg, #f8fffe 0%, #ecfff2 48%, #fff9c9 100%)",
  },
  {
    id: "manufacturing",
    badge: "OPERATIONAL EXCELLENCE",
    badgeColor: "#069eb9",
    badgeBg: "rgba(6,158,185,0.1)",
    title: "Manufacturing",
    titleGrad: "linear-gradient(135deg, #04c0b7 0%, #069eb9 45%, #0768a0 100%)",
    desc: "Precision recruitment for the backbone of the economy. We focus on operational excellence, supply chain optimization, and engineering talent that can navigate the complexities of Industry 4.0.",
    checks: [
      "Lean and Six Sigma certified talent sourcing.",
      "End-to-end supply chain and logistics experts.",
    ],
    tags: ["Plant Managers", "Quality Control", "Logistics Directors"],
    imageBg: "linear-gradient(135deg, #1a2a3a 0%, #2a4a5a 100%)",
    imageUrl: "/images/industries/manufacturing.jpeg",
    imageAlt: "Manufacturing",
    reverse: true,
    bg: "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
  },
  {
    id: "healthcare",
    badge: "CLINICAL EXCELLENCE",
    badgeColor: "#05b61d",
    badgeBg: "rgba(5,182,29,0.1)",
    title: "Healthcare & Life Sciences",
    titleGrad: "linear-gradient(135deg, #05fd05 0%, #05b61d 45%, #0b6808 100%)",
    desc: "Navigating the sensitive balance of clinical excellence and regulatory compliance. We provide human-centric recruitment for roles that require not just high technical skill, but profound empathy.",
    checks: [
      "Compliance-vetted healthcare professionals.",
      "Niche Life Sciences and R&D talent pools.",
    ],
    tags: ["MRA Specialists", "Lab Technicians", "Practitioners"],
    imageBg: "linear-gradient(135deg, #0e4a6a 0%, #2ec4b6 100%)",
    imageUrl: "/images/industries/healthcare.webp",
    imageAlt: "Healthcare & Life Sciences",
    reverse: false,
    bg: "radial-gradient(circle at 14% 18%, rgba(240,221,12,0.2) 0%, transparent 30%), radial-gradient(circle at 88% 72%, rgba(46,196,182,0.18) 0%, transparent 32%), linear-gradient(135deg, #f8fffe 0%, #ecfff2 48%, #fff9c9 100%)",
  },
];

function IndustryBlock({ ind }: { ind: Industry }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const textSide = (
    <div
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateX(0)" : ind.reverse ? "translateX(48px)" : "translateX(-48px)",
        transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          padding: "5px 14px",
          background: ind.badgeBg,
          border: `1px solid ${ind.badgeColor}30`,
          borderRadius: 50,
          marginBottom: 20,
        }}
        id={ind.id === "bpo" ? "industry-sectors" : undefined}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: ind.badgeColor, display: "inline-block" }} />
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.67rem", fontWeight: 800, letterSpacing: "0.13em", color: ind.badgeColor, textTransform: "uppercase" }}>
          {ind.badge}
        </span>
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "clamp(1.6rem, 2.2vw, 2.2rem)",
          fontWeight: 700,
          lineHeight: 1.16,
          marginBottom: 16,
        }}
      >
        <span
          style={{
            background: ind.titleGrad,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          {ind.title.split(" ")[0]}
        </span>{" "}
        <span style={{ color: "#0d2b28" }}>
          {ind.title.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#2d5c55",
          fontSize: "clamp(0.85rem, 0.94vw, 0.94rem)",
          lineHeight: 1.85,
          marginBottom: 24,
        }}
      >
        {ind.desc}
      </p>

      {/* Checklist */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
        {ind.checks.map((c, i) => (
          <div
            key={c}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(-16px)",
              transition: `all 0.55s ease ${0.35 + i * 0.1}s`,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: ind.titleGrad,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <span style={{ color: "#fff", fontSize: "0.62rem", fontWeight: 700 }}>✓</span>
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.875rem", color: "#2d5c55", lineHeight: 1.6 }}>{c}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {ind.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: ind.badgeColor,
              background: ind.badgeBg,
              border: `1px solid ${ind.badgeColor}25`,
              borderRadius: 50,
              padding: "5px 14px",
              transition: "all 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ind.badgeColor; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = ind.badgeBg; e.currentTarget.style.color = ind.badgeColor; }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  const imageSide = (
    <div
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateX(0)" : ind.reverse ? "translateX(-48px)" : "translateX(48px)",
        transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s",
      }}
    >
      <div
        style={{
          borderRadius: 24,
          overflow: "hidden",
          aspectRatio: "4/3",
          background: ind.imageBg,
          boxShadow: "0 24px 72px rgba(13,43,40,0.18)",
          position: "relative",
          transition: "transform 0.35s ease, box-shadow 0.35s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 36px 88px rgba(13,43,40,0.25)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 24px 72px rgba(13,43,40,0.18)"; }}
      >
        <img
          src={ind.imageUrl}
          alt={ind.imageAlt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,43,40,0.45) 0%, transparent 55%)" }} />
        {/* Yellow top accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${ind.badgeColor}, transparent)` }} />
        {/* Corner label */}
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 18,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(12px)",
            borderRadius: 10,
            padding: "8px 16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          <span style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#0d2b28" }}>{ind.imageAlt}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id={ind.id}
      ref={ref}
      style={{
        width: "100%",
        background: ind.bg,
        padding: "0 24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {ind.reverse ? (
          <>
            {imageSide}
            {textSide}
          </>
        ) : (
          <>
            {textSide}
            {imageSide}
          </>
        )}
      </div>
      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #${ind.id} > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 40px 0 !important;
          }
          #${ind.id} > div > :first-child {
            ${ind.reverse ? "" : "order: 1 !important;"}
          }
          #${ind.id} > div > :last-child {
            ${ind.reverse ? "order: 1 !important;" : ""}
          }
        }
      `}</style>
    </div>
  );
}

export default function IndustrySections() {
  return (
    <>
      {industries.map((ind) => (
        <IndustryBlock key={ind.title} ind={ind} />
      ))}
    </>
  );
}
