
const Faq = () => {
  return (
    <section className="faq">
        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
            <div className="container mx-auto">
                <div className="flex px-8 py-[8rem] gap-[8rem]">
                    <div>
                        <h1 className="text-slate-900">Frequently<br/> Asked Questions</h1>
                    </div>
                    <div className="flex-1">
                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden bg-slate-100" open>
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                        <h2 className="text-lg font-medium">How can Machine Learning help fraud detection?</h2>

                        <span className="relative h-5 w-5 shrink-0">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                            </svg>

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                            </svg>
                        </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-gray-700">
                        Machine learning is the first line of defense against fraud. 
                        Using data from the thousands of transactions Fraudless.ai processes across Australia, Fraud Detection learns to differentiate between
                        legitimate and fraudulent behavior, and to adapt to ever-changing fraud tactics.
                        This boosts your fraud-fighting capacity by reducing the amount of manual work you’re required to do. 
                        </p>
                        </details>
                        <details className="group mt-5 p-6 [&_summary::-webkit-details-marker]:hidden bg-slate-100">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                            <span className="relative h-5 w-5 shrink-0">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                                </svg>

                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                                </svg>
                            </span>
                            </summary>

                            <p className="mt-4 leading-relaxed text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                            consequuntur distinctio corporis earum similique!
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
      </section>  
  )
}

export default Faq