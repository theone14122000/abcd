"use client";

export default function ContactHero() {
  // REPLACE THIS with your actual WhatsApp number in international format
  // Format: [country_code][number] without + or 00 (e.g., 919876543210 for +91 9876543210)
  const WHATSAPP_NUMBER = "9310573198"; 
  const WHATSAPP_MESSAGE = "Hello! I'm interested in E Choices Career Solution services.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
            position: "relative",
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
              margin: "0 auto 32px",
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

          {/* WhatsApp Contact Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="whatsapp-btn"
          >
            <svg
              className="whatsapp-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.175L2 22l4.825-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.615 13.615c-.193.546-1.123.997-1.57 1.062-.422.06-.842.19-2.823-.588-2.39-.956-3.905-3.405-4.022-3.56-.116-.155-.96-1.265-.96-2.415s.607-1.707.82-1.938c.214-.232.47-.29.627-.29l.453.008c.145.007.34-.055.532.405.193.46.645 1.59.702 1.705.056.116.093.25.02.4-.075.155-.112.25-.224.383l-.335.393c-.112.116-.23.24-.112.472.116.232.52 1.015 1.116 1.643.765.808 1.412 1.06 1.67 1.175.168.07.308.04.422-.06.116-.095.49-.57.62-.77.13-.2.26-.17.435-.1.177.07 1.123.53 1.316.626.193.095.32.143.368.223.05.08.037.46-.156 1.005z"
                fill="currentColor"
              />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button (Optional) - Uncomment to use as fixed FAB */}
      {/*
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Contact us on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.175L2 22l4.825-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.615 13.615c-.193.546-1.123.997-1.57 1.062-.422.06-.842.19-2.823-.588-2.39-.956-3.905-3.405-4.022-3.56-.116-.155-.96-1.265-.96-2.415s.607-1.707.82-1.938c.214-.232.47-.29.627-.29l.453.008c.145.007.34-.055.532.405.193.46.645 1.59.702 1.705.056.116.093.25.02.4-.075.155-.112.25-.224.383l-.335.393c-.112.116-.23.24-.112.472.116.232.52 1.015 1.116 1.643.765.808 1.412 1.06 1.67 1.175.168.07.308.04.422-.06.116-.095.49-.57.62-.77.13-.2.26-.17.435-.1.177.07 1.123.53 1.316.626.193.095.32.143.368.223.05.08.037.46-.156 1.005z"
            fill="white"
          />
        </svg>
      </a>
      */}

      <style>{`
        @keyframes contactColorFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .whatsapp-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
          background: linear-gradient(135deg, #22c35e 0%, #0e7a6e 100%);
        }

        .whatsapp-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .whatsapp-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        /* Optional Floating Action Button (FAB) Styles */
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
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          transition: all 0.3s ease;
          animation: slideIn 0.5s ease-out;
        }

        .whatsapp-fab:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.5);
        }

        @keyframes slideIn {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .whatsapp-btn {
            padding: 12px 24px;
            font-size: 0.9rem;
          }

          .whatsapp-fab {
            width: 56px;
            height: 56px;
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </section>
  );
}