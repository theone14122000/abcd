"use client";

import { useEffect, useRef, useState } from "react";

const industries = [
  {
    label: "IT & Technologies",
    image: "/industries/it.png",
    icon: "💻",
  },
  {
    label: "BPO",
    image: "/industries/bpo.jpeg",
    icon: "📞",
  },
  {
    label: "Finance",
    image: "/industries/banking.jpg",
    icon: "🏦",
  },
  {
    label: "Sales",
    image: "/industries/marketing.jpg",
    icon: "📈",
  },
  {
    label: "Health",
    image: "/industries/healthcare.jfif",
    icon: "🏥",
  },
  {
    label: "Manufacturing",
    image: "/industries/manufacturing.jpg",
    icon: "🏭",
  },
];

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ width: "100%", padding: "100px 0", background:
                "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(241, 235, 158, 0.52) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
               }}>
      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 64px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap", gap: 24, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: "all 0.7s ease" }}>
          <div>
            <div className="eyebrow">Our Expertise</div>
            <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "2.4rem", fontWeight: 700, background:
      "linear-gradient(135deg, #3ef13e 0%, #27bd3b 45%, #15ac10 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
     marginBottom: 12, maxWidth: 500 }}>Specialized Expertise Across Key Industries</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6b9e97", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 420 }}>Vertical specialists with deep knowledge of your specific market dynamics.</p>
          </div>
          <a href="/industries" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "#2ec4b6", display: "inline-flex", alignItems: "center", gap: 6, transition: "gap 0.2s", flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.gap = "12px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.gap = "6px"; }}
          >View all sectors →</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              style={{
  position: "relative",
  borderRadius: 20,
  overflow: "hidden",
  height: 168,
  cursor: "pointer",

  backgroundImage: `
    linear-gradient(
      to top,
      rgba(13,43,40,0.75) 0%,
      rgba(13,43,40,0.35) 45%,
      rgba(13,43,40,0.1) 100%
    ),
    url(${ind.image})
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  opacity: vis ? 1 : 0,
  transform: vis
    ? "scale(1) translateY(0)"
    : "scale(0.94) translateY(22px)",

  transition: `all 0.65s ease ${0.08 + i * 0.09}s`,

  boxShadow: "0 8px 28px rgba(14,122,112,0.2)",
}}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(14,122,112,0.35)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(14,122,112,0.2)"; }}
            >
              {/* Yellow accent stripe */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #f5e642, transparent)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,43,40,0.65) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", top: 18, right: 18, fontSize: "1.8rem", opacity: 0.55 }}>{ind.icon}</div>
              <span style={{ position: "absolute", bottom: 18, left: 20, right: 20, fontFamily: "'Clash Display', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.3)", zIndex: 1, display: "block" }}>
                {ind.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}