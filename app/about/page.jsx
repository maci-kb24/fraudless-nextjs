import Image from "next/image"
import Team from '../../public/images/team_up.svg';
import { BsRocketTakeoffFill } from "react-icons/bs";


const About = () => {
  return (
    <section className="about">
      <div className="container mx-auto">
        <div className="text-center px-24">
          <p className="uppercase font-semibold text-sm pt-12">About Us</p>
          <p className="pt-12">At Fraudless, we believe in empowering businesses to thrive in a secure and trustworthy environment. <br /> With a relentless commitment to innovation, we&apos;ve made it our mission to redefine the landscape of <br/>fraud prevention through cutting-edge technology and unwavering dedication to our clients.</p>
          <Image className="mx-auto mt-10" src={Team} alt={Team} width={523} height={231} />
        </div>
        <div className="two-columns grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="uppercase">how it started</p>
            <h3>Our Origin Story: Building a Fraudless Future</h3>
            <p>Fraudless began with a collective vision among industry experts and security enthusiasts, ignited by the urgent need for a transformative fraud prevention solution in the ever-evolving digital landscape. Founded on a commitment to innovation, the company emerged as a response to the increasing challenges posed by cyber threats. From its early days, a small but determined team worked tirelessly to create a dynamic and adaptive solution that would empower businesses to navigate the digital realm with confidence. Fueled by passion and a dedication to excellence, Fraudless evolved into a pioneering force in fraud prevention, leveraging artificial intelligence and machine learning to stay ahead of emerging threats and rewrite the narrative of digital security.</p>
          </div>
          <div>
            <p className="uppercase">our mission</p>
            <h4>Empowering businesses with innovative fraud prevention solutions, ensuring a digital landscape where organizations thrive securely.</h4>
            <BsRocketTakeoffFill />
          </div>
        </div>
        <div className="our-values">
          <h3>Our Values</h3>
          <div className="three-columns">
          <div>
            <p>At Fraudless, we prioritize continuous innovation, harnessing the power of creative thinking to pioneer cutting-edge solutions that stay ahead of evolving fraud challenges.</p>
            <h3>Innovation First</h3>
          </div>
          <div>
            <p>Our commitment to client success is unwavering. We deliver excellence by understanding and addressing the unique needs of our clients, ensuring their security and satisfaction are at the forefront of everything we do.</p>
            <h3>Client-Centric Excellence</h3>
          </div>
          <div>
            <p>We uphold the highest standards of security with unwavering integrity. Trust is the cornerstone of our approach, and we take pride in safeguarding your digital operations with transparency, honesty, and ethical practices.</p>
            <h3>Security with Integrity</h3>
          </div>
          </div>
        </div>
        <div class=" about-cta">
          <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div class="mx-auto max-w-xl text-center">
              <h1 class="text-3xl font-extrabold sm:text-5xl">
              Join Us in Building a 
                <strong class="font-extrabold text-slate-700 sm:block"> Fraudless Future </strong>
              </h1>
              <p class="mt-4 sm:text-relaxed">
              Whether you&apos;re a small business looking for robust fraud prevention or an enterprise seeking cutting-edge solutions, Fraudless is here for you. Together, let&apos;s secure tomorrow, today.</p>

              <div class="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  class="block w-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="/get-started"
                >
                  Get Started
                </button>

                <button
                  class="block w-full px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                  href="/about"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About