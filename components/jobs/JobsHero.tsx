"use client";

import React, { useEffect, useState } from "react";
import CandidateSubmissionForm from "./CandidateSubmissionForm";

interface JobsHeroProps {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

const stats = [
  { value: "2,500+", label: "Active Candidates" },
  { value: "150+", label: "Partner Companies" },
  { value: "98%", label: "Placement Rate" },
];

const popups = [
  {
    icon: "⚡",
    title: "Fast Profile Review",
    text: "Our team reviews your profile and skills quickly.",
  },
  {
    icon: "🎯",
    title: "Smart Job Matching",
    text: "Get matched with relevant opportunities.",
  },
  {
    icon: "🤝",
    title: "Recruiter Support",
    text: "Guidance from application to interview.",
  },
];

export default function JobsHero(_props: JobsHeroProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

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
          {/* LEFT */}
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
                marginBottom: "clamp(24px, 4vw, 34px)",
              }}
            >
              Discover premium career opportunities across top companies. Your
              expertise deserves the right platform — submit your profile and
              let our recruiters connect you with the right employers.
            </p>

            {/* Animated popup section instead of search bar */}
            <div className="career-popup-area" aria-label="Career matching highlights">
              <div
                className={`popup-shell popup-main-shell ${
                  ready ? "show" : ""
                }`}
                style={{
                  animationDelay: ready ? "0.12s, 1s" : undefined,
                }}
              >
                <div className="popup-card popup-main-card">
                  <div className="popup-glow" />

                  <div className="popup-topline">
                    <span className="popup-live-dot" />
                    <span>Profile Match Assist</span>
                  </div>

                  <h3>Skip the search. Get matched smarter.</h3>

                  <p>
                    Submit your details and our recruitment team will align your
                    skills, experience, and preferences with active openings.
                  </p>

                  <a href="#candidate-submission" className="popup-cta">
                    Submit Profile
                    <span>→</span>
                  </a>
                </div>
              </div>

              <div className="popup-mini-grid">
                {popups.map((popup, index) => (
                  <div
                    key={popup.title}
                    className={`popup-shell popup-mini-shell ${
                      ready ? "show" : ""
                    }`}
                    style={{
                      animationDelay: ready
                        ? `${0.26 + index * 0.14}s, ${1.2 + index * 0.35}s`
                        : undefined,
                    }}
                  >
                    <div className="popup-card popup-mini-card">
                      <div className="mini-icon">{popup.icon}</div>
                      <div>
                        <h4>{popup.title}</h4>
                        <p>{popup.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "clamp(14px, 3vw, 28px)",
                marginTop: "clamp(28px, 4vw, 42px)",
              }}
            >
              {stats.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && (
                    <div
                      className="stat-divider"
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

          {/* RIGHT: Candidate form */}
          <div
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s",
            }}
          >
            <div id="candidate-submission" className="jobs-form-card">
              <CandidateSubmissionForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
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
        /* Grid */
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

        /* Form card */
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
          scroll-margin-top: 110px;
        }

        @keyframes jobsColorFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Animated popup area */
        .career-popup-area {
          width: 100%;
          max-width: 560px;
          position: relative;
        }

        .popup-shell {
          opacity: 0;
          transform: translateY(22px) scale(0.96);
        }

        .popup-shell.show {
          animation-name: popupIn, gentleFloat;
          animation-duration: 0.72s, 4.8s;
          animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1), ease-in-out;
          animation-fill-mode: forwards, both;
          animation-iteration-count: 1, infinite;
        }

        .popup-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(46,196,182,0.22);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 18px 48px rgba(13,43,40,0.09);
          transition:
            transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .popup-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 0%,
            rgba(255,255,255,0.5) 45%,
            transparent 65%
          );
          transform: translateX(-120%) skewX(-18deg);
          transition: transform 0.8s ease;
          pointer-events: none;
        }

        .popup-card:hover::before {
          transform: translateX(140%) skewX(-18deg);
        }

        .popup-card:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 26px 70px rgba(13,43,40,0.15);
          border-color: rgba(46,196,182,0.38);
        }

        .popup-main-card {
          border-radius: 26px;
          padding: clamp(20px, 4vw, 28px);
        }

        .popup-glow {
          position: absolute;
          right: -50px;
          top: -50px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(46,196,182,0.22), transparent 70%);
          filter: blur(8px);
          pointer-events: none;
        }

        .popup-topline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(46,196,182,0.12);
          border: 1px solid rgba(46,196,182,0.2);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0e7a70;
          margin-bottom: 14px;
        }

        .popup-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2ec4b6;
          box-shadow: 0 0 0 5px rgba(46,196,182,0.14);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .popup-main-card h3 {
          margin: 0 0 10px;
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(1.15rem, 2.4vw, 1.45rem);
          line-height: 1.2;
          color: #0d2b28;
        }

        .popup-main-card p {
          margin: 0 0 18px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(0.82rem, 1.7vw, 0.92rem);
          line-height: 1.7;
          color: #2d5c55;
          max-width: 450px;
        }

        .popup-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 999px;
          text-decoration: none;
          color: white;
          background: linear-gradient(135deg, #2ec4b6, #0e7a70);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.86rem;
          font-weight: 800;
          box-shadow: 0 10px 24px rgba(46,196,182,0.3);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            gap 0.25s ease;
        }

        .popup-cta:hover {
          gap: 12px;
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(46,196,182,0.42);
        }

        .popup-mini-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }

        .popup-mini-card {
          min-height: 132px;
          border-radius: 22px;
          padding: 16px;
        }

        .mini-icon {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(46,196,182,0.18);
          box-shadow: 0 10px 20px rgba(13,43,40,0.06);
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .popup-mini-card h4 {
          margin: 0 0 6px;
          font-family: 'Clash Display', sans-serif;
          font-size: 0.92rem;
          color: #0d2b28;
          line-height: 1.2;
        }

        .popup-mini-card p {
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem;
          line-height: 1.55;
          color: #5d8a84;
        }

        @keyframes popupIn {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-7px) scale(1.005);
          }
        }

        /* Shared animations */
        @keyframes blob-drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -28px) scale(1.05);
          }
          66% {
            transform: translate(-14px, 18px) scale(0.96);
          }
        }

        .blob-drift {
          animation: blob-drift 9s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .spin-slow {
          animation: spin-slow 28s linear infinite;
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.25);
          }
        }

        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @media (max-width: 760px) {
          .popup-mini-grid {
            grid-template-columns: 1fr;
          }

          .popup-mini-card {
            min-height: auto;
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .mini-icon {
            margin-bottom: 0;
            flex-shrink: 0;
          }
        }

        @media (max-width: 480px) {
          .jobs-form-card {
            padding: 24px 16px !important;
          }

          .popup-main-card {
            padding: 20px !important;
          }

          .stat-divider {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .popup-shell.show,
          .blob-drift,
          .spin-slow,
          .pulse-dot,
          .jobs-form-card {
            animation: none !important;
          }

          .popup-shell {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}