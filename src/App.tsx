import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { EditingDNA } from "@/components/EditingDNA";
import { LongForm } from "@/components/LongForm";
import { ShortForm } from "@/components/ShortForm";
import { Skills } from "@/components/Skills";
import { Process } from "@/components/Process";
import { Personality } from "@/components/Personality";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary">
      {/* Dynamic cinematic background */}
      <Background />

      {/* Cinematic grain overlay */}
      <div className="grain-overlay" />

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <EditingDNA />
        <LongForm />
        <ShortForm />
        <Skills />
        <Process />
        <Personality />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
