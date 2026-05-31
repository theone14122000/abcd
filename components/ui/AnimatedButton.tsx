"use client";

import { motion } from "framer-motion";

export default function AnimatedButton({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}) {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.96 } : {}}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 22px",
        borderRadius: 14,
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: 600,
        fontSize: 14,
        color: isPrimary ? "white" : "#0d2b28",
        background: isPrimary
          ? "linear-gradient(135deg,#0e7a70,#2ec4b6)"
          : "linear-gradient(135deg,#f5e642,#fff59e)",
        boxShadow: isPrimary
          ? "0 8px 22px rgba(46,196,182,0.35)"
          : "0 8px 22px rgba(245,230,66,0.35)",
        transition: "all 0.25s ease",
      }}
    >
      {children}
    </motion.button>
  );
}