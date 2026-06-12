"use client";

import AnimatedButton from "@/components/ui/AnimatedButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileJobsOpen, setMobileJobsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setMobileJobsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setMobileJobsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    alert("Logged out successfully");
    router.push("/");
    setMobileOpen(false);
    setMobileJobsOpen(false);
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

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/jobs") return pathname.startsWith("/jobs");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <Link href="/" className="brand-link" aria-label="E Choices home">
          <Image
            src="/logo/logo.svg"
            alt="E Choices logo"
            width={44}
            height={44}
            className="brand-logo"
            priority
          />
          <span
            className="brand-name"
            style={{
              color: "black",
              fontFamily: "'Clash Display', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              letterSpacing: "0.02em",
            }}
          >
            E Choices
          </span>

        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);

            if (link.label === "Jobs") {
              return (
                <div
                  key={link.label}
                  className="desktop-dropdown"
                  onMouseEnter={() => setIsJobsOpen(true)}
                  onMouseLeave={() => setIsJobsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`desktop-link ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                    <span className="chevron">▼</span>
                  </Link>

                  {isJobsOpen && (
                    <div className="jobs-menu">
                      {jobSectors.map((sector) => (
                        <Link
                          key={sector.href}
                          href={sector.href}
                          className={`jobs-menu-link ${
                            hoveredSector === sector.href ? "hovered" : ""
                          }`}
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

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`desktop-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="desktop-auth">
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
              <span className="user-greeting">Hi, {user?.name || "User"}</span>
              <AnimatedButton variant="primary" onClick={handleLogout}>
                Logout
              </AnimatedButton>
            </>
          )}
        </div>

        <button
          className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-overlay ${mobileOpen ? "open" : ""}`}>
        <nav className="mobile-panel" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);

            if (link.label === "Jobs") {
              return (
                <div key={link.label} className="mobile-group">
                  <div className="mobile-jobs-row">
                    <Link
                      href={link.href}
                      className={`mobile-link ${isActive ? "active" : ""}`}
                    >
                      Jobs
                    </Link>

                    <button
                      type="button"
                      className="mobile-jobs-toggle"
                      onClick={() => setMobileJobsOpen((open) => !open)}
                      aria-label="Toggle jobs categories"
                      aria-expanded={mobileJobsOpen}
                    >
                      <span>{mobileJobsOpen ? "−" : "+"}</span>
                    </button>
                  </div>

                  {mobileJobsOpen && (
                    <div className="mobile-submenu">
                      {jobSectors.map((sector) => (
                        <Link
                          key={sector.href}
                          href={sector.href}
                          className={`mobile-sub-link ${
                            pathname === sector.href ? "active" : ""
                          }`}
                        >
                          {sector.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`mobile-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mobile-auth">
            {!user ? (
              <>
                <Link href="/login" className="mobile-login">
                  Login
                </Link>
                <Link href="/register" className="mobile-register">
                  Register
                </Link>
              </>
            ) : (
              <>
                <span className="mobile-user">Hi, {user?.name || "User"}</span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="mobile-logout"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(248, 255, 254, 0.95);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          z-index: 1000;
          transition:
            background 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .site-header.scrolled {
          background: rgba(248, 255, 254, 0.92);
          box-shadow: 0 10px 28px rgba(13, 43, 40, 0.08);
          border-bottom: 1px solid rgba(14, 122, 112, 0.08);
        }

        .nav-shell {
          max-width: 1200px;
          height: 88px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          transition: height 0.3s ease, padding 0.3s ease;
        }

        .site-header.scrolled .nav-shell {
          height: 68px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          min-width: max-content;
          text-decoration: none;
          color: #111;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .brand-logo {
          border-radius: 50%;
          object-fit: cover;
          width: 72px;
          height: 72px;
          transition:
            width 0.3s ease,
            height 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
          box-shadow: 0 10px 24px rgba(13, 43, 40, 0.12);
        }

        .site-header.scrolled .brand-logo {
          width: 48px;
          height: 48px;
          box-shadow: 0 6px 16px rgba(13, 43, 40, 0.08);
        }

        .brand-name {
          margin-left: 12px;
          font-weight: 700;
          font-size: 20px;
          color: #0d2b28;
          white-space: nowrap;
          transition: font-size 0.3s ease, margin-left 0.3s ease;
        }

        .site-header.scrolled .brand-name {
          font-size: 17px;
          margin-left: 10px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .desktop-link {
          text-decoration: none;
          font-weight: 500;
          color: #333;
          transition: color 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .desktop-link.active,
        .desktop-link:hover {
          color: #2e7d32;
          font-weight: 700;
        }

        .chevron {
          font-size: 10px;
          transform: translateY(1px);
        }

        .desktop-dropdown {
          position: relative;
          padding: 24px 0;
          margin: -24px 0;
        }

        .jobs-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 14px;
          background: #fff;
          min-width: 210px;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.12);
          border-radius: 12px;
          padding: 8px 0;
          z-index: 200;
          border: 1px solid rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }

        .jobs-menu-link {
          display: block;
          padding: 11px 16px;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 14px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .jobs-menu-link.hovered,
        .jobs-menu-link:hover {
          color: #2e7d32;
          background: rgba(46, 125, 50, 0.08);
        }

        .desktop-auth {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: max-content;
        }

        .user-greeting {
          font-weight: 600;
          color: #2e7d32;
          font-size: 0.88rem;
          max-width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .mobile-menu-btn {
          display: none;
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 12px;
          background: rgba(14, 122, 112, 0.08);
          cursor: pointer;
          padding: 0;
          position: relative;
          flex-shrink: 0;
        }

        .mobile-menu-btn span {
          position: absolute;
          left: 11px;
          width: 20px;
          height: 2px;
          border-radius: 999px;
          background: #0d2b28;
          transition: transform 0.25s ease, opacity 0.2s ease, top 0.25s ease;
        }

        .mobile-menu-btn span:nth-child(1) {
          top: 13px;
        }

        .mobile-menu-btn span:nth-child(2) {
          top: 20px;
        }

        .mobile-menu-btn span:nth-child(3) {
          top: 27px;
        }

        .mobile-menu-btn.open span:nth-child(1) {
          top: 20px;
          transform: rotate(45deg);
        }

        .mobile-menu-btn.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.open span:nth-child(3) {
          top: 20px;
          transform: rotate(-45deg);
        }

        .mobile-overlay {
          display: none;
        }

        @media (max-width: 900px) {
          .nav-shell {
            height: 86px;
            padding: 0 16px;
            display: grid;
            grid-template-columns: 42px 1fr 42px;
            align-items: center;
          }

          .site-header.scrolled .nav-shell {
            height: 64px;
          }

          .brand-link {
            grid-column: 2;
            justify-self: center;
          }

          .brand-logo {
            width: 64px;
            height: 64px;
          }

          .site-header.scrolled .brand-logo {
            width: 42px;
            height: 42px;
          }

          .brand-name {
            display: none;
          }

          .desktop-nav,
          .desktop-auth {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
            grid-column: 3;
            justify-self: end;
          }

          .mobile-overlay {
            display: block;
            position: fixed;
            top: 86px;
            left: 0;
            right: 0;
            height: calc(100dvh - 86px);
            background: rgba(248, 255, 254, 0.98);
            backdrop-filter: blur(18px);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-10px);
            transition:
              opacity 0.25s ease,
              transform 0.25s ease,
              top 0.3s ease,
              height 0.3s ease;
            overflow-y: auto;
            z-index: 999;
          }

          .site-header.scrolled .mobile-overlay {
            top: 64px;
            height: calc(100dvh - 64px);
          }

          .mobile-overlay.open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .mobile-panel {
            width: min(100%, 520px);
            margin: 0 auto;
            padding: 18px 18px 34px;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .mobile-link {
            display: flex;
            align-items: center;
            min-height: 50px;
            padding: 0 16px;
            border-radius: 14px;
            text-decoration: none;
            color: #173b36;
            font-size: 1rem;
            font-weight: 650;
            background: rgba(255, 255, 255, 0.58);
            border: 1px solid rgba(46, 196, 182, 0.12);
          }

          .mobile-link.active {
            color: #0e7a70;
            background: rgba(46, 196, 182, 0.12);
            border-color: rgba(46, 196, 182, 0.26);
          }

          .mobile-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .mobile-jobs-row {
            display: grid;
            grid-template-columns: 1fr 50px;
            gap: 8px;
          }

          .mobile-jobs-toggle {
            border: 1px solid rgba(46, 196, 182, 0.18);
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.72);
            color: #0e7a70;
            font-size: 1.4rem;
            font-weight: 700;
            cursor: pointer;
          }

          .mobile-submenu {
            display: grid;
            gap: 6px;
            padding: 4px 0 4px 14px;
          }

          .mobile-sub-link {
            display: block;
            padding: 11px 14px;
            border-radius: 12px;
            text-decoration: none;
            color: #526762;
            font-size: 0.94rem;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.44);
          }

          .mobile-sub-link.active,
          .mobile-sub-link:hover {
            color: #0e7a70;
            background: rgba(46, 196, 182, 0.1);
          }

          .mobile-auth {
            margin-top: 14px;
            padding-top: 16px;
            border-top: 1px solid rgba(0, 0, 0, 0.07);
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .mobile-login,
          .mobile-register,
          .mobile-logout {
            display: block;
            width: 100%;
            text-align: center;
            padding: 14px 18px;
            border-radius: 999px;
            font-weight: 750;
            font-size: 0.95rem;
            text-decoration: none;
          }

          .mobile-login {
            border: 1.5px solid #0e7a70;
            color: #0e7a70;
            background: rgba(255, 255, 255, 0.62);
          }

          .mobile-register,
          .mobile-logout {
            border: none;
            background: linear-gradient(135deg, #0e7a70, #0d2b28);
            color: #fff;
            cursor: pointer;
          }

          .mobile-user {
            text-align: center;
            font-weight: 700;
            color: #2e7d32;
            font-size: 0.95rem;
            padding: 6px 0;
          }
        }

        @media (max-width: 360px) {
          .nav-shell {
            padding: 0 12px;
            grid-template-columns: 40px 1fr 40px;
          }

          .brand-logo {
            width: 56px;
            height: 56px;
          }

          .site-header.scrolled .brand-logo {
            width: 40px;
            height: 40px;
          }

          .mobile-panel {
            padding-left: 12px;
            padding-right: 12px;
          }

          .mobile-menu-btn {
            width: 40px;
            height: 40px;
          }

          .mobile-menu-btn span {
            left: 10px;
            width: 18px;
          }
        }
      `}</style>
    </header>
  );
}