import Image from "next/image"
import Team from '../../public/images/team_up.svg';
import { PiRocketDuotone } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiArchiveResearch } from "react-icons/gi";



const About = () => {
  return (
    <section className="about">
      <div className="container mx-auto">
        <div className="text-center px-24">
          <p className="uppercase font-semibold text-sm pt-12">About Us</p>
          <p className="pt-12">At Fraudless, we believe in empowering businesses to thrive in a secure and trustworthy environment. <br /> With a relentless commitment to innovation, we&apos;ve made it our mission to redefine the landscape of <br/>fraud prevention through cutting-edge technology and unwavering dedication to our clients.</p>
          <Image className="mx-auto mt-10" src={Team} alt={Team} width={523} height={231} />
        </div>
        <div className="two-columns grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 px-12">
          <div className="py-12 px-14">
            <p className="uppercase font-semibold text-[12px]">how it started</p>
            <h3 className="pt-6">Our Origin Story: Building a Fraudless Future</h3>
            <p className="pt-6">Fraudless began with a collective vision among industry experts and security enthusiasts, ignited by the urgent need for a transformative fraud prevention solution in the ever-evolving digital landscape. Founded on a commitment to innovation, the company emerged as a response to the increasing challenges posed by cyber threats. From its early days, a small but determined team worked tirelessly to create a dynamic and adaptive solution that would empower businesses to navigate the digital realm with confidence. Fueled by passion and a dedication to excellence, Fraudless evolved into a pioneering force in fraud prevention, leveraging artificial intelligence and machine learning to stay ahead of emerging threats and rewrite the narrative of digital security.</p>
          </div>
          <div className="bg-blue-100 rounded-xl py-12 px-14">
            <p className="uppercase font-semibold text-[12px] text-blue-800">our mission</p>
            <h2 className="text-blue-800 font-bold leading-normal pt-6">Empowering businesses<br/> with innovative<br/> fraud prevention <br/>solutions,<br/> ensuring a digital landscape<br/> where organizations thrive securely.</h2>
            <PiRocketDuotone size={120} className="text-blue-800 pt-6" />
          </div>
        </div>
        <div className="our-values">
          <h3 className="text-center pt-24">Our Values</h3>
          <div className="three-columns flex flex-col md:flex-row gap-6 pt-24 px-20">
          <div className="flex-1 bg-lime-200 p-12 rounded-xl">
            <p className="text-lime-800 font-semibold">At Fraudless, we prioritize continuous innovation, harnessing the power of creative thinking to pioneer cutting-edge solutions that stay ahead of evolving fraud challenges.</p>
          <div className="flex items-end">
          <h3 className="font-semibold text-lime-800 pt-24 mr-3">Innovation</h3>
          <GiArchiveResearch size={30} className="text-lime-800" />
          </div>
          </div>
          <div className="flex-1 p-12 rounded-xl bg-purple-200">
            <p className="font-semibold text-purple-800">Our commitment to client success is unwavering. We deliver excellence by understanding and addressing the unique needs of our clients, ensuring their security and satisfaction are at the forefront of everything we do.</p>
            <div className="flex items-end">
            <h3 className="font-semibold text-purple-800 pt-12 mr-3">Client-Centric</h3>
            <GoGoal size={30} className="text-purple-800"/>
            </div>
          </div>
          <div className="flex-1 p-12 rounded-xl bg-orange-200">
            <p className="font-semibold text-orange-800">We uphold the highest standards of security with unwavering integrity. Trust is the cornerstone of our approach, and we take pride in safeguarding your digital operations with transparency, honesty, and ethical practices.</p>
            <div className="flex items-end">
            <h3 className="font-semibold text-orange-800 pt-16 mr-3">Security</h3>
            <MdOutlineSecurity className="text-orange-800" size={30} />
            </div>
          </div>
          </div>
        </div>
        <div class=" about-cta">
          <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div class="mx-auto max-w-xl text-center">
              <h1 class="text-3xl font-extrabold sm:text-5xl">
              Join Us in Building a 
                <strong class="font-extrabold text-blue-900 sm:block"> Fraudless Future </strong>
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