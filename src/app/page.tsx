import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import WeddingDetails from "@/components/sections/WeddingDetails";
import Schedule from "@/components/sections/Schedule";
import RSVP from "@/components/sections/RSVP";
import Travel from "@/components/sections/Travel";
import Registry from "@/components/sections/Registry";
import FAQ from "@/components/sections/FAQ";
import DressCode from "@/components/sections/DressCode";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <OurStory />
      <WeddingDetails />
      <Schedule />
      <RSVP />
      <Travel />
      <Registry />
      <FAQ />
      <DressCode />
      <Footer />
    </main>
  );
}
