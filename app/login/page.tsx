"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { User } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed.");
        return;
      }

      // Use your existing AuthContext login
      login(data as User);

      // Redirect based on role
      if (data.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-page-root"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f4f1e8 0%, #e8e4d4 50%, #dcd8c8 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 16px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 460,
        }}
      >
        {/* Logo */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 28,
          }}
        >
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
          className="login-card"
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(13,43,40,0.08)",
            borderRadius: 24,
            padding: "40px 32px",
            boxShadow: "0 20px 60px rgba(13,43,40,0.08)",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
              fontWeight: 700,
              color: "#0d2b28",
              marginBottom: 8,
            }}
          >
            Welcome back 👋
          </h1>

          <p
            style={{
              fontSize: "clamp(0.82rem, 0.9vw, 0.9rem)",
              color: "#6b9e97",
              marginBottom: 28,
            }}
          >
            Log in to your E Choices account
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
            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#0d2b28",
                  marginBottom: 8,
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
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
                }}
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
            <div style={{ marginBottom: 28 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#0d2b28",
                  marginBottom: 8,
                }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
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
                }}
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
              {loading ? "Logging in..." : "Login →"}
            </button>
          </form>

          {/* Footer */}
          <p
            style={{
              textAlign: "center",
              marginTop: 22,
              fontSize: "0.85rem",
              color: "#6b9e97",
            }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              style={{
                color: "#0e7a70",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Register here
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .login-page-root {
            padding: 16px 12px !important;
          }
          .login-card {
            padding: 28px 20px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
