"use client";

import AnimatedButton from "@/components/ui/AnimatedButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleLogout = () => {
    logout();
    alert("Logged out successfully ✅");
    router.push("/");
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Jobs", href: "/jobs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(248,255,254,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#111",
          }}
        >
          <Image
            src="/logo/logo.jpg"
            alt="logo"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />

          <span
            style={{
              marginLeft: 10,
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            E Choices
          </span>
        </Link>

        {/* Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                textDecoration: "none",
                fontWeight: activeLink === link.href ? 700 : 500,
                color:
                  activeLink === link.href ? "#2e7d32" : "#333",
                transition: "0.3s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {!user ? (
            <>
              <Link href="/login">
                <AnimatedButton variant="primary">
                  Login
                </AnimatedButton>
              </Link>

              <Link href="/register">
                <AnimatedButton variant="secondary">
                  Register
                </AnimatedButton>
              </Link>
            </>
          ) : (
            <>
              <span
                style={{
                  fontWeight: 600,
                  color: "#2e7d32",
                }}
              >
                Hi, {user?.name || "User"}
              </span>

              <AnimatedButton
                variant="primary"
                onClick={handleLogout}
              >
                Logout
              </AnimatedButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
}