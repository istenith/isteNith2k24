"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const smcss = 'transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer sm:mt-0 mt-6';
    
    return (
        <div className=''>
            <button
                className="block absolute top-8 lg:right-24 right-8 rounded-md bg-[#626262] bg-opacity-[68%] z-50"
                onClick={() => setMenu(!menu)}
            >
                <svg
                    className="md:w-8 md:h-8 h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>
            {menu && (
                <div
                    className="w-[60%]  bg-opacity-100 z-0 absolute top-0 left-0"
                    onClick={() => setMenu(false)}
                >
                    {/* Add optional overlay or background content here if needed */}
                </div>
            )}
            <nav
                className={`${menu ? 'block p-4' : 'hidden'} flex justify-center inset-20 -mt-12 items-center`}
            >
                <ul className="lg:w-[60%] md:w-[80%] w-full grid gap-2 grid-cols-2 lg:bg-[#626262] md:bg-[#626262]  bg-opacity-[32%] text-white sm:flex text-1.2xl md:text-1xl lg:text-xl font-fontsemi md:p-4 md:px-7 sm:p-2 mr-4 mt-24 md:mt-12 lg:mt-12  items-center justify-between sm:border-2 rounded-0 md:rounded-full lg:rounded-full">
                    <li>
                        <Link href="/">
                            <div className='lg:border-hidden md:border-hidden rounded-lg border px-8 lg:px-0 md:px-0 cursor-pointer transition-transform  transform hover:scale-105 ' >HOME</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/members">
                            <div className="lg:border-hidden  md:border-hidden  rounded-lg border  lg:px-0 px-8 md:px-0 cursor-pointer transition-transform  transform hover:scale-105 ">MEMBERS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <div className=" lg:border-hidden  md:border-hidden  rounded-lg border lg:px-0 px-8  md:px-0 cursor-pointer transition-transform  transform hover:scale-105 ">EVENTS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery">
                            <div className=" lg:border-hidden md:border-hidden  rounded-lg border lg:px-0 px-8  md:px-0 cursor-pointer transition-transform  transform hover:scale-105 ">GALLERY</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            <div className=" lg:border-hidden md:border-hidden  rounded-lg  border lg:px-0 px-8  md:px-0 cursor-pointer transition-transform  transform hover:scale-105  ">BLOGS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <div className="lg:border-hidden md:border-hidden  rounded-lg border lg:px-0 px-8  md:px-0 cursor-pointer transition-transform  transform hover:scale-105  ">PROJECTS</div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
