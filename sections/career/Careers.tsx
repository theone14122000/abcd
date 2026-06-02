"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export function Careers() {
  const pathname = usePathname();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#6b9e97",
        }}
      >
        Loading careers...
      </div>
    );
  }

  return (
    <section
      style={{
        padding: "80px 24px",
        background: "#f4f1e8",
        minHeight: "100vh",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(46, 196, 182, 0.16)",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(13, 43, 40, 0.08)",
            padding: "40px",
          }}
        >
          <p
            style={{
              fontSize: "0.85rem",
              color: "#0e7a70",
              fontWeight: 700,
              marginBottom: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Careers
          </p>

          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "3rem",
              color: "#0d2b28",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Build Your Future With E Choices
          </h1>

          <p
            style={{
              color: "#6b9e97",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "760px",
              marginBottom: "32px",
            }}
          >
            Join our growing platform and explore meaningful opportunities across
            IT, BPO, Finance, Sales, Health, and Manufacturing sectors. We are
            committed to helping talent connect with the right careers.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "36px",
            }}
          >
            <Link
              href="/jobs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                borderRadius: "14px",
                textDecoration: "none",
                color: "white",
                fontWeight: 700,
                background: "linear-gradient(135deg, #0e7a70, #0d2b28)",
                boxShadow: "0 12px 30px rgba(14,122,112,0.25)",
                transition: "0.3s",
              }}
            >
              Explore Jobs
            </Link>

            {!user ? (
              <Link
                href="/login"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 22px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  color: "#0d2b28",
                  fontWeight: 700,
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(46,196,182,0.2)",
                  transition: "0.3s",
                }}
              >
                Login to Apply
              </Link>
            ) : (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 22px",
                  borderRadius: "14px",
                  color: "#0e7a70",
                  fontWeight: 700,
                  background: "#f0fdf9",
                  border: "1px solid #ccfbf1",
                }}
              >
                Welcome, {user.name}
              </div>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              "IT & Technologies",
              "BPO",
              "Finance",
              "Sales",
              "Health",
              "Manufacturing",
            ].map((sector) => (
              <div
                key={sector}
                style={{
                  background: "white",
                  borderRadius: "18px",
                  padding: "20px",
                  border: "1px solid rgba(46,196,182,0.14)",
                  boxShadow: "0 10px 25px rgba(13,43,40,0.04)",
                }}
              >
                <h3
                  style={{
                    color: "#0d2b28",
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  {sector}
                </h3>
                <p
                  style={{
                    color: "#6b9e97",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                  }}
                >
                  Discover opportunities and grow your career in the {sector}{" "}
                  sector.
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "28px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(13,43,40,0.08)",
              color: "#6b9e97",
              fontSize: "0.85rem",
            }}
          >
            Current route: <span style={{ color: "#0d2b28" }}>{pathname}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;