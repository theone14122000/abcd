"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  sector: string;
  createdAt: string;
}

interface Props {
  job: Job;
}

const SECTOR_ID_TO_SLUG: Record<string, string> = {
  IT: "it-technologies",
  BPO: "bpo",
  FINANCE: "finance",
  MANUFACTURING: "manufacturing",
  SALES: "sale",
  HEALTH: "health",
};

export default function JobCard({ job }: Props) {
  const { user, loading } = useAuth();

  const sectorKey = job.sector?.toUpperCase() || "";
  const sectorSlug = SECTOR_ID_TO_SLUG[sectorKey] || (job.sector || "jobs").toLowerCase().replace(/\s+/g, "-");
  const formattedDate = job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "";

  return (
    <div
      className="job-card-animate"
      style={{
        borderRadius: 26,
        padding: "28px 24px",
        border: "1px solid rgba(46,196,182,0.18)",
        boxShadow: "0 12px 40px rgba(13,43,40,0.06)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(13,43,40,0.14)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(13,43,40,0.06)";
      }}
    >
      {/* Icon + Tag Row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18, gap: 8 }}>
        <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(255,255,255,0.7)", border: "1px solid rgba(46,196,182,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
          ◆
        </div>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a9e92", background: "rgba(255,255,255,0.65)", border: "1px solid rgba(46,196,182,0.2)", borderRadius: 50, padding: "5px 14px", whiteSpace: "nowrap" }}>
          {job.type || "Full Time"}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1rem, 1.15vw, 1.15rem)", fontWeight: 700, color: "#0d2b28", lineHeight: 1.3, marginBottom: 10 }}>
        {job.title || "Untitled Position"}
      </h3>

      {/* Company */}
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", color: "#2d5c55", marginBottom: 16, fontWeight: 600 }}>
        <span style={{ opacity: 0.65, fontWeight: 400 }}>Company: </span>{job.company || "—"}
      </p>

      {/* Divider */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(46,196,182,0.25), transparent)", marginBottom: 16 }} />

      {/* Meta */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#3a7a6f" }}>
          <strong>📍 Location:</strong> {job.location || "—"}
        </span>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#3a7a6f" }}>
          <strong>💰 Salary:</strong> ₹{job.salary || "—"}
        </span>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#3a7a6f" }}>
          <strong>🏢 Sector:</strong> {job.sector || "—"}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#6b9e97", lineHeight: 1.7, marginBottom: 20, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        {job.description || "No description provided."}
      </p>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", color: "#6b9e97" }}>{formattedDate}</span>
        {loading ? (
          <span style={{ padding: "9px 22px", borderRadius: 50, background: "#e2e8f0", color: "#94a3b8", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600 }}>Checking...</span>
        ) : user ? (
          <Link href={`/jobs/${sectorSlug}/${job.id}/apply`} style={{ padding: "9px 22px", borderRadius: 50, background: "linear-gradient(135deg, #0e7a70, #0d2b28)", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600, border: "none", cursor: "pointer", transition: "opacity 0.3s", textDecoration: "none", display: "inline-block" }}>
            Apply Now
          </Link>
        ) : (
          <Link href="/login" style={{ padding: "9px 22px", borderRadius: 50, background: "transparent", color: "#0e7a70", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600, border: "1.5px solid #0e7a70", textDecoration: "none", transition: "all 0.3s" }}>
            Login to Apply
          </Link>
        )}
      </div>

      <style>{`
        .job-card-animate {
          background: radial-gradient(circle at 15% 20%, rgba(46,196,182,0.12), transparent 32%),
            linear-gradient(120deg, #c8ede8, #d4f5b8, #f7eb6c, #c8f0c8, #b8f5ec);
          background-size: 200% 200%;
          animation: jobCardFlow 8s ease-in-out infinite;
        }
        @keyframes jobCardFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
