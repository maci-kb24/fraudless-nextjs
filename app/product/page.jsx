import Image from "next/image"
import BgImage from "../../public/images/part-bg-1-uai-258x194.jpg"


const Product = () => {
  return (
    <>
    {/*Hero section */}
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image src={BgImage} alt="background-imge" width={1258} height={258} class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto  text-center">
            <p class="text-white">HAVE YOU UPGRADED? ARE YOU PREPARED?</p>
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Products Directory
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Real-time platform of complete products and services
            </p>
          </div>
          <div class="mx-auto mt-10 text-center">
            <button class="inline-block px-8 py-3 text-lg font-semibold border-teal-100 border-2 text-white bg-transparent  hover:bg-primary-dark">Learn More</button>
            <button class="inline-block px-8 py-3 text-lg font-semibold border-blue-500 border-2 text-white bg-blue-600  hover:bg-primary-dark">Learn More</button>
        </div>
        </div>
    </div>
    {/* End Hero section */}  
    {/* Features section */}
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="  flex flex-col md:flex-row gap-16">
            <div class="">
                <p class="mt-2 tracking-tight text-gray-900">HAVE YOU UPGRADED? ARE YOU PREPARED?</p>
                <h2 class="text-4xl font-semibold">Products</h2>
            </div>
            <div class="flex-1">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fraud Prevention Systems
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
            </div>
          </div>
          <hr class="mt-16 border-t-2 border-gray-100" />
          <div class="mx-auto mt-16 sm:mt-20 ">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  AI & Machine Learning
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Machine learning models are expertly engineered with the nuances of your business and industry already built in.</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  Analytics & Reporting
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Visualize your real-time data to extract actionable insights, isolate risk. and improve your business processes.

                </dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  Data Mining
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Unifying data and extracting intelligence is now possible using modern technology.  Deep dive into your business with more granularity than you thought possible</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>
                  </div>
                  Device Intelligence
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Device identification serves as your early warning system by detecting malicious bots, fraudsters, and other bad actors as they arrive on your site.</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>
                  </div>
                  Rules & Workflows
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>
                  </div>
                  3rd Party Integrations
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
              </div>
            </dl>
          </div>
        </div>
    </div>  
    {/* end features section */}
    {/* start cta section */}
    <div class="bg-blue-600">
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto sm:py-48 lg:py-16">
          <div class="text-center">
            <h1 class="text-3xl font-semibold tracking-tight text-white sm:text-2xl">Together, We Are Stronger
          </h1>
            <p class="mt-6 text-lg leading-8 text-white">If you make one improvement to your risk management program this year, partner with Fraudless and the 1000s of other companies in the network.
              Join this elite group to protect against fraud that you haven&apos;t even seen yet. Your colleagues will think you can see around corners – and they’ll be right.
              Don&apos;t fight fraud alone.
              
              </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" class="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* end cta section */}
  </>
  )
}

export default Product