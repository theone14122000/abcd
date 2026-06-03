"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import ApplyForm from "@/components/jobs/ApplyForm";
import JobDetailsSidebar from "@/components/jobs/JobDetailsSidebar";
import { Job } from "@/components/jobs/JobCard";

export default function ApplyPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams<{ sector: string; id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { if (!user) router.push("/login"); }, [user, router]);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch("/api/jobs", { cache: "no-store" });
        const data = await res.json();
        if (Array.isArray(data)) { const found = data.find((j: Job) => j.id === params?.id); setJob(found || null); }
      } catch (error) { console.error("Failed to fetch job:", error); }
      finally { setLoading(false); }
    };
    if (params?.id) fetchJob();
  }, [params?.id]);

  if (!user) return null;

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f4f1e8", paddingTop: 80 }}>
        <div style={{ width: 40, height: 40, border: "3px solid rgba(46,196,182,0.2)", borderTopColor: "#0e7a70", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!job) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f4f1e8", paddingTop: 80, fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "80px 20px 40px" }}>
        <div style={{ fontSize: "3rem", marginBottom: 16 }}>🔍</div>
        <h2 style={{ fontSize: "1.5rem", color: "#0d2b28", marginBottom: 8, fontWeight: 700 }}>Job Not Found</h2>
        <p style={{ color: "#6b9e97", marginBottom: 24, textAlign: "center" }}>The job you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <button onClick={() => router.back()} style={{ padding: "12px 32px", borderRadius: 50, background: "linear-gradient(135deg, #0e7a70, #0d2b28)", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem" }}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f4f1e8", paddingTop: 80 }}>
      {/* Hero Banner */}
      <div style={{ background: "linear-gradient(135deg, #f4f1e8 0%, #e8e4d4 50%, #dcd8c8 100%)", borderBottom: "1px solid rgba(13,43,40,0.08)", padding: "40px 0" }}>
        <div className="apply-hero-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b9e97", flexWrap: "wrap" }}>
            <span style={{ cursor: "pointer", color: "#0d2b28" }} onClick={() => router.push("/jobs")}>CAREERS</span>
            <span>›</span>
            <span>APPLICATION FORM</span>
          </div>
          <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "clamp(1.5rem, 4vw, 2.8rem)", fontWeight: 700, color: "#0d2b28", lineHeight: 1.15, marginBottom: 12, maxWidth: 600 }}>
            Join our engineering elite.
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(0.88rem, 1vw, 1rem)", color: "#3a7a6f", lineHeight: 1.7, maxWidth: 520 }}>
            Help us redefine recruitment through technology. We&apos;re looking for humans who care about other humans.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="apply-main-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "flex-start" }}>
        <ApplyForm job={job} user={user} />
        <JobDetailsSidebar job={job} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .apply-main-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .apply-main-grid { padding: 32px 16px 48px !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}
