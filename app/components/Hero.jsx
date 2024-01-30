import Image from "next/image"

const Hero = () => {
  return (
    <section className="hero min-h-screen flex flex-col justify-between">
    <div className="container mx-auto px-24 pt-24">
      <div className="pt-10">
        <h1 className="text-6xl text-slate-900">AI-Powered Fraud Detection<br/> for Your Business</h1>
        <p className="pt-2">Detect, Prevent, and Secure Your Transactions with Fraudless</p>
      </div>
      <div className="pt-6">
        <button className="px-4 py-2 bg-blue-500 text-slate-50 mr-4">Learn More</button>
        <button className="px-4 py-2 bg-blue-500 text-slate-50">Get Started</button>      
      </div>
    </div>
    <div className="dashboard-hero mx-auto mt-20">
      <Image src="https://placehold.co/800x250" unoptimized alt="Dashboard image" width={800} height={250} />
    </div>
  </section>
  )
}

export default Hero