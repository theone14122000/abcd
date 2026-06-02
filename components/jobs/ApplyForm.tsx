"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Job } from "./JobCard";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface Props {
  job: Job;
  user: User;
}

const LOCATION_OPTIONS = [
  "Remote (Global)",
  "Remote (India)",
  "Mumbai",
  "Delhi NCR",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Other",
];

const NOTICE_OPTIONS = [
  "Immediate",
  "15 Days",
  "30 Days",
  "60 Days",
  "90 Days",
  "More than 90 Days",
];

export default function ApplyForm({ job, user }: Props) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentCTC, setCurrentCTC] = useState("");
  const [expectedCTC, setExpectedCTC] = useState("");
  const [preferredLocation, setPreferredLocation] = useState(
    LOCATION_OPTIONS[0]
  );
  const [noticePeriod, setNoticePeriod] = useState(NOTICE_OPTIONS[0]);
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Skills handlers
  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && skills.length < 5 && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  // File handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) validateAndSetFile(file);
  };

  const validateAndSetFile = (file: File) => {
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      alert("Only PDF and DOCX files are allowed.");
      return;
    }
    if (file.size > maxSize) {
      alert("File size must be less than 10MB.");
      return;
    }

    setResumeFile(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragOut = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) validateAndSetFile(file);
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email) {
      alert("Please fill in your name and email.");
      return;
    }
    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("jobId", job.id);
      formData.append("userId", user.id);
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("currentCTC", currentCTC);
      formData.append("expectedCTC", expectedCTC);
      formData.append("preferredLocation", preferredLocation);
      formData.append("noticePeriod", noticePeriod);
      formData.append("skills", JSON.stringify(skills));
      formData.append("resume", resumeFile);

      const res = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Application error:", error);
      alert("Failed to submit application.");
    } finally {
      setSubmitting(false);
    }
  };

  // Success state
  if (submitted) {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(46,196,182,0.2)",
          borderRadius: 24,
          padding: "60px 40px",
          textAlign: "center",
          boxShadow: "0 12px 40px rgba(13,43,40,0.06)",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(46,196,182,0.2), rgba(14,122,112,0.2))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "2rem",
          }}
        >
          ✅
        </div>

        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#0d2b28",
            marginBottom: 12,
          }}
        >
          Application Submitted!
        </h2>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.95rem",
            color: "#6b9e97",
            lineHeight: 1.7,
            marginBottom: 28,
            maxWidth: 360,
            margin: "0 auto 28px",
          }}
        >
          Your application for <strong>{job.title}</strong> at{" "}
          <strong>{job.company}</strong> has been submitted successfully.
          We'll be in touch soon.
        </p>

        <button
          onClick={() => router.push("/jobs")}
          style={{
            padding: "14px 36px",
            borderRadius: 50,
            background: "linear-gradient(135deg, #0e7a70, #0d2b28)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          Browse More Jobs
        </button>
      </div>
    );
  }

  // Input style helper
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(13,43,40,0.12)",
    background: "#fff",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "0.9rem",
    color: "#0d2b28",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "0.82rem",
    fontWeight: 700,
    color: "#0d2b28",
    marginBottom: 8,
    display: "block",
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    cursor: "pointer",
    appearance: "none" as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230d2b28' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 16px center",
    paddingRight: 40,
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(13,43,40,0.08)",
          borderRadius: 24,
          padding: "40px 36px",
          boxShadow: "0 12px 40px rgba(13,43,40,0.05)",
        }}
      >
        {/* Section Title */}
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#0d2b28",
            marginBottom: 32,
          }}
        >
          Personal Details
        </h2>

        {/* Full Name + Email Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 24,
          }}
        >
          <div>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              placeholder="e.g. Julianne Moore"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#0e7a70";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(14,122,112,0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
              required
            />
          </div>

          <div>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              placeholder="julianne@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#0e7a70";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(14,122,112,0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
              required
            />
          </div>
        </div>

        {/* CTC Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 24,
          }}
        >
          <div>
            <label style={labelStyle}>Current CTC (per annum)</label>
            <input
              type="text"
              placeholder="e.g. ₹120,000"
              value={currentCTC}
              onChange={(e) => setCurrentCTC(e.target.value)}
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#0e7a70";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(14,122,112,0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          <div>
            <label style={labelStyle}>Expected CTC (per annum)</label>
            <input
              type="text"
              placeholder="e.g. ₹150,000"
              value={expectedCTC}
              onChange={(e) => setExpectedCTC(e.target.value)}
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#0e7a70";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(14,122,112,0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(13,43,40,0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        {/* Location + Notice Period Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div>
            <label style={labelStyle}>Preferred Location</label>
            <select
              value={preferredLocation}
              onChange={(e) => setPreferredLocation(e.target.value)}
              style={selectStyle}
            >
              {LOCATION_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Notice Period</label>
            <select
              value={noticePeriod}
              onChange={(e) => setNoticePeriod(e.target.value)}
              style={selectStyle}
            >
              {NOTICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Skills (Top 5)</label>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(13,43,40,0.12)",
              background: "#fff",
              minHeight: 48,
            }}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 50,
                  background: "rgba(46,196,182,0.12)",
                  border: "1px solid rgba(46,196,182,0.25)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#0e7a70",
                }}
              >
                {skill}
                <span
                  onClick={() => removeSkill(skill)}
                  style={{
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    lineHeight: 1,
                    color: "#0d2b28",
                    opacity: 0.5,
                  }}
                >
                  ×
                </span>
              </span>
            ))}

            {skills.length < 5 && (
              <input
                type="text"
                placeholder="Add more..."
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={handleSkillKeyDown}
                onBlur={addSkill}
                style={{
                  border: "none",
                  outline: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#0d2b28",
                  flex: 1,
                  minWidth: 100,
                  background: "transparent",
                }}
              />
            )}
          </div>
        </div>

        {/* Resume Upload */}
        <div style={{ marginBottom: 36 }}>
          <label style={labelStyle}>Resume Upload</label>

          <div
            onClick={() => fileInputRef.current?.click()}
            onDrag={handleDrag}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDragIn}
            onDrop={handleDrop}
            style={{
              border: `2px dashed ${
                dragActive
                  ? "#0e7a70"
                  : resumeFile
                  ? "rgba(46,196,182,0.4)"
                  : "rgba(13,43,40,0.15)"
              }`,
              borderRadius: 16,
              padding: "40px 20px",
              textAlign: "center",
              cursor: "pointer",
              background: dragActive
                ? "rgba(46,196,182,0.06)"
                : resumeFile
                ? "rgba(46,196,182,0.04)"
                : "#fff",
              transition: "all 0.3s",
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            {resumeFile ? (
              <>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(46,196,182,0.2), rgba(14,122,112,0.15))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                    fontSize: "1.3rem",
                  }}
                >
                  📄
                </div>

                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#0e7a70",
                    marginBottom: 4,
                  }}
                >
                  {resumeFile.name}
                </p>

                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#6b9e97",
                  }}
                >
                  {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB — Click to
                  change
                </p>
              </>
            ) : (
              <>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(46,196,182,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                    fontSize: "1.3rem",
                    color: "#0e7a70",
                  }}
                >
                  ☁️
                </div>

                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#0d2b28",
                    marginBottom: 4,
                  }}
                >
                  Drag and drop your CV here
                </p>

                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#6b9e97",
                  }}
                >
                  PDF, DOCX up to 10MB
                </p>
              </>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          style={{
            padding: "16px 40px",
            borderRadius: 50,
            background: submitting
              ? "#aaa"
              : "linear-gradient(135deg, #0e7a70, #0d2b28)",
            color: "#fff",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "0.95rem",
            border: "none",
            cursor: submitting ? "not-allowed" : "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            transition: "opacity 0.3s",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            if (!submitting) e.currentTarget.style.opacity = "0.88";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {submitting ? "Submitting..." : "Submit Application"}
          {!submitting && <span>▷</span>}
        </button>
      </div>
    </form>
  );
}