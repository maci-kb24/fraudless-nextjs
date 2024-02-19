import Image from "next/image"
import BgImage from "../../public/images/part-bg-1-uai-258x194.jpg";

const Industries = () => {
  return (
    <>
  <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <Image
      src={BgImage}
      alt={BgImage} width={258} height={194}
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto  text-center">
        <p className="text-white">
          Are you ready to level up? Have you made the necessary preparations?
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {" "}
          Online Payment Fraud is Expected to Reach $206 Billion by 2025
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          The evolution of industry through digital transformation introduces
          fresh risks.
        </p>
      </div>
    </div>
  </div>
  {/*End Hero section*/}
  {/*Features section*/}
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="  flex flex-col md:flex-row gap-16">
        <div className="">
          <p className="mt-2 tracking-tight text-gray-900">ARE YOU PREPARED?</p>
          <h2 className="text-4xl font-semibold">Industries We Serve</h2>
        </div>
        <div className="flex-1">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fraudless AI SaaS is tailored to meet the unique fraud prevention
            needs of businesses across various industries. Our advanced
            solutions empower organizations to mitigate risks, safeguard assets,
            and maintain trust in an ever-evolving digital landscape. Explore
            how Fraudless can protect your industry
          </p>
        </div>
      </div>
      <hr className="mt-16 border-t-2 border-gray-100" />
      <div className="mx-auto mt-16 sm:mt-20 ">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              Retail and E-commerce
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Tap into the booming retail and e-commerce sectors with Fraudless
              AI SaaS. Safeguard online transactions, prevent account takeovers,
              and protect customer data with our advanced fraud prevention
              solutions tailored specifically for retail and e-commerce
              businesses.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              Financial Services
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              {" "}
              Secure financial transactions, detect fraudulent activities, and
              ensure regulatory compliance with Fraudless AI SaaS. From payment
              fraud to money laundering prevention, our comprehensive solutions
              empower financial institutions to mitigate risks and safeguard
              assets in an ever-evolving digital landscape.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              Healthcare
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Protect sensitive patient data, prevent medical identity theft,
              and ensure compliance with HIPAA regulations using Fraudless AI
              SaaS. Our specialized fraud prevention solutions for the
              healthcare industry help organizations proactively identify and
              mitigate risks, safeguarding patient privacy and confidentiality.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                  />
                </svg>
              </div>
              E-commerce and Online Marketplaces
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Foster trust and security in online transactions with Fraudless AI
              SaaS. Our tailored solutions for e-commerce and online
              marketplaces combat fraudulent activities such as account
              takeovers, payment fraud, and fake product listings, ensuring a
              secure and seamless shopping experience for buyers and sellers
              alike.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                  />
                </svg>
              </div>
              Technology and SaaS
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Safeguard digital assets, protect sensitive data, and maintain
              trust in the technology and SaaS industry with Fraudless AI SaaS.
              Our advanced fraud prevention solutions help technology companies
              detect and prevent cyber threats, ensuring the integrity and
              security of their products and services.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                  />
                </svg>
              </div>
              Telecommunications
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              {" "}
              Ensure the security and integrity of telecommunications networks
              and services with Fraudless AI SaaS. From preventing SIM card
              fraud to detecting unauthorized access attempts, our solutions
              empower telecom companies to proactively mitigate risks and
              protect against evolving cyber threats in the digital
              communication landscape.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  {/*end features section*/}
  {/* start cta section*/}
  <div className="bg-blue-600">
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto sm:py-48 lg:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-2xl">
            Together, We Are Stronger
          </h1>
          <p className="mt-6 px-24 text-lg leading-8 text-white">
            If you make one improvement to your risk management program this
            year, partner with Fraudless and the 1000s of other companies in the
            network. Join this elite group to protect against fraud that you
            haven’t even seen yet. Your colleagues will think you can see around
            corners – and they’ll be right. Don’t’ fight fraud alone.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>
    </div>
  </div>
  {/*end cta section*/}
</>

  )
}

export default Industries