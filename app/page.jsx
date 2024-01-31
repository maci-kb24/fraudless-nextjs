import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Timeline from "./components/Timeline";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Benefits from "./components/Benefits";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoSlider />
      <Timeline />
      <Features />
      <Benefits />
      <Faq />
      <Testimonials />
      <Cta />
    </main>
  )
}
