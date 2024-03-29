'use client'

import Link from "next/link";
import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
          id: 1,
          link: "product",
        },
        {
          id: 2,
          link: "solutions",
        },
        {
          id: 3,
          link: "industries",
        },
        {
          id: 4,
          link: "blog",
        },
        {
          id: 5,
          link: "about",
        },
        {
          id: 5,
          link: "contact",
        },
      ];

  return (
    <div className="flex items-center w-full h-20 container mx-auto">
        <div>
            <Link
            className="text-slate-900 text-xl"
            href="/"
            rel="noreferrer"
            >
            Fraudless
            </Link>
        </div>
        <ul className="hidden md:flex w-full" style={{justifyContent: 'center'}}>
            {links.map(({ id, link }) => (
            <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize  hover:scale-105 duration-200"
            >
                <Link className="font-medium" href={link}>{link}</Link>
            </li>
            ))}
        </ul>

        {/* <div className="hidden md:flex">
          <div className="mr-4">
            <button className="text-gray-500 border-1 hover:bg-blue-600 border-blue-600 hover:text-slate-50 px-4 py-2 bg-transparent">Sign In</button>
          </div>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 ">Get Started</button>
          </div>
        </div> */}

        <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-slate-500 md:hidden">
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