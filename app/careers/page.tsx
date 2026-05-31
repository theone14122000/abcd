"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

// ── Loading Spinner ───────────────────────────────────────────────────────────
function LoadingScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #d4e8d4 0%, #f8f7f1 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          width: 40,
          height: 40,
          border: "3px solid #4f835d",
          borderTopColor: "transparent",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

// ── Public Page (not logged in) ───────────────────────────────────────────────
function PublicCareersPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #eaf0e5 0%, #f8f7f1 100%)",
        padding: "40px 16px 80px",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(20px)",
            borderRadius: "40px",
            padding: "60px 40px",
            boxShadow: "0 20px 80px rgba(0,0,0,0.06)",
            border: "1px solid rgba(255,255,255,0.6)",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{ marginBottom: "28px" }}
          >
            <span
              style={{
                display: "inline-block",
                border: "1px solid rgba(79,131,93,0.35)",
                color: "#4f835d",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "3px",
                textTransform: "uppercase",
                padding: "8px 20px",
                borderRadius: "100px",
                background: "rgba(79,131,93,0.06)",
              }}
            >
              Join The Evolution
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: "clamp(32px, 5vw, 54px)",
              fontWeight: "700",
              color: "#0d2b28",
              lineHeight: 1.2,
              marginBottom: "20px",
              margin: "0 0 20px 0",
            }}
          >
            Make Your Future With Us at{" "}
            <span style={{ color: "#4f835d" }}>E Choices</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              color: "rgba(13,43,40,0.6)",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto 36px",
            }}
          >
            We are building a more human-centric recruitment landscape. Join our
            team of innovators and help us redefine how talent meets opportunity
            across the globe.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            <Link href="/register" style={{ textDecoration: "none" }}>
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-block",
                  background: "#4f835d",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "16px",
                  padding: "14px 32px",
                  borderRadius: "16px",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(79,131,93,0.25)",
                  textDecoration: "none",
                }}
              >
                Register
              </motion.span>
            </Link>
            <Link href="/login" style={{ textDecoration: "none" }}>
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.8)",
                  color: "#0d2b28",
                  fontWeight: "600",
                  fontSize: "16px",
                  padding: "14px 32px",
                  borderRadius: "16px",
                  cursor: "pointer",
                  border: "2px solid rgba(13,43,40,0.15)",
                  textDecoration: "none",
                }}
              >
                Login
              </motion.span>
            </Link>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              height: "280px",
              background:
                "linear-gradient(135deg, rgba(46,196,182,0.25) 0%, rgba(79,131,93,0.35) 50%, rgba(13,43,40,0.45) 100%)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(13,43,40,0.2) 100%)",
              }}
            />
            {/* Animated silhouettes */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "32px",
                paddingBottom: "32px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {[60, 80, 70, 65].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5 + i * 0.4,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: "32px",
                    height: `${h}px`,
                    background: "rgba(255,255,255,0.25)",
                    borderRadius: "16px 16px 4px 4px",
                    backdropFilter: "blur(4px)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Why Join Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "32px",
          }}
        >
          {[
            {
              icon: "🚀",
              title: "Growth Focused",
              desc: "Continuous learning and fast career advancement.",
            },
            {
              icon: "🌍",
              title: "Global Impact",
              desc: "Connect talent with opportunity worldwide.",
            },
            {
              icon: "🤝",
              title: "Great Culture",
              desc: "A passionate team that supports each other.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                padding: "28px 24px",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>
                {card.icon}
              </div>
              <h3
                style={{
                  fontWeight: "700",
                  color: "#0d2b28",
                  marginBottom: "8px",
                  fontSize: "16px",
                  margin: "0 0 8px 0",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  color: "rgba(13,43,40,0.55)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Login Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <p
            style={{
              color: "rgba(13,43,40,0.55)",
              marginBottom: "16px",
              fontSize: "15px",
            }}
          >
            Ready to explore opportunities?
          </p>
          <Link href="/login" style={{ textDecoration: "none" }}>
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-block",
                background: "#0d2b28",
                color: "white",
                fontWeight: "600",
                fontSize: "15px",
                padding: "14px 32px",
                borderRadius: "16px",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(13,43,40,0.2)",
                textDecoration: "none",
              }}
            >
              Login to View Jobs →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

// ── Authenticated Dashboard ───────────────────────────────────────────────────
function AuthenticatedCareersPage({ userName }: { userName: string }) {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #eaf0e5 0%, #f8f7f1 100%)",
        padding: "40px 16px 80px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #4f835d 0%, #2ec4b6 100%)",
            borderRadius: "28px",
            padding: "36px 40px",
            marginBottom: "24px",
            boxShadow: "0 16px 48px rgba(79,131,93,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                marginBottom: "4px",
                margin: "0 0 4px 0",
              }}
            >
              Welcome back 👋
            </p>
            <h1
              style={{
                color: "white",
                fontSize: "28px",
                fontWeight: "700",
                margin: "0 0 4px 0",
              }}
            >
              {userName}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", margin: 0 }}>
              Your career dashboard is ready
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLogout}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              padding: "12px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontFamily: "inherit",
              backdropFilter: "blur(8px)",
            }}
          >
            Sign Out
          </motion.button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {[
            { label: "Open Positions", value: "12+", color: "#4f835d" },
            { label: "Departments", value: "6", color: "#2ec4b6" },
            { label: "Countries", value: "8", color: "#f5e642" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.8)",
                borderRadius: "20px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: stat.color === "#f5e642" ? "#b8a800" : stat.color,
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(13,43,40,0.55)",
                  fontWeight: "500",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: "28px",
            padding: "60px 40px",
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
            border: "1px solid rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>🚧</div>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#0d2b28",
              marginBottom: "12px",
              margin: "0 0 12px 0",
            }}
          >
            Job Listings Coming Soon
          </h2>
          <p
            style={{
              color: "rgba(13,43,40,0.55)",
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            We&apos;re building something amazing. Our full career dashboard
            with job listings, applications, and tracking will be available
            shortly.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function CareersPage() {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) return <LoadingScreen />;
  if (isAuthenticated && user)
    return <AuthenticatedCareersPage userName={user.name} />;
  return <PublicCareersPage />;
}