import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Features } from "./components/Features";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Services } from "./components/Services";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-bone-50 focus:shadow-soft"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <TrustBar />
        <Process />
        <Portfolio />
        <Features />
        <Benefits />
        <Testimonials />
        <Services />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </MotionConfig>
  );
}
