"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

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

function LoadingScreen() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "4px solid rgba(46,196,182,0.2)",
            borderTop: "4px solid #0e7a70",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            margin: "0 auto 16px",
          }}
        />
        <p style={{ color: "#6b9e97", fontSize: "1rem" }}>
          Loading careers...
        </p>
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function formatDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function CareersPage() {
  const { loading, user } = useAuth();

  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [fetchingJobs, setFetchingJobs] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedSector, setSelectedSector] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");

  const sectors = ["IT", "BPO", "FINANCE", "SALES", "HEALTH", "MANUFACTURING"];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setFetchingJobs(true);
        const res = await fetch("/api/jobs", { cache: "no-store" });

        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await res.json();
        setJobs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]);
      } finally {
        setFetchingJobs(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.sector.toLowerCase().includes(query);

      const matchesSector =
        selectedSector === "ALL" || job.sector === selectedSector;

      const matchesType =
        selectedType === "ALL" || job.type === selectedType;

      return matchesSearch && matchesSector && matchesType;
    });
  }, [jobs, search, selectedSector, selectedType]);

  const sectorCounts = useMemo(() => {
    return sectors.map((sector) => ({
      sector,
      count: jobs.filter((job) => job.sector === sector).length,
    }));
  }, [jobs]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f1e8",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d2b28 0%, #0e7a70 100%)",
          padding: "80px 24px 60px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "3rem",
            color: "white",
            marginBottom: "16px",
          }}
        >
          Find Your Dream Career
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          Explore {jobs.length} open positions across {sectors.length} industries.
          Your next opportunity is just a click away.
        </p>

        {/* SEARCH BAR */}
        <div
          style={{
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by job title, company, or location..."
            style={{
              width: "100%",
              padding: "16px 24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              color: "white",
              fontSize: "1rem",
              outline: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          />
        </div>
      </div>

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        {/* SECTOR CARDS */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "1.5rem",
              color: "#0d2b28",
              marginBottom: "16px",
            }}
          >
            Browse by Sector
          </h2>

          <div
            className="sector-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            <button
              onClick={() => setSelectedSector("ALL")}
              style={{
                padding: "16px 12px",
                borderRadius: "16px",
                border:
                  selectedSector === "ALL"
                    ? "2px solid #0e7a70"
                    : "1px solid rgba(46,196,182,0.15)",
                background:
                  selectedSector === "ALL"
                    ? "linear-gradient(135deg, rgba(46,196,182,0.18), rgba(14,122,112,0.12))"
                    : "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)",
                cursor: "pointer",
                textAlign: "center",
                transition: "0.25s",
                outline: "none",
              }}
            >
              <div style={{ fontSize: "1.3rem", marginBottom: "6px" }}>🌐</div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "#0d2b28",
                  fontWeight: 600,
                }}
              >
                All
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#0e7a70",
                  fontWeight: 600,
                  marginTop: "2px",
                }}
              >
                {jobs.length}
              </div>
            </button>

            {sectorCounts.map((item) => (
              <button
                key={item.sector}
                onClick={() => setSelectedSector(item.sector)}
                style={{
                  padding: "16px 12px",
                  borderRadius: "16px",
                  border:
                    selectedSector === item.sector
                      ? "2px solid #0e7a70"
                      : "1px solid rgba(46,196,182,0.15)",
                  background:
                    selectedSector === item.sector
                      ? "linear-gradient(135deg, rgba(46,196,182,0.18), rgba(14,122,112,0.12))"
                      : "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(12px)",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "0.25s",
                  outline: "none",
                }}
              >
                <div style={{ fontSize: "1.3rem", marginBottom: "6px" }}>
                  {sectorIcons[item.sector]}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#0d2b28",
                    fontWeight: 600,
                  }}
                >
                  {sectorLabels[item.sector]?.split(" ")[0] || item.sector}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#0e7a70",
                    fontWeight: 600,
                    marginTop: "2px",
                  }}
                >
                  {item.count}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* FILTER BAR */}
        <div
          style={{
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(46,196,182,0.16)",
            borderRadius: "20px",
            padding: "18px 22px",
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Clash Display', sans-serif",
                color: "#0d2b28",
                fontSize: "1.2rem",
                marginBottom: "2px",
              }}
            >
              {selectedSector === "ALL"
                ? "All Open Positions"
                : `${sectorLabels[selectedSector] || selectedSector} Positions`}
            </h3>
            <p style={{ color: "#6b9e97", fontSize: "0.88rem" }}>
              {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""}{" "}
              found
            </p>
          </div>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "12px",
              border: "1px solid rgba(46,196,182,0.18)",
              background: "rgba(248,250,252,0.95)",
              fontSize: "0.88rem",
              outline: "none",
              color: "#0d2b28",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: "pointer",
            }}
          >
            <option value="ALL">All Types</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* JOBS LIST */}
        {fetchingJobs ? (
          <LoadingScreen />
        ) : filteredJobs.length === 0 ? (
          <div
            style={{
              background: "rgba(255,255,255,0.78)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(46,196,182,0.16)",
              borderRadius: "24px",
              padding: "60px 20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🔍</div>
            <h3
              style={{
                color: "#0d2b28",
                marginBottom: "8px",
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              No jobs found
            </h3>
            <p style={{ color: "#6b9e97" }}>
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <div
            className="jobs-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "20px",
            }}
          >
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="job-card"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(46,196,182,0.14)",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 10px 30px rgba(13,43,40,0.06)",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                {/* TOP */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "12px",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        background: "#f0fdf9",
                        color: "#0e7a70",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        border: "1px solid #ccfbf1",
                        fontWeight: 600,
                      }}
                    >
                      {sectorLabels[job.sector]?.split(" ")[0] || job.sector}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "#6b9e97",
                      }}
                    >
                      {formatDate(job.createdAt)}
                    </span>
                  </div>

                  <h3
                    style={{
                      color: "#0d2b28",
                      fontSize: "1.1rem",
                      marginBottom: "8px",
                      fontWeight: 700,
                    }}
                  >
                    {job.title}
                  </h3>

                  <p
                    style={{
                      color: "#6b9e97",
                      fontSize: "0.9rem",
                      marginBottom: "6px",
                    }}
                  >
                    {job.company}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "#3a7a6f",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      📍 {job.location}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "#3a7a6f",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      💰 ₹{job.salary}/month
                    </span>
                  </div>

                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.72rem",
                      background: "rgba(46,196,182,0.1)",
                      color: "#0e7a70",
                      padding: "4px 10px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      marginBottom: "16px",
                    }}
                  >
                    {job.type}
                  </span>

                  <p
                    style={{
                      color: "#6b9e97",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      marginBottom: "16px",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {job.description}
                  </p>
                </div>

                {/* BOTTOM */}
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Link
                    href={`/jobs/${job.id}`}
                    style={{
                      flex: 1,
                      padding: "11px",
                      borderRadius: "12px",
                      border: "1px solid rgba(46,196,182,0.3)",
                      background: "transparent",
                      color: "#0e7a70",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      textAlign: "center",
                      transition: "0.2s",
                    }}
                  >
                    View Details
                  </Link>

                  {user ? (
                    <Link
                      href={`/jobs/${job.id}/apply`}
                      style={{
                        flex: 1,
                        padding: "11px",
                        borderRadius: "12px",
                        border: "none",
                        background:
                          "linear-gradient(135deg, #0e7a70, #0d2b28)",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        textAlign: "center",
                        transition: "0.2s",
                      }}
                    >
                      Apply Now
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      style={{
                        flex: 1,
                        padding: "11px",
                        borderRadius: "12px",
                        border: "none",
                        background:
                          "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        textAlign: "center",
                        transition: "0.2s",
                      }}
                    >
                      Login to Apply
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {!user && jobs.length > 0 && (
          <div
            style={{
              marginTop: "40px",
              background:
                "linear-gradient(135deg, #0d2b28 0%, #0e7a70 100%)",
              borderRadius: "24px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                color: "white",
                fontSize: "1.8rem",
                marginBottom: "12px",
              }}
            >
              Ready to Start Your Career?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                marginBottom: "24px",
                fontSize: "1rem",
              }}
            >
              Create an account to apply for jobs and track your applications.
            </p>
            <Link
              href="/register"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                borderRadius: "14px",
                background: "white",
                color: "#0d2b28",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "0.2s",
              }}
            >
              Register Now
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(13, 43, 40, 0.12);
        }

        @media (max-width: 1100px) {
          .jobs-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .sector-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 700px) {
          .jobs-grid {
            grid-template-columns: 1fr !important;
          }
          .sector-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 480px) {
          .sector-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
}