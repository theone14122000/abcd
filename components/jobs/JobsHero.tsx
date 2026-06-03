"use client";

import { useEffect, useState } from "react";

interface Props { search: string; setSearch: (val: string) => void; }

export default function JobsHero({ search, setSearch }: Props) {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  return (
    <section id="jobs-hero" style={{ width: "100%", minHeight: "50vh", background: "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 76, position: "relative", overflow: "hidden" }}>
      <div className="blob-drift" style={{ position: "absolute", top: "-10%", left: "-5%", width: 440, height: 440, background: "rgba(46,196,182,0.07)", borderRadius: "50%", filter: "blur(56px)", pointerEvents: "none" }} />
      <div className="blob-drift" style={{ position: "absolute", bottom: "-10%", right: "-5%", width: 380, height: 380, background: "rgba(245,230,66,0.09)", borderRadius: "50%", filter: "blur(48px)", pointerEvents: "none", animationDelay: "-3s" }} />

      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", padding: "60px 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div className="jobs-hero-card" style={{ maxWidth: 1100, margin: "0 auto", borderRadius: 34, padding: "48px 32px", textAlign: "center", border: "1px solid rgba(46,196,182,0.18)", boxShadow: "0 24px 70px rgba(13,43,40,0.08)", opacity: ready ? 1 : 0, transform: ready ? "translateY(0)" : "translateY(28px)", transition: "all 0.75s ease" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 20px", background: "rgba(255,255,255,0.55)", border: "1px solid rgba(46,196,182,0.24)", borderRadius: 50, marginBottom: 24, boxShadow: "0 10px 24px rgba(13,43,40,0.06)" }}>
            <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#2ec4b6", display: "inline-block" }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", color: "#1a9e92", textTransform: "uppercase" }}>Opportunities Await</span>
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)", fontWeight: 700, background: "linear-gradient(135deg, #0d2b28 0%, #0e7a70 45%, #2f6b37 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", WebkitTextFillColor: "transparent", lineHeight: 1.12, marginBottom: 20 }}>
            Your Next Career Milestone<br />
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #03828b 0%, #058292 45%, #063f80 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", WebkitTextFillColor: "transparent", position: "relative", display: "inline-block" }}>
              Starts Here
              <svg style={{ position: "absolute", bottom: -8, left: 0, width: "100%", height: 10 }} viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0,7 Q25,1 50,6 Q75,11 100,5 Q125,0 150,6 Q175,11 200,5" stroke="#a79908" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
              </svg>
            </span>
          </h1>

          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2d5c55", fontSize: "clamp(0.88rem, 1vw, 1rem)", lineHeight: 1.88, maxWidth: 680, margin: "0 auto 32px", padding: "0 8px" }}>
            Explore high-growth opportunities crafted for ambitious professionals. We connect premium talent with the world's most innovative companies.
          </p>

          {/* Search Bar */}
          <div className="jobs-search-bar" style={{ display: "flex", maxWidth: 620, margin: "0 auto", background: "#fff", borderRadius: 50, overflow: "hidden", boxShadow: "0 8px 32px rgba(13,43,40,0.1)", border: "1px solid rgba(46,196,182,0.15)" }}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Job title or keywords" style={{ flex: 1, padding: "14px 20px", border: "none", outline: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", color: "#0d2b28", background: "transparent", minWidth: 0 }} />
            <button style={{ padding: "14px 28px", background: "linear-gradient(135deg, #0e7a70, #0d2b28)", color: "#fff", border: "none", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>Search</button>
          </div>
        </div>
      </div>

      <style>{`
        .jobs-hero-card {
          background: radial-gradient(circle at 15% 20%, rgba(46,196,182,0.18), transparent 32%),
            linear-gradient(120deg, #9dd4cc, #88f588, #f7eb6c, #a4eba4, #9df7e9);
          background-size: 180% 180%;
          animation: jobsCardFlow 8s ease-in-out infinite;
        }
        @keyframes jobsCardFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 720px) {
          .jobs-hero-card { padding: 36px 18px !important; }
          .jobs-search-bar { flex-direction: column !important; border-radius: 16px !important; }
          .jobs-search-bar input { border-bottom: 1px solid rgba(46,196,182,0.15) !important; border-radius: 0 !important; }
          .jobs-search-bar button { border-radius: 0 0 16px 16px !important; }
        }
      `}</style>
    </section>
  );
}
