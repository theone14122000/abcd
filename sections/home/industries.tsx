"use client";

import { useEffect, useRef, useState } from "react";

const industries = [
  { label: "IT & Technologies", image: "/industries/it.webp", icon: "💻", color: "#2ec4b6" },
  { label: "BPO", image: "/industries/bpo.webp", icon: "📞", color: "#e7ad3c" },
  { label: "Finance", image: "/industries/banking.jpeg", icon: "🏦", color: "#0e7a70" },
  { label: "Sales", image: "/industries/marketing.png", icon: "📈", color: "#f5e642" },
  { label: "Health", image: "/industries/healthcare.jpeg", icon: "🏥", color: "#ef4444" },
  { label: "Manufacturing", image: "/industries/manufacturing.jpeg", icon: "🏭", color: "#3b82f6" },
];

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { 
      if (e.isIntersecting) { setVis(true); obs.disconnect(); } 
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section 
      ref={ref} 
      style={{ 
        width: "100%", 
        padding: "100px 0", 
        background: "radial-gradient(circle at 10% 20%, rgba(46,196,182,0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(245,230,66,0.15) 0%, transparent 40%), #f8fffe",
        overflow: "hidden"
      }}
    >
      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Header Section */}
        <div style={{ 
          textAlign: "center", 
          marginBottom: 64, 
          opacity: vis ? 1 : 0, 
          transform: vis ? "translateY(0)" : "translateY(30px)", 
          transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)" 
        }}>
          <span style={{ 
            display: "inline-block",
            padding: "6px 16px",
            background: "rgba(46,196,182,0.12)",
            borderRadius: "50px",
            fontSize: "0.75rem",
            fontWeight: 800,
            color: "#0e7a70",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 16
          }}>
            Our Specialized Sectors
          </span>
          <h2 style={{ 
            fontFamily: "'Clash Display', sans-serif", 
            fontSize: "clamp(2rem, 5vw, 3rem)", 
            fontWeight: 700, 
            color: "#0d2b28",
            lineHeight: 1.1,
            marginBottom: 16
          }}>
            Mastering the Dynamics of <br/>
            <span style={{ color: "#2ec4b6", fontStyle: "italic" }}>Key Industries</span>
          </h2>
          <div style={{ width: 60, height: 4, background: "#f5e642", margin: "0 auto", borderRadius: 2 }} />
        </div>

        {/* Dynamic Cards Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
          gap: 32,
          perspective: "1000px" 
        }}>
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              className="industry-card"
              style={{
                position: "relative",
                height: 420,
                borderRadius: "40px 10px 40px 10px", // Organic asymmetrical shape
                overflow: "hidden",
                cursor: "pointer",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0) rotateX(0)" : "translateY(50px) rotateX(10deg)",
                transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${0.1 + i * 0.1}s`,
                boxShadow: "0 15px 35px rgba(13,43,40,0.1)",
              }}
            >
              {/* Background Image with Zoom Effect */}
              <div 
                className="card-bg"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${ind.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
              />

              {/* Multi-layered Overlays */}
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "linear-gradient(to bottom, rgba(13,43,40,0) 20%, rgba(13,43,40,0.8) 100%)",
                zIndex: 1
              }} />
              
              {/* Glass Shimmer Effect */}
              <div className="shimmer-effect" style={{
                position: "absolute",
                top: 0,
                left: "-150%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                transform: "skewX(-20deg)",
                transition: "0.8s",
                zIndex: 2
              }} />

              {/* Content */}
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                padding: 32, 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "flex-end",
                zIndex: 3 
              }}>
                <div 
                  className="icon-box"
                  style={{
                    width: 50,
                    height: 50,
                    background: "rgba(255,255,255,0.95)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    marginBottom: 16,
                    boxShadow: `0 10px 20px ${ind.color}44`,
                    transform: "translateY(20px)",
                    opacity: 0,
                    transition: "all 0.5s ease"
                  }}
                >
                  {ind.icon}
                </div>

                <h3 style={{ 
                  fontFamily: "'Clash Display', sans-serif", 
                  fontSize: "1.6rem", 
                  color: "#fff", 
                  fontWeight: 700,
                  marginBottom: 8,
                  transform: "translateY(10px)",
                  transition: "all 0.5s ease"
                }}>
                  {ind.label}
                </h3>

                <p className="explore-text" style={{ 
                  color: "rgba(255,255,255,0.7)", 
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  opacity: 0,
                  transform: "translateY(10px)",
                  transition: "all 0.5s ease"
                }}>
                  Explore Careers in {ind.label} →
                </p>
              </div>

              {/* Hover Interaction Styles */}
              <style jsx>{`
                .industry-card:hover {
                  transform: translateY(-10px) rotateY(5deg) !important;
                  box-shadow: 0 30px 60px rgba(13,43,40,0.25) !important;
                }
                .industry-card:hover .card-bg {
                  transform: scale(1.1);
                }
                .industry-card:hover .shimmer-effect {
                  left: 150%;
                }
                .industry-card:hover .icon-box {
                  transform: translateY(0);
                  opacity: 1;
                }
                .industry-card:hover h3 {
                  transform: translateY(0);
                  color: #f5e642;
                }
                .industry-card:hover .explore-text {
                  transform: translateY(0);
                  opacity: 1;
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <a 
            href="/industries" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 12,
              padding: "16px 32px",
              background: "#0d2b28",
              color: "#fff",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 25px rgba(13,43,40,0.2)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.background = "#2ec4b6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#0d2b28";
            }}
          >
            View All Industries 
            <span style={{ fontSize: "1.2rem" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}