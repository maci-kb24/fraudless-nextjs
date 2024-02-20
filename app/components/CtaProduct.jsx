import React from 'react'

const CtaProduct = () => {
  return (
    <section className='cta-product bg-slate-900'>
         <div className="container mx-auto flex justify-evenly py-10">
        <h2 className="text-4xl text-white font-semibold">
          See our Product in <span className="text-[#30A1E4]">Action</span>
        </h2>
        <a
          href="contact.html"
          className="bg-white hover:bg-blue-700 text-blue py-2 px-4"
        >
          Book Demo
        </a>
      </div>
    </section>
  )
}

export default CtaProduct