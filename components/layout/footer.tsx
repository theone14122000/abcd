"use client";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Permanent Placement", href: "/services#parmanent-placement" },
    { label: "Contract Staffing", href: "/services#staffing" },
    { label: "Executive Search", href: "/services#executive-search" },
  ],
  Company: [
    { label: "About Overview", href: "/about#about-hero" },
    { label: "About Us", href: "/about#about-why-choose" },
    { label: "Our Story", href: "/about#story" },
    { label: "Mission & Approach", href: "/about#mission-vision" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Contact CTA", href: "/about#about-cta" },
  ],
  Industries: [
    { label: "BPO & Contact", href: "/industries#bpo" },
    { label: "Information Tech", href: "/industries#it" },
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Manufacturing", href: "/industries#manufacturing" },
    { label: "Sales & Marketing", href: "/industries#sales" },
  ],
  Resources: [
    { label: "Case Studies", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Job Seekers", href: "/careers" },
    { label: "Employers", href: "/contact" },
    { label: "FAQ", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ width: "100%", background: "#111814", color: "#d1d5db" }}>
      <div className="footer-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 28px" }}>
        {/* Top */}
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr 1fr", gap: 36, marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #4a7c59, #2d5a3d)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", fontSize: "1rem" }}>E</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff" }}>E Choices</div>
                <div style={{ fontSize: "0.62rem", color: "#6b7280" }}>Career Solutions</div>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.75, marginBottom: 24, maxWidth: 260 }}>
              Connecting exceptional talent with industry-leading organizations through strategic recruitment solutions.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["in", "tw", "fb"].map((s) => (
                <a key={s} href="#" style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", transition: "all 0.2s", textDecoration: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(74,124,89,0.25)"; e.currentTarget.style.color = "#86efac"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#9ca3af"; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>{heading}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={{ color: "#6b7280", fontSize: "0.85rem", transition: "color 0.2s", textDecoration: "none" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#d1fae5"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; }}
                    >{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer-bottom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.82rem", color: "#4b5563" }}>© {new Date().getFullYear()} E Choices Career Solutions. All rights reserved.</p>
          <div className="footer-bottom-links" style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <a key={t} href="#" style={{ fontSize: "0.82rem", color: "#4b5563", transition: "color 0.2s", textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#d1fae5"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#4b5563"; }}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .footer-inner { padding: 48px 16px 24px !important; }
          .footer-bottom { flex-direction: column; align-items: flex-start !important; }
          .footer-bottom-links { gap: 14px !important; }
        }
      `}</style>
    </footer>
  );
}
