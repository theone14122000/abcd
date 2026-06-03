import type { Metadata } from "next";
import ServicesHero from "@/sections/services/services-hero";
import PermanentPlacement from "@/sections/services/permanent-placement";
import Staffing from "@/sections/services/staffing";
import ExecutiveSearch from "@/sections/services/executive-search";
import Consulting from "@/sections/services/consulting";
import ServicesCTA from "@/sections/services/services-cta";

export const metadata: Metadata = {
  title: "Services | E Choices Career Solutions",
  description:
    "Strategic talent solutions for the modern workforce — permanent placement, contract staffing, executive search, recruitment consulting, and outplacement support.",
  openGraph: {
    title: "Our Services | E Choices Career Solutions",
    description:
      "Precision-driven recruitment services connecting exceptional talent with forward-thinking organizations.",
  },
};

export default function ServicesPage() {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <ServicesHero />
      <PermanentPlacement />
      <Staffing />
      <ExecutiveSearch />
      <Consulting />
      <ServicesCTA />
    </main>
  );
}
