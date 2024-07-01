
"use client"
import Link from 'next/link';

import {useRouter} from 'next/navigation'
import styles from './page.module.css';
import Image from 'next/image';

// pages/index.tsx
import Head from 'next/head';


const Homepage = () => {
  const navItems = [
      { name: 'HOME', href: '/' },
    { name: 'MEMBERS', href: '/members'},
    { name: 'EVENTS', href: '/events'},
    { name: 'GALLERY', href: '/gallery'},
     { name: 'BLOGS', href: '/blogs'},
    { name: 'PROJECTS', href: '/projects'},
  ];

  return (
    <div className="h-screen bg-[#161616] text-white">
      <img src="iste_logo-01-removebg-preview.png" className="w-20 h-auto" />
      <span className=" text-white text-opacity-60 font-thin ml-28 text-7xl">NITH</span>

     
        <h1 className="text-8xl font-bold drop-shadow-[0_8px_5px_rgb(255,255,255)] 
      text-shadow: 2px 2px 4px #00000 font-9xl ml-96 mt-60 ">ISTE</h1>
      

      <nav className="absolute top-1/2 right-0  pr-20 text-white">
        <ul className ="space-y-5">
          {navItems.map((item) => (
            <li key={item.name}   className="relative group  text-2xl flex items-center">
              <Link href={item.href}>
                <div className="text-white transform transition-transform duration-300 group-hover:-translate-y-1.5 mr-4 cursor-pointer">
                  {item.name}
                </div>
              </Link>
              <span className="block w-24 h-px bg-white"></span>
              <span className="block w-3 h-3   bg-white rounded-full"   ></span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Homepage;
