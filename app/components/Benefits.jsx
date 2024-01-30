import React from 'react'

const Benefits = () => {
  return (
    <section className=" benefits bg-slate-900 text-white">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="max-w-xl">
            <h2 className=" font-bold text-white">What makes us special</h2>
            {/* <p className="mt-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
                sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
            </p> */}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-blue-600 p-4">
                <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>
                </span>
                <div>
                <h3 className="font-bold text-white">Proactive Security</h3>
                <p className="mt-1 text-white">
                Stay ahead of the game with preemptive anomaly detection, addressing potential threats before they become problems
                </p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-blue-600 p-4">
                <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>
                </span>
                <div>
                <h3 className=" font-bold text-white">Peace of Mind</h3>
                <p className="mt-1 text-white">
                Instant alerts mean you&apos;re always in the know, fostering a sense of security and tranquility in your business operations
                </p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-blue-600 p-4">
                <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>
                </span>
                <div>
                <h3 className="font-bold text-white">Adaptive Defense</h3>
                <p className="mt-1 text-white">
                Embrace the power of continuous learning, allowing our AI to adapt and refine its detection capabilities based on the ever-changing threat landscape
                </p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits