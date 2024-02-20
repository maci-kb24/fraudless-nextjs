import Hero from "./components/Hero";
// import LogoSlider from "./components/LogoSlider";
// import Testimonials from "./components/Testimonials";
// import Faq from "./components/Faq";
// import Timeline from "./components/Timeline";
import CtaVideo from "./components/CtaVideo";
// import Features from "./components/Features";
// import Benefits from "./components/Benefits";
// import Link from "next/link";
import Iot from "../public/images/internet-of-things.png";
import MoneyMaking from "../public/images/money-making.png";
import Growth from "../public/images/growth.png";
import Image from "next/image";
import Secure from "../public/images/secure.png";
import Group from "../public/images/Group-2858.png";
import Stats from "./components/Stats";
import CtaProduct from "./components/CtaProduct";

export default function Home() {
  return (
    <main>
    <Hero />  
    <Stats />
    <CtaVideo />
    <CtaProduct />

    <div className="features flex">
      <div className="hidden md:block md:col-span-2  w-1/3">
        <Image className="h-full w-full" width={100} height={100} alt="group" src={Group} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-24">
        <div className="md:col-span-3">
          <h2 className="text-[#3BA6E5] text-4xl">
            {" "}
            Fraud Prevention Features for Unparalleled Security
          </h2>
          <p className="pt-4">
            Explore Fraudless cutting-edge features designed to combat fraud and
            protect your business from evolving threats.
          </p>
        </div>
        {/* Card 1 */}
        <div className="bg-white hover:bg-[#30a1e4] hover:text-white rounded-lg shadow-lg p-6">
          {/* Card Content */}
          <h2 className="text-blueDark font-semibold text-xl">
            Real-Time Anomaly Detection
          </h2>
          <p className="pt-4">
            Detect and flag suspicious activities in real time, minimizing
            financial losses and preserving brand reputation.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white hover:bg-[#30a1e4] hover:text-white rounded-lg shadow-lg p-6">
          {/* Card Content */}
          <h2 className="text-blueDark font-semibold text-xl">
            Dynamic Rule Customization
          </h2>
          <p className="pt-4">
            Tailor fraud prevention rules to your business needs, ensuring
            flexibility and precision in detecting fraudulent behaviors. .
          </p>
        </div>
        <div className="bg-white hover:bg-[#30a1e4] hover:text-white rounded-lg shadow-lg p-6">
          {/* Card Content */}
          <h2 className="text-blueDark font-semibold text-xl">
            AI-Powered Risk Assessment
          </h2>
          <p className="pt-4">
            Leverage artificial intelligence to assess and mitigate risks,
            empowering proactive decision-making and fraud prevention.
          </p>
        </div>
        <div className="bg-white hover:bg-[#30a1e4] hover:text-white rounded-lg shadow-lg p-6">
          {/* Card Content */}
          <h2 className="text-blueDark font-semibold text-xl">
            Behavioral Analysis
          </h2>
          <p className="pt-4">
            Analyze user behavior patterns to identify anomalies and prevent
            fraudulent activities before they occur.
          </p>
        </div>
        <div className="bg-white hover:bg-[#30a1e4] hover:text-white rounded-lg shadow-lg p-6">
          {/* Card Content */}
          <h2 className="text-blueDark font-semibold text-xl">
            Secure Data Encryption
          </h2>
          <p className="pt-4">
            Protect sensitive information with advanced encryption protocols,
            ensuring the confidentiality and integrity of your data.
          </p>
        </div>
        <div className="bg-white hover:bg-[#30a1e4] hover:text-white rounded-lg shadow-lg p-6">
          {/* Card Content */}
          <h2 className="text-blueDark font-semibold text-xl">
            Comprehensive Reporting and Insights
          </h2>
          <p className="pt-4">
            Gain actionable insights into fraud trends and patterns with
            comprehensive reporting tools.
          </p>
        </div>
      </div>
    </div>
    <section className="one-column bg-[#F7F7F7] ">
      <div className="container max-w-screen-md mx-auto px-10 py-24">
        <div>
          <p>
            If you are looking to remove stress and make your payment officers
            more productive, send us a message and we will get back to you.
          </p>
          
        </div>
        <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
          <form>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-slate-900">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="block w-full px-5 py-2.5 mt-2 text-slate-900 placeholder-gray-400 bg-white border border-blue-400 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div
                  data-lastpass-icon-root="true"
                  style={{
                    position: "relative !important",
                    height: "0px !important",
                    width: "0px !important",
                    float: "left !important"
                  }}
                />
              </div>
              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-slate-900">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-blue-400 rounded-lg dark:border-blue-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm text-slate-900">
                Email address
              </label>
              <input
                type="email"
                placeholder=""
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-blue-400 rounded-lg dark:placeholder-gray-600   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm text-slate-900">
                Phone (optional)
              </label>
              <input
                type="number"
                placeholder=""
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-blue-400 rounded-lg dark:placeholder-gray-600   focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-slate-900 dark:text-gray-200">
                Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-2.5 mt-2 text-slate-900 placeholder-gray-400 bg-white border border-blue-400 rounded-lg md:h-56 dark:placeholder-gray-600 dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
                defaultValue={""}
              />
            </div>
            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
    <section className="features-two">
      <div
        className=" flex justify-center py-24 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("./src/assets/images/bg-blue.png")' }}
      >
        <div className="container mx-auto px-24">
          <div
            className="text-white text-xl text-center text-blue"
            x-data="{ texts: ['SECURE', 'Text 2', 'Text 3'], index: 0 }"
            x-init="startTimer()"
          >
            <p
              x-text="texts[index]"
              className="text-3xl text-center font-semibold mb-4"
            />
            <p className="text-white text-base">
              Futureproof your entire fraud prevention program with a single,
              scalable solution that adapts to your <br /> organization’s unique
              business needs:
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 text-left pt-9">
            <div className="flex">
              <div>
                <Image width={100} height={100}
                  src={Iot} alt="iot"
                  className="w-full"
                />
              </div>
              <div className="flex-1 pl-8">
                <h2 className="text-blue text-2xl font-semibold">
                  Gather insights from around the world.
                </h2>
                <p className="text-white">
                  Leverage the power of the world’s largest fraud prevention
                  network, with data from over 10,000 global businesses.
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image width={100} height={100}
                  className="w-full"
                  src={MoneyMaking} alt="money making"
                />
              </div>
              <div className="flex-1 pl-8">
                <h2 className="text-blue text-2xl font-semibold">
                  Leverage cutting-edge innovation in the industry.
                </h2>
                <p className="text-white">
                  Integrate the newest advancements in machine learning and data
                  science techniques into your fraud management capabilities.
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image width={100} height={100} alt="growth" className="w-full" src={Growth} />
              </div>
              <div className="flex-1 pl-8">
                <h2 className="text-blue text-2xl font-semibold">
                  Scale alongside your business.
                </h2>
                <p className="text-white">
                  Grant access to the Fraudless.ai case management and analytics
                  portals for up to 100 team members, empowering your entire team
                  with valuable insights and tools.{" "}
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <Image className="w-full" width={100} height={100} alt="secure"  src={Secure} />
              </div>
              <div className="flex-1 pl-8">
                <h2 className="text-blue text-2xl font-semibold">
                  Obtain top-tier security measures.
                </h2>
                <p className="text-white">
                  Benefit from enterprise-grade security seamlessly integrated
                  into our cloud-based platform, alongside stringent software
                  development protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="testimonials bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">
              &quot;Fraudless is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <Image
              className="w-6 h-6 rounded-full" height={100} width={100} unoptimized
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                Micheal Gough
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                CEO at Coles
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="get-started bg-[#1C7AF8]">
      <div className=" container mx-auto flex items-center justify-around py-12">
        <div>
          <h2 className="text-4xl text-white font-semibold">
            Let’s Eliminate Fraud <br />
            Together!
          </h2>
          <p className="text-white pt-6">Speak with a fraud specialist today.</p>
        </div>
        <div>
          <button className="bg-white text-slate-800 uppercase py-4 px-5">
            Get Started
          </button>
        </div>
      </div>
    </section>
    </main>
  )
}
