"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ApplyFormProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    sector: string;
    description: string;
  };
  user: {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "USER";
  };
}

export default function ApplyForm({ job, user }: ApplyFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    currentCTC: "",
    expectedCTC: "",
    preferredLocation: "",
    noticePeriod: "",
    skills: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      // Create FormData object
      const formData = new FormData();

      // Append all fields as strings
      formData.append("jobId", String(job.id));
      formData.append("userId", String(user.id));
      formData.append("fullName", String(form.fullName));
      formData.append("email", String(form.email));
      formData.append("currentCTC", String(form.currentCTC || ""));
      formData.append("expectedCTC", String(form.expectedCTC || ""));
      formData.append("preferredLocation", String(form.preferredLocation || ""));
      formData.append("noticePeriod", String(form.noticePeriod || ""));
      formData.append("skills", String(form.skills || ""));

      // Append resume file if exists
      if (resume) {
        formData.append("resume", resume);
      }

      console.log("Sending FormData to /api/applications");
      console.log("Job ID:", job.id);
      console.log("User ID:", user.id);

      // Send request - DO NOT set Content-Type header
      const res = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", res.status);

      // Parse response
      let data;
      try {
        data = await res.json();
      } catch (parseErr) {
        console.error("Failed to parse response as JSON");
        throw new Error("Server returned invalid response");
      }

      console.log("Response data:", data);

      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit application");
      }

      setMessage("Application submitted successfully!");
      setLoading(false);

      setTimeout(() => {
        router.push("/jobs");
      }, 2000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to submit application";
      setError(msg);
      setLoading(false);
      console.error("Apply form error:", err);
    }
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(46,196,182,0.14)",
        borderRadius: "24px",
        padding: "32px",
        boxShadow: "0 20px 50px rgba(13,43,40,0.06)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <h2
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "1.5rem",
          color: "#0d2b28",
          marginBottom: "8px",
        }}
      >
        Apply for this job
      </h2>

      <p style={{ color: "#6b9e97", marginBottom: "24px" }}>
        Fill in your details to submit your application.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <label htmlFor="fullName" style={{ display: "block", marginBottom: 6, color: "#6b9e97", fontSize: "0.85rem", fontWeight: 600 }}>
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: 6, color: "#6b9e97", fontSize: "0.85rem", fontWeight: 600 }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label htmlFor="currentCTC" style={labelStyle}>Current CTC</label>
            <input id="currentCTC" name="currentCTC" value={form.currentCTC} onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="expectedCTC" style={labelStyle}>Expected CTC</label>
            <input id="expectedCTC" name="expectedCTC" value={form.expectedCTC} onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        <div>
          <label htmlFor="preferredLocation" style={labelStyle}>Preferred Location</label>
          <input id="preferredLocation" name="preferredLocation" value={form.preferredLocation} onChange={handleChange} style={inputStyle} />
        </div>

        <div>
          <label htmlFor="noticePeriod" style={labelStyle}>Notice Period</label>
          <input id="noticePeriod" name="noticePeriod" value={form.noticePeriod} onChange={handleChange} style={inputStyle} />
        </div>

        <div>
          <label htmlFor="skills" style={labelStyle}>Skills</label>
          <textarea
            id="skills"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            rows={4}
            style={{ ...inputStyle, resize: "none" }}
          />
        </div>

        <div>
          <label htmlFor="resume" style={labelStyle}>Resume</label>
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files?.[0] || null)}
            style={inputStyle}
          />
        </div>

        {error && (
          <div style={{ padding: "12px 14px", borderRadius: "12px", background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
            {error}
          </div>
        )}

        {message && (
          <div style={{ padding: "12px 14px", borderRadius: "12px", background: "#ecfdf5", color: "#059669", border: "1px solid #a7f3d0" }}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "14px 18px",
            borderRadius: "14px",
            border: "none",
            background: loading
              ? "#94a3b8"
              : "linear-gradient(135deg, #0e7a70, #0d2b28)",
            color: "white",
            fontWeight: 700,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(46,196,182,0.18)",
  background: "rgba(248,250,252,0.95)",
  outline: "none",
  fontSize: "0.92rem",
  color: "#0d2b28",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  color: "#6b9e97",
  fontSize: "0.85rem",
  fontWeight: 600,
};