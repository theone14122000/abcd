import type { Metadata } from "next";
import AboutWhyChoose from "@/sections/about/about-why-choose";
import AboutHero from "@/sections/about/about-hero";
import Story from "@/sections/about/story";
import MissionVision from "@/sections/about/mission-vision";
import Values from "@/sections/about/values";
import Philosophy from "@/sections/about/philosophy";
import Leadership from "@/sections/about/leadership";
import AboutCTA from "@/sections/about/about-cta";

export const metadata: Metadata = {
  title: "About Us | E Choices Career Solutions",
  description:
    "Learn how E Choices Career Solution bridges ambition and opportunity through human-centric recruitment with heart, precision, and meaningful connections.",
  openGraph: {
    title: "About E Choices Career Solutions",
    description: "Humanizing recruitment through meaningful connections since 2012.",
  },
};

export default function AboutPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      <AboutHero />
      <AboutWhyChoose />
      <Story />
      <MissionVision />
      <Values />
      <Philosophy />
      <Leadership />
      <AboutCTA />
    </main>
  );
}
