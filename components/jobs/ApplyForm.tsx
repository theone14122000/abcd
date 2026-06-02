"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CSSProperties } from "react";

interface ApplyFormJob {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string | null;
  type: string;
  sector: string;
  description?: string;
}

interface ApplyFormUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
}

interface ApplyFormProps {
  job: ApplyFormJob;
  user: ApplyFormUser;
}

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(46,196,182,0.18)",
  background: "rgba(248,250,252,0.95)",
  outline: "none",
  fontSize: "0.92rem",
  color: "#0d2b28",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  transition: "0.2s",
};

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: 6,
  color: "#6b9e97",
  fontSize: "0.85rem",
  fontWeight: 700,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

const helperTextStyle: CSSProperties = {
  marginTop: 6,
  color: "#6b9e97",
  fontSize: "0.78rem",
  lineHeight: 1.5,
};

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
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setResume(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const lowerName = file.name.toLowerCase();

    const hasAllowedExtension = allowedExtensions.some((ext) =>
      lowerName.endsWith(ext)
    );

    if (!allowedTypes.includes(file.type) && !hasAllowedExtension) {
      setError("Please upload a PDF, DOC, or DOCX resume.");
      e.target.value = "";
      setResume(null);
      return;
    }

    const maxSizeInMB = 5;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

    if (file.size > maxSizeInBytes) {
      setError(`Resume size must be less than ${maxSizeInMB}MB.`);
      e.target.value = "";
      setResume(null);
      return;
    }

    setError("");
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      if (!user?.id) {
        throw new Error("Please login before applying.");
      }

      if (!job?.id) {
        throw new Error("Job information is missing.");
      }

      if (!form.fullName.trim()) {
        throw new Error("Full name is required.");
      }

      if (!form.email.trim()) {
        throw new Error("Email is required.");
      }

      if (!resume) {
        throw new Error("Please upload your resume.");
      }

      const formData = new FormData();

      formData.append("jobId", job.id);
      formData.append("userId", user.id);
      formData.append("fullName", form.fullName.trim());
      formData.append("email", form.email.trim());
      formData.append("currentCTC", form.currentCTC.trim());
      formData.append("expectedCTC", form.expectedCTC.trim());
      formData.append("preferredLocation", form.preferredLocation.trim());
      formData.append("noticePeriod", form.noticePeriod.trim());
      formData.append("skills", form.skills.trim());
      formData.append("resume", resume);

      const res = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            "Failed to submit application. Please try again."
        );
      }

      setSuccessMessage("Application submitted successfully.");

      setForm({
        fullName: user?.name || "",
        email: user?.email || "",
        currentCTC: "",
        expectedCTC: "",
        preferredLocation: "",
        noticePeriod: "",
        skills: "",
      });

      setResume(null);

      setTimeout(() => {
        router.push("/jobs");
      }, 1400);
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to submit application. Please try again.";

      setError(msg);
      console.error("Apply form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(46,196,182,0.14)",
        borderRadius: "24px",
        padding: "32px",
        boxShadow: "0 20px 50px rgba(13,43,40,0.06)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            color: "#0e7a70",
            fontSize: "0.76rem",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Application Form
        </p>

        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "1.65rem",
            color: "#0d2b28",
            marginBottom: "8px",
            lineHeight: 1.2,
          }}
        >
          Apply for this role
        </h2>

        <p
          style={{
            color: "#6b9e97",
            fontSize: "0.92rem",
            lineHeight: 1.7,
          }}
        >
          Submit your details for{" "}
          <strong style={{ color: "#0d2b28" }}>{job.title}</strong> at{" "}
          <strong style={{ color: "#0d2b28" }}>{job.company}</strong>.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div>
          <label htmlFor="fullName" style={labelStyle}>
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div
          className="apply-form-two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
          }}
        >
          <div>
            <label htmlFor="currentCTC" style={labelStyle}>
              Current CTC
            </label>
            <input
              id="currentCTC"
              name="currentCTC"
              type="text"
              placeholder="e.g. 4 LPA"
              value={form.currentCTC}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="expectedCTC" style={labelStyle}>
              Expected CTC
            </label>
            <input
              id="expectedCTC"
              name="expectedCTC"
              type="text"
              placeholder="e.g. 6 LPA"
              value={form.expectedCTC}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        <div>
          <label htmlFor="preferredLocation" style={labelStyle}>
            Preferred Location
          </label>
          <input
            id="preferredLocation"
            name="preferredLocation"
            type="text"
            placeholder="e.g. Mumbai, Pune, Remote"
            value={form.preferredLocation}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="noticePeriod" style={labelStyle}>
            Notice Period
          </label>
          <input
            id="noticePeriod"
            name="noticePeriod"
            type="text"
            placeholder="e.g. Immediate, 15 days, 30 days"
            value={form.noticePeriod}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="skills" style={labelStyle}>
            Key Skills
          </label>
          <textarea
            id="skills"
            name="skills"
            placeholder="Mention your key skills, technologies, tools, or relevant experience..."
            value={form.skills}
            onChange={handleChange}
            rows={4}
            style={{
              ...inputStyle,
              resize: "none",
              lineHeight: 1.6,
            }}
          />
        </div>

        <div>
          <label htmlFor="resume" style={labelStyle}>
            Upload Resume
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            required
            style={{
              ...inputStyle,
              cursor: "pointer",
              padding: "11px 14px",
            }}
          />
          <p style={helperTextStyle}>
            Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB.
          </p>

          {resume && (
            <p
              style={{
                ...helperTextStyle,
                color: "#0e7a70",
                fontWeight: 700,
              }}
            >
              Selected: {resume.name}
            </p>
          )}
        </div>

        {error && (
          <div
            style={{
              padding: "12px 14px",
              borderRadius: "12px",
              background: "#fef2f2",
              color: "#dc2626",
              border: "1px solid #fecaca",
              fontSize: "0.88rem",
              lineHeight: 1.6,
            }}
          >
            {error}
          </div>
        )}

        {successMessage && (
          <div
            style={{
              padding: "12px 14px",
              borderRadius: "12px",
              background: "#ecfdf5",
              color: "#059669",
              border: "1px solid #a7f3d0",
              fontSize: "0.88rem",
              lineHeight: 1.6,
            }}
          >
            {successMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "4px",
            padding: "14px 18px",
            borderRadius: "14px",
            border: "none",
            background: loading
              ? "#94a3b8"
              : "linear-gradient(135deg, #0e7a70, #0d2b28)",
            color: "white",
            fontWeight: 800,
            fontSize: "0.92rem",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "0.25s",
            boxShadow: loading
              ? "none"
              : "0 12px 30px rgba(14,122,112,0.22)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {loading ? "Submitting Application..." : "Submit Application"}
        </button>
      </form>

      <style jsx>{`
        @media (max-width: 720px) {
          .apply-form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}