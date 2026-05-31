"use client";

import { useEffect, useRef, useState } from "react";
import JobCard, { Job } from "./JobCard";

interface Props {
  jobs: Job[];
  isLoggedIn: boolean;
  sectionTitle: string;
}

export default function JobsFeatured({
  jobs,
  isLoggedIn,
  sectionTitle,
}: Props) {
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
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.08) 0%, transparent 32%), linear-gradient(180deg, #f4f1e8 0%, #ede9db 100%)",
        padding: "60px 0",
        borderBottom: "1px solid rgba(13,43,40,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
        }}
      >
        {/* Sector Header */}
        <div
          style={{
            marginBottom: 36,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 18px",
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(46,196,182,0.24)",
              borderRadius: 50,
              marginBottom: 16,
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
              Sector
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                fontWeight: 700,
                color: "#0d2b28",
                lineHeight: 1.15,
              }}
            >
              {sectionTitle}
            </h2>

            <span
              style={{
                background: "#0d2b28",
                color: "#fff",
                fontSize: "0.7rem",
                padding: "5px 13px",
                borderRadius: 30,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              {jobs.length} {jobs.length === 1 ? "JOB" : "JOBS"}
            </span>
          </div>
        </div>

        {/* Empty Sector Message */}
        {jobs.length === 0 ? (
          <div
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(46,196,182,0.18)",
              borderRadius: 24,
              padding: "42px 28px",
              textAlign: "center",
              boxShadow: "0 12px 40px rgba(13,43,40,0.05)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.6s ease",
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(46,196,182,0.16), rgba(245,230,66,0.25))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                fontSize: "1.4rem",
              }}
            >
              💼
            </div>

            <h3
              style={{
                fontFamily: "'Clash Display', sans-serif",
                color: "#0d2b28",
                fontSize: "1.2rem",
                marginBottom: 8,
              }}
            >
              No jobs available in this sector.
            </h3>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#6b9e97",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              New openings for {sectionTitle} will appear here once the admin
              creates them.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 28,
            }}
          >
            {jobs.map((job, i) => (
              <div
                key={job.id}
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${i * 0.08}s`,
                }}
              >
                <JobCard job={job} isLoggedIn={isLoggedIn} />
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 720px) {
          section > div {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  );
}