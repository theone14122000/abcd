"use client";

import Image from "next/image";

const WHATSAPP_NUMBER = "9310573198";
const EMAIL_ADDRESS = "e.choicescareersolution@gmail.com";
const WHATSAPP_MESSAGE = "Hello! I'm interested in your recruitment and staffing services.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const emailLink = `mailto:${EMAIL_ADDRESS}?subject=Inquiry%20from%20Website`;

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
    { label: "Sales & Marketing", href: "/jobs/sale" },
  ],
  Resources: [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "For Employers", href: "/contact" },
    { label: "FAQ", href: "#" },
  ],
};

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        {/* Background ambient effects */}
        <div className="footer-bg-blob footer-bg-blob-1" />
        <div className="footer-bg-blob footer-bg-blob-2" />

        <div className="footer-inner">
          {/* Top Grid */}
          <div className="footer-grid">
            {/* ─── Brand Column ─── */}
            <div className="footer-brand">
              <div className="footer-brand-top">
                <div className="footer-logo-wrapper">
                  <Image
                    src="/logo/logo.svg"
                    alt="E Choices logo"
                    width={140}
                    height={140}
                    sizes="48px"
                    className="footer-logo-img"
                    quality={100}
                  />
                </div>
                <div>
                  <div className="footer-brand-title">E Choices</div>
                  <div className="footer-brand-subtitle">Career Solutions</div>
                </div>
              </div>

              <p className="footer-brand-tagline">
                Connecting exceptional talent with industry-leading organizations
                through human-centric, strategic recruitment solutions.
              </p>

              {/* Social Icons */}
              <div className="footer-social">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="footer-social-btn"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a href="#" className="footer-social-btn" aria-label="Twitter / X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="footer-social-btn" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ─── Dynamic Link Columns ─── */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="footer-col-heading">{category}</h4>
                <ul className="footer-link-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ─── Reach Us Through Column ─── */}
            <div>
              <h4 className="footer-col-heading">Reach Us Through</h4>
              <p className="reach-description">
                Connect with us instantly — we&apos;re just a click away.
              </p>

              <div className="reach-cards">
                {/* WhatsApp Card */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reach-card whatsapp-card"
                  aria-label="Contact us on WhatsApp"
                >
                  <div className="reach-icon whatsapp-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="reach-text">
                    <span className="reach-label whatsapp-label">WhatsApp</span>
                    <span className="reach-value">Chat with us</span>
                  </div>
                  <span className="reach-arrow">→</span>
                </a>

                {/* Email Card */}
                <a
                  href={emailLink}
                  className="reach-card email-card"
                  aria-label="Email us"
                >
                  <div className="reach-icon email-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="reach-text">
                    <span className="reach-label email-label">Email</span>
                    <span className="reach-value reach-email-value">{EMAIL_ADDRESS}</span>
                  </div>
                  <span className="reach-arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* ─── Bottom Bar ─── */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()}{" "}
              <span className="footer-copyright-brand">E Choices Career Solutions</span>.
              All rights reserved.
            </p>
            <div className="footer-bottom-links">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
                <a key={t} href="#" className="footer-bottom-link">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Floating WhatsApp FAB ─── */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <div className="fab-pulse" />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="fab-tooltip">Chat with us</span>
      </a>

      <style>{`
        /* ─── FOOTER BASE ─── */
        .site-footer {
          width: 100%;
          background: linear-gradient(180deg, #0a1210 0%, #070e0c 100%);
          color: #d1d5db;
          position: relative;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .footer-bg-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .footer-bg-blob-1 {
          top: -30%;
          left: -8%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(46,196,182,0.07) 0%, transparent 70%);
        }
        .footer-bg-blob-2 {
          bottom: -25%;
          right: -5%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(37,211,102,0.05) 0%, transparent 70%);
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px 36px;
          position: relative;
          z-index: 2;
        }

        /* ─── TOP GRID ─── */
        .footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1fr 1fr 1.5fr;
          gap: 36px;
          margin-bottom: 56px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        /* ─── BRAND ─── */
        .footer-brand-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .footer-logo-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(46,196,182,0.3);
          box-shadow: 0 10px 28px rgba(46,196,182,0.25);
          background: linear-gradient(135deg, #2ec4b6, #0e7a70);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-img {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          border-radius: 12px;
        }

        .footer-brand-title {
          font-weight: 850;
          font-size: 1.25rem;
          color: #fff;
          letter-spacing: -0.01em;
          font-family: 'Clash Display', sans-serif;
        }

        .footer-brand-subtitle {
          margin-top: 2px;
          color: #86efac;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .footer-brand-tagline {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.8;
          max-width: 300px;
          margin: 0 0 24px;
        }

        /* ─── SOCIAL ─── */
        .footer-social {
          display: flex;
          gap: 10px;
        }

        .footer-social-btn {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .footer-social-btn:hover {
          transform: translateY(-3px);
          background: rgba(46,196,182,0.15);
          border-color: rgba(46,196,182,0.4);
          color: #86efac;
          box-shadow: 0 10px 24px rgba(46,196,182,0.2);
        }

        /* ─── LINK COLUMNS ─── */
        .footer-col-heading {
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .footer-link {
          color: #94a3b8;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.25s ease;
          display: inline-block;
          position: relative;
        }

        .footer-link::after {
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
          color: #d1fae5;
          transform: translateX(4px);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        /* ─── REACH US COLUMN ─── */
        .reach-description {
          color: #94a3b8;
          font-size: 0.85rem;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .reach-cards {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .reach-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .reach-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          transition: left 0.6s ease;
        }

        .reach-card:hover::before {
          left: 100%;
        }

        .whatsapp-card:hover {
          background: rgba(37,211,102,0.12);
          border-color: rgba(37,211,102,0.4);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(37,211,102,0.18);
        }

        .email-card:hover {
          background: rgba(103,232,249,0.08);
          border-color: rgba(103,232,249,0.35);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(103,232,249,0.15);
        }

        .reach-icon {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
          transition: transform 0.4s ease;
        }

        .whatsapp-icon {
          background: linear-gradient(135deg, #25d366, #128c7e);
          box-shadow: 0 6px 18px rgba(37,211,102,0.35);
        }

        .email-icon {
          background: linear-gradient(135deg, #22d3ee, #0e7490);
          box-shadow: 0 6px 18px rgba(34,211,238,0.3);
        }

        .reach-card:hover .reach-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        .reach-text {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .reach-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .whatsapp-label { color: #86efac; }
        .email-label { color: #67e8f9; }

        .reach-value {
          font-size: 0.88rem;
          color: #fff;
          font-weight: 600;
        }

        .reach-email-value {
          font-size: 0.78rem;
          font-weight: 500;
          color: #e0f2fe;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .reach-arrow {
          color: #6b7280;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .reach-card:hover .reach-arrow {
          color: #fff;
          transform: translateX(4px);
        }

        /* ─── BOTTOM BAR ─── */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }

        .footer-copyright {
          font-size: 0.84rem;
          color: #64748b;
          margin: 0;
        }

        .footer-copyright-brand {
          color: #86efac;
          font-weight: 600;
        }

        .footer-bottom-links {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
        }

        .footer-bottom-link {
          font-size: 0.84rem;
          color: #64748b;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-bottom-link:hover {
          color: #86efac;
        }

        /* ─── FLOATING WHATSAPP FAB ─── */
        .floating-whatsapp {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 62px;
          height: 62px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 8px 28px rgba(37,211,102,0.45);
          z-index: 10000;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .floating-whatsapp:hover {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 14px 40px rgba(37,211,102,0.6);
        }

        .floating-whatsapp:active {
          transform: translateY(-2px) scale(1.02);
        }

        .fab-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(37,211,102,0.4);
          animation: fabPulse 2s ease-out infinite;
          pointer-events: none;
        }

        @keyframes fabPulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }

        .fab-tooltip {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%) translateX(8px);
          background: #0d2b28;
          color: #fff;
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.25);
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

        .floating-whatsapp:hover .fab-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr !important;
          }
          .footer-grid > div:nth-child(5) {
            display: none;
          }
        }

        @media (max-width: 1000px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-grid > div:last-child {
            grid-column: 1 / -1;
          }
          .reach-cards {
            flex-direction: row;
          }
          .reach-card {
            flex: 1;
          }
        }

        @media (max-width: 768px) {
          .footer-inner {
            padding: 60px 20px 32px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-grid > div:last-child {
            grid-column: 1 / -1;
          }
          .reach-cards {
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .footer-inner {
            padding: 48px 16px 28px !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom-links {
            gap: 14px !important;
          }
          .floating-whatsapp {
            width: 56px;
            height: 56px;
            bottom: 20px;
            right: 20px;
          }
          .fab-tooltip {
            display: none;
          }
          .footer-brand-top {
            gap: 12px;
          }
          .footer-logo-wrapper {
            width: 46px;
            height: 46px;
          }
        }
      `}</style>
    </>
  );
}