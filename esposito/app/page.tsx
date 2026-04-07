import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Process />
      <CTA />
    </>
  );
}
