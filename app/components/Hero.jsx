import Image from "next/image"

const Hero = () => {
  return (
    <section className="hero min-h-screen flex flex-col justify-between">
    <div className="container mx-auto px-24">
      <div className="pt-10">
        <h1 className="text-6xl">Empower Your Business <br/>Against Fraud</h1>
        <p className="pt-2">Detect, Prevent, and Secure Your Transactions with Cutting-Edge AI Technology</p>
      </div>
      <div className="pt-6">
        <button className="px-4 py-2 bg-slate-900 text-white">Get Early Access</button>
      </div>
    </div>
    <div className="dashboard-hero mx-auto">
      <Image src="https://placehold.co/800x250" unoptimized alt="Dashboard image" width={800} height={250} />
    </div>
  </section>
  )
}

export default Hero