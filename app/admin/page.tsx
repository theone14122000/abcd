"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface JobItem {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  sector: string;
  description: string;
  createdAt: string;
  isClosed: boolean | number | string; // Handle all possible types
}

const sectorLabels: Record<string, string> = {
  IT: "IT & Technologies",
  BPO: "BPO & Customer Service",
  FINANCE: "Finance & Banking",
  SALES: "Sales & Marketing",
  HEALTH: "Health & Medical",
  MANUFACTURING: "Manufacturing & Operations",
};

const sectorIcons: Record<string, string> = {
  IT: "💻",
  BPO: "📞",
  FINANCE: "🏦",
  SALES: "📈",
  HEALTH: "🏥",
  MANUFACTURING: "🏭",
};

// Helper to normalize isClosed to boolean
const isJobClosed = (job: JobItem) => {
  const val = job.isClosed;
  // Handle boolean, number (0/1), string ("true"/"false"/"0"/"1")
  if (typeof val === "boolean") return val;
  if (typeof val === "number") return val === 1;
  if (typeof val === "string") return val === "true" || val === "1";
  return false;
};

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [allJobs, setAllJobs] = useState<JobItem[]>([]);
  const [selectedTab, setSelectedTab] = useState("IT");
  const [loading, setLoading] = useState(true);
  const [reopeningId, setReopeningId] = useState<string | null>(null);

  const sectors = ["IT", "BPO", "FINANCE", "SALES", "HEALTH", "MANUFACTURING"];

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/dashboard", {
        cache: "no-store",
      });

      const data = await res.json();
      console.log("Dashboard data received:", data);
      console.log("Sample isClosed values:", data.slice(0, 2).map((j: any) => ({ id: j.id, isClosed: j.isClosed, type: typeof j.isClosed })));

      if (Array.isArray(data)) {
        setAllJobs(data);
      } else {
        setAllJobs([]);
      }
    } catch (error) {
      console.error("Dashboard load error:", error);
      setAllJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleShowAgain = async (jobId: string) => {
    try {
      setReopeningId(jobId);

      const res = await fetch(`/api/admin/jobs/${jobId}/reopen`, {
        method: "PATCH",
      });

      if (!res.ok) {
        throw new Error("Failed to reopen job");
      }

      await fetchDashboardData();
    } catch (error) {
      console.error(error);
      alert("Failed to show job again");
    } finally {
      setReopeningId(null);
    }
  };

  // Test endpoint to manually close a job (for debugging)
  const testCloseJob = async (jobId: string) => {
    try {
      const res = await fetch("/api/admin/test-job", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId, isClosed: true }),
      });
      const data = await res.json();
      console.log("Test close result:", data);
      await fetchDashboardData();
    } catch (error) {
      console.error("Test close error:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user.role !== "ADMIN") {
      router.push("/");
    } else {
      fetchDashboardData();
    }
  }, [user, router]);

  const sectorCounts = useMemo(() => {
    return sectors.map((sector) => ({
      sector,
      count: allJobs.filter(
        (job) => job.sector === sector && !isJobClosed(job)
      ).length,
    }));
  }, [allJobs]);

  const closedJobsCount = useMemo(() => {
    return allJobs.filter((job) => isJobClosed(job)).length;
  }, [allJobs]);

  const filteredJobs = useMemo(() => {
    if (selectedTab === "CLOSED") {
      return allJobs.filter((job) => isJobClosed(job) === true);
    }
    return allJobs.filter(
      (job) => job.sector === selectedTab && isJobClosed(job) === false
    );
  }, [allJobs, selectedTab]);

  if (!user || user.role !== "ADMIN") return null;

  return (
    <div
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "40px 24px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >


      {/* HEADER */}
      <div style={{ marginBottom: "32px" }}>
        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "2.5rem",
            color: "#0d2b28",
            marginBottom: "8px",
          }}
        >
          Admin Dashboard
        </h1>
        <p style={{ color: "#6b9e97", fontSize: "0.95rem" }}>
          Manage sector-wise job listings and closed positions.
        </p>
      </div>

      {/* STATS ROW */}
      <div
        className="stats-row"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(46,196,182,0.15)",
            borderRadius: "20px",
            padding: "22px",
            boxShadow: "0 20px 50px rgba(13,43,40,0.06)",
          }}
        >
          <p style={{ color: "#6b9e97", fontSize: "0.85rem" }}>
            Total Live Jobs
          </p>
          <h3
            style={{
              fontSize: "2rem",
              color: "#0e7a70",
              marginTop: "6px",
            }}
          >
            {allJobs.filter((j) => !isJobClosed(j)).length}
          </h3>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(220,38,38,0.15)",
            borderRadius: "20px",
            padding: "22px",
            boxShadow: "0 20px 50px rgba(13,43,40,0.06)",
          }}
        >
          <p style={{ color: "#6b9e97", fontSize: "0.85rem" }}>
            Closed Jobs
          </p>
          <h3
            style={{
              fontSize: "2rem",
              color: "#dc2626",
              marginTop: "6px",
            }}
          >
            {closedJobsCount}
          </h3>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(46,196,182,0.15)",
            borderRadius: "20px",
            padding: "22px",
            boxShadow: "0 20px 50px rgba(13,43,40,0.06)",
          }}
        >
          <p style={{ color: "#6b9e97", fontSize: "0.85rem" }}>
            Total Jobs
          </p>
          <h3
            style={{
              fontSize: "2rem",
              color: "#0d2b28",
              marginTop: "6px",
            }}
          >
            {allJobs.length}
          </h3>
        </div>
      </div>

      {/* SECTOR TABS */}
      <div
        className="sector-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        {sectorCounts.map((item) => (
          <button
            key={item.sector}
            onClick={() => setSelectedTab(item.sector)}
            style={{
              padding: "20px",
              borderRadius: "20px",
              border:
                selectedTab === item.sector
                  ? "2px solid #0e7a70"
                  : "1px solid rgba(46,196,182,0.15)",
              background:
                selectedTab === item.sector
                  ? "linear-gradient(135deg, rgba(46,196,182,0.18), rgba(14,122,112,0.12))"
                  : "rgba(255,255,255,0.8)",
              backdropFilter: "blur(18px)",
              boxShadow: "0 10px 30px rgba(13,43,40,0.06)",
              cursor: "pointer",
              textAlign: "left",
              transition: "0.25s",
              outline: "none",
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
              {sectorIcons[item.sector]}
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "#6b9e97",
                marginBottom: "4px",
              }}
            >
              Sector
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                color: "#0d2b28",
                fontWeight: 700,
                marginBottom: "6px",
              }}
            >
              {sectorLabels[item.sector] || item.sector}
            </div>
            <div style={{ color: "#0e7a70", fontWeight: 600, fontSize: "0.9rem" }}>
              {item.count} Open
            </div>
          </button>
        ))}

        {/* CLOSED JOBS CARD */}
        <button
          onClick={() => setSelectedTab("CLOSED")}
          style={{
            padding: "20px",
            borderRadius: "20px",
            border:
              selectedTab === "CLOSED"
                ? "2px solid #dc2626"
                : "1px solid rgba(220,38,38,0.2)",
            background:
              selectedTab === "CLOSED"
                ? "linear-gradient(135deg, rgba(220,38,38,0.1), rgba(220,38,38,0.05))"
                : "rgba(255,255,255,0.8)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 10px 30px rgba(13,43,40,0.06)",
            cursor: "pointer",
            textAlign: "left",
            transition: "0.25s",
            outline: "none",
          }}
        >
          <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>🔒</div>
          <div
            style={{ fontSize: "0.85rem", color: "#6b9e97", marginBottom: "4px" }}
          >
            Status
          </div>
          <div
            style={{
              fontSize: "1.1rem",
              color: "#0d2b28",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            Closed Jobs
          </div>
          <div style={{ color: "#dc2626", fontWeight: 600, fontSize: "0.9rem" }}>
            {closedJobsCount} Closed
          </div>
        </button>
      </div>

      {/* JOB LIST */}
      <div
        style={{
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(46, 196, 182, 0.16)",
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(13, 43, 40, 0.08)",
          padding: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "1.5rem",
                color: "#0d2b28",
                marginBottom: "4px",
              }}
            >
              {selectedTab === "CLOSED"
                ? "Closed Jobs"
                : `${sectorLabels[selectedTab] || selectedTab} Jobs`}
            </h2>
            <p style={{ color: "#6b9e97", fontSize: "0.9rem" }}>
              {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {selectedTab === "CLOSED" && (
            <span
              style={{
                fontSize: "0.78rem",
                background: "#fef2f2",
                color: "#dc2626",
                padding: "6px 14px",
                borderRadius: "999px",
                border: "1px solid #fecaca",
                fontWeight: 600,
              }}
            >
              Hidden from public users
            </span>
          )}
        </div>

        {loading ? (
          <div style={{ padding: "40px", textAlign: "center", color: "#6b9e97" }}>
            Loading dashboard...
          </div>
        ) : filteredJobs.length === 0 ? (
          <div style={{ padding: "60px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>
              {selectedTab === "CLOSED" ? "✅" : "📋"}
            </div>
            <p style={{ color: "#6b9e97", fontSize: "1rem" }}>
              {selectedTab === "CLOSED"
                ? "No closed jobs. All positions are live!"
                : "No open jobs in this sector."}
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {filteredJobs.map((job) => {
              const closed = isJobClosed(job);
              return (
                <div
                  key={job.id}
                  style={{
                    background: "white",
                    borderRadius: "18px",
                    padding: "22px",
                    border: closed
                      ? "1px solid rgba(220,38,38,0.15)"
                      : "1px solid rgba(46,196,182,0.14)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "6px",
                        flexWrap: "wrap",
                      }}
                    >
                      <h3 style={{ color: "#0d2b28", fontSize: "1.1rem" }}>
                        {job.title}
                      </h3>
                      {closed && (
                        <span
                          style={{
                            fontSize: "0.68rem",
                            background: "#fef2f2",
                            color: "#dc2626",
                            padding: "3px 8px",
                            borderRadius: "999px",
                            border: "1px solid #fecaca",
                            fontWeight: 600,
                          }}
                        >
                          CLOSED
                        </span>
                      )}
                    </div>
                    <p style={{ color: "#6b9e97", fontSize: "0.9rem", marginBottom: "4px" }}>
                      {job.company} • {job.location} • {job.type}
                    </p>
                    <p style={{ color: "#3a7a6f", fontSize: "0.88rem" }}>
                      ₹{job.salary}/month • {job.sector}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    {closed ? (
                      <button
                        onClick={() => handleShowAgain(job.id)}
                        disabled={reopeningId === job.id}
                        style={{
                          padding: "10px 20px",
                          borderRadius: "12px",
                          border: "none",
                          background:
                            reopeningId === job.id
                              ? "#cbd5e1"
                              : "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          cursor: reopeningId === job.id ? "not-allowed" : "pointer",
                          transition: "0.25s",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {reopeningId === job.id ? "Updating..." : "Show Again"}
                      </button>
                    ) : (
                      <span
                        style={{
                          fontSize: "0.75rem",
                          background: "#f0fdf9",
                          color: "#0e7a70",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          border: "1px solid #ccfbf1",
                          fontWeight: 600,
                        }}
                      >
                        Live
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .sector-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .stats-row {
            grid-templateColumns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .sector-grid {
            grid-templateColumns: 1fr !important;
          }
          .stats-row {
            gridTemplateColumns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}