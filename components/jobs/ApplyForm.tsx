"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface JobData {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  sector: string;
  description: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
}

export default function ApplyForm({ job, user }: { job: JobData; user: UserData }) {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fullName: user.name || "",
    email: user.email || "",
    currentCTC: "",
    expectedCTC: "",
    preferredLocation: "",
    noticePeriod: "",
    skills: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Reset state if user changes
  if (!user) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Basic file validation
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const fileName = file.name.toLowerCase();
      
      if (allowedTypes.includes(file.type) || fileName.endsWith(".pdf") || fileName.endsWith(".doc") || fileName.endsWith(".docx")) {
        setResumeFile(file);
      } else {
        alert("Please upload a PDF or Word document.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const formDataPayload = new FormData();

      // Append text fields
      formDataPayload.append("jobId", job.id);
      formDataPayload.append("userId", user.id);
      formDataPayload.append("fullName", formData.fullName);
      formDataPayload.append("email", formData.email);
      formDataPayload.append("currentCTC", formData.currentCTC || "");
      formDataPayload.append("expectedCTC", formData.expectedCTC || "");
      formDataPayload.append("preferredLocation", formData.preferredLocation || "");
      formDataPayload.append("noticePeriod", formData.noticePeriod || "");
      formDataPayload.append("skills", formData.skills || "");

      // Append resume if exists
      if (resumeFile) {
        formDataPayload.append("resume", resumeFile);
      }

      console.log("Submitting application...");

      const res = await fetch("/api/applications", {
        method: "POST",
        body: formDataPayload,
        // IMPORTANT: Do NOT set Content-Type header manually when using FormData
        // The browser sets it automatically with the boundary
      });

      const data = await res.json().catch(() => ({ message: "Server error" }));

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit application");
      }

      setSuccessMessage("Application submitted successfully! You will be redirected shortly.");
      setLoading(false);

      // Redirect after 2 seconds
      setTimeout(() => {
        router.push("/jobs");
      }, 2500);

    } catch (err) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
      setLoading(false);
      console.error("Apply Form Error:", err);
    }
  };

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(46, 196, 182, 0.14)",
        borderRadius: "24px",
        padding: "32px",
        boxShadow: "0 20px 50px rgba(13, 43, 40, 0.06)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      <h2
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "1.6rem",
          color: "#0d2b28",
          marginBottom: "8px",
          fontWeight: 700,
        }}
      >
        Apply for {job.title}
      </h2>
      
      <p style={{ color: "#6b9e97", fontSize: "0.9rem", marginBottom: "24px" }}>
        Complete the form below to submit your application.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        
        {/* Personal Info */}
        <div>
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        {/* CTC & Location */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          <div>
            <label htmlFor="currentCTC" className="form-label">Current CTC (Annual)</label>
            <input
              id="currentCTC"
              name="currentCTC"
              type="text"
              placeholder="e.g. 5,00,000"
              value={formData.currentCTC}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="expectedCTC" className="form-label">Expected CTC (Annual)</label>
            <input
              id="expectedCTC"
              name="expectedCTC"
              type="text"
              placeholder="e.g. 8,00,000"
              value={formData.expectedCTC}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          <div>
            <label htmlFor="preferredLocation" className="form-label">Preferred Location</label>
            <input
              id="preferredLocation"
              name="preferredLocation"
              type="text"
              placeholder="e.g. Mumbai, Remote"
              value={formData.preferredLocation}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="noticePeriod" className="form-label">Notice Period</label>
            <input
              id="noticePeriod"
              name="noticePeriod"
              type="text"
              placeholder="e.g. 1 Month, Immediate"
              value={formData.noticePeriod}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills" className="form-label">Skills & Expertise</label>
          <textarea
            id="skills"
            name="skills"
            placeholder="List your key skills (e.g., React, Node.js, SQL)"
            rows={4}
            value={formData.skills}
            onChange={handleChange}
            style={{ ...inputStyles, resize: "none" }}
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label htmlFor="resume" className="form-label">Upload Resume (PDF/Word)</label>
          <div style={{ 
            border: "2px dashed rgba(46, 196, 182, 0.3)", 
            borderRadius: "12px", 
            padding: "20px", 
            textAlign: "center",
            background: "rgba(248, 250, 252, 0.5)",
            transition: "border-color 0.2s"
          }} onDragOver={(e) => e.preventDefault()} onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) {
              setResumeFile(e.dataTransfer.files[0]);
            }
          }}>
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            {!resumeFile ? (
              <>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📄</div>
                <button
                  type="button"
                  onClick={() => document.getElementById("resume")?.click()}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#0e7a70",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    textDecoration: "underline",
                  }}
                >
                  Click to upload
                </button>
                <p style={{ fontSize: "0.8rem", color: "#9ca3af", marginTop: "4px" }}>
                  Max size: 5MB
                </p>
              </>
            ) : (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "white", padding: "12px 16px", borderRadius: "8px" }}>
                <span style={{ fontWeight: 600, color: "#0d2b28", fontSize: "0.9rem" }}>{resumeFile.name}</span>
                <button
                  type="button"
                  onClick={() => setResumeFile(null)}
                  style={{
                    background: "#fee2e2",
                    color: "#dc2626",
                    border: "none",
                    borderRadius: "6px",
                    padding: "4px 8px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Messages */}
        {errorMessage && (
          <div style={{
            padding: "14px",
            borderRadius: "12px",
            background: "#fef2f2",
            color: "#b91c1c",
            border: "1px solid #fecaca",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            ⚠️ {errorMessage}
          </div>
        )}

        {successMessage && (
          <div style={{
            padding: "14px",
            borderRadius: "12px",
            background: "#ecfdf5",
            color: "#047857",
            border: "1px solid #a7f3d0",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            ✅ {successMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "16px 24px",
            borderRadius: "14px",
            border: "none",
            background: loading ? "#cbd5e1" : "linear-gradient(135deg, #0e7a70, #0d2b28)",
            color: "white",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            transform: loading ? "scale(0.98)" : "scale(1)",
            boxShadow: loading ? "none" : "0 4px 12px rgba(14, 122, 112, 0.3)",
          }}
        >
          {loading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span style={{ width: "18px", height: "18px", border: "2px solid white", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }}></span>
              Submitting...
            </span>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>

      <style jsx>{`
        .form-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #6b9e97;
          margin-bottom: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(46, 196, 182, 0.18);
          background: rgba(248, 250, 252, 0.95);
          outline: none;
          font-size: 0.92rem;
          color: #0d2b28;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: all 0.2s;
        }

        .form-input:focus {
          border-color: #0e7a70;
          box-shadow: 0 0 0 3px rgba(14, 122, 112, 0.1);
          background: white;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}