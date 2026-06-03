"use client";

import { Job } from "./JobCard";

interface Props { job: Job; }

export default function JobDetailsSidebar({ job }: Props) {
  return (
    <div
      className="job-sidebar"
      style={{
        position: "sticky",
        top: 120,
        background: "rgba(255,255,255,0.75)",
        border: "1px solid rgba(13,43,40,0.08)",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 12px 40px rgba(13,43,40,0.06)",
      }}
    >
      {/* Header Banner */}
      <div style={{ height: 180, background: "linear-gradient(135deg, #0d2b28 0%, #0e7a70 50%, #2ec4b6 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "22px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", top: 40, right: 50, width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 50, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", marginBottom: 8, width: "fit-content" }}>
          {job.sector} • {job.type}
        </span>
        <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>{job.title}</h3>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 24px 28px" }}>
        <div style={{ marginBottom: 22 }}>
          <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0e7a70", marginBottom: 8 }}>THE ROLE</h4>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", color: "#3a7a6f", lineHeight: 1.75 }}>{job.description}</p>
        </div>

        <div style={{ marginBottom: 22 }}>
          <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0e7a70", marginBottom: 8 }}>COMPANY</h4>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: "0.9rem" }}>🏢</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", color: "#0d2b28", fontWeight: 600 }}>{job.company}</span>
          </div>
        </div>

        <div style={{ marginBottom: 22 }}>
          <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0e7a70", marginBottom: 10 }}>DETAILS</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ fontSize: "0.85rem" }}>📍</span><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", color: "#3a7a6f" }}>{job.location}</span></div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ fontSize: "0.85rem" }}>💰</span><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", color: "#3a7a6f" }}>₹{job.salary}</span></div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ fontSize: "0.85rem" }}>🏷️</span><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", color: "#3a7a6f" }}>{job.sector}</span></div>
          </div>
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(46,196,182,0.25), transparent)", margin: "8px 0 18px" }} />

        {/* Bottom Tags */}
        <div className="sidebar-tags" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[{ label: "TYPE", value: job.type }, { label: "LOCATION", value: job.location }, { label: "SALARY", value: `₹${job.salary}` }].map((item) => (
            <div key={item.label}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b9e97", display: "block", marginBottom: 4 }}>{item.label}</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "#0d2b28", wordBreak: "break-word" }}>{item.value}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, padding: "10px 14px", borderRadius: 12, background: "rgba(46,196,182,0.06)", border: "1px solid rgba(46,196,182,0.12)" }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.76rem", color: "#6b9e97" }}>
            Posted on <strong style={{ color: "#0d2b28" }}>{new Date(job.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</strong>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .job-sidebar { position: static !important; top: auto !important; }
        }
        @media (max-width: 480px) {
          .sidebar-tags { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
