"use client";

export default function ContactHero() {
  return (
    <section
      id="contact-hero"
      style={{
        width: "100%",
        padding: "60px 24px 56px",
        background:
          "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            borderRadius: 34,
            padding: "48px 32px",
            textAlign: "center",
            border: "1px solid rgba(46,196,182,0.18)",
            boxShadow: "0 24px 70px rgba(13,43,40,0.08)",
            background:
              "radial-gradient(circle at 15% 20%, rgba(46,196,182,0.18), transparent 32%), linear-gradient(120deg, #3cf3d8, #aef3ae, #f7ec75, #98f398, #2fe2c7)",
            backgroundSize: "180% 180%",
            animation: "contactColorFlow 8s ease-in-out infinite",
          }}
        >
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(1.6rem, 5vw, 3.4rem)",
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
              fontSize: "clamp(0.875rem, 0.98vw, 0.98rem)",
              lineHeight: 1.85,
              padding: "0 12px",
            }}
          >
            Whether you&apos;re looking for your next career move or seeking
            world-class talent, our team at E Choices Career Solution is ready
            to provide human-centric recruitment and staffing solutions.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes contactColorFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
