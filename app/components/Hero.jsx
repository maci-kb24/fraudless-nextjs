import Image from "next/image"
import Invoices from "../../public/images/invoices.webp"
import Link from "next/link"

const Hero = () => {
  return (
    <>
    <section className="py-12 flex container mx-auto gap-20  min-h-screen justify-center bg-white">
    <div className="mx-auto flex-1">
      <div className="pt-12">
        <h1 className="mt-3 text-[4.5rem] font-bold leading-[4rem] tracking-tight text-slate-900">
          Real-Time <br />
          Fraud Detection
        </h1>
        <p className="mt-3 text-lg leading-relaxed ">
          Fighting invoices with AI: The Power of AI in Fraud Prevention for
          Invoices
        </p>
      </div>
      <div className="mt-6  gap-4">
        <Link
          href="contact.html"
          className="transform bg-blue-800 px-5 py-3 font-medium text-white transition-colors"
        >
          Call Us
        </Link>
      </div>
    </div>
    <div className="mt-12 flex-1">
      <Image src={Invoices} width={544} height={544} alt="invoices" className="w-3/4" />
    </div>
  </section>
  <section className="py-12 flex  min-h-screen justify-center bg-white">
    <div className="mx-auto max-w-[43rem]">
      <div className="text-center pt-12">
        <p className="mt-3 text-[1.5rem] font-bold leading-[2rem] tracking-tight text-slate-900">
          Hello friend, welcome to Fraudless.
        </p>
        <p className=" text-lg leading-relaxed ">
          We know you are here, click the button bellow
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          href="#banner"
          className="transform bg-blue px-5 py-3 font-medium text-white transition-colors hover:bg-blue-800"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>
  <section id="banner">
    <div className="bg-gray-800 py-12">
      <div className="py-8 text-center text-white ">
        <h2 className="text-3xl font-semibold mb-8 tracking-wide leading-14">
          Protect your employees
          <br /> Protect your profits <br />
          Protect your reputation <br />
          Protect your future.
        </h2>
      </div>
    </div>
  </section>
    </>

  )
}

export default Hero