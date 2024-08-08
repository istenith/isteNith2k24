"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const smcss = 'transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer sm:mt-0 mt-6';

    return (
        <div className="relative">
            {/* Button for toggling mobile menu */}
            <button
                className="block lg:hidden absolute top-8 lg:right-24 right-8 rounded-md bg-[#626262] bg-opacity-[68%] z-50"
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
            
            {/* Overlay for mobile menu */}
            {menu && (
                <div
                    className="fixed inset-0 bg-[#171616] bg-opacity-90 z-40"
                    onClick={() => setMenu(false)}
                />
            )}

            {/* Mobile Menu */}
            <nav
<<<<<<< HEAD
                className={`fixed inset-0 flex flex-col items-center justify-center bg-[#626262] bg-opacity-90 p-4 z-50 lg:hidden ${menu ? 'block' : 'hidden'}`}
            >
                <ul className="flex flex-col text-white text-4xl font-light space-y-6">
                    <li>
                        <Link href="/" onClick={() => setMenu(false)}>
                            <div className={smcss}>HOME</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/members" onClick={() => setMenu(false)}>
                            <div className={smcss}>MEMBERS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" onClick={() => setMenu(false)}>
                            <div className={smcss}>EVENTS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery" onClick={() => setMenu(false)}>
                            <div className={smcss}>GALLERY</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs" onClick={() => setMenu(false)}>
                            <div className={smcss}>BLOGS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" onClick={() => setMenu(false)}>
                            <div className={smcss}>PROJECTS</div>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Web Menu */}
            <nav className="hidden lg:flex lg:justify-center lg:items-center lg:space-x-8 lg:bg-transparent lg:p-4 lg:mt-4">
                <ul className="flex space-x-8 text-white text-lg font-light">
=======
                className={`${menu ? 'block p-4' : 'hidden'} flex justify-center inset-20 -mt-12 items-center`}
            >
                <ul className="lg:w-[60%]  w-full grid gap-2 lg:gap-0 grid-cols-2 lg:bg-[#626262] bg-opacity-[32%] text-white sm:flex text-1.2xl lg:text-xl font-fontsemi md:p-4 md:px-7 sm:p-2 mr-4 sm:mt-12 md:mt-14 mt-28  items-center justify-between sm:border-2 rounded-0 lg:rounded-full">
>>>>>>> 4337738030a4ce643d4356acf5af787e8022ebc3
                    <li>
                        <Link href="/">
                            <div className='lg:border-hidden rounded-lg border px-8 lg:px-0 cursor-pointer transition-transform  transform hover:scale-105 ' >HOME</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/members">
                            <div className="lg:border-hidden  rounded-lg border  lg:px-0 px-8  cursor-pointer transition-transform  transform hover:scale-105 ">MEMBERS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <div className=" lg:border-hidden   rounded-lg border lg:px-0 px-8 cursor-pointer transition-transform  transform hover:scale-105 ">EVENTS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery">
                            <div className=" lg:border-hidden  rounded-lg border lg:px-0 px-8  cursor-pointer transition-transform  transform hover:scale-105 ">GALLERY</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            <div className=" lg:border-hidden  rounded-lg  border lg:px-0 px-8 cursor-pointer transition-transform  transform hover:scale-105  ">BLOGS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <div className="lg:border-hidden  rounded-lg border lg:px-0 px-8 cursor-pointer transition-transform  transform hover:scale-105  ">PROJECTS</div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
