import BgImage from '../../public/images/part-bg-1-uai-258x194.jpg'
import Image from 'next/image'

const Solutions = () => {
  return (
    <>
  {/*Start hero section*/}
  <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <Image
      src={BgImage}
      alt="background image"
      width={1258}
      height={244}
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto  text-center">
        {/* <p class="text-white">AI POWERED FRAUD PREVENTION
      </p> */}
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Solutions
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Redefining Fraud Prevention for Every Business
        </p>
      </div>
      <div className="mx-auto mt-10 text-center">
        <button className="inline-block px-8 py-3 text-lg font-semibold border-teal-100 border-2 text-white bg-transparent  hover:bg-primary-dark">
          Learn More
        </button>
        <button className="inline-block px-8 py-3 text-lg font-semibold border-blue-500 border-2 text-white bg-blue-600  hover:bg-primary-dark">
          Learn More
        </button>
      </div>
    </div>
  </div>
  {/*end hero section*/}
  {/*features section*/}
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="  flex flex-col md:flex-row gap-6">
        <div className="max-w-md min-w-96">
          <p className="mt-2 tracking-tight text-gray-900">
            Comprehensive Fraud Prevention
          </p>
          <h2 className="text-4xl font-semibold">Solutions</h2>
        </div>
        <div className="flex-2">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fraudless AI SaaS: Your Shield in the Digital Realm
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to the forefront of fraud prevention, where Fraudless AI
            SaaS stands as your stalwart guardian against evolving threats. Our
            solutions are crafted to empower businesses across diverse
            industries, offering a dynamic and adaptive approach to safeguard
            your digital operations.
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
              Real-Time Anomaly Detection
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Unleash the power of instant security with our Real-Time Anomaly
              Detection feature. Stay ahead of potential threats by analyzing
              transactions in real time, receiving swift alerts, and benefiting
              from continuous learning that adapts to new challenges.
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
              Dynamic Rule Customization
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Tailor our fraud prevention solution to your business&apos;s unique
              characteristics with Dynamic Rule Customization. Achieve precision
              and flexibility by setting custom rules that align perfectly with
              your industry and transaction patterns.
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
              Intuitive Dashboard Insights
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Navigate the complexities of fraud prevention effortlessly with
              our Intuitive Dashboard Insights. Gain clear visualizations and
              at-a-glance insights, ensuring that monitoring and decision-making
              are streamlined for optimal effectiveness.
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
              Retail and E-commerce
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Transform your retail and e-commerce security with tailored
              solutions designed to combat online fraud, unauthorized
              transactions, and account takeovers. Keep your customers and your
              bottom line secure.
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
              Financial Services
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Elevate security in the financial sector with our specialized
              solutions. Detect and prevent fraudulent activities, safeguarding
              sensitive financial transactions and maintaining the trust of your
              clients.
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
              Healthcare
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              Ensure the confidentiality and integrity of healthcare data with
              our fraud prevention solutions. Mitigate the risks associated with
              medical identity theft and protect sensitive patient information.
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
            Your Journey to a Fraudless Future Starts Here
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Join us on the path to a secure and fraud-free digital future.
            Whether you&apos;re a small business or a large enterprise, Fraudless AI
            SaaS has the tailored solutions to fortify your operations. Secure
            tomorrow, today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="contact.html"
              className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Contact Us
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

export default Solutions