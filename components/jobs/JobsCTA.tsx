"use client";

import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "919310573198";
const EMAIL_ADDRESS = "e.choicescareersolution@gmail.com";
const WHATSAPP_MESSAGE = "Hello! I'm interested in career opportunities with E Choices.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const emailLink = `mailto:${EMAIL_ADDRESS}?subject=Inquiry%20from%20E%20Choices%20Website`;

export default function JobsCTA() {
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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #ede9db 0%, #f4f1e8 100%)",
        padding: "0 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background blobs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(46,196,182,0.08)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(245,230,66,0.1)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="cta-card-animate"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            borderRadius: 40,
            padding: "clamp(36px, 5vw, 60px) clamp(28px, 4vw, 48px)",
            border: "1px solid rgba(46,196,182,0.2)",
            boxShadow: "0 32px 80px rgba(13,43,40,0.1)",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Glass shimmer overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 15% 20%, rgba(46,196,182,0.15), transparent 35%), radial-gradient(circle at 85% 80%, rgba(245,230,66,0.12), transparent 35%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* ─── LEFT CONTENT ─── */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(46,196,182,0.25)",
                borderRadius: 50,
                marginBottom: 20,
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#2ec4b6",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#0e7a70",
                  textTransform: "uppercase",
                }}
              >
                Start Your Journey
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
                fontWeight: 700,
                color: "#0d2b28",
                lineHeight: 1.15,
                marginBottom: 18,
                letterSpacing: "-0.02em",
              }}
            >
              Elevate Your Hiring
              <br />
              <span style={{ color: "#0e7a70", fontStyle: "italic" }}>
                Experience
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#2d5c55",
                fontSize: "clamp(0.9rem, 1vw, 1rem)",
                lineHeight: 1.85,
                marginBottom: 32,
                maxWidth: 480,
              }}
            >
              We don't just post jobs; we build careers. Join thousands of
              professionals who found their dream role through E Choices'
              human-centric recruitment model.
            </p>

            {/* Primary CTA */}
            <a
              href="#candidate-submission"
              className="cta-primary-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 50,
                background: "linear-gradient(135deg, #0e7a70, #0d2b28)",
                color: "#fff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 28px rgba(14,122,112,0.35)",
                marginBottom: 28,
                transition: "all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(14,122,112,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 28px rgba(14,122,112,0.35)";
              }}
            >
              Submit Resume
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            {/* Talk to Our Team */}
            <div>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#6b9e97",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Talk to Our Team
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-contact-btn wa-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(37,211,102,0.25)",
                    textDecoration: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#0d2b28",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(37,211,102,0.12)";
                    e.currentTarget.style.borderColor = "rgba(37,211,102,0.5)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(37,211,102,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.borderColor =
                      "rgba(37,211,102,0.25)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.04)";
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "linear-gradient(135deg, #25d366, #128c7e)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "0.8rem",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  WhatsApp
                </a>

                {/* Email */}
                <a
                  href={emailLink}
                  className="team-contact-btn em-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(56,189,248,0.25)",
                    textDecoration: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#0d2b28",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(56,189,248,0.12)";
                    e.currentTarget.style.borderColor = "rgba(56,189,248,0.5)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(56,189,248,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.borderColor =
                      "rgba(56,189,248,0.25)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.04)";
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "linear-gradient(135deg, #38bdf8, #0e7490)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "0.8rem",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* ─── RIGHT CONTENT ─── */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              background: "rgba(255,255,255,0.45)",
              borderRadius: 30,
              minHeight: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(46,196,182,0.15)",
              boxShadow: "0 16px 48px rgba(13,43,40,0.06)",
              padding: 32,
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Success Metric Card */}
            <div
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.8)",
                borderRadius: 24,
                padding: "28px 24px",
                border: "1px solid rgba(46,196,182,0.12)",
                boxShadow: "0 12px 32px rgba(13,43,40,0.06)",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div style={{ display: "flex" }}>
                  {["#2ec4b6", "#f5e642", "#0e7a70", "#88f588"].map(
                    (c, i) => (
                      <div
                        key={i}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          background: c,
                          border: "3px solid #fff",
                          marginLeft: i > 0 ? -10 : 0,
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        }}
                      />
                    )
                  )}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 700,
                      color: "#0d2b28",
                      fontSize: "1.1rem",
                      margin: 0,
                    }}
                  >
                    98% Success
                  </p>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.75rem",
                      color: "#6b9e97",
                      margin: 0,
                    }}
                  >
                    Placement rate across all sectors
                  </p>
                </div>
              </div>

              {/* Mini stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    padding: 16,
                    background: "rgba(46,196,182,0.08)",
                    borderRadius: 16,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#0e7a70",
                      margin: "0 0 4px",
                    }}
                  >
                    2,500+
                  </p>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.72rem",
                      color: "#6b9e97",
                      margin: 0,
                    }}
                  >
                    Active Candidates
                  </p>
                </div>
                <div
                  style={{
                    padding: 16,
                    background: "rgba(245,230,66,0.1)",
                    borderRadius: 16,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#9bb60a",
                      margin: "0 0 4px",
                    }}
                  >
                    150+
                  </p>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.72rem",
                      color: "#6b9e97",
                      margin: 0,
                    }}
                  >
                    Partner Companies
                  </p>
                </div>
              </div>
            </div>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.8rem",
                color: "#8b9da6",
                fontStyle: "italic",
              }}
            >
              Trusted by industry leaders worldwide
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .cta-card-animate {
          background: 
            radial-gradient(circle at 15% 20%, rgba(46,196,182,0.18), transparent 32%),
            linear-gradient(120deg, #9dd4cc, #88f588, #f7eb6c, #a4eba4, #9df7e9);
          background-size: 180% 180%;
          animation: ctaCardFlow 8s ease-in-out infinite;
        }

        @keyframes ctaCardFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 900px) {
          .cta-card-animate {
            grid-template-columns: 1fr !important;
            padding: 36px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}