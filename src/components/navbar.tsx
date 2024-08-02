"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const smcss = 'transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer sm:mt-0 mt-6';
    
    return (
        <div>
            <button
                className="block absolute top-36 right-4 rounded-md bg-[#626262] bg-opacity-[68%] z-50"
                onClick={() => setMenu(!menu)}
            >
                <svg
                    className="md:w-8 md:h-8 h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            {menu && (
                <div 
                    className="w-[60%] bg-opacity-100 z-0 absolute top-0 left-0 h-screen"
                    onClick={() => setMenu(false)}
                >
                    {/* Add optional overlay or background content here if needed */}
                </div>
            )}
            <nav className={`${menu ? 'block p-4' : 'hidden'} flex justify-center items-center`}>
                <ul className='w-[60%] sm:bg-[#626262] bg-opacity-[32%] text-white sm:flex text-4xl sm:text-sm  md:text-lg font-sans md:p-4 sm:p-2 mx-10 sm:mt-8 md:mt-14 mt-8 font-light items-center justify-between sm:border-2 rounded-full'>
                    <li><Link href="/"><div className={smcss}>HOME</div></Link></li>
                    <li><Link href="/members"><div className={smcss}>MEMBERS</div></Link></li>
                    <li><Link href="/events"><div className={smcss}>EVENTS</div></Link></li>
                    <li><Link href="/gallery"><div className={smcss}>GALLERY</div></Link></li>
                    <li><Link href="/blogs"><div className={smcss}>BLOGS</div></Link></li>
                    <li><Link href="/projects"><div className={smcss}>PROJECTS</div></Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
