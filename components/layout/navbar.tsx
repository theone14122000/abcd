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
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileJobsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
    <header className="site-header">
      <div className="nav-shell">
        {/* Logo with dynamic sizing */}
        <Link href="/" className="brand-link" aria-label="E Choices home">
          <Image
            src="/logo/logo.jpg"
            alt="E Choices logo"
            width={scrolled ? 38 : 56}
            height={scrolled ? 38 : 56}
            className={`brand-logo ${scrolled ? "scrolled" : ""}`}
            priority
          />
          <span className="brand-name">E Choices</span>
        </Link>

        {/* Desktop Navigation */}
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
                          className="jobs-menu-link"
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

        {/* Desktop Auth */}
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

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
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
                <Link href="/login" className="mobile-login">Login</Link>
                <Link href="/register" className="mobile-register">Register</Link>
              </>
            ) : (
              <>
                <span className="mobile-user">Hi, {user?.name || "User"}</span>
                <button onClick={handleLogout} className="mobile-logout">Logout</button>
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
          transition: all 0.3s ease;
        }

        .nav-shell {
          max-width: 1200px;
          height: 68px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #111;
          transition: all 0.3s ease;
        }

        .brand-logo {
          border-radius: 50%;
          object-fit: cover;
          transition: width 0.3s ease, height 0.3s ease;
        }

        .brand-name {
          margin-left: 10px;
          font-weight: 700;
          font-size: 18px;
          color: #0d2b28;
          white-space: nowrap;
        }

        /* Desktop Logo Sizes */
        @media (min-width: 901px) {
          .brand-logo {
            width: 56px;
            height: 56px;
          }
          .brand-logo.scrolled {
            width: 38px;
            height: 38px;
          }
        }

        /* Mobile Logo Behavior */
        @media (max-width: 900px) {
          .nav-shell {
            justify-content: center;
            position: relative;
          }

          .brand-link {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          .brand-logo {
            width: 48px;
            height: 48px;
          }

          .brand-logo.scrolled {
            width: 34px;
            height: 34px;
          }

          .brand-name {
            display: none; /* Hide text on mobile to keep it clean */
          }
        }

        /* Rest of your existing styles remain unchanged */
        .desktop-nav { display: flex; align-items: center; gap: 18px; }
        .desktop-link { text-decoration: none; font-weight: 500; color: #333; transition: color 0.25s ease; font-size: 0.9rem; }
        .desktop-link.active, .desktop-link:hover { color: #2e7d32; font-weight: 700; }

        .desktop-dropdown { position: relative; padding: 24px 0; margin: -24px 0; }
        .jobs-menu {
          position: absolute; top: 100%; left: 0; margin-top: 14px;
          background: #fff; min-width: 210px; box-shadow: 0 14px 34px rgba(0,0,0,0.12);
          border-radius: 12px; padding: 8px 0; border: 1px solid rgba(0,0,0,0.06);
        }
        .jobs-menu-link { display: block; padding: 11px 16px; color: #333; font-weight: 500; font-size: 14px; }
        .jobs-menu-link:hover { color: #2e7d32; background: rgba(46,125,50,0.08); }

        .desktop-auth { display: flex; align-items: center; gap: 10px; }
        .user-greeting { font-weight: 600; color: #2e7d32; font-size: 0.88rem; }

        .mobile-menu-btn { display: none; }
        @media (max-width: 900px) {
          .desktop-nav, .desktop-auth { display: none; }
          .mobile-menu-btn {
            display: block; width: 42px; height: 42px; border: none;
            border-radius: 12px; background: rgba(14,122,112,0.08);
            position: absolute; right: 16px;
          }
          .mobile-menu-btn span {
            position: absolute; left: 11px; width: 20px; height: 2px;
            background: #0d2b28; transition: all 0.25s ease;
          }
          .mobile-menu-btn span:nth-child(1) { top: 13px; }
          .mobile-menu-btn span:nth-child(2) { top: 20px; }
          .mobile-menu-btn span:nth-child(3) { top: 27px; }
          .mobile-menu-btn.open span:nth-child(1) { top: 20px; transform: rotate(45deg); }
          .mobile-menu-btn.open span:nth-child(2) { opacity: 0; }
          .mobile-menu-btn.open span:nth-child(3) { top: 20px; transform: rotate(-45deg); }

          .mobile-overlay {
            display: block; position: fixed; top: 64px; left: 0; right: 0;
            height: calc(100dvh - 64px); background: rgba(248,255,254,0.98);
            backdrop-filter: blur(18px); opacity: 0; pointer-events: none;
            transform: translateY(-10px); transition: all 0.25s ease;
            z-index: 999; overflow-y: auto;
          }
          .mobile-overlay.open { opacity: 1; pointer-events: auto; transform: translateY(0); }
          .mobile-panel { width: min(100%, 520px); margin: 0 auto; padding: 18px; display: flex; flex-direction: column; gap: 8px; }
          .mobile-link { display: flex; align-items: center; min-height: 50px; padding: 0 16px; border-radius: 14px; text-decoration: none; color: #173b36; font-size: 1rem; font-weight: 650; background: rgba(255,255,255,0.58); border: 1px solid rgba(46,196,182,0.12); }
          .mobile-link.active { color: #0e7a70; background: rgba(46,196,182,0.12); }
          /* ... rest of your mobile styles ... */
        }
      `}</style>
    </header>
  );
}