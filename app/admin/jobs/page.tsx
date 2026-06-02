"use client";

import { useEffect, useState } from "react";
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
  hasHiredCandidate?: boolean;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  fontSize: "0.9rem",
  outline: "none",
  transition: "0.2s",
  background: "#f8fafc",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  color: "#6b9e97",
  marginBottom: "6px",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

export default function AdminJobsPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full Time",
    sector: "IT",
    description: "",
  });

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/admin/jobs", {
        cache: "no-store",
      });
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch admin jobs:", error);
      setJobs([]);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user.role !== "ADMIN") {
      router.push("/");
    } else {
      fetchJobs();
    }
  }, [user, router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ message: "Unknown error" }));
        console.error("Create job failed:", res.status, errorData);
        alert("Failed to create job: " + errorData.message);
        setLoading(false);
        return;
      }

      setForm({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: "Full Time",
        sector: "IT",
        description: "",
      });

      await fetchJobs();
    } catch (error) {
      console.error("Failed to create job:", error);
      alert("Network error while creating job");
    } finally {
      setLoading(false);
    }
  };

  if (!user || user.role !== "ADMIN") return null;

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "40px 24px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <h1
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "2.5rem",
          color: "#0d2b28",
          marginBottom: "40px",
        }}
      >
        Job Management
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
        className="admin-grid"
      >
        {/* CREATE FORM */}
        <div
          style={{
            background: "white",
            padding: "32px",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(13,43,40,0.08)",
            border: "1px solid rgba(46,196,182,0.15)",
          }}
        >
          <h2 style={{ marginBottom: "24px", color: "#0d2b28" }}>
            Create New Position
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <label htmlFor="title" style={labelStyle}>
                Job Title
              </label>
              <input
                id="title"
                name="title"
                placeholder="e.g. Senior React Developer"
                value={form.title}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <div>
                <label htmlFor="company" style={labelStyle}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="location" style={labelStyle}>
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  placeholder="e.g. Mumbai, Remote"
                  value={form.location}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <div>
                <label htmlFor="salary" style={labelStyle}>
                  Salary (Monthly)
                </label>
                <input
                  id="salary"
                  name="salary"
                  placeholder="e.g. 50000"
                  value={form.salary}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="type" style={labelStyle}>
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="sector" style={labelStyle}>
                Sector (Category)
              </label>
              <select
                id="sector"
                name="sector"
                value={form.sector}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="IT">IT & Technology</option>
                <option value="HEALTH">Health & Medical</option>
                <option value="SALES">Sales & Marketing</option>
                <option value="FINANCE">Finance & Banking</option>
                <option value="MANUFACTURING">
                  Manufacturing & Operations
                </option>
                <option value="BPO">BPO & Customer Service</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" style={labelStyle}>
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Job responsibilities and requirements..."
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: "10px",
                padding: "14px",
                borderRadius: "12px",
                background: loading
                  ? "#ccc"
                  : "linear-gradient(135deg, #0e7a70, #0d2b28)",
                color: "white",
                fontWeight: 600,
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "0.3s",
                fontSize: "0.9rem",
              }}
            >
              {loading ? "Creating..." : "Create Job Post"}
            </button>
          </form>
        </div>

        {/* LISTING */}
        <div>
          <h2 style={{ marginBottom: "24px", color: "#0d2b28" }}>
            Recent Listings ({jobs.length})
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxHeight: "800px",
              overflowY: "auto",
              paddingRight: "8px",
            }}
          >
            {jobs.length === 0 && (
              <p style={{ color: "#6b9e97" }}>No jobs created yet.</p>
            )}

            {jobs.map((job) => (
              <div
                key={job.id}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid #eee",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div>
                  <h4 style={{ color: "#0d2b28", marginBottom: "4px" }}>
                    {job.title}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#6b9e97" }}>
                    {job.company} • {job.sector}
                  </p>

                  {job.hasHiredCandidate && (
                    <p
                      style={{
                        marginTop: "8px",
                        fontSize: "0.75rem",
                        color: "#059669",
                        background: "#ecfdf5",
                        border: "1px solid #a7f3d0",
                        display: "inline-block",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        fontWeight: 600,
                      }}
                    >
                      Filled / Hidden from public jobs
                    </p>
                  )}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      background: "#f0fdf9",
                      color: "#0e7a70",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      border: "1px solid #ccfbf1",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          .admin-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}