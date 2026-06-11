"use client";

import { useState, useEffect } from "react";

// ─── CONFIG ─────────────────────────────────────────
const WHATSAPP_NUMBER = "9310573198"; // ⚠️ Replace with actual number (no +, no spaces)
const EMAIL_ADDRESS = "e.choicescareersolution@gmail.com";
const WHATSAPP_MESSAGE = "Hello! I'd like to learn more about E Choices Career Solutions.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const emailLink = `mailto:${EMAIL_ADDRESS}?subject=Inquiry%20from%20E%20Choices%20Website`;

// ─── FOOTER LINKS ───────────────────────────────────
const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Permanent Placement", href: "/services#permanent-placement" },
    { label: "Contract Staffing", href: "/services#staffing" },
    { label: "Executive Search", href: "/services#executive-search" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about#story" },
    { label: "Mission & Vision", href: "/about#mission-vision" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Contact", href: "/contact" },
  ],
  Industries: [
    { label: "IT & Technology", href: "/jobs/it-technologies" },
    { label: "BPO", href: "/jobs/bpo" },
    { label: "Healthcare", href: "/jobs/health" },
    { label: "Manufacturing", href: "/jobs/manufacturing" },
    { label: "Finance", href: "/jobs/finance" },
    { label: "Sales", href: "/jobs/sale" },
  ],
};

