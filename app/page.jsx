import Image from "next/image";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Testimonials from "./components/Testimonials";
import Profile from "../public/images/profile.svg";
import Invoices from '../public/images/invoices.svg'
import Users from "../public/images/connecting_teams.svg";
import Scan from "../public/images/mind_map.svg";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoSlider />
      <section className="how-it-works">
        <div className="text-center">
          <h2>How It Works</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 container mx-auto justify-items-center">
          <div className="flex">
          <span className="text-9xl font-bold text-slate-900">1</span>
            <p>Send Us Your Invoices</p>
          </div>
          <div>
            <Image src={Invoices} alt="Printing Invoices" width={250} />
          </div>
          <div>
          <Image src={Profile} alt="Profile picture" width={250} />
          </div>
          <div className="flex">
            <span className="text-9xl font-bold text-slate-900">2</span>
            <p>We Create your Profile</p>
          </div>
          <div className="flex">
            <span className="text-9xl font-bold text-slate-900">3</span>
            <p>You confirm your users,<br/> workflow stakeholders and beneficiaries</p>
          </div>
          <div>
            <Image src={Users} alt="Users" width={250} />
          </div>
          <div>
            <Image src={Scan} alt="Scanning invoices" width={250} />
          </div>
          <div className="flex">
            <span className="text-9xl font-bold text-slate-900">4</span>
            <p>We start scanning and reporting <br/> in line with automated process</p>
          </div>
        </div>
      </section>
      <section className="features">
        <h2>Features</h2>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
      </section>
      <Faq />
      <Testimonials />
      <section className="cta">
        <h2>Call To Action</h2>
      </section>
    </main>
  )
}
