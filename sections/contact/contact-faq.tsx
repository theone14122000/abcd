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
      ref={ref}
      style={{
        width: "100%",
        padding: "90px 0",
        background:
          "radial-gradient(circle at 8% 18%, rgba(46,196,182,0.22) 0%, transparent 32%), radial-gradient(circle at 92% 18%, rgba(152,251,152,0.55) 0%, transparent 34%), linear-gradient(180deg, #d7ffd7 0%, #a8f0a8 48%, #f0fdf9 100%)",
      }}
    >
      <div className="inner">
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
          }}
        >
          <div>
            <div className="eyebrow">Quick Support</div>

            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "2.2rem",
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
              fontSize: "0.86rem",
              color: "#2f6b37",
              fontWeight: 700,
            }}
          >
            View Help Center -&gt;
          </a>
        </div>

        <div
          className="contact-faq-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.title}
              className="lift"
              style={{
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(46,196,182,0.16)",
                borderRadius: 18,
                padding: 32,
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
                  marginBottom: 24,
                  fontWeight: 800,
                }}
              >
                {index + 1}
              </div>

              <h3
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "1.25rem",
                  color: "#0d2b28",
                  marginBottom: 14,
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
          .contact-faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
