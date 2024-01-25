import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Timeline from "./components/Timeline";
import HowItWorks from "./components/HowItWorks";
import Cta from "./components/Cta";
import Features from "./components/Features";
// import Stats from "./components/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoSlider />
      <Timeline />
      <HowItWorks />
      <Features />
      <section className="benefits">
        <h2>Benefits</h2>
      </section>
      <Faq />
      <Testimonials />
      <Cta />
      {/* <Stats /> */}
    </main>
  )
}
