"use client";

import React, { useEffect, useState } from "react";
import CandidateSubmissionForm from "./CandidateSubmissionForm";

interface JobsHeroProps {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

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

// New highlights to replace stats section
const highlights = [
  { icon: "✨", text: "Verified Companies" },
  { icon: "🔒", text: "100% Confidential" },
  { icon: "🚀", text: "Quick Response" },
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

            {/* Animated popup section */}
            <div className="career-popup-area" aria-label="Career matching highlights">
              <div
                className={`popup-shell popup-main-shell ${ready ? "show" : ""}`}
                style={{ animationDelay: ready ? "0.12s, 1s" : undefined }}
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

                  {/* Animated arrow CTA */}
                  <a href="#candidate-submission" className="popup-arrow-cta">
                    <span className="cta-text">Submit Profile</span>
                    <span className="cta-arrow-wrap">
                      <svg
                        className="cta-arrow"
                        width="22"
                        height="22"
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
                    </span>
                  </a>
                </div>
              </div>

              <div className="popup-mini-grid">
                {popups.map((popup, index) => (
                  <div
                    key={popup.title}
                    className={`popup-shell popup-mini-shell ${ready ? "show" : ""}`}
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

            {/* Animated Highlights (replaces stats) */}
            <div className="highlights-row">
              {highlights.map((item, index) => (
                <div
                  key={item.text}
                  className={`highlight-chip ${ready ? "show" : ""}`}
                  style={{
                    animationDelay: ready
                      ? `${0.6 + index * 0.18}s, ${1.6 + index * 0.4}s`
                      : undefined,
                  }}
                >
                  <span className="highlight-icon">{item.icon}</span>
                  <span className="highlight-text">{item.text}</span>
                </div>
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

        /* ── Animated Arrow CTA (replaces button look) ── */
        .popup-arrow-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: #0e7a70;
          position: relative;
          cursor: pointer;
          padding: 4px 0;
        }

        .cta-text {
          position: relative;
          background: linear-gradient(135deg, #0e7a70, #2ec4b6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-text::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #2ec4b6, #0e7a70);
          border-radius: 2px;
          transition: width 0.35s ease;
        }

        .popup-arrow-cta:hover .cta-text::after {
          width: 100%;
        }

        .cta-arrow-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2ec4b6, #0e7a70);
          color: white;
          box-shadow: 0 8px 20px rgba(46,196,182,0.35);
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-arrow {
          animation: arrowNudge 1.6s ease-in-out infinite;
        }

        .popup-arrow-cta:hover .cta-arrow-wrap {
          transform: scale(1.1) translateX(2px);
          box-shadow: 0 12px 28px rgba(46,196,182,0.5);
        }

        .popup-arrow-cta:hover .cta-arrow {
          animation: arrowShoot 0.6s ease forwards;
        }

        @keyframes arrowNudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }

        @keyframes arrowShoot {
          0% { transform: translateX(0); opacity: 1; }
          40% { transform: translateX(26px); opacity: 0; }
          41% { transform: translateX(-26px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
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

        /* ── Animated Highlights row (replaces stats) ── */
        .highlights-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: clamp(28px, 4vw, 40px);
        }

        .highlight-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(46,196,182,0.22);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 20px rgba(13,43,40,0.06);
          opacity: 0;
          transform: translateY(18px) scale(0.92);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .highlight-chip.show {
          animation-name: chipPop, chipFloat;
          animation-duration: 0.6s, 4s;
          animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1), ease-in-out;
          animation-fill-mode: forwards, both;
          animation-iteration-count: 1, infinite;
        }

        .highlight-chip:hover {
          transform: translateY(-4px) scale(1.04);
          border-color: rgba(46,196,182,0.4);
          box-shadow: 0 14px 30px rgba(46,196,182,0.18);
        }

        .highlight-icon {
          font-size: 1.1rem;
          display: inline-flex;
        }

        .highlight-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #0d2b28;
        }

        @keyframes chipPop {
          0% { opacity: 0; transform: translateY(18px) scale(0.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes chipFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes popupIn {
          from { opacity: 0; transform: translateY(22px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-7px) scale(1.005); }
        }

        /* Shared animations */
        @keyframes blob-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -28px) scale(1.05); }
          66% { transform: translate(-14px, 18px) scale(0.96); }
        }

        .blob-drift {
          animation: blob-drift 9s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .spin-slow {
          animation: spin-slow 28s linear infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.25); }
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
        }

        @media (prefers-reduced-motion: reduce) {
          .popup-shell.show,
          .highlight-chip.show,
          .blob-drift,
          .spin-slow,
          .pulse-dot,
          .cta-arrow,
          .jobs-form-card {
            animation: none !important;
          }

          .popup-shell,
          .highlight-chip {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}