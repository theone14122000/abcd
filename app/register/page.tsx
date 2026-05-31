"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const { login } = useAuth();

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
  e.preventDefault();
  setIsLoading(true);
  setApiError("");

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    // ✅ Save to localStorage
    localStorage.setItem("user", JSON.stringify(data));

    // ✅ Update AuthContext immediately
    login(data);

    // ✅ Show popup
    alert("Account created successfully ✅");

    // ✅ Redirect to PRIVATE jobs
    router.push("/jobs/private");

  } catch (err: any) {
    setApiError(err.message);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="card-wrapper"
      >
        <div className="card">
          <div className="shimmer" />

          <h1 className="title">Join E Choices</h1>

          {apiError && <div className="error">{apiError}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input"
            />

            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="input"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="btn"
            >
              <span className="btn-text">
                {isLoading ? "Creating account..." : "Register"}
              </span>
            </motion.button>
          </form>

          <p className="switch">
            Already have an account?{" "}
            <Link href="/login">Sign In</Link>
          </p>
        </div>
      </motion.div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #d4e8d4 0%,
            #f8f7f1 50%,
            #f5f0c8 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 16px;
        }

        .card-wrapper {
          padding: 2px;
          border-radius: 28px;
          background: linear-gradient(
            120deg,
            #2ec4b6,
            #d4c742,
            #1e8f84,
            #2ec4b6
          );
          background-size: 300% 300%;
          animation: borderMove 8s ease infinite;
          max-width: 480px;
          width: 100%;
        }

        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .card {
          position: relative;
          border-radius: 26px;
          padding: 42px;
          background: linear-gradient(
            120deg,
            #c7efe7,
            #f2ecb0,
            #c3f4ea,
            #f5e89a,
            #c7efe7
          );
          background-size: 250% 250%;
          animation: cardMove 10s ease infinite;
          box-shadow: 0 35px 80px rgba(13, 43, 40, 0.18);
          overflow: hidden;
        }

        @keyframes cardMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.35),
            transparent
          );
          transform: skewX(-20deg);
          animation: shimmerMove 6s infinite;
        }

        @keyframes shimmerMove {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .title {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 30px;
          color: #0d2b28;
          position: relative;
          z-index: 2;
        }

        .input {
          width: 100%;
          padding: 14px;
          margin-bottom: 18px;
          border-radius: 12px;
          border: none;
          background: rgba(255, 255, 255, 0.95);
          outline: none;
          position: relative;
          z-index: 2;
        }

        .input:focus {
          box-shadow: 0 0 0 3px rgba(46, 196, 182, 0.25);
        }

        /* ✅ Same Teal Breathing Button */
        .btn {
          width: 100%;
          padding: 14px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          color: white;
          background: #2aa899;
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
          box-shadow: 0 8px 20px rgba(42, 168, 153, 0.25);
          animation: pulseGlow 3s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 8px 20px rgba(42, 168, 153, 0.25);
          }
          50% {
            box-shadow: 0 15px 35px rgba(42, 168, 153, 0.45);
          }
          100% {
            box-shadow: 0 8px 20px rgba(42, 168, 153, 0.25);
          }
        }

        .btn:hover {
          transform: translateY(-3px);
          background: #239e90;
          box-shadow:
            0 20px 45px rgba(42, 168, 153, 0.6),
            0 0 15px rgba(42, 168, 153, 0.4);
          animation: none;
        }

        .btn:active {
          transform: translateY(0px);
          box-shadow: 0 6px 15px rgba(42, 168, 153, 0.3);
        }

        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.5),
            transparent
          );
          transform: skewX(-20deg);
          transition: all 0.6s ease;
        }

        .btn:hover::before {
          left: 200%;
        }

        .btn-text {
          position: relative;
          z-index: 2;
        }

        .error {
          background: #fff1f1;
          border: 1px solid #fca5a5;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 20px;
          text-align: center;
          color: #dc2626;
          position: relative;
          z-index: 2;
        }

        .switch {
          text-align: center;
          margin-top: 20px;
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}