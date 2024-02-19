import Image from "next/image"
import Team from '../../public/images/team_up.svg';
import { PiRocketDuotone } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiArchiveResearch } from "react-icons/gi";
import BgImg from '../../public/images/part-bg-1-uai-258x194.jpg';
import TeamUp from '../../public/images/team_up.svg';


const About = () => {
  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src={BgImg}
        alt="background-image"
        width={1258}
        height={194}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  text-center">
          <h1 className="font-semibold text-white text-4xl">About Us</h1>
        </div>
      </div>
    </div>
    {/* end hero section*/}
    <section className="about">
      <div className="container mx-auto">
        <div className="text-center px-24">
          <p className="pt-24">
            At Fraudless, we believe in empowering businesses to thrive in a
            secure and trustworthy environment. <br />
            With a relentless commitment to innovation, we&apos;ve made it our mission
            to redefine the landscape of <br />
            fraud prevention through cutting-edge technology and unwavering
            dedication to our clients.
          </p>
          <Image
            alt="team-up"
            loading="lazy"
            width={523}
            height={231}
            // decoding="async"
            // data-nimg={1}
            className="mx-auto mt-10"
            style={{ color: "transparent" }}
            src={TeamUp}
          />
        </div>
        <div className="two-columns grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 px-12">
          <div className="py-12 px-14">
            <p className="uppercase font-semibold ">how it started</p>
            <p className="pt-6">Our Origin Story: Building a Fraudless Future</p>
            <div className="pt-6">
              <p>
                Fraudless began with a collective vision among industry experts
                and security enthusiasts, ignited by the urgent need for a
                transformative fraud prevention solution in the ever-evolving
                digital landscape.
              </p>
              <p>
                Founded on a commitment to innovation, the company emerged as a
                response to the increasing challenges posed by cyber threats.
              </p>
              <p>
                {" "}
                From its early days, a small but determined team worked tirelessly
                to create a dynamic and adaptive solution that would empower
                businesses to navigate the digital realm with confidence.
              </p>
              <p>
                {" "}
                Fueled by passion and a dedication to excellence, Fraudless
                evolved into a pioneering force in fraud prevention, leveraging
                artificial intelligence and machine learning to stay ahead of
                emerging threats and rewrite the narrative of digital security.
              </p>
            </div>
          </div>
          <div className="bg-blue-100 rounded-xl py-12 px-14">
            <p className="uppercase font-semibold text-blue-800">our mission</p>
            <h2 className="text-blue-800 font-bold text-3xl leading-loose pt-6">
              Empowering businesses
              <br />
              with innovative
              <br />
              fraud prevention <br />
              solutions,
              <br />
              ensuring a digital landscape
              <br />
              where organizations thrive securely.
            </h2>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 256 256"
              className="text-blue-800 pt-6"
              height={120}
              width={120}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M94.81,192,65.36,214.24a8,8,0,0,1-12.81-4.51L40.19,154.1a8,8,0,0,1,1.66-6.86l30.31-36.33C71,134.25,76.7,161.43,94.81,192Zm119.34-44.76-30.31-36.33c1.21,23.34-4.54,50.52-22.65,81.09l29.45,22.24a8,8,0,0,0,12.81-4.51l12.36-55.63A8,8,0,0,0,214.15,147.24Z"
                opacity="0.2"
              />
              <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z" />
            </svg>
          </div>
        </div>
        <div className="our-values">
          <h3 className="text-center pt-24 text-3xl">Our Values</h3>
          <div className="three-columns flex flex-col md:flex-row gap-6 pt-24 px-20">
            <div className="flex-1 bg-lime-200 p-12 rounded-xl">
              <p className="text-lime-800 leading-loose font-semibold">
                At Fraudless, we prioritize continuous innovation, harnessing the
                power of creative thinking to pioneer cutting-edge solutions that
                stay ahead of evolving fraud challenges.
              </p>
              <div className="flex items-end">
                <h3 className="font-semibold text-lime-800 pt-24 mr-3">
                  Innovation
                </h3>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="text-lime-800"
                  height={30}
                  width={30}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M149.7 85.6c-1.2 0-2.5 0-3.7.1-33.9.8-75.5 10.7-127.3 33.7v243.4c60.8-28.8 106.7-37.1 144.2-33.1 13.7 1.4 26.3 4.5 37.9 8.6l-45.1-78.8c-8.6 3.5-17.9 5.5-27.7 5.5-40.21 0-73-32.8-73-73s32.79-73 73-73c40.2 0 73 32.8 73 73 0 24-11.7 45.3-29.7 58.7l57.3 100c6.2 3.2 12.1 6.7 17.9 10.2v-243c-23.2-17.7-50.2-30-86-32-3.5-.2-7.1-.3-10.8-.3zm212 0c-3.7 0-7.4.1-10.9.3-35.8 2-62.7 14.3-86 32v243c23.9-14.6 50.1-27.7 83.6-31.2 37.5-4 83.5 4.3 144.2 33.1V119.4c-51.7-23-93.3-32.9-127.2-33.7-1.3 0-2.5-.1-3.7-.1zM128 137c-30.48 0-55 24.5-55 55s24.52 55 55 55c30.5 0 55-24.5 55-55s-24.5-55-55-55zm2.3 13.9h2.8C109 169.1 98.32 193 99.73 221.1c-26.06-38.8 1.27-69.4 30.57-70.2zm13.1 196.5c-32 .3-71.8 9.8-124.7 36v42.5c60.8-28.8 106.7-37.1 144.2-33.1 18.6 2 34.9 6.9 49.8 13.3-4.7 6.1-9.3 13.3-13.9 21.7h53.3l-36-62.7c-16.6-8.3-34.3-14.6-55.1-16.8-5.6-.6-11.5-.9-17.6-.9zm220.9 0c-4.8.1-9.4.4-13.9.9-34 3.6-59.6 18-85.6 34.4v.3c-6.1-1.9-12.3-2.3-18.3-1.2l26.3 46H316c-6-8.2-11.8-15.4-17.7-21.6 15-6.5 31.4-11.4 50.1-13.4 37.5-4 83.5 4.3 144.2 33.1v-42.5c-53.1-26.3-93.1-35.9-125.2-36h-3.1z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 p-12 rounded-xl bg-purple-200">
              <p className="font-semibold leading-loose text-purple-800">
                Our commitment to client success is unwavering. We deliver
                excellence by understanding and addressing the unique needs of our
                clients, ensuring their security and satisfaction are at the
                forefront of everything we do.
              </p>
              <div className="flex items-end">
                <h3 className="font-semibold text-purple-800 pt-12 mr-3">
                  Client-Centric
                </h3>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="text-purple-800"
                  height={30}
                  width={30}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.172 6.75h-1.861l-4.566 4.564a1.874 1.874 0 1 1-1.06-1.06l4.565-4.565V3.828a.94.94 0 0 1 .275-.664l1.73-1.73a.249.249 0 0 1 .25-.063c.089.026.155.1.173.191l.46 2.301 2.3.46c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.731 1.73a.937.937 0 0 1-.663.275Z" />
                  <path d="M2.625 12A9.375 9.375 0 0 0 12 21.375 9.375 9.375 0 0 0 21.375 12c0-.898-.126-1.766-.361-2.587A.75.75 0 0 1 22.455 9c.274.954.42 1.96.42 3 0 6.006-4.869 10.875-10.875 10.875S1.125 18.006 1.125 12 5.994 1.125 12 1.125c1.015-.001 2.024.14 3 .419a.75.75 0 1 1-.413 1.442A9.39 9.39 0 0 0 12 2.625 9.375 9.375 0 0 0 2.625 12Z" />
                  <path d="M7.125 12a4.874 4.874 0 1 0 9.717-.569.748.748 0 0 1 1.047-.798c.251.112.42.351.442.625a6.373 6.373 0 0 1-10.836 5.253 6.376 6.376 0 0 1 5.236-10.844.75.75 0 1 1-.17 1.49A4.876 4.876 0 0 0 7.125 12Z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 p-12 rounded-xl bg-orange-200">
              <p className="font-semibold leading-loose text-orange-800">
                We uphold the highest standards of security with unwavering
                integrity. Trust is the cornerstone of our approach, and we take
                pride in safeguarding your digital operations with transparency,
                honesty, and ethical practices.
              </p>
              <div className="flex items-end">
                <h3 className="font-semibold text-orange-800 pt-16 mr-3">
                  Security
                </h3>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="text-orange-800"
                  height={30}
                  width={30}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="about-cta">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Join Us in Building a
                <strong className="font-extrabold text-blue-900 sm:block">
                  Fraudless Future
                </strong>
              </h1>
              <p className="mt-4 sm:text-relaxed">
                Whether you&apos;re a small business looking for robust fraud
                prevention or an enterprise seeking cutting-edge solutions,
                Fraudless is here for you. Together, let&apos;s secure tomorrow, today.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  className="block w-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="/get-started"
                >
                  Get Started
                </button>
                <button
                  className="block w-full px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
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
  </>
  
  )
}

export default About