import Hero from "@/sections/home/hero";
import Stats from "@/sections/home/stats";
import AboutPreview from "@/sections/home/about-preview";
import Services from "@/sections/home/services";
import Industries from "@/sections/home/industries";
import Process from "@/sections/home/process";
import Testimonials from "@/sections/home/testimonials";
import CTA from "@/sections/home/cta";

export const metadata = {
  title: "E Choices Career Solutions | Connecting Talent With Opportunity",
  description:
    "E Choices bridges the gap between world-class professionals and industry-leading organizations through strategic recruitment and staffing solutions.",
};

export default function HomePage() {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Hero />
      <Stats />
      <AboutPreview />
      <Services />
      <Industries />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}
