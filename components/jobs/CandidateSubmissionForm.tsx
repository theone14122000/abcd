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

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Valid email required";
    }
    if (!/^\+?[0-9]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Valid phone number required";
    }
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

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
      payload.append("preferredLocation", formData.location.trim()); // backward compatibility
      payload.append("currentCTC", formData.currentCTC.trim());
      payload.append("expectedCTC", formData.expectedCTC.trim());

      if (resumeFile) {
        payload.append("resume", resumeFile);
      }

      const res = await fetch("/api/applications", {
        method: "POST",
        body: payload,
      });

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

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm";
  const labelBase = "block text-sm font-medium text-white/80 mb-1.5";

  if (submitStatus === "success") {
    return (
      <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-brand-900/20 text-center animate-fade-in">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 pointer-events-none" />
        <div className="relative">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-xl font-bold text-white mb-2">Application Submitted!</h3>
          <p className="text-white/70 mb-6">
            Our recruitment team will review your profile and contact you shortly.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-brand-900/20 animate-slide-up overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/10 to-purple-500/10 pointer-events-none" />

      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-1">Quick Apply</h3>
        <p className="text-sm text-white/60 mb-6">
          Submit your profile directly to our talent pool
        </p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelBase}>Full Name</label>
              <input
                className={inputBase}
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                }
              />
              {errors.fullName && (
                <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className={labelBase}>Email Address</label>
              <input
                className={inputBase}
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelBase}>Phone Number</label>
              <input
                className={inputBase}
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className={labelBase}>Position Applied For</label>
              <input
                className={inputBase}
                placeholder="e.g. Senior React Developer"
                value={formData.positionApplied}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, positionApplied: e.target.value }))
                }
              />
              {errors.positionApplied && (
                <p className="text-red-400 text-xs mt-1">{errors.positionApplied}</p>
              )}
            </div>
          </div>

          <div>
            <label className={labelBase}>Current Location</label>
            <input
              className={inputBase}
              placeholder="City, State"
              value={formData.location}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
            />
            {errors.location && (
              <p className="text-red-400 text-xs mt-1">{errors.location}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelBase}>Current CTC</label>
              <input
                className={inputBase}
                placeholder="e.g. 12 LPA"
                value={formData.currentCTC}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, currentCTC: e.target.value }))
                }
              />
              {errors.currentCTC && (
                <p className="text-red-400 text-xs mt-1">{errors.currentCTC}</p>
              )}
            </div>

            <div>
              <label className={labelBase}>Expected CTC</label>
              <input
                className={inputBase}
                placeholder="e.g. 18 LPA"
                value={formData.expectedCTC}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, expectedCTC: e.target.value }))
                }
              />
              {errors.expectedCTC && (
                <p className="text-red-400 text-xs mt-1">{errors.expectedCTC}</p>
              )}
            </div>
          </div>

          <div>
            <label className={labelBase}>Resume Upload</label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="resume-upload"
            />
            <label
              htmlFor="resume-upload"
              className="flex items-center justify-center w-full px-4 py-3 rounded-xl border-2 border-dashed border-white/20 hover:border-brand-400/50 bg-white/5 hover:bg-white/10 cursor-pointer transition-all duration-300 text-white/70 hover:text-white"
            >
              {resumeFile ? (
                <span className="flex items-center gap-2 text-emerald-400">
                  ✅ {resumeFile.name}
                </span>
              ) : (
                <span>📄 Click to upload PDF/DOCX (Max 5MB)</span>
              )}
            </label>
            {errors.resume && (
              <p className="text-red-400 text-xs mt-1">{errors.resume}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-brand-500/25 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting Application...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>

          {submitStatus === "error" && (
            <p className="text-red-400 text-sm text-center mt-2 animate-pulse">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}