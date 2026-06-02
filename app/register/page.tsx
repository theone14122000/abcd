"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { User } from "@/context/AuthContext";

export default function RegisterPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed.");
        return;
      }

      // Auto login after register
      login(data as User);
      router.push("/");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(13,43,40,0.12)",
    background: "#fff",
    fontSize: "0.9rem",
    color: "#0d2b28",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.82rem",
    fontWeight: 700,
    color: "#0d2b28",
    marginBottom: 8,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f4f1e8 0%, #e8e4d4 50%, #dcd8c8 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 460 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0e7a70, #0d2b28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 800,
                fontSize: "1.1rem",
              }}
            >
              E
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#0d2b28",
              }}
            >
              E Choices
            </span>
          </Link>
        </div>

        {/* Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(13,43,40,0.08)",
            borderRadius: 24,
            padding: "44px 40px",
            boxShadow: "0 20px 60px rgba(13,43,40,0.08)",
          }}
        >
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#0d2b28",
              marginBottom: 8,
            }}
          >
            Create Account 🚀
          </h1>

          <p
            style={{
              fontSize: "0.9rem",
              color: "#6b9e97",
              marginBottom: 32,
            }}
          >
            Join E Choices and find your dream job
          </p>

          {/* Error */}
          {error && (
            <div
              style={{
                background: "rgba(220,38,38,0.08)",
                border: "1px solid rgba(220,38,38,0.2)",
                borderRadius: 12,
                padding: "12px 16px",
                marginBottom: 24,
                fontSize: "0.85rem",
                color: "#dc2626",
                fontWeight: 500,
              }}
            >
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0e7a70";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(14,122,112,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(13,43,40,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0e7a70";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(14,122,112,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(13,43,40,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                placeholder="Minimum 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0e7a70";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(14,122,112,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(13,43,40,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Confirm Password</label>
              <input
                type="password"
                placeholder="Repeat your password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0e7a70";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(14,122,112,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(13,43,40,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: 50,
                background: loading
                  ? "#aaa"
                  : "linear-gradient(135deg, #0e7a70, #0d2b28)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "opacity 0.3s",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.opacity = "0.88";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {loading ? "Creating account..." : "Create Account →"}
            </button>
          </form>

          {/* Footer */}
          <p
            style={{
              textAlign: "center",
              marginTop: 24,
              fontSize: "0.85rem",
              color: "#6b9e97",
            }}
          >
            Already have an account?{" "}
            <Link
              href="/login"
              style={{
                color: "#0e7a70",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}