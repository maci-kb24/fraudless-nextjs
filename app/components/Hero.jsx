import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="py-24 flex items-center  min-h-screen justify-center bg-white">
      <div className="container px-6 md:px-0 mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-blue-600">Fraudless AI</p>
          <h1 className="mt-3  font-bold leading-[4rem] tracking-tight">Real-Time Fraud Detection</h1>
          <p className="mt-3 text-lg leading-relaxed">Securing Small Businesses: The Power of AI in Fraud Prevention for Invoices</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="#" className="transform rounded-md bg-blue px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Learn More</Link>
          <Link href="#" className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Sign Up</Link>
        </div>
        <div className="dashboard-hero mx-auto mt-20">
        <Image src="https://placehold.co/800x450" unoptimized alt="Dashboard image" width={800} height={250} />
        </div>
      </div>
    </section>
  )
}

export default Hero