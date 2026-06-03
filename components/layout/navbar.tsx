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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLogout = () => {
    logout();
    alert("Logged out successfully ✅");
    router.push("/");
    setMobileOpen(false);
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
    <header style={{ position: "fixed", top: 0, width: "100%", background: "rgba(248,255,254,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.05)", zIndex: 100 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#111" }}>
          <Image src="/logo/logo.jpg" alt="logo" width={44} height={44} style={{ borderRadius: "50%" }} />
          <span style={{ marginLeft: 10, fontWeight: 700, fontSize: 18 }}>E Choices</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {navLinks.map((link) => {
            const isActive = activeLink === link.href || (link.href === "/jobs" && activeLink.startsWith("/jobs"));
            if (link.label === "Jobs") {
              return (
                <div key={link.label} style={{ position: "relative" }} onMouseEnter={() => setIsJobsOpen(true)} onMouseLeave={() => setIsJobsOpen(false)}>
                  <Link href={link.href} style={{ textDecoration: "none", fontWeight: isActive ? 700 : 500, color: isActive ? "#2e7d32" : "#333", transition: "0.3s", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.9rem" }}>
                    {link.label}<span style={{ fontSize: "10px" }}>▼</span>
                  </Link>
                  {isJobsOpen && (
                    <div style={{ position: "absolute", top: "100%", left: 0, marginTop: "15px", background: "#fff", minWidth: "200px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", borderRadius: "8px", padding: "8px 0", zIndex: 200, border: "1px solid rgba(0,0,0,0.05)" }}>
                      {jobSectors.map((sector) => (
                        <Link key={sector.href} href={sector.href} style={{ display: "block", padding: "10px 16px", textDecoration: "none", color: hoveredSector === sector.href ? "#2e7d32" : "#333", background: hoveredSector === sector.href ? "rgba(46, 125, 50, 0.08)" : "transparent", fontWeight: 500, fontSize: "14px", transition: "0.2s" }}
                          onMouseEnter={() => setHoveredSector(sector.href)}
                          onMouseLeave={() => setHoveredSector(null)}
                        >{sector.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link key={link.label} href={link.href} style={{ textDecoration: "none", fontWeight: isActive ? 700 : 500, color: isActive ? "#2e7d32" : "#333", transition: "0.3s", fontSize: "0.9rem" }}>{link.label}</Link>
            );
          })}
        </nav>

        {/* Desktop Auth */}
        <div className="desktop-auth" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {!user ? (
            <>
              <Link href="/login"><AnimatedButton variant="primary">Login</AnimatedButton></Link>
              <Link href="/register"><AnimatedButton variant="secondary">Register</AnimatedButton></Link>
            </>
          ) : (
            <>
              <span style={{ fontWeight: 600, color: "#2e7d32", fontSize: "0.88rem" }}>Hi, {user?.name || "User"}</span>
              <AnimatedButton variant="primary" onClick={handleLogout}>Logout</AnimatedButton>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, zIndex: 110 }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 2, background: mobileOpen ? "transparent" : "#0d2b28", transition: "0.3s", position: "relative" }}>
            <div style={{ position: "absolute", width: 24, height: 2, background: "#0d2b28", top: mobileOpen ? 0 : -7, transform: mobileOpen ? "rotate(45deg)" : "none", transition: "0.3s" }} />
            <div style={{ position: "absolute", width: 24, height: 2, background: "#0d2b28", top: mobileOpen ? 0 : 7, transform: mobileOpen ? "rotate(-45deg)" : "none", transition: "0.3s" }} />
          </div>
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="mobile-overlay" style={{ position: "fixed", top: 68, left: 0, right: 0, bottom: 0, background: "rgba(248,255,254,0.98)", backdropFilter: "blur(16px)", zIndex: 99, padding: "24px 24px 40px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <div key={link.label}>
                <Link href={link.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "14px 0", textDecoration: "none", fontWeight: isActive ? 700 : 500, color: isActive ? "#2e7d32" : "#333", fontSize: "1.1rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  {link.label}
                </Link>
                {link.label === "Jobs" && (
                  <div style={{ paddingLeft: 16 }}>
                    {jobSectors.map((sector) => (
                      <Link key={sector.href} href={sector.href} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "10px 0", textDecoration: "none", color: "#6b7280", fontSize: "0.95rem", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                        {sector.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            {!user ? (
              <>
                <Link href="/login" onClick={() => setMobileOpen(false)} style={{ display: "block", textAlign: "center", padding: "14px 0", borderRadius: 50, border: "1.5px solid #0e7a70", color: "#0e7a70", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Login</Link>
                <Link href="/register" onClick={() => setMobileOpen(false)} style={{ display: "block", textAlign: "center", padding: "14px 0", borderRadius: 50, background: "linear-gradient(135deg, #0e7a70, #0d2b28)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>Register</Link>
              </>
            ) : (
              <>
                <span style={{ textAlign: "center", fontWeight: 600, color: "#2e7d32", fontSize: "0.95rem" }}>Hi, {user?.name || "User"}</span>
                <button onClick={handleLogout} style={{ padding: "14px 0", borderRadius: 50, background: "linear-gradient(135deg, #0e7a70, #0d2b28)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", border: "none", cursor: "pointer" }}>Logout</button>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .desktop-auth { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 861px) {
          .mobile-overlay { display: none !important; }
        }
      `}</style>
    </header>
  );
}
