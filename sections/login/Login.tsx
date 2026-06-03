"use client";

import { useState, type FormEvent } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      // Demo: simulate API call
      await new Promise((r) => setTimeout(r, 1000));
      if (!email || !password) {
        throw new Error("Please fill in all fields");
      }
      alert("Login successful (demo)");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Invalid credentials";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      id="login-page"
      style={{
        position: "relative",
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        background: "linear-gradient(135deg, #eaf6ea 0%, #f5fbf0 40%, #fdf8e6 100%)",
      }}
    >
      {/* Nav bar */}
      <header
        style={{
          display: "flex",
          height: 64,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#0d2b28",
            textDecoration: "none",
            fontFamily: "'Clash Display', sans-serif",
          }}
        >
          E Choices
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: "0.875rem",
            fontWeight: 500,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <a href="/" style={{ color: "#475569", textDecoration: "none", transition: "color 0.2s" }}>Home</a>
          <a href="/services" style={{ color: "#475569", textDecoration: "none", transition: "color 0.2s" }}>Services</a>
          <a
            href="/login"
            style={{
              borderRadius: 999,
              border: "1px solid #0d2b28",
              padding: "6px 20px",
              color: "#0d2b28",
              textDecoration: "none",
              transition: "0.2s",
            }}
          >
            Login
          </a>
          <a
            href="/register"
            style={{
              borderRadius: 999,
              background: "#0e7a70",
              padding: "6px 20px",
              color: "#fff",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(14,122,112,0.2)",
              transition: "0.2s",
            }}
          >
            Register
          </a>
        </nav>
      </header>

      {/* Form card */}
      <main
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 440,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.7)",
            background: "rgba(255,255,255,0.9)",
            padding: "36px 32px",
            boxShadow: "0 20px 50px rgba(13,43,40,0.06)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ marginBottom: 32, textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                fontWeight: 700,
                color: "#0f172a",
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              Welcome Back
            </h1>
            <p
              style={{
                marginTop: 8,
                fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)",
                color: "#475569",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Sign in to manage your career journey
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Email */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: 6,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#1e293b",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Email Address
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }}>
                  <EnvelopeIcon />
                </span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    border: "1px solid #e2e8f0",
                    background: "rgba(248,250,252,0.8)",
                    padding: "12px 16px 12px 42px",
                    fontSize: "0.875rem",
                    color: "#0f172a",
                    outline: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#0e7a70";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(14,122,112,0.1)";
                    e.currentTarget.style.background = "#fff";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "rgba(248,250,252,0.8)";
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: 6,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#1e293b",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }}>
                  <LockIcon />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    border: "1px solid #e2e8f0",
                    background: "rgba(248,250,252,0.8)",
                    padding: "12px 42px 12px 42px",
                    fontSize: "0.875rem",
                    color: "#0f172a",
                    outline: "none",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#0e7a70";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(14,122,112,0.1)";
                    e.currentTarget.style.background = "#fff";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "rgba(248,250,252,0.8)";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  style={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                  }}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.875rem",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <label
                style={{
                  display: "inline-flex",
                  cursor: "pointer",
                  alignItems: "center",
                  gap: 8,
                  color: "#475569",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={{ width: 16, height: 16, borderRadius: 4, accentColor: "#0e7a70" }}
                />
                Remember me
              </label>

              <a
                href="#"
                style={{
                  fontWeight: 600,
                  color: "#0e7a70",
                  textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Forgot Password?
              </a>
            </div>

            {error && (
              <div
                style={{
                  borderRadius: 10,
                  border: "1px solid #fecaca",
                  background: "#fef2f2",
                  padding: "8px 12px",
                  fontSize: "0.875rem",
                  color: "#b91c1c",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                borderRadius: 999,
                background: "#0d2b28",
                padding: "14px 0",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#fff",
                border: "none",
                cursor: submitting ? "not-allowed" : "pointer",
                opacity: submitting ? 0.6 : 1,
                boxShadow: "0 8px 24px rgba(13,43,40,0.18)",
                transition: "all 0.2s ease",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                if (!submitting) {
                  e.currentTarget.style.background = "#0e3e38";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,43,40,0.28)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0d2b28";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(13,43,40,0.18)";
              }}
            >
              {submitting ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <p
            style={{
              marginTop: 32,
              textAlign: "center",
              fontSize: "0.875rem",
              color: "#475569",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              style={{
                fontWeight: 700,
                color: "#0d2b28",
                textDecoration: "none",
              }}
            >
              Register now
            </a>
          </p>
        </div>
      </main>

      <style>{`
        @media (max-width: 640px) {
          #login-page > header > nav > a:first-child,
          #login-page > header > nav > a:nth-child(2) {
            display: none;
          }
          #login-page > main > div {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ---- Inline SVG icons ---- */
function EnvelopeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
      <path d="m2 2 20 20" />
    </svg>
  );
}

export default Login;
