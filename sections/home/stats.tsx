"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, suffix: "k+", label: "Candidates Placed", icon: "🎯" },
  { value: 108, suffix: "+", label: "Global Clients", icon: "🌐" },
  { value: 90, suffix: "%", label: "Success Ratio", icon: "📈" },
  { value: 4, suffix: "+", label: "Years Experience", icon: "⭐" },
];

function Counter({ target, suffix, run }: { target: number; suffix: string; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const dur = 1800;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setN(Math.floor(e * target));
      if (p < 1) requestAnimationFrame(tick);
      else setN(target);
    };
    requestAnimationFrame(tick);
  }, [run, target]);
  return <>{n}{suffix}</>;
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        padding: "clamp(50px, 8vw, 80px) 0",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.55) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 4vw, 64px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(140px, 40vw, 280px), 1fr))", gap: "clamp(16px, 3vw, 28px)" }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="lift"
              style={{
                background: "linear-gradient(145deg, #f0fdf9, #e8fffe)",
                border: "1.5px solid rgba(46,196,182,0.18)",
                borderRadius: 22,
                padding: "clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(46,196,182,0.08)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(36px)",
                transition: `opacity 0.7s ease ${i * 0.13}s, transform 0.7s ease ${i * 0.13}s`,
              }}
            >
              <div style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", marginBottom: "clamp(10px, 2vw, 14px)" }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: "clamp(6px, 1.5vw, 10px)",
                  background: "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Counter target={s.value} suffix={s.suffix} run={vis} />
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(0.75rem, 2vw, 0.88rem)", color: "#6b9e97", fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(46,196,182,0.15);
        }
      `}</style>
    </section>
  );
}
