"use client";

import React, { useRef, useState } from "react";
import { FormErrors, SubmissionResponse } from "@/types/application";

type CandidateSubmissionValues = {
  fullName: string;
  email: string;
  phone: string;
  positionApplied: string;
  location: string;
  currentCTC: string;
  expectedCTC: string;
};

const initialValues: CandidateSubmissionValues = {
  fullName: "",
  email: "",
  phone: "",
  positionApplied: "",
  location: "",
  currentCTC: "",
  expectedCTC: "",
};

const MAX_RESUME_SIZE = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 12,
  border: "1.5px solid rgba(13,43,40,0.15)",
  background: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(8px)",
  outline: "none",
  fontSize: "0.875rem",
  color: "#0d2b28",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 5,
  fontSize: "0.78rem",
  fontWeight: 700,
  color: "#0d2b28",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  letterSpacing: "0.02em",
};

const errorStyle: React.CSSProperties = {
  color: "#b91c1c",
  fontSize: "0.72rem",
  marginTop: 4,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

export default function CandidateSubmissionForm() {
  const [formData, setFormData] = useState<CandidateSubmissionValues>(initialValues);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = "Valid email required";
    if (!/^\+?[0-9]{10,15}$/.test(formData.phone.trim()))
      newErrors.phone = "Valid phone number required";
    if (!formData.positionApplied.trim()) newErrors.positionApplied = "Position is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.currentCTC.trim()) newErrors.currentCTC = "Current CTC is required";
    if (!formData.expectedCTC.trim()) newErrors.expectedCTC = "Expected CTC is required";
    if (!resumeFile) {
      newErrors.resume = "Resume upload is required";
    } else if (resumeFile.size > MAX_RESUME_SIZE) {
      newErrors.resume = "Resume size must be less than 5MB";
    } else if (!ALLOWED_RESUME_TYPES.has(resumeFile.type)) {
      newErrors.resume = "Only PDF, DOC, and DOCX files are allowed";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_RESUME_SIZE) {
      setResumeFile(null);
      setErrors((prev) => ({ ...prev, resume: "Resume size must be less than 5MB" }));
      e.target.value = "";
      return;
    }
    if (!ALLOWED_RESUME_TYPES.has(file.type)) {
      setResumeFile(null);
      setErrors((prev) => ({ ...prev, resume: "Only PDF, DOC, and DOCX files are allowed" }));
      e.target.value = "";
      return;
    }
    setResumeFile(file);
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const resetForm = () => {
    setFormData(initialValues);
    setResumeFile(null);
    setErrors({});
    setSubmitStatus("idle");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const set = (key: keyof CandidateSubmissionValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    if (!validate()) return;
    try {
      setIsSubmitting(true);
      const payload = new FormData();
      payload.append("source", "HERO_FORM");
      payload.append("fullName", formData.fullName.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("positionApplied", formData.positionApplied.trim());
      payload.append("currentLocation", formData.location.trim());
      payload.append("preferredLocation", formData.location.trim());
      payload.append("currentCTC", formData.currentCTC.trim());
      payload.append("expectedCTC", formData.expectedCTC.trim());
      if (resumeFile) payload.append("resume", resumeFile);

      const res = await fetch("/api/applications", { method: "POST", body: payload });
      const data: SubmissionResponse & { missingFields?: string[] } = await res.json();

      if (!res.ok) {
        if (Array.isArray(data.missingFields) && data.missingFields.length > 0) {
          const serverErrors: FormErrors = {};
          data.missingFields.forEach((field) => {
            serverErrors[field] = "This field is required";
          });
          setErrors((prev) => ({ ...prev, ...serverErrors }));
        }
        throw new Error(data.message || "Submission failed");
      }
      setSubmitStatus("success");
      resetForm();
    } catch (err) {
      console.error("Application submission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Success state ── */
  if (submitStatus === "success") {
    return (
      <div
        style={{
          padding: "48px 36px",
          borderRadius: 24,
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(20px)",
          border: "1.5px solid rgba(46,196,182,0.25)",
          boxShadow: "0 24px 64px rgba(13,43,40,0.1)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🎉</div>
        <h3
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "#0d2b28",
            marginBottom: 8,
          }}
        >
          Application Submitted!
        </h3>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#2d5c55",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          Our recruitment team will review your profile and contact you shortly.
        </p>
        <button
          type="button"
          onClick={resetForm}
          style={{
            padding: "10px 28px",
            borderRadius: 50,
            border: "1.5px solid rgba(46,196,182,0.4)",
            background: "rgba(46,196,182,0.08)",
            color: "#0e7a70",
            fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          Submit Another
        </button>
      </div>
    );
  }

  /* ── Main form ── */
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "clamp(24px, 4vw, 36px) clamp(20px, 4vw, 32px)",
          borderRadius: 24,
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(20px)",
          border: "1.5px solid rgba(46,196,182,0.22)",
          boxShadow: "0 24px 64px rgba(13,43,40,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <h3
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              color: "#0d2b28",
              marginBottom: 4,
            }}
          >
            Quick Apply
          </h3>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.8rem",
              color: "#6b9e97",
            }}
          >
            Submit your profile directly to our talent pool
          </p>
        </div>

        {/* Row 1 — Full Name + Email */}
        <div className="csf-row" style={{ marginBottom: 14 }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Full Name</label>
            <input
              style={inputStyle}
              placeholder="John Doe"
              value={formData.fullName}
              onChange={set("fullName")}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#2ec4b6";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46,196,182,0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Email Address</label>
            <input
              style={inputStyle}
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={set("email")}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#2ec4b6";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46,196,182,0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}
          </div>
        </div>

        {/* Row 2 — Phone + Position */}
        <div className="csf-row" style={{ marginBottom: 14 }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Phone Number</label>
            <input
              style={inputStyle}
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={set("phone")}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#2ec4b6";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46,196,182,0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Position Applied For</label>
            <input
              style={inputStyle}
              placeholder="e.g. Senior React Developer"
              value={formData.positionApplied}
              onChange={set("positionApplied")}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#2ec4b6";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46,196,182,0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.positionApplied && <p style={errorStyle}>{errors.positionApplied}</p>}
          </div>
        </div>

        {/* Row 3 — Location (full width) */}
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Current Location</label>
          <input
            style={inputStyle}
            placeholder="City, State"
            value={formData.location}
            onChange={set("location")}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#2ec4b6";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46,196,182,0.12)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(13,43,40,0.15)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          {errors.location && <p style={errorStyle}>{errors.location}</p>}
        </div>

        {/* Row 4 — Current CTC + Expected CTC */}
        <div className="csf-row" style={{ marginBottom: 14 }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Current CTC</label>
            <input
              style={inputStyle}
              placeholder="e.g. 12 LPA"
              value={formData.currentCTC}
              onChange={set("currentCTC")}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#2ec4b6";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46,196,182,0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.currentCTC && <p style={errorStyle}>{errors.currentCTC}</p>}
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Expected CTC</label>
            <input
              style={inputStyle}
              placeholder="e.g. 18 LPA"
              value={formData.expectedCTC}
              onChange={set("expectedCTC")}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#2ec4b6";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46,196,182,0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {errors.expectedCTC && <p style={errorStyle}>{errors.expectedCTC}</p>}
          </div>
        </div>

        {/* Resume Upload */}
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Resume Upload</label>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="resume-upload"
          />
          <label
            htmlFor="resume-upload"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "11px 14px",
              borderRadius: 12,
              border: resumeFile
                ? "1.5px solid rgba(14,122,112,0.5)"
                : "1.5px dashed rgba(46,196,182,0.4)",
              background: resumeFile
                ? "rgba(14,122,112,0.06)"
                : "rgba(255,255,255,0.6)",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.83rem",
              color: resumeFile ? "#0e7a70" : "#6b9e97",
              fontWeight: resumeFile ? 600 : 400,
              boxSizing: "border-box",
            }}
          >
            {resumeFile ? (
              <>✅ {resumeFile.name}</>
            ) : (
              <>📄 Click to upload PDF / DOC / DOCX &nbsp;·&nbsp; Max 5MB</>
            )}
          </label>
          {errors.resume && <p style={errorStyle}>{errors.resume}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "13px 24px",
            borderRadius: 14,
            border: "none",
            background: isSubmitting
              ? "#94a3b8"
              : "linear-gradient(135deg, #2ec4b6, #0e7a70)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.95rem",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            boxShadow: isSubmitting ? "none" : "0 6px 20px rgba(46,196,182,0.35)",
            transition: "all 0.25s ease",
            transform: isSubmitting ? "scale(0.98)" : "scale(1)",
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 28px rgba(46,196,182,0.45)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = isSubmitting
              ? "none"
              : "0 6px 20px rgba(46,196,182,0.35)";
          }}
        >
          {isSubmitting ? (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  border: "2px solid white",
                  borderTopColor: "transparent",
                  borderRadius: "50%",
                  animation: "csf-spin 0.7s linear infinite",
                  display: "inline-block",
                }}
              />
              Submitting…
            </span>
          ) : (
            "Submit Application"
          )}
        </button>

        {submitStatus === "error" && (
          <p
            style={{
              color: "#b91c1c",
              fontSize: "0.82rem",
              textAlign: "center",
              marginTop: 10,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      <style>{`
        .csf-row {
          display: flex;
          gap: 12px;
        }
        @media (max-width: 480px) {
          .csf-row {
            flex-direction: column;
            gap: 14px;
          }
        }
        @keyframes csf-spin {
          to { transform: rotate(360deg); }
        }
        input::placeholder {
          color: #9db8b4;
        }
      `}</style>
    </>
  );
}
