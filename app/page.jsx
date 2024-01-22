import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main>
      <section className="hero min-h-screen flex flex-col place-items-center justify-evenly">
        <div className="container mx-auto text-center">
          <div className="px-24 text-center">
            <h1>Empower Your Business Against Fraud</h1>
            <p className="pt-2">Detect, Prevent, and Secure Your Transactions with Cutting-Edge AI Technology</p>
          </div>
          <div className="pt-6">
            <Button>Get Early Access</Button>
          </div>
        </div>
        <div className="dashboard-hero mx-auto">
          <Image src="https://placehold.co/800x250" unoptimized alt="Dashboard image" width={800} height={250} />
        </div>
      </section>
      <section className="logos">
      <div class="w-full bg-slate-900 mx-auto px-4 md:px-6 py-8">
      <div class="text-center">
        <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <Image src="../public/images/facebook.svg" alt="Facebook" width={110} height={20} />
                </li>
                <li>
                    <Image src="../public/images/disney.svg" alt="Disney" width={110} height={20} />
                </li>
                <li>
                    <Image src="../public/images/airbnb.svg" alt="Airbnb" width={110} height={20} />
                </li>
                <li>
                    <Image src="../public/images/apple.svg" alt="Apple" width={110} height={20} />
                </li>
                <li>
                    <Image src="../public/images/spark.svg" alt="Spark" width={100} height={20} />
                </li>
                <li>
                    <Image src="../public/images/samsung.svg" alt="Samsung" width={110} height={20} />
                </li>
                <li>
                    <Image src="../public/images/quora.svg" alt="Quora" width={110} height={20} />
                </li>
                <li>
                    <Image src="../public/images/sass.svg" alt="Sass" width={110} height={20} />
                </li>
            </ul>                
        </div>
      </div>
    </div>

      </section>
      <section className="how-it-works">
        <div><h2>How It Works</h2></div>
      </section>
      <section className="features">
        <h2>Features</h2>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
      </section>
     
    <section class="testimonials bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure class="max-w-screen-md mx-auto">
              <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
              </svg> 
              <blockquote>
                  <p class="text-2xl font-medium text-gray-900 dark:text-white">&ldquo;Fraudless is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.&ldquo;</p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <Image class="w-6 h-6 rounded-full" unoptimized src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" width={24} height={24} />
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                      <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Coles</div>
                  </div>
              </figcaption>
          </figure>
      </div>
    </section>
      <section className="cta">
        <h2>Call To Action</h2>
      </section>
      <section class="bg-slate-900">
        <div class=" container mx-auto flex justify-evenly py-10">
          <h2 class="text-4xl text-white font-semibold">See our Products in <span class="text-[#30A1E4]">Action</span></h2>
          <button class="bg-white hover:bg-blue-700 text-blue py-2 px-4 rounded">
            Book Demo
          </button>
        </div>
    </section>
    </main>
  )
}
