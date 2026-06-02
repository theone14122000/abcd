"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import type { CSSProperties } from "react";

interface ApplicationItem {
  id: string;
  jobId: string;
  userId: string;
  fullName: string;
  email: string;
  currentCTC: string | null;
  expectedCTC: string | null;
  preferredLocation: string | null;
  noticePeriod: string | null;
  skills: string | null;
  resumeUrl: string | null;
  status: string;
  createdAt: string;
  user?: {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "USER";
  } | null;
  job?: {
    id: string;
    title: string;
    company: string;
    location: string;
    sector: string;
    type: string;
    salary: string | null;
  } | null;
}

const pageStyle: CSSProperties = {
  maxWidth: 1400,
  margin: "0 auto",
  padding: "40px 24px",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

const glassCard: CSSProperties = {
  background: "rgba(255, 255, 255, 0.78)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(46, 196, 182, 0.16)",
  borderRadius: "24px",
  boxShadow: "0 20px 50px rgba(13, 43, 40, 0.08)",
};

const headerTitle: CSSProperties = {
  fontFamily: "'Clash Display', sans-serif",
  fontSize: "2.4rem",
  color: "#0d2b28",
  marginBottom: "8px",
};

const headerText: CSSProperties = {
  color: "#6b9e97",
  fontSize: "0.95rem",
  lineHeight: 1.7,
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(46, 196, 182, 0.18)",
  fontSize: "0.92rem",
  outline: "none",
  transition: "0.2s",
  background: "rgba(248, 250, 252, 0.95)",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  color: "#0d2b28",
};

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "0.82rem",
  color: "#6b9e97",
  marginBottom: "6px",
  fontWeight: 600,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

const buttonStyle: CSSProperties = {
  padding: "13px 18px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "0.9rem",
  color: "white",
  background: "linear-gradient(135deg, #0e7a70, #0d2b28)",
  transition: "0.25s",
  whiteSpace: "nowrap",
};

const secondaryButtonStyle: CSSProperties = {
  ...buttonStyle,
  background: "linear-gradient(135deg, #2ec4b6, #0e7a70)",
};

const panelTitle: CSSProperties = {
  fontFamily: "'Clash Display', sans-serif",
  color: "#0d2b28",
  fontSize: "1.25rem",
  marginBottom: "6px",
};

const mutedText: CSSProperties = {
  color: "#6b9e97",
  fontSize: "0.9rem",
};

const actionButtonBase: CSSProperties = {
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "0.78rem",
  transition: "0.2s",
  whiteSpace: "nowrap",
};

function normalizeStatus(status: string) {
  return (status || "PENDING").toUpperCase();
}

function formatStatusLabel(status: string) {
  return normalizeStatus(status).replace(/_/g, " ");
}

function getStatusPillStyle(status: string): CSSProperties {
  const normalized = normalizeStatus(status);

  if (normalized === "PENDING") {
    return {
      background: "#fff7ed",
      color: "#c2410c",
      border: "1px solid #fed7aa",
    };
  }

  if (normalized === "REVIEWED") {
    return {
      background: "#eff6ff",
      color: "#2563eb",
      border: "1px solid #bfdbfe",
    };
  }

  if (normalized === "SHORTLISTED") {
    return {
      background: "#f0fdf4",
      color: "#16a34a",
      border: "1px solid #bbf7d0",
    };
  }

  if (normalized === "HIRED") {
    return {
      background: "#ecfdf5",
      color: "#059669",
      border: "1px solid #a7f3d0",
    };
  }

  if (normalized === "REJECTED") {
    return {
      background: "#fef2f2",
      color: "#dc2626",
      border: "1px solid #fecaca",
    };
  }

  return {
    background: "#f8fafc",
    color: "#475569",
    border: "1px solid #e2e8f0",
  };
}

function formatDate(dateString: string) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function AdminApplicationsPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [applications, setApplications] = useState<ApplicationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchApplications = async ({ silent = false } = {}) => {
    try {
      silent ? setRefreshing(true) : setLoading(true);
      setError("");

      const res = await fetch("/api/applications", {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch applications");
      }

      const data = await res.json();
      setApplications(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError("Could not load applications right now.");
    } finally {
      silent ? setRefreshing(false) : setLoading(false);
    }
  };

  const updateApplicationStatus = async (
    applicationId: string,
    newStatus: string
  ) => {
    try {
      setUpdatingId(applicationId);

      const res = await fetch(`/api/applications/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      await fetchApplications({ silent: true });
    } catch (err) {
      console.error(err);
      alert("Failed to update application status");
    } finally {
      setUpdatingId(null);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (user.role !== "ADMIN") {
      router.push("/");
      return;
    }

    fetchApplications();
  }, [user, router]);

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications.filter((application) => {
      const applicantName =
        application.fullName || application.user?.name || "";
      const applicantEmail =
        application.email || application.user?.email || "";
      const jobTitle = application.job?.title || "";
      const company = application.job?.company || "";
      const sector = application.job?.sector || "";
      const status = normalizeStatus(application.status);

      const matchesSearch =
        !query ||
        [applicantName, applicantEmail, jobTitle, company, sector, status].some(
          (value) => value.toLowerCase().includes(query)
        );

      const matchesStatus = statusFilter === "ALL" || status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, statusFilter]);

  const stats = useMemo(() => {
    const getCount = (value: string) =>
      applications.filter((app) => normalizeStatus(app.status) === value)
        .length;

    return {
      total: applications.length,
      pending: getCount("PENDING"),
      reviewed: getCount("REVIEWED"),
      shortlisted: getCount("SHORTLISTED"),
      hired: getCount("HIRED"),
    };
  }, [applications]);

  if (!user || user.role !== "ADMIN") return null;

  return (
    <div style={pageStyle}>
      <div style={{ marginBottom: "28px" }}>
        <h1 style={headerTitle}>Applications</h1>
        <p style={headerText}>
          View every application submitted by users, including the job applied
          for, applicant details, resume, and status.
        </p>
      </div>

      {/* STATS */}
      <div
        className="stats-grid"
        style={{ display: "grid", gap: "16px", marginBottom: "24px" }}
      >
        <div style={{ ...glassCard, padding: "22px" }}>
          <p style={mutedText}>Total Applications</p>
          <h3 style={{ fontSize: "2rem", color: "#0d2b28", marginTop: "8px" }}>
            {stats.total}
          </h3>
        </div>

        <div style={{ ...glassCard, padding: "22px" }}>
          <p style={mutedText}>Pending</p>
          <h3 style={{ fontSize: "2rem", color: "#c2410c", marginTop: "8px" }}>
            {stats.pending}
          </h3>
        </div>

        <div style={{ ...glassCard, padding: "22px" }}>
          <p style={mutedText}>Reviewed</p>
          <h3 style={{ fontSize: "2rem", color: "#2563eb", marginTop: "8px" }}>
            {stats.reviewed}
          </h3>
        </div>

        <div style={{ ...glassCard, padding: "22px" }}>
          <p style={mutedText}>Shortlisted</p>
          <h3 style={{ fontSize: "2rem", color: "#16a34a", marginTop: "8px" }}>
            {stats.shortlisted}
          </h3>
        </div>

        <div style={{ ...glassCard, padding: "22px" }}>
          <p style={mutedText}>Hired</p>
          <h3 style={{ fontSize: "2rem", color: "#059669", marginTop: "8px" }}>
            {stats.hired}
          </h3>
        </div>
      </div>

      {/* FILTER BAR */}
      <div
        style={{
          ...glassCard,
          padding: "22px",
          marginBottom: "24px",
        }}
      >
        <div
          className="filter-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 240px 170px",
            gap: "16px",
            alignItems: "end",
          }}
        >
          <div>
            <label htmlFor="search" style={labelStyle}>
              Search Applications
            </label>
            <input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by applicant name, email, job title, company, or sector"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="statusFilter" style={labelStyle}>
              Status Filter
            </label>
            <select
              id="statusFilter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={inputStyle}
            >
              <option value="ALL">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="REVIEWED">Reviewed</option>
              <option value="SHORTLISTED">Shortlisted</option>
              <option value="HIRED">Hired</option>
              <option value="REJECTED">Rejected</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => fetchApplications({ silent: true })}
            disabled={refreshing}
            style={{
              ...secondaryButtonStyle,
              opacity: refreshing ? 0.8 : 1,
              cursor: refreshing ? "not-allowed" : "pointer",
            }}
          >
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ ...glassCard, padding: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            marginBottom: "18px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={panelTitle}>All Applications</h2>
            <p style={mutedText}>
              Showing {filteredApplications.length} of {applications.length}{" "}
              applications
            </p>
          </div>
        </div>

        {loading ? (
          <div
            style={{
              padding: "40px",
              textAlign: "center",
              color: "#6b9e97",
            }}
          >
            Loading applications...
          </div>
        ) : error ? (
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fef2f2",
              color: "#dc2626",
              border: "1px solid #fecaca",
            }}
          >
            {error}
          </div>
        ) : filteredApplications.length === 0 ? (
          <div
            style={{
              padding: "40px",
              textAlign: "center",
              color: "#6b9e97",
            }}
          >
            No applications found.
          </div>
        ) : (
          <div className="table-wrap" style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "separate",
                borderSpacing: 0,
                minWidth: "1300px",
              }}
            >
              <thead>
                <tr>
                  {[
                    "Applicant",
                    "Job Applied For",
                    "Application Details",
                    "Status",
                    "Resume",
                    "Actions",
                    "Applied On",
                  ].map((heading) => (
                    <th
                      key={heading}
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        fontSize: "0.78rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#6b9e97",
                        borderBottom: "1px solid rgba(13, 43, 40, 0.08)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredApplications.map((application) => {
                  const applicantName =
                    application.fullName || application.user?.name || "Unknown";
                  const applicantEmail =
                    application.email || application.user?.email || "-";
                  const jobTitle = application.job?.title || "Job Deleted";
                  const company = application.job?.company || "-";
                  const sector = application.job?.sector || "-";
                  const jobId = application.job?.id;
                  const currentStatus = normalizeStatus(application.status);
                  const isUpdating = updatingId === application.id;

                  return (
                    <tr
                      key={application.id}
                      className="app-row"
                      style={{
                        verticalAlign: "top",
                        transition: "0.2s",
                      }}
                    >
                      {/* APPLICANT */}
                      <td
                        style={{
                          padding: "18px 16px",
                          borderBottom: "1px solid rgba(13, 43, 40, 0.06)",
                        }}
                      >
                        <div style={{ color: "#0d2b28", fontWeight: 700 }}>
                          {applicantName}
                        </div>
                        <div
                          style={{
                            color: "#6b9e97",
                            fontSize: "0.88rem",
                            marginTop: "4px",
                          }}
                        >
                          {applicantEmail}
                        </div>
                        <div
                          style={{
                            color: "#6b9e97",
                            fontSize: "0.78rem",
                            marginTop: "4px",
                          }}
                        >
                          User ID: {application.userId}
                        </div>
                      </td>

                      {/* JOB */}
                      <td
                        style={{
                          padding: "18px 16px",
                          borderBottom: "1px solid rgba(13, 43, 40, 0.06)",
                        }}
                      >
                        {jobId ? (
                          <Link
                            href={`/jobs/${jobId}`}
                            style={{
                              color: "#0e7a70",
                              fontWeight: 700,
                              textDecoration: "none",
                              display: "inline-block",
                              marginBottom: "6px",
                            }}
                          >
                            {jobTitle}
                          </Link>
                        ) : (
                          <div
                            style={{
                              color: "#0d2b28",
                              fontWeight: 700,
                              marginBottom: "6px",
                            }}
                          >
                            {jobTitle}
                          </div>
                        )}

                        <div style={{ color: "#6b9e97", fontSize: "0.88rem" }}>
                          {company} • {sector}
                        </div>

                        {application.job?.location && (
                          <div
                            style={{
                              color: "#6b9e97",
                              fontSize: "0.78rem",
                              marginTop: "4px",
                            }}
                          >
                            {application.job.location}
                          </div>
                        )}
                      </td>

                      {/* APPLICATION DETAILS */}
                      <td
                        style={{
                          padding: "18px 16px",
                          borderBottom: "1px solid rgba(13, 43, 40, 0.06)",
                        }}
                      >
                        <div style={{ color: "#0d2b28", fontSize: "0.88rem" }}>
                          <strong>Current CTC:</strong>{" "}
                          {application.currentCTC || "—"}
                        </div>
                        <div
                          style={{
                            color: "#0d2b28",
                            fontSize: "0.88rem",
                            marginTop: "4px",
                          }}
                        >
                          <strong>Expected CTC:</strong>{" "}
                          {application.expectedCTC || "—"}
                        </div>
                        <div
                          style={{
                            color: "#0d2b28",
                            fontSize: "0.88rem",
                            marginTop: "4px",
                          }}
                        >
                          <strong>Preferred Location:</strong>{" "}
                          {application.preferredLocation || "—"}
                        </div>
                        <div
                          style={{
                            color: "#0d2b28",
                            fontSize: "0.88rem",
                            marginTop: "4px",
                          }}
                        >
                          <strong>Notice Period:</strong>{" "}
                          {application.noticePeriod || "—"}
                        </div>
                        <div
                          style={{
                            color: "#0d2b28",
                            fontSize: "0.88rem",
                            marginTop: "4px",
                          }}
                        >
                          <strong>Skills:</strong> {application.skills || "—"}
                        </div>
                      </td>

                      {/* STATUS */}
                      <td
                        style={{
                          padding: "18px 16px",
                          borderBottom: "1px solid rgba(13, 43, 40, 0.06)",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "6px 12px",
                            borderRadius: "999px",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            ...getStatusPillStyle(application.status),
                          }}
                        >
                          {formatStatusLabel(application.status)}
                        </span>
                      </td>

                      {/* RESUME */}
                      <td
                        style={{
                          padding: "18px 16px",
                          borderBottom: "1px solid rgba(13, 43, 40, 0.06)",
                        }}
                      >
                        {application.resumeUrl ? (
                          <a
                            href={application.resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "10px 14px",
                              borderRadius: "12px",
                              textDecoration: "none",
                              color: "white",
                              background:
                                "linear-gradient(135deg, #2ec4b6, #0e7a70)",
                              fontWeight: 700,
                              fontSize: "0.86rem",
                            }}
                          >
                            Open Resume
                          </a>
                        ) : (
                          <span
                            style={{ color: "#9ca3af", fontSize: "0.86rem" }}
                          >
                            No resume uploaded
                          </span>
                        )}
                      </td>

                      {/* ACTIONS */}
                      <td
                        style={{
                          padding: "18px 16px",
                          borderBottom: "1px solid rgba(13, 43, 40, 0.06)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            minWidth: "140px",
                          }}
                        >
                          {currentStatus === "PENDING" && (
                            <>
                              <button
                                onClick={() =>
                                  updateApplicationStatus(
                                    application.id,
                                    "REVIEWED"
                                  )
                                }
                                disabled={isUpdating}
                                style={{
                                  ...actionButtonBase,
                                  background: "#2563eb",
                                  color: "white",
                                  opacity: isUpdating ? 0.6 : 1,
                                  cursor: isUpdating
                                    ? "not-allowed"
                                    : "pointer",
                                }}
                              >
                                {isUpdating ? "..." : "Mark Reviewed"}
                              </button>
                              <button
                                onClick={() =>
                                  updateApplicationStatus(
                                    application.id,
                                    "REJECTED"
                                  )
                                }
                                disabled={isUpdating}
                                style={{
                                  ...actionButtonBase,
                                  background: "#dc2626",
                                  color: "white",
                                  opacity: isUpdating ? 0.6 : 1,
                                  cursor: isUpdating
                                    ? "not-allowed"
                                    : "pointer",
                                }}
                              >
                                {isUpdating ? "..." : "Reject"}
                              </button>
                            </>
                          )}

                          {currentStatus === "REVIEWED" && (
                            <>
                              <button
                                onClick={() =>
                                  updateApplicationStatus(
                                    application.id,
                                    "SHORTLISTED"
                                  )
                                }
                                disabled={isUpdating}
                                style={{
                                  ...actionButtonBase,
                                  background: "#16a34a",
                                  color: "white",
                                  opacity: isUpdating ? 0.6 : 1,
                                  cursor: isUpdating
                                    ? "not-allowed"
                                    : "pointer",
                                }}
                              >
                                {isUpdating ? "..." : "Shortlist"}
                              </button>
                              <button
                                onClick={() =>
                                  updateApplicationStatus(
                                    application.id,
                                    "REJECTED"
                                  )
                                }
                                disabled={isUpdating}
                                style={{
                                  ...actionButtonBase,
                                  background: "#dc2626",
                                  color: "white",
                                  opacity: isUpdating ? 0.6 : 1,
                                  cursor: isUpdating
                                    ? "not-allowed"
                                    : "pointer",
                                }}
                              >
                                {isUpdating ? "..." : "Reject"}
                              </button>
                            </>
                          )}

                          {currentStatus === "SHORTLISTED" && (
                            <>
                              <button
                                onClick={() =>
                                  updateApplicationStatus(
                                    application.id,
                                    "HIRED"
                                  )
                                }
                                disabled={isUpdating}
                                style={{
                                  ...actionButtonBase,
                                  background:
                                    "linear-gradient(135deg, #059669, #0e7a70)",
                                  color: "white",
                                  opacity: isUpdating ? 0.6 : 1,
                                  cursor: isUpdating
                                    ? "not-allowed"
                                    : "pointer",
                                  fontWeight: 700,
                                }}
                              >
                                {isUpdating ? "..." : "✓ Hire Candidate"}
                              </button>
                              <button
                                onClick={() =>
                                  updateApplicationStatus(
                                    application.id,
                                    "REJECTED"
                                  )
                                }
                                disabled={isUpdating}
                                style={{
                                  ...actionButtonBase,
                                  background: "#dc2626",
                                  color: "white",
                                  opacity: isUpdating ? 0.6 : 1,
                                  cursor: isUpdating
                                    ? "not-allowed"
                                    : "pointer",
                                }}
                              >
                                {isUpdating ? "..." : "Reject"}
                              </button>
                            </>
                          )}

                          {currentStatus === "HIRED" && (
                            <span
                              style={{
                                ...actionButtonBase,
                                background: "#ecfdf5",
                                color: "#059669",
                                border: "1px solid #a7f3d0",
                                textAlign: "center",
                                cursor: "default",
                              }}
                            >
                              ✓ Hired
                            </span>
                          )}

                          {currentStatus === "REJECTED" && (
                            <span
                              style={{
                                ...actionButtonBase,
                                background: "#fef2f2",
                                color: "#dc2626",
                                border: "1px solid #fecaca",
                                textAlign: "center",
                                cursor: "default",
                              }}
                            >
                              Rejected
                            </span>
                          )}
                        </div>
                      </td>

                      {/* DATE */}
                      <td
                        style={{
                          padding: "18px 16px",
                          borderBottom: "1px solid rgba(13, 43, 40, 0.06)",
                          color: "#0d2b28",
                          fontSize: "0.88rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formatDate(application.createdAt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style jsx>{`
        .app-row:hover {
          background: rgba(244, 241, 232, 0.55);
        }

        @media (max-width: 1100px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .filter-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}