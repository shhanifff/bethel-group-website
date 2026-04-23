import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStats from "@/components/AboutStats";
import Timeline from "@/components/Timeline";
import Values from "@/components/Values";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Bethel Group",
  description: "Learn about the history, values, and expert team behind Bethel Group's premier business advisory services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <AboutStats />
      <Timeline />
      <Values />
      <Team />
      <Footer />
    </main>
  );
}
