"use client";

import React, { useState, useEffect } from "react";
import CandidateSubmissionForm from "./CandidateSubmissionForm";

interface JobsHeroProps {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

const stats = [
  { value: "2,500+", label: "Active Candidates" },
  { value: "150+",   label: "Partner Companies"  },
  { value: "98%",    label: "Placement Rate"      },
];

export default function JobsHero({ search, setSearch }: JobsHeroProps) {
  const [internalSearch, setInternalSearch] = useState("");
  const [ready, setReady]                   = useState(false);

  const searchValue  = search   ?? internalSearch;
  const updateSearch = setSearch ?? setInternalSearch;

  useEffect(() => {
    setReady(true);
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), " +
          "radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), " +
          "linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(60px, 10vw, 76px)",
      }}
    >
      {/* BG blobs */}
      <div
        className="blob-drift"
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "clamp(260px, 35vw, 480px)",
          height: "clamp(260px, 35vw, 480px)",
          background: "rgba(46,196,182,0.08)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="blob-drift"
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "clamp(220px, 30vw, 420px)",
          height: "clamp(220px, 30vw, 420px)",
          background: "rgba(245,230,66,0.1)",
          borderRadius: "50%",
          filter: "blur(50px)",
          pointerEvents: "none",
          animationDelay: "-3s",
        }}
      />
      <div
        className="blob-drift"
        style={{
          position: "absolute",
          top: "45%",
          left: "40%",
          width: "clamp(140px, 18vw, 280px)",
          height: "clamp(140px, 18vw, 280px)",
          background: "rgba(46,196,182,0.06)",
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
          animationDelay: "-6s",
        }}
      />

      {/* Decorative spinning rings */}
      <div
        className="spin-slow"
        style={{
          position: "absolute",
          top: "8%",
          right: "5%",
          width: "clamp(100px, 14vw, 220px)",
          height: "clamp(100px, 14vw, 220px)",
          borderRadius: "50%",
          border: "1.5px dashed rgba(46,196,182,0.2)",
          pointerEvents: "none",
        }}
      />
      <div
        className="spin-slow"
        style={{
          position: "absolute",
          bottom: "12%",
          left: "3%",
          width: "clamp(70px, 10vw, 150px)",
          height: "clamp(70px, 10vw, 150px)",
          borderRadius: "50%",
          border: "1px dashed rgba(245,230,66,0.28)",
          pointerEvents: "none",
          animationDirection: "reverse",
          animationDuration: "20s",
        }}
      />

      {/* Main content */}
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(32px, 6vw, 80px) clamp(20px, 4vw, 64px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="jobs-hero-grid">
          {/* ── LEFT: Text + search ── */}
          <div
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.75s ease, transform 0.75s ease",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "7px 20px",
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(46,196,182,0.28)",
                borderRadius: 50,
                marginBottom: "clamp(20px, 3vw, 32px)",
                boxShadow: "0 10px 24px rgba(13,43,40,0.06)",
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: 7,
                  height: 7,
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
                  letterSpacing: "0.14em",
                  color: "#1a9e92",
                  textTransform: "uppercase",
                }}
              >
                Opportunities Await
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, #0d2b28 0%, #0e7a70 45%, #2f6b37 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "clamp(14px, 2.5vw, 22px)",
              }}
            >
              Your Next Career
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  background:
                    "linear-gradient(135deg, #03828b 0%, #058292 45%, #063f80 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Milestone
                <svg
                  style={{
                    position: "absolute",
                    bottom: -6,
                    left: 0,
                    width: "100%",
                    height: 10,
                  }}
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,7 Q25,1 50,6 Q75,11 100,5 Q125,0 150,6 Q175,11 200,5"
                    stroke="#a79908"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </svg>
              </span>{" "}
              Starts Here
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#2d5c55",
                fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
                lineHeight: 1.85,
                maxWidth: 500,
                marginBottom: "clamp(24px, 4vw, 40px)",
              }}
            >
              Discover premium career opportunities across top companies.
              Your expertise deserves the right platform — connect with
              leading employers and take the next step today.
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} style={{ maxWidth: 520, marginBottom: "clamp(28px, 4vw, 44px)" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: 8,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.65)",
                  border: "1.5px solid rgba(46,196,182,0.22)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 16px 48px rgba(13,43,40,0.08)",
                }}
              >
                <div style={{ position: "relative", flex: 1 }}>
                  <svg
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 18,
                      height: 18,
                      color: "#6b9e97",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search roles, skills, companies..."
                    value={searchValue}
                    onChange={(e) => updateSearch(e.target.value)}
                    style={{
                      width: "100%",
                      paddingLeft: 42,
                      paddingRight: 14,
                      paddingTop: 13,
                      paddingBottom: 13,
                      borderRadius: 12,
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      fontSize: "clamp(0.82rem, 1.5vw, 0.92rem)",
                      color: "#0d2b28",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "13px clamp(16px, 3vw, 28px)",
                    borderRadius: 12,
                    border: "none",
                    background: "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "clamp(0.8rem, 1.5vw, 0.88rem)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    boxShadow: "0 6px 20px rgba(46,196,182,0.35)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 10px 28px rgba(46,196,182,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(46,196,182,0.35)";
                  }}
                >
                  Search Jobs
                </button>
              </div>
            </form>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "clamp(14px, 3vw, 28px)",
              }}
            >
              {stats.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && (
                    <div
                      style={{
                        width: 1,
                        height: 36,
                        background: "rgba(14,122,112,0.2)",
                      }}
                    />
                  )}
                  <div>
                    <p
                      style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: "#0d2b28",
                        margin: 0,
                      }}
                    >
                      {s.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.72rem",
                        color: "#6b9e97",
                        margin: 0,
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Candidate form in themed card ── */}
          <div
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s",
            }}
          >
            <div className="jobs-form-card">
              <CandidateSubmissionForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave — same colour as AboutHero page bg */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", display: "block" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L48 69.3C96 58.7 192 37.3 288 29.3C384 21.3 480 26.7 576 34.7C672 42.7 768 53.3 864 53.3C960 53.3 1056 42.7 1152 37.3C1248 32 1344 32 1392 32L1440 32V80H0Z"
            fill="#f4f1e8"
          />
        </svg>
      </div>

      <style>{`
        /* ── Grid ── */
        .jobs-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 6vw, 64px);
          align-items: center;
          min-height: 85vh;
        }
        @media (min-width: 1024px) {
          .jobs-hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ── Form card — matches AboutHero animated gradient ── */
        .jobs-form-card {
          border-radius: 34px;
          padding: clamp(20px, 4vw, 36px);
          border: 1px solid rgba(46,196,182,0.18);
          box-shadow: 0 24px 70px rgba(13,43,40,0.1);
          background:
            radial-gradient(circle at 15% 20%, rgba(46,196,182,0.18), transparent 32%),
            linear-gradient(120deg, #9dd4cc, #88f588, #f7eb6c, #a4eba4, #9df7e9);
          background-size: 180% 180%;
          animation: jobsColorFlow 8s ease-in-out infinite;
        }

        @keyframes jobsColorFlow {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ── Shared animations (same as AboutHero) ── */
        @keyframes blob-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(20px, -28px) scale(1.05); }
          66%       { transform: translate(-14px, 18px) scale(0.96); }
        }
        .blob-drift {
          animation: blob-drift 9s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .spin-slow {
          animation: spin-slow 28s linear infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.25); }
        }
        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }

        /* ── Mobile search bar stacks ── */
        @media (max-width: 480px) {
          .jobs-form-card {
            padding: 24px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
