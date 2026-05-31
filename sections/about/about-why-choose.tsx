"use client";

import { useEffect, useRef, useState } from "react";

const highlights = ["Precision", "Industry Insight", "Excellence"];

const whyChoose = [
  {
    number: "01",
    title: "Industry Expertise",
    text: "Our consultants bring deep sector knowledge, helping us understand both technical requirements and cultural dynamics.",
  },
  {
    number: "02",
    title: "Tailored Recruitment Solutions",
    text: "We develop customized hiring strategies with focused attention and strategic alignment for every client and candidate.",
  },
  {
    number: "03",
    title: "Proven Success",
    text: "We have successfully placed professionals in roles that align with their skills, ambitions, and long-term goals.",
  },
  {
    number: "04",
    title: "Extensive Talent Network",
    text: "Our expanding database allows us to connect organizations with high-calibre talent while reducing time-to-hire.",
  },
  {
    number: "05",
    title: "Global Reach",
    text: "With cross-border hiring understanding, we support regional and multinational businesses in achieving talent objectives.",
  },
];

export default function AboutWhyChoose() {
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
    id="about-why-choose"
  ref={ref}
  style={{
    width: "100%",
    background:
  "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.55) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
   padding: "100px 0",
    overflow: "hidden",
  }}
>

      <div className="inner">
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          {/* ABOUT US CARD */}
          <div
            className="lift"
            style={{
              background: "#fff",
              border: "1.5px solid rgba(46,196,182,0.18)",
              borderRadius: 28,
              padding: "44px",
              boxShadow: "0 18px 55px rgba(46,196,182,0.08)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(-40px)",
              transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 16,
                background: "linear-gradient(135deg, #e0f7f5, #a8e6e1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.45rem",
                marginBottom: 28,
                border: "1.5px solid rgba(46,196,182,0.2)",
              }}
            >
              ✦
            </div>

            <h4
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1.72rem",
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#1a9e92",
                marginBottom: 12,
              }}
            >
              About Us:-
            </h4>

            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "2rem",
                lineHeight: 1.15,
                fontWeight: 700,
                color: "#0d2b28",
                marginBottom: 22,
                letterSpacing: "-0.03em",
              }}
            >
              Transforming hiring into a strategic advantage.
            </h2>

            <div style={{ display: "grid", gap: 18 }}>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#2d5c55",
                  fontSize: "0.94rem",
                  lineHeight: 1.85,
                }}
              >
                E Choices Career Solution specializes in connecting exceptional
                talent with forward-thinking organizations through precision,
                industry insight, and a strong commitment to excellence in
                recruitment and talent acquisition.
              </p>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#6b9e97",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                }}
              >
                We go beyond traditional staffing by identifying professionals
                who align with both skill requirements and the cultural vision
                of our clients, helping businesses scale with confidence while
                empowering professionals to achieve meaningful careers.
              </p>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#4CBB17",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                }}
              >
                For job seekers, we act as trusted career architects and advocates in a crowded employment market.
               We look past the resume to discover each candidate's unique strengths, leadership potential, and personal career aspirations.
               By providing transparent guidance and access to exclusive opportunities, we bridge the gap between ambition and execution, placing talent in roles where
                they can truly thrive.
                </p>
                <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#5F8575",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                }}
              >
                Driven by integrity and a passion for human capital, we continuously refine our methodologies to stay ahead of the recruitment curve. 
                Whether you are 
                a startup looking to build your core team or an established enterprise restructuring for the future, we deliver 
                the human infrastructure necessary 
                for sustained innovation. We do not just fill open positions; we forge lasting professional partnerships that elevate businesses and change lives
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginTop: 32,
              }}
            >
              {highlights.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    color: "#1a9e92",
                    background: "rgba(46,196,182,0.1)",
                    border: "1px solid rgba(46,196,182,0.2)",
                    borderRadius: 50,
                    padding: "7px 14px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* WHY CHOOSE CARD */}
          <div
            className="lift"
            style={{
              background: "linear-gradient(145deg, #0e7a70 0%, #0d2b28 100%)",
              borderRadius: 28,
              padding: "44px",
              boxShadow: "0 20px 60px rgba(14,122,112,0.26)",
              position: "relative",
              overflow: "hidden",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(40px)",
              transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.12s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -50,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "rgba(46,196,182,0.13)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 170,
                height: 170,
                borderRadius: "50%",
                background: "rgba(245,230,66,0.08)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 16,
                  background: "rgba(46,196,182,0.2)",
                  border: "1.5px solid rgba(46,196,182,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.45rem",
                  marginBottom: 28,
                }}
              >
                ◆
              </div>

              <h4
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#f5e642",
                  marginBottom: 12,
                }}
              >
                Why Choose Us:-
              </h4>

              <h3
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "2rem",
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 28,
                  letterSpacing: "-0.03em",
                }}
              >
                Built for faster hiring, stronger matches, and long-term growth.
              </h3>

              <div style={{ display: "grid", gap: 14 }}>
                {whyChoose.map((item) => (
                  <div
                    key={item.number}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "44px 1fr",
                      gap: 14,
                      alignItems: "start",
                      padding: "16px",
                      borderRadius: 18,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 12,
                        background: "#f5e642",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Clash Display', sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#0d2b28",
                      }}
                    >
                      {item.number}
                    </div>

                    <div>
                      <h4
                        style={{
                          fontFamily: "'Clash Display', sans-serif",
                          color: "#fff",
                          fontSize: "1rem",
                          fontWeight: 700,
                          marginBottom: 6,
                        }}
                      >
                        {item.title}
                      </h4>

                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: "rgba(224,247,245,0.78)",
                          fontSize: "0.82rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section :global(.inner) > div {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 72px 0 !important;
          }

          section :global(.inner) > div > div {
            padding: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
