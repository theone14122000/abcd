"use client";

import { useEffect, useRef, useState } from "react";

const contactRows = [
  ["Location", "Connaught Place E-42, 43 Inner Circle, Connaught Place, New Delhi"],
  ["Phone", "8826562195"],
  ["Email", "E.choicescareersolution@gmail.com"],
];

export default function ContactHeadquarters() {
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
        padding: "96px 0",
        background:
          "radial-gradient(circle at 12% 18%, rgba(46,196,182,0.16) 0%, transparent 30%), radial-gradient(circle at 88% 12%, rgba(245,230,66,0.36) 0%, transparent 32%), linear-gradient(135deg, #eaffea 0%, #f3ffd8 45%, #fff9b8 100%)",
      }}
    >
      <div className="inner">
        <div
          className="contact-headquarters-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(-36px)",
              transition: "all 0.75s ease",
            }}
          >
            <div className="eyebrow">Visit Us</div>

            <h2
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "2.3rem",
                fontWeight: 700,
                color: "#0d2b28",
                marginBottom: 18,
              }}
            >
              Our Headquarters
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#2d5c55",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                maxWidth: 470,
                marginBottom: 32,
              }}
            >
              Stop by our office in the heart of New Delhi to discuss your
              career or recruitment needs in person.
            </p>

            <div
              style={{
                background: "rgba(255,255,255,0.82)",
                border: "1px solid rgba(46,196,182,0.16)",
                borderRadius: 22,
                padding: 28,
                boxShadow: "0 18px 50px rgba(13,43,40,0.06)",
              }}
            >
              {contactRows.map((row) => (
                <div
                  key={row[0]}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "44px 1fr",
                    gap: 16,
                    alignItems: "center",
                    padding: "14px 0",
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "#e4f1df",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2f6b37",
                      fontWeight: 800,
                    }}
                  >
                    {row[0][0]}
                  </div>

                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#2d5c55",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {row[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(36px)",
              transition: "all 0.75s ease 0.12s",
            }}
          >
            <div
              style={{
                minHeight: 360,
                borderRadius: 28,
                background:
                  "linear-gradient(135deg, #cfd2ca 0%, #f3f4ee 45%, #a8aaa5 100%)",
                boxShadow: "0 28px 70px rgba(13,43,40,0.18)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 40,
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.85) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.85) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                  transform: "rotate(28deg) skew(-18deg)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  background: "#2f6b37",
                  border: "10px solid rgba(255,255,255,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "'Clash Display', sans-serif",
                  fontWeight: 700,
                  boxShadow: "0 14px 34px rgba(13,43,40,0.25)",
                }}
              >
                E
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-headquarters-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