// ─── ICONS ──────────────────────────────────────────
const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const EmailIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// ─── SOCIAL LINKS ───────────────────────────────────
const socialLinks = [
  { name: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
  { name: "Twitter", icon: <TwitterIcon />, href: "#" },
];

// ─── MAIN COMPONENT ─────────────────────────────────
export default function Footer() {
  const [showFab, setShowFab] = useState(false);

  // Show floating button after slight scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 200);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer style={{ width: "100%", background: "linear-gradient(180deg, #111814 0%, #0a1310 100%)", color: "#d1d5db", position: "relative", overflow: "hidden" }}>
        {/* Decorative gradient blob */}
        <div style={{ position: "absolute", top: "-50%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(46,196,182,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-30%", right: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(37,211,102,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="footer-inner" style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 24px 32px", position: "relative", zIndex: 2 }}>
          {/* TOP GRID */}
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1.4fr", gap: 40, marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            
            {/* BRAND COLUMN */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{ width: 42, height: 42, background: "linear-gradient(135deg, #2ec4b6, #0e7a70)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", fontSize: "1.15rem", boxShadow: "0 8px 20px rgba(46,196,182,0.25)" }}>E</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff", letterSpacing: "-0.01em" }}>E Choices</div>
                  <div style={{ fontSize: "0.65rem", color: "#86efac", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Career Solutions</div>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "#9ca3af", lineHeight: 1.75, marginBottom: 24, maxWidth: 280 }}>
                Connecting exceptional talent with industry-leading organizations through human-centric, strategic recruitment solutions.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} aria-label={social.name} className="social-icon" style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", transition: "all 0.3s ease", textDecoration: "none" }}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* LINK COLUMNS */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                  {heading}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link" style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none", transition: "all 0.25s ease", display: "inline-block", position: "relative" }}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* REACH US THROUGH COLUMN */}
            <div>
              <h4 style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                Reach Us Through
              </h4>
              <p style={{ fontSize: "0.82rem", color: "#9ca3af", lineHeight: 1.7, marginBottom: 20 }}>
                Connect with us instantly — we're just a click away.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* WhatsApp Card */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card whatsapp-card"
                  aria-label="Contact us on WhatsApp"
                >
                  <div className="contact-icon-wrap whatsapp-icon-wrap">
                    <WhatsAppIcon size={22} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.7rem", color: "#86efac", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 2 }}>
                      WhatsApp
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#fff", fontWeight: 600 }}>
                      Chat with us
                    </div>
                  </div>
                  <span className="contact-arrow">→</span>
                </a>

                {/* Email Card */}
                <a
                  href={emailLink}
                  className="contact-card email-card"
                  aria-label="Email us"
                >
                  <div className="contact-icon-wrap email-icon-wrap">
                    <EmailIcon size={20} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.7rem", color: "#7dd3fc", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginBottom: 2 }}>
                      Email
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#fff", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {EMAIL_ADDRESS}
                    </div>
                  </div>
                  <span className="contact-arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="footer-bottom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
            <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: 0 }}>
              © {new Date().getFullYear()} <span style={{ color: "#86efac", fontWeight: 600 }}>E Choices Career Solutions</span>. All rights reserved.
            </p>
            <div className="footer-bottom-links" style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
                <a key={t} href="#" className="bottom-link" style={{ fontSize: "0.82rem", color: "#6b7280", transition: "color 0.2s", textDecoration: "none" }}>
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          /* Footer Link Hover */
          .footer-link::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background: linear-gradient(90deg, #2ec4b6, #86efac);
            transition: width 0.3s ease;
          }
          .footer-link:hover {
            color: #d1fae5 !important;
            transform: translateX(4px);
          }
          .footer-link:hover::before {
            width: 100%;
          }

          /* Bottom Links */
          .bottom-link:hover {
            color: #86efac !important;
          }

          /* Social Icons */
          .social-icon:hover {
            background: rgba(46,196,182,0.18) !important;
            border-color: rgba(46,196,182,0.4) !important;
            color: #86efac !important;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(46,196,182,0.2);
          }

          /* Contact Cards (Reach Us) */
          .contact-card {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 14px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 14px;
            text-decoration: none;
            transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .contact-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
            transition: left 0.6s ease;
          }

          .contact-card:hover::before {
            left: 100%;
          }

          .whatsapp-card:hover {
            background: rgba(37,211,102,0.1);
            border-color: rgba(37,211,102,0.35);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(37,211,102,0.15);
          }

          .email-card:hover {
            background: rgba(125,211,252,0.08);
            border-color: rgba(125,211,252,0.3);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(125,211,252,0.15);
          }

          .contact-icon-wrap {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            flex-shrink: 0;
            transition: transform 0.3s ease;
          }

          .whatsapp-icon-wrap {
            background: linear-gradient(135deg, #25D366, #128C7E);
            box-shadow: 0 4px 12px rgba(37,211,102,0.3);
          }

          .email-icon-wrap {
            background: linear-gradient(135deg, #0ea5e9, #0369a1);
            box-shadow: 0 4px 12px rgba(14,165,233,0.3);
          }

          .contact-card:hover .contact-icon-wrap {
            transform: scale(1.08) rotate(-3deg);
          }

          .contact-arrow {
            color: #6b7280;
            font-size: 1.1rem;
            transition: all 0.3s ease;
          }

          .contact-card:hover .contact-arrow {
            color: #fff;
            transform: translateX(4px);
          }

          /* Responsive */
          @media (max-width: 1100px) {
            .footer-grid {
              grid-template-columns: 1.5fr 1fr 1fr 1.3fr !important;
            }
            .footer-grid > div:nth-child(4) {
              grid-column: 2 / 4;
            }
            .footer-grid > div:last-child {
              grid-column: 4 / 5;
              grid-row: 1;
            }
          }

          @media (max-width: 900px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 36px !important;
            }
            .footer-grid > div:first-child {
              grid-column: 1 / -1;
            }
            .footer-grid > div:last-child {
              grid-column: 1 / -1;
            }
          }

          @media (max-width: 560px) {
            .footer-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            .footer-inner {
              padding: 56px 18px 28px !important;
            }
            .footer-bottom {
              flex-direction: column;
              align-items: flex-start !important;
            }
            .footer-bottom-links {
              gap: 14px !important;
            }
          }
        `}</style>
      </footer>

      {/* ─── FLOATING WHATSAPP BUTTON ─── */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`whatsapp-fab ${showFab ? "visible" : ""}`}
      >
        <span className="fab-pulse" />
        <WhatsAppIcon size={28} />
        <span className="fab-tooltip">Chat with us</span>
      </a>

      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 6px 24px rgba(37,211,102,0.4);
          z-index: 9999;
          text-decoration: none;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .whatsapp-fab.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .whatsapp-fab:hover {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 12px 36px rgba(37,211,102,0.55);
        }

        .whatsapp-fab:active {
          transform: translateY(-2px) scale(1.02);
        }

        .fab-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(37,211,102,0.5);
          animation: fabPulse 2s ease-out infinite;
          pointer-events: none;
        }

        @keyframes fabPulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        .fab-tooltip {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%) translateX(8px);
          background: #0d2b28;
          color: #fff;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          box-shadow: 0 4px 14px rgba(0,0,0,0.2);
        }

        .fab-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: #0d2b28;
        }

        .whatsapp-fab:hover .fab-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        @media (max-width: 560px) {
          .whatsapp-fab {
            width: 54px;
            height: 54px;
            bottom: 18px;
            right: 18px;
          }
          .fab-tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
}