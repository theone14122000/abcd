"use client";

import Image from "next/image";

const WHATSAPP_NUMBER = "919310573198";
const EMAIL_ADDRESS = "team@echoicescs.com";
const WHATSAPP_MESSAGE =
  "Hello! I'm interested in your recruitment and staffing services.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
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
        <div className="footer-accent-line" />

        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="footer-brand-row">
                <Image
                  src="/logo/logo.svg"
                  alt="E-Choices Career Solutions"
                  width={80}
                  height={80}
                  sizes="80px"
                  quality={100}
                  priority
                  className="footer-logo"
                />

                <div className="footer-brand-text">
                  <div className="footer-brand-name">E-Choices</div>
                  <div className="footer-brand-sub">Career Solutions</div>
                </div>
              </a>

              <p className="brand-desc">
                Connecting exceptional talent with industry-leading organizations
                through human-centric, strategic recruitment solutions.
              </p>

              <div className="social-row">
                <a href="#" className="social-btn" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a href="#" className="social-btn" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a href="#" className="social-btn" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([cat, links]) => (
              <div key={cat}>
                <h4 className="col-heading">{cat}</h4>
                <ul className="link-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="link-item">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="col-heading">Reach Us</h4>

              <div className="reach-col">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reach-card rc-wa"
                  aria-label="WhatsApp"
                >
                  <div className="reach-ic ic-wa">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>

                  <div className="reach-txt">
                    <span className="reach-lbl lbl-wa">WhatsApp</span>
                    <span className="reach-sub">Chat with us</span>
                  </div>

                  <span className="reach-arr">→</span>
                </a>

                <a href={emailLink} className="reach-card rc-em" aria-label="Email">
                  <div className="reach-ic ic-em">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>

                  <div className="reach-txt">
                    <span className="reach-lbl lbl-em">Email</span>
                    <span className="reach-sub reach-email-sub">
                      {EMAIL_ADDRESS}
                    </span>
                  </div>

                  <span className="reach-arr">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copy-text">
              © {new Date().getFullYear()}{" "}
              <span className="copy-brand">E-Choices Career Solutions</span>.
              All rights reserved.
            </p>

            <div className="bottom-links">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
                <a key={t} href="#" className="bottom-link">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label="Chat on WhatsApp"
      >
        <span className="wa-pulse" />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="wa-tip">Chat with us</span>
      </a>

      <style>{`
        .site-footer {
          width: 100%;
          background: linear-gradient(180deg, #0a1310, #060c0a);
          color: #c8cfd5;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .footer-accent-line {
          height: 3px;
          background: linear-gradient(90deg, transparent, #2ec4b6 20%, #6ee7b7 50%, #2ec4b6 80%, transparent);
          opacity: 0.6;
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 24px 36px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1.4fr;
          gap: 32px;
          padding-bottom: 44px;
          margin-bottom: 44px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .footer-brand-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          text-decoration: none;
          width: fit-content;
          max-width: 100%;
        }

        .footer-logo {
          width: 80px;
          height: 80px;
          object-fit: contain;
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .footer-brand-row:hover .footer-logo {
          transform: scale(1.06) rotate(-3deg);
        }

        .footer-brand-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }

        .footer-brand-name {
          display: block;
          font-family: 'Clash Display', 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1.45rem;
          line-height: 1.05;
          color: #ffffff;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .footer-brand-sub {
          display: block;
          font-size: 0.65rem;
          color: #6ee7b7;
          letter-spacing: 0.16em;
          font-weight: 700;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .brand-desc {
          color: #8b9da6;
          font-size: 0.88rem;
          line-height: 1.8;
          max-width: 300px;
          margin: 0 0 24px;
        }

        .social-row {
          display: flex;
          gap: 8px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b9da6;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: rgba(46,196,182,0.15);
          border-color: rgba(46,196,182,0.4);
          color: #6ee7b7;
          transform: translateY(-3px);
        }

        .col-heading {
          font-size: 0.72rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .link-item {
          color: #8b9da6;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
          display: inline-block;
        }

        .link-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: #6ee7b7;
          transition: width 0.3s ease;
        }

        .link-item:hover {
          color: #d1fae5;
          padding-left: 4px;
        }

        .link-item:hover::after {
          width: 100%;
        }

        .reach-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .reach-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .reach-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          transition: left 0.6s ease;
        }

        .reach-card:hover::after {
          left: 100%;
        }

        .rc-wa:hover {
          background: rgba(37,211,102,0.1);
          border-color: rgba(37,211,102,0.4);
          transform: translateY(-3px);
        }

        .rc-em:hover {
          background: rgba(56,189,248,0.08);
          border-color: rgba(56,189,248,0.35);
          transform: translateY(-3px);
        }

        .reach-ic {
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

        .ic-wa {
          background: linear-gradient(135deg, #25d366, #128c7e);
        }

        .ic-em {
          background: linear-gradient(135deg, #38bdf8, #0e7490);
        }

        .reach-card:hover .reach-ic {
          transform: scale(1.08) rotate(-4deg);
        }

        .reach-txt {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }

        .reach-lbl {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .lbl-wa {
          color: #6ee7b7;
        }

        .lbl-em {
          color: #7dd3fc;
        }

        .reach-sub {
          font-size: 0.85rem;
          color: #fff;
          font-weight: 600;
        }

        .reach-email-sub {
          font-size: 0.72rem;
          font-weight: 500;
          color: #bae6fd;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .reach-arr {
          color: #5b6b6f;
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .reach-card:hover .reach-arr {
          color: #fff;
          transform: translateX(4px);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .copy-text {
          font-size: 0.82rem;
          color: #5b6b6f;
          margin: 0;
        }

        .copy-brand {
          color: #6ee7b7;
          font-weight: 600;
        }

        .bottom-links {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
        }

        .bottom-link {
          font-size: 0.82rem;
          color: #5b6b6f;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .bottom-link:hover {
          color: #6ee7b7;
        }

        .wa-fab {
          position: fixed;
          bottom: 26px;
          right: 26px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 8px 26px rgba(37,211,102,0.4);
          z-index: 10000;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .wa-fab:hover {
          transform: translateY(-4px) scale(1.07);
          box-shadow: 0 14px 38px rgba(37,211,102,0.55);
        }

        .wa-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(37,211,102,0.35);
          animation: waPulse 2s ease-out infinite;
          pointer-events: none;
        }

        @keyframes waPulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }

          70% {
            transform: scale(1.7);
            opacity: 0;
          }

          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        .wa-tip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          background: #0d2b28;
          color: #fff;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .wa-tip::after {
          content: "";
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: #0d2b28;
        }

        .wa-fab:hover .wa-tip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr 1.4fr !important;
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

          .reach-col {
            flex-direction: row;
          }

          .reach-card {
            flex: 1;
          }
        }

        @media (max-width: 768px) {
          .footer-inner {
            padding: 56px 20px 32px !important;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-grid > div:last-child {
            grid-column: 1 / -1;
          }

          .reach-col {
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }

          .footer-inner {
            padding: 44px 16px 28px !important;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-brand-row {
            gap: 14px;
          }

          .footer-logo {
            width: 72px;
            height: 72px;
          }

          .footer-brand-name {
            display: block !important;
            color: #ffffff !important;
            font-size: 1.45rem;
            line-height: 1.08;
            opacity: 1 !important;
            visibility: visible !important;
          }

          .footer-brand-sub {
            display: block !important;
            font-size: 0.64rem;
            letter-spacing: 0.12em;
          }

          .wa-fab {
            width: 54px;
            height: 54px;
            bottom: 20px;
            right: 20px;
          }

          .wa-tip {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
