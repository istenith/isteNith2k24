"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import navbarItems from "./navbaritems";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 left-0 h-16 flex justify-between items-center p-4 bg-[#171500] z-50">

      <Link href="/" className="flex items-center text-white no-underline hover:text-gray-300">
<div className="mt-4">
<Image
src="/assets/images/util/iste_logo-01-removebg-preview.webp"
width={70}
height={70}
alt=""
>

</Image>
</div>
<div className="font-barlowb text-3xl -ml-2">
ISTE
</div>
     
      </Link>
      <div className="hidden md:flex items-center font-actor text-1.3xl space-x-12">
        {navbarItems.map((item, index) => (
          <Link href={item.link} key={index} className="text-white no-underline hover:text-gray-300">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <svg
          xmlns="https://www.srit.ac.in/wp-content/uploads/2022/01/iste.png"
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>
        <div
          className={`md:hidden flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`bg-white h-0.5 w-6 transition-transform duration-300 mb-1 ${
              isOpen ? "translate-y-1 rotate-30" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 w-6 transition-transform duration-300 mb-1 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 w-6 transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-90" : ""
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-screen  bg-[#171616] z-40 md:hidden">
          <div className="flex flex-col mx-[40%] space-y-2 pt-2 pb-7">
            {navbarItems.map((item, index) => (
              <Link href={item.link} key={index} className="text-white text-2xl  no-underline hover:text-gray-300" onClick={toggleMenu}>
                {item.title}
              </Link>
              
            ))}
          </div>
          <div className="container mx-auto px-4 py-8 sm:px-8 md:px-16 lg:px-32">
        <div className="flex flex-col items-center -mt-16">
          <div className="mb-footer">
            <Image 
              src="/assets/images/util/iste_logo-01-removebg-preview.webp" 
              alt="Website Logo" 
              width={250} 
              height={75} 
            />
          </div>
          <p className="text-3xl lg:mb-2 mb-0 font-barlowb text-white">ISTE NITH</p>
          <hr className="w-3/4 lg:w-full border-white my-4 py-4" />

        </div>

      </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
