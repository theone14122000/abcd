"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const leaders = [
  {
    name: "Anirudh Savita",
    title: "Founder & CEO",
    quote:
      "“Great recruitment is not about filling positions — it is about shaping futures, building trust, and creating lasting impact.”",
    accent: "linear-gradient(135deg, #2ec4b6 0%, #0e7a70 100%)",
    glow: "rgba(46,196,182,0.22)",
    delay: 0,
  },
  {
    name: "Himanshu Singh",
    title: "Co-founder & COO",
    quote:
      "“Exceptional hiring experiences begin with listening carefully, acting thoughtfully, and delivering with consistency and care.”",
    accent: "linear-gradient(135deg, #f5e642 0%, #9bb60a 100%)",
    glow: "rgba(245,230,66,0.22)",
    delay: 0.15,
  },
  {
    name: "Saurabh Dhingra",
    title: "Head of Talent Strategy",
    quote:
      "“The strongest teams are built where insight meets empathy, and where strategy is guided by a deep understanding of people.”",
    accent: "linear-gradient(135deg, #0d2b28 0%, #1a9e92 100%)",
    glow: "rgba(14,122,112,0.18)",
    delay: 0.3,
  },
];

interface CardProps {
  leader: typeof leaders[0];
  vis: boolean;
}

function LeaderCard({ leader, vis }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePos({ x: x * 100, y: y * 100 });
    
    const rotateX = (y - 0.5) * -20;
    const rotateY = (x - 0.5) * 20;
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      className={`leader-card ${vis ? "show" : ""} ${isHovered ? "hovered" : ""}`}
      style={
        {
          transitionDelay: `${0.08 + leader.delay}s`,
          ["--card-accent" as string]: leader.accent,
          ["--card-glow" as string]: leader.glow,
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) ${vis ? "translateY(0)" : "translateY(40px)"}`,
        } as CSSProperties
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic spotlight effect */}
      <div 
        className="card-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.25) 0%, transparent 50%)`,
        }}
      />
      
      {/* Animated border gradient */}
      <div className="card-border-gradient" />
      
      <div className="card-inner">
        {/* Floating particles */}
        <div className="floating-particle p1" />
        <div className="floating-particle p2" />
        
        <div className="card-shine" />
        
        <div className="top-accent" />
        
        <div className="role-badge">
          <span className="badge-dot" />
          {leader.title}
        </div>

        <h3 className="leader-name">{leader.name}</h3>

        <div className="divider" />

        <p className="quote">{leader.quote}</p>

        <div className="card-footer">
          <span className="footer-tag">Vision • People • Excellence</span>
        </div>
      </div>

      <style>{`
        .leader-card {
          position: relative;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75));
          border: 1px solid rgba(46,196,182,0.12);
          box-shadow: 0 14px 36px rgba(13,43,40,0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          opacity: 0;
          transform-style: preserve-3d;
          transition: 
            transform 0.1s ease-out,
            opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 0.3s ease;
          cursor: pointer;
          overflow: hidden;
        }

        .leader-card.show {
          opacity: 1;
        }

        .leader-card.hovered {
          box-shadow: 
            0 30px 60px rgba(13,43,40,0.12),
            0 0 0 1px rgba(46,196,182,0.2),
            0 20px 40px var(--card-glow);
        }

        .card-spotlight {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 2;
        }

        .leader-card.hovered .card-spotlight {
          opacity: 1;
        }

        .card-border-gradient {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          padding: 2px;
          background: var(--card-accent);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .leader-card.hovered .card-border-gradient {
          opacity: 0.6;
        }

        .card-inner {
          position: relative;
          z-index: 3;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 38px 28px 32px;
          transform: translateZ(20px);
        }

        .floating-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--card-accent);
          opacity: 0;
          filter: blur(2px);
        }

        .floating-particle.p1 {
          top: 20%;
          left: 15%;
          animation: floatParticle 6s ease-in-out infinite;
        }

        .floating-particle.p2 {
          bottom: 25%;
          right: 20%;
          width: 8px;
          height: 8px;
          animation: floatParticle 8s ease-in-out infinite reverse;
          animation-delay: -2s;
        }

        .leader-card.hovered .floating-particle {
          opacity: 0.6;
        }

        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -30px); }
        }

        .card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255,255,255,0.4) 50%,
            transparent 70%
          );
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0.8s ease;
          pointer-events: none;
        }

        .leader-card:hover .card-shine {
          transform: translateX(200%) skewX(-15deg);
        }

        .top-accent {
          width: 80px;
          height: 4px;
          border-radius: 999px;
          background: var(--card-accent);
          margin-bottom: 24px;
          box-shadow: 0 4px 15px var(--card-glow);
          transform: scaleX(0.8);
          transition: transform 0.4s ease;
        }

        .leader-card:hover .top-accent {
          transform: scaleX(1);
        }

        .role-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(46,196,182,0.18);
          color: #0e7a70;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 22px;
          box-shadow: 0 4px 12px rgba(13,43,40,0.04);
          transform: translateZ(30px);
          transition: all 0.3s ease;
        }

        .leader-card:hover .role-badge {
          transform: translateZ(30px) scale(1.05);
          box-shadow: 0 8px 20px rgba(13,43,40,0.08);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2ec4b6;
          box-shadow: 0 0 0 4px rgba(46,196,182,0.2);
          animation: pulseBadge 2s ease-in-out infinite;
        }

        @keyframes pulseBadge {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        .leader-name {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(1.4rem, 2vw, 1.8rem);
          font-weight: 700;
          color: #0d2b28;
          line-height: 1.1;
          margin: 0 0 16px;
          transform: translateZ(40px);
          transition: transform 0.3s ease;
        }

        .leader-card:hover .leader-name {
          transform: translateZ(50px) scale(1.02);
        }

        .divider {
          width: 60px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #2ec4b6, #f5e642);
          margin-bottom: 22px;
          transform: translateZ(30px);
          transition: width 0.4s ease;
        }

        .leader-card:hover .divider {
          width: 80px;
        }

        .quote {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          color: #4a6b66;
          line-height: 1.9;
          font-style: italic;
          margin: 0;
          flex: 1;
          transform: translateZ(25px);
          transition: all 0.3s ease;
        }

        .leader-card:hover .quote {
          color: #2d4a46;
        }

        .card-footer {
          width: 100%;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid rgba(13,43,40,0.06);
          transform: translateZ(20px);
        }

        .footer-tag {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          color: #6b9e97;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        .leader-card:hover .footer-tag {
          color: #0e7a70;
        }

        @media (max-width: 980px) {
          .leader-card {
            transform: none !important;
          }
        }

        @media (max-width: 640px) {
          .card-inner {
            padding: 32px 24px 28px;
          }
          
          .leader-name {
            font-size: 1.3rem;
          }
          
          .quote {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

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
      id="contact-leadership"
      ref={ref}
      style={{
        width: "100%",
        padding: "90px 24px",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.18) 0%, transparent 35%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.25) 0%, transparent 35%), radial-gradient(circle at 50% 80%, rgba(245,230,66,0.12) 0%, transparent 40%), linear-gradient(180deg, #e8f5e9 0%, #c8e6c9 40%, #f1f8e9 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background blobs */}
      <div 
        className="bg-blob blob-1"
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          top: "-100px",
          left: "-100px",
          background: "rgba(46,196,182,0.12)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "blobFloat 20s ease-in-out infinite",
        }}
      />
      <div 
        className="bg-blob blob-2"
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          bottom: "-80px",
          right: "-80px",
          background: "rgba(245,230,66,0.15)",
          borderRadius: "50%",
          filter: "blur(70px)",
          animation: "blobFloat 25s ease-in-out infinite reverse",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 60,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 22px",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(46,196,182,0.25)",
              borderRadius: 50,
              marginBottom: 18,
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(46,196,182,0.1)",
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#0e7a70",
                textTransform: "uppercase",
              }}
            >
              The Driving Force
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 16,
              background: "linear-gradient(135deg, #0d2b28 0%, #0e7a70 50%, #2ec4b6 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Leadership That Inspires
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#5a7c76",
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              lineHeight: 1.8,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Meet the visionaries shaping our mission with strategy, empathy, and an unwavering commitment to excellence.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
            perspective: "1000px",
          }}
        >
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} leader={leader} vis={vis} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blobFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        @media (max-width: 980px) {
          #contact-leadership {
            padding: 70px 20px !important;
          }
        }

        @media (max-width: 640px) {
          #contact-leadership {
            padding: 60px 16px !important;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}