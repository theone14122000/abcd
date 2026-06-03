"use client";

export default function ContactCTA() {
  return (
    <section
      id="contact-cta"
      style={{
        width: "100%",
        padding: "72px 24px",
        background:
          "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(1.6rem, 5vw, 3.1rem)",
            fontWeight: 700,
            background:
              "linear-gradient(135deg, #0d2b28 0%, #0e7a70 45%, #2f6b37 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            marginBottom: 18,
          }}
        >
          Ready to take the next step in your career?
        </h2>

        <p
          style={{
            maxWidth: 620,
            margin: "0 auto 32px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#2d5c55",
            lineHeight: 1.8,
            fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)",
            padding: "0 12px",
          }}
        >
          Register or login now to explore recruitment and staffing
          opportunities with E Choices Career Solution.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href="/login"
            style={{
              minWidth: 140,
              padding: "14px 32px",
              borderRadius: 999,
              background: "#2f6b37",
              color: "#fff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              transition: "all 0.25s ease",
              display: "inline-block",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(47,107,55,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Login
          </a>

          <a
            href="/register"
            style={{
              minWidth: 160,
              padding: "14px 32px",
              borderRadius: 999,
              border: "1.5px solid #2f6b37",
              color: "#2f6b37",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              background: "transparent",
              transition: "all 0.25s ease",
              display: "inline-block",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(47,107,55,0.06)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
