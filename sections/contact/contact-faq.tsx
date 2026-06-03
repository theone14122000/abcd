"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    title: "How do I apply for jobs?",
    text: "Simply register, upload your CV, and browse our active listings to apply with one click.",
  },
  {
    title: "Employer Partnership?",
    text: "We offer bespoke recruitment solutions. Fill out our partner form or call us for a consultation.",
  },
  {
    title: "Response Times?",
    text: "Our career consultants typically respond to enquiries within 24-48 business hours.",
  },
];

export default function ContactFAQ() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact-faq"
      ref={ref}
      style={{
        width: "100%",
        padding: "72px 24px",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.55) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            marginBottom: 42,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(28px)",
            transition: "all 0.7s ease",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "7px 20px",
                background: "rgba(46,196,182,0.1)",
                border: "1px solid rgba(46,196,182,0.22)",
                borderRadius: 50,
                marginBottom: 12,
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", color: "#1a9e92", textTransform: "uppercase" }}>
                Quick Support
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "clamp(1.6rem, 2.2vw, 2.2rem)",
                color: "#0d2b28",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <a
            href="/contact"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.8rem, 0.86vw, 0.86rem)",
              color: "#2f6b37",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            View Help Center →
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.title}
              style={{
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(46,196,182,0.16)",
                borderRadius: 18,
                padding: 28,
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(34px)",
                transition: `all 0.7s ease ${index * 0.12}s`,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "#d7ffd7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2f6b37",
                  marginBottom: 20,
                  fontWeight: 800,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.9rem",
                }}
              >
                {index + 1}
              </div>

              <h3
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "clamp(1.1rem, 1.25vw, 1.25rem)",
                  color: "#0d2b28",
                  marginBottom: 12,
                }}
              >
                {faq.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#2d5c55",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                }}
              >
                {faq.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact-faq > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 620px) {
          #contact-faq > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #contact-faq > div > div:first-child {
            flex-direction: column;
            align-items: flex-start !important;
          }
          #contact-faq > div > div:first-child > a {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
