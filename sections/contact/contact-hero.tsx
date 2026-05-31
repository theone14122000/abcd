export default function ContactHero() {
  return (
    <section
      style={{
        width: "100%",
        padding: "76px 0 70px",
        background:
          "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
      }}
    >
      <div className="inner">
        <div
          className="contact-build-card"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            borderRadius: 34,
            padding: "52px 36px",
            textAlign: "center",
            border: "1px solid rgba(46,196,182,0.18)",
            boxShadow: "0 24px 70px rgba(13,43,40,0.08)",
          }}
        >
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: 20,
              background:
                "linear-gradient(135deg, #0d2b28 0%, #0e7a70 45%, #2f6b37 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let&apos;s build your future, together.
          </h1>

          <p
            style={{
              maxWidth: 650,
              margin: "0 auto",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#2d5c55",
              fontSize: "0.98rem",
              lineHeight: 1.85,
            }}
          >
            Whether you&apos;re looking for your next career move or seeking
            world-class talent, our team at E Choices Career Solution is ready
            to provide human-centric recruitment and staffing solutions.
          </p>
        </div>
      </div>

      <style>{`
        .contact-build-card {
          background:
            radial-gradient(circle at 15% 20%, rgba(46,196,182,0.18), transparent 32%),
            linear-gradient(120deg, #3cf3d8, #82e082, #e7d82e, #62f762, #2fe2c7);
          background-size: 180% 180%;
          animation:
            contactHeroIn 0.75s ease both,
            contactColorFlow 8s ease-in-out infinite;
        }

        @keyframes contactHeroIn {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactColorFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
