import type { Metadata } from "next";
import IndustriesHero from "@/sections/industries/industries-hero";
import IndustrySections from "@/sections/industries/industry-sections";
import VerticalExpertise from "@/sections/industries/vertical-expertise";
import IndustriesCTA from "@/sections/industries/industries-cta";

export const metadata: Metadata = {
  title: "Industries | E Choices Career Solutions",
  description:
    "Specialized recruitment expertise across BPO, Information Technology, Sales & Marketing, Manufacturing, Healthcare & Life Sciences. Industry-native talent solutions.",
  openGraph: {
    title: "Industries We Serve | E Choices Career Solutions",
    description:
      "Vertical-specific recruitment expertise connecting top-tier talent with industry leaders.",
  },
};

export default function IndustriesPage() {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <IndustriesHero />
      <IndustrySections />
      <VerticalExpertise />
      <IndustriesCTA />
    </main>
  );
}
