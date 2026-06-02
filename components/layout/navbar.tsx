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
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

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

  const jobSectors = [
    { label: "IT & Technologies", href: "/jobs/it-technologies" },
    { label: "BPO", href: "/jobs/bpo" },
    { label: "Finance", href: "/jobs/finance" },
    { label: "Manufacturing", href: "/jobs/manufacturing" },
    { label: "Sale", href: "/jobs/sale" },
    { label: "Health", href: "/jobs/health" },
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
          <span style={{ marginLeft: 10, fontWeight: 700, fontSize: 20 }}>
            E Choices
          </span>
        </Link>

        {/* Navigation Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {navLinks.map((link) => {
            // Check if the current route matches the link, or if it's a sub-route of Jobs
            const isActive =
              activeLink === link.href ||
              (link.href === "/jobs" && activeLink.startsWith("/jobs"));

            // Render Dropdown for Jobs
            if (link.label === "Jobs") {
              return (
                <div
                  key={link.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setIsJobsOpen(true)}
                  onMouseLeave={() => setIsJobsOpen(false)}
                >
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#2e7d32" : "#333",
                      transition: "0.3s",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {link.label}
                    <span style={{ fontSize: "10px" }}>▼</span>
                  </Link>

                  {/* Dropdown Menu */}
                  {isJobsOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        marginTop: "15px",
                        background: "#fff",
                        minWidth: "200px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        borderRadius: "8px",
                        padding: "8px 0",
                        zIndex: 200,
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      {jobSectors.map((sector) => (
                        <Link
                          key={sector.href}
                          href={sector.href}
                          style={{
                            display: "block",
                            padding: "10px 16px",
                            textDecoration: "none",
                            color:
                              hoveredSector === sector.href ? "#2e7d32" : "#333",
                            background:
                              hoveredSector === sector.href
                                ? "rgba(46, 125, 50, 0.08)"
                                : "transparent",
                            fontWeight: 500,
                            fontSize: "14px",
                            transition: "0.2s",
                          }}
                          onMouseEnter={() => setHoveredSector(sector.href)}
                          onMouseLeave={() => setHoveredSector(null)}
                        >
                          {sector.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Render standard links
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: "none",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#2e7d32" : "#333",
                  transition: "0.3s",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Auth Section */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {!user ? (
            <>
              <Link href="/login">
                <AnimatedButton variant="primary">Login</AnimatedButton>
              </Link>
              <Link href="/register">
                <AnimatedButton variant="secondary">Register</AnimatedButton>
              </Link>
            </>
          ) : (
            <>
              <span style={{ fontWeight: 600, color: "#2e7d32" }}>
                Hi, {user?.name || "User"}
              </span>
              <AnimatedButton variant="primary" onClick={handleLogout}>
                Logout
              </AnimatedButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
}