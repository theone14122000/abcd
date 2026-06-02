"use client";

import { useState, ChangeEvent, FormEvent } from "react";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const validExt = [".pdf", ".doc", ".docx"];
    const okType = validTypes.includes(file.type);
    const okExt  = validExt.some((ext) => file.name.toLowerCase().endsWith(ext));

    if (!okType && !okExt) {
      setError("Please upload a PDF or Word document");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }
    setResume(file);
    setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    console.log("=== FORM SUBMISSION STARTED ===");
    console.log("Job ID:", job.id, "| User ID:", user.id);

    try {
      // Always send as FormData — never JSON — so the server always hits
      // the multipart branch and req.json() is never called.
      const formData = new FormData();
      formData.append("jobId",             job.id);
      formData.append("userId",            user.id);
      formData.append("fullName",          form.fullName);
      formData.append("email",             form.email);
      formData.append("currentCTC",        form.currentCTC);
      formData.append("expectedCTC",       form.expectedCTC);
      formData.append("preferredLocation", form.preferredLocation);
      formData.append("noticePeriod",      form.noticePeriod);
      formData.append("skills",            form.skills);

      if (resume) {
        formData.append("resume", resume);
        console.log("Resume attached:", resume.name, resume.size, "bytes");
      }

      // DO NOT set Content-Type manually.
      // The browser sets it automatically with the correct multipart boundary.
      const res = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", res.status);

      let data: { message?: string } = {};
      try {
        data = await res.json();
      } catch {
        throw new Error("Server returned an invalid response");
      }

      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit application");
      }

      setMessage("Application submitted successfully! Redirecting...");
      setLoading(false);
      setTimeout(() => router.push("/jobs"), 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit application");
      setLoading(false);
      console.error("Apply form error:", err);
    }
  };

  return (
    <div style={{
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: "1px solid rgba(46,196,182,0.14)",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 20px 50px rgba(13,43,40,0.06)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <h2 style={{
        fontFamily: "'Clash Display', sans-serif",
        fontSize: "1.5rem",
        color: "#0d2b28",
        marginBottom: "8px",
        fontWeight: 700,
      }}>
        Apply for {job.title}
      </h2>

      <p style={{ color: "#6b9e97", marginBottom: "24px", fontSize: "0.9rem" }}>
        {job.company} • {job.location} • {job.type}
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" style={labelStyle}>Full Name *</label>
          <input id="fullName" name="fullName" type="text" placeholder="John Doe"
            value={form.fullName} onChange={handleChange} required style={inputStyle} />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" style={labelStyle}>Email Address *</label>
          <input id="email" name="email" type="email" placeholder="john@example.com"
            value={form.email} onChange={handleChange} required style={inputStyle} />
        </div>

        {/* CTC */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <div>
            <label htmlFor="currentCTC" style={labelStyle}>Current CTC</label>
            <input id="currentCTC" name="currentCTC" type="text" placeholder="e.g. 5,00,000"
              value={form.currentCTC} onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="expectedCTC" style={labelStyle}>Expected CTC</label>
            <input id="expectedCTC" name="expectedCTC" type="text" placeholder="e.g. 8,00,000"
              value={form.expectedCTC} onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        {/* Location & Notice */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <div>
            <label htmlFor="preferredLocation" style={labelStyle}>Preferred Location</label>
            <input id="preferredLocation" name="preferredLocation" type="text"
              placeholder="e.g. Mumbai, Remote" value={form.preferredLocation}
              onChange={handleChange} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="noticePeriod" style={labelStyle}>Notice Period</label>
            <input id="noticePeriod" name="noticePeriod" type="text" placeholder="e.g. 1 Month"
              value={form.noticePeriod} onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills" style={labelStyle}>Skills &amp; Expertise</label>
          <textarea id="skills" name="skills" rows={4}
            placeholder="List your key skills (e.g., React, Node.js, SQL)"
            value={form.skills} onChange={handleChange}
            style={{ ...inputStyle, resize: "none" }} />
        </div>

        {/* Resume Upload */}
        <div>
          <label htmlFor="resume" style={labelStyle}>Upload Resume (PDF/Word)</label>
          <div style={{
            border: resume ? "2px solid #0e7a70" : "2px dashed rgba(46,196,182,0.3)",
            borderRadius: "12px", padding: "20px", textAlign: "center",
            background: resume ? "rgba(14,122,112,0.05)" : "rgba(248,250,252,0.5)",
            transition: "all 0.2s",
          }}>
            <input id="resume" type="file" accept=".pdf,.doc,.docx"
              onChange={handleFileChange} style={{ display: "none" }} />

            {!resume ? (
              <>
                <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>📄</div>
                <button type="button" onClick={() => document.getElementById("resume")?.click()}
                  style={{
                    background: "transparent", border: "none", color: "#0e7a70",
                    fontWeight: 600, cursor: "pointer", fontSize: "0.95rem", textDecoration: "underline",
                  }}>
                  Click to upload resume
                </button>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "6px" }}>
                  Max size: 5MB • PDF or Word only
                </p>
              </>
            ) : (
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "white", padding: "14px 18px", borderRadius: "10px",
                border: "1px solid rgba(46,196,182,0.2)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.5rem" }}>📎</span>
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontWeight: 600, color: "#0d2b28", fontSize: "0.9rem", margin: 0 }}>
                      {resume.name}
                    </p>
                    <p style={{ color: "#6b9e97", fontSize: "0.75rem", margin: 0 }}>
                      {(resume.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <button type="button" onClick={() => setResume(null)} style={{
                  background: "#fef2f2", color: "#dc2626", border: "none",
                  borderRadius: "8px", padding: "6px 12px", fontSize: "0.8rem",
                  fontWeight: 600, cursor: "pointer",
                }}>
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            padding: "14px 16px", borderRadius: "12px", background: "#fef2f2",
            color: "#dc2626", border: "1px solid #fecaca", fontSize: "0.9rem",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <span>⚠️</span> {error}
          </div>
        )}

        {/* Success */}
        {message && (
          <div style={{
            padding: "14px 16px", borderRadius: "12px", background: "#ecfdf5",
            color: "#047857", border: "1px solid #a7f3d0", fontSize: "0.9rem",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <span>✅</span> {message}
          </div>
        )}

        {/* Submit */}
        <button type="submit" disabled={loading} style={{
          marginTop: "10px", padding: "16px 24px", borderRadius: "14px", border: "none",
          background: loading ? "#94a3b8" : "linear-gradient(135deg, #0e7a70, #0d2b28)",
          color: "white", fontWeight: 700, fontSize: "1rem",
          cursor: loading ? "not-allowed" : "pointer", transition: "all 0.3s ease",
          transform: loading ? "scale(0.98)" : "scale(1)",
          boxShadow: loading ? "none" : "0 4px 12px rgba(14, 122, 112, 0.3)",
        }}>
          {loading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <span style={{
                width: "20px", height: "20px", border: "2px solid white",
                borderTopColor: "transparent", borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }} />
              Submitting...
            </span>
          ) : "Submit Application"}
        </button>
      </form>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 16px", borderRadius: "12px",
  border: "1px solid rgba(46,196,182,0.18)", background: "rgba(248,250,252,0.95)",
  outline: "none", fontSize: "0.92rem", color: "#0d2b28",
  fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block", marginBottom: "6px", color: "#6b9e97",
  fontSize: "0.85rem", fontWeight: 600,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};
