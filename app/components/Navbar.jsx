'use client'

import Link from "next/link";
import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
          id: 1,
          link: "Product",
        },
        {
          id: 2,
          link: "Solution",
        },
        {
          id: 3,
          link: "Industries",
        },
        {
          id: 4,
          link: "Resources",
        },
        {
          id: 5,
          link: "Company",
        },
      ];

  return (
    <div className="flex justify-between items-center w-full h-20 container mx-auto">
        <div>
            <a
            className="text-slate-900 text-xl"
            href="#"
            target="_blank"
            rel="noreferrer"
            >
            Fraudless
            </a>
        </div>
        <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
            <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
                <Link href={link}>{link}</Link>
            </li>
            ))}
        </ul>

        <div className="hidden md:flex">
          <div className="mr-4">
            <button className="text-gray-500 hover:bg-slate-900 hover:text-white px-4 py-2 rounded bg-transparent">Sign In</button>
          </div>
          <div>
            <button className="bg-slate-900 text-white px-4 py-2 rounded">Get Started</button>
          </div>
        </div>

        <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <>
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
                <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                <Link onClick={() => setNav(!nav)} href={link}>
                    {link}
                </Link>
                </li>
            ))}
            </ul>
            </>
        )}
    </div>
  )
}

export default Navbar