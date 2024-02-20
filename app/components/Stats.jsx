// import Image from "next/image"

const Stats = () => {
  return (
   <section className="stats">
 <div className="relative z-20 sm:z-auto">
      <div className="">
        <div className="relative bg-[#F7F7F7] mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
          <div className="flex flex-col bg-[#003153] ">
            <div className="py-12 px-12">
              <h2 className="text-3xl font-semibold leading-12 text-[#30a1e4]">
                {" "}
                Invoice Fraud Statistics: Don’t Be the Next Victim!
              </h2>
              <p className="mt-3 text-sm leading-6 text-white">
                Fraudless.ai provides an all-in-one, customizable toolkit that
                constantly updates and expands with your business.
              </p>
            </div>
            <div className="text-center py-12 counter">
              <div>
                <h2 className="text-xl font-semibold text-white leading-9">
                  Every
                  <span className="text-6xl text-slate-900 px-2"  />
                  minutes <br />
                  Invoice Fraud
                  <br /> in US is Commited
                </h2>
              </div>
            </div>
          </div>
          <div className="flex w-4/5 text-center">
            <div className="py-12">
              <h2 className="text-3xl font-semibold leading-12 text-[#30A1E4] uppercase">
                Invoice Fraud Growth
              </h2>
              <p className="text-6xl text-[#003153] mt-4"> 27%</p>
              <p className="text-sm leading-6 text-slate-700 mt-8">
                According to the Association of Certified Fraud Examiners (ACFE),
                invoice and billing fraud experienced a significant increase in
                recent years, constituting around 27% of reported cases.
              </p>
            </div>
          </div>
          <div className="flex w-4/5 text-center">
            <div className="py-12">
              <h2 className="text-3xl font-semibold leading-12 text-[#30A1E4] uppercase">
                Detection Challenges
              </h2>
              <p className="text-5xl text-[#003153] mt-4">47%</p>
              <p className="text-sm leading-6 text-slate-700 mt-8">
                {" "}
                Approximately 47% of organizations lack the proper controls or
                technologies to detect invoice fraud effectively, as per a report
                by Ardent Partners.
              </p>
            </div>
          </div>
          <div className="flex w-4/5 mr-10 text-center">
            <div className="py-12">
              <h2 className="text-3xl font-semibold leading-12 text-[#30A1E4] uppercase">
                Supplier Fraud Attempts
              </h2>
              <p className="text-5xl text-[#003153] mt-4">32%</p>
              <p className=" text-sm leading-6 text-slate-700 mt-8">
                About 32% of all fraud attempts originate from suppliers, who can
                manipulate invoices to overcharge or create fictitious billing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Stats