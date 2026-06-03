import ContactHero from "@/sections/contact/contact-hero";
import ContactLeadership from "@/sections/contact/contact-leadership";
import ContactHeadquarters from "@/sections/contact/contact-headquarters";
import ContactFAQ from "@/sections/contact/contact-faq";
import ContactCTA from "@/sections/contact/contact-cta";

export default function ContactPage() {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        overflowX: "hidden",
        position: "relative",
        background: "#f8fffe",
      }}
    >
      <ContactHero />
      <ContactLeadership />
      <ContactHeadquarters />
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}
