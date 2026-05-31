"use client";

import { useEffect, useRef, useState } from "react";

const miniStats = [
  { icon: "⚡", title: "Rapid Response", sub: "48-hour fulfilment" },
  { icon: "🛡️", title: "Pre-Vetted", sub: "Ready to deploy" },
];

export default function Staffing() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  const [bar, setBar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true);
        setTimeout(() => setBar(true), 600);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="staffing"
      ref={ref}
      style={{
        width: "100%",
        background: "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
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
        {/* LEFT — image */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-48px)",
            transition: "all 0.85s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "3/3",
              background: "linear-gradient(135deg, #1a4a42 0%, #0e7a70 100%)",
              boxShadow: "0 28px 72px rgba(14,122,112,0.2)",
              position: "relative",
              border: "2px solid rgba(46,196,182,0.2)",
            }}
          >
            <img src="/images/services/staffing.jpg" alt="Temporary Staffing" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,43,40,0.5) 0%, transparent 55%)" }} />
          </div>
        </div>

        {/* RIGHT — text */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(48px)",
            transition: "all 0.85s cubic-bezier(0.22,1,0.36,1) 0.12s",
          }}
        >
          {/* icon */}
          <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(245,230,66,0.2)", border: "1.5px solid rgba(200,180,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: 24 }}>
            🔄
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "2.2rem",
              fontWeight: 700,
              background:"linear-gradient(135deg, #3ef13e 0%, #27bd3b 45%, #15ac10 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              marginBottom: 16,
              lineHeight: 1.18,
            }}
          >
            Staffing{" "}<br />
            <span style={{ background: "linear-gradient(135deg, #09c4ca 0%, #079499 45%, #095cf7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", WebkitTextFillColor: "transparent" }}>
            
            </span>
          </h2>

          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2d5c55", fontSize: "0.96rem", lineHeight: 1.82, marginBottom: 32 }}>
            <b>Staffing:-</b><br />Agility for the unexpected. Whether it's seasonal surges, maternity leave, or specialized project needs, we provide qualified personnel who hit the ground running.
            <br /><b>Scale on Demand:</b> Adjust team sizes instantly without long-term financial commitments.
            <br /><b>Reduced Overhead:</b> Lower your administrative costs, payroll processing, and benefits liabilities.
            <br /><b>Rapid Deployment:</b> Fill critical operational gaps within days, minimizing costly downtime.
            <br /><b>Try-Before-Buy:</b> Evaluate a worker's performance on-site before making a permanent offer.
          </p>
            {/* Progress bar */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#2d5c55" }}>Candidate Readiness</span>
              <span style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "#0d2b28" }}>95%</span>
            </div>
            <div style={{ height: 8, borderRadius: 50, background: "rgba(46,196,182,0.15)", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: bar ? "95%" : "0%",
                  background: "linear-gradient(90deg, #2ec4b6, #27bd3b)",
                  borderRadius: 50,
                  transition: "width 1.2s cubic-bezier(0.34,1.1,0.64,1)",
                }}
              />
            </div>
          </div><br />
          {/* Mini stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
            {miniStats.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(10px)",
                  border: "1.5px solid rgba(46,196,182,0.18)",
                  borderRadius: 14,
                  padding: "18px 18px",
                  boxShadow: "0 4px 16px rgba(46,196,182,0.08)",
                }}
              >
                <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#0d2b28", marginBottom: 3 }}>{s.title}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", color: "#6b9e97" }}>{s.sub}</div>
              </div>
            ))}
          </div>          
        </div>
      </div>
    </section>
  );
}
