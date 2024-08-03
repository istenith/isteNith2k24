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
                    <li>
                        <Link href="/">
                            <div className={smcss}>HOME</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/members">
                            <div className={smcss}>MEMBERS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <div className={smcss}>EVENTS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery">
                            <div className={smcss}>GALLERY</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            <div className={smcss}>BLOGS</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <div className={smcss}>PROJECTS</div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
