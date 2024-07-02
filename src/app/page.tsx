"use client"
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';

// pages/index.tsx
import Head from 'next/head';


const Homepage = () => {
  const pagenames = [
    { name: 'HOME', href: '/' },
    { name: 'MEMBERS', href: '/members' },
    { name: 'EVENTS', href: '/events' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'BLOGS', href: '/blogs' },
    { name: 'PROJECTS', href: '/projects' },
  ];

  return (
    <div className="h-screen bg-[#161616] text-white">
      <img src="iste_logo-01-removebg-preview.png" className="w-20 h-auto" />
      <span className="text-white text-opacity-60 font-thin ml-28 text-7xl">NITH</span>


<div className='flex flex-col items-center justify-center absolute top-47 left-1/4"'>
      <h1 className="  text-20xl font-bold raleway-regular  ml-96 -mt-60">ISTE</h1>


      <h1 className=" text-white text-opacity-50 font-bold raleway-regular  text-20xl  ml-96 -mt-80 " style={{ clipPath: 'inset(60% 0 0 0)' }}>ISTE</h1>
      <h1 className=" text-white text-opacity-20 font-bold raleway-regular  text-20xl  ml-96 -mt-96 " style={{ clipPath: 'inset(60% 0 0 0)' }}>ISTE</h1>   
      </div>
      
         <nav className="absolute top-44  right-0 pr-20 text-white">
        <ul className="space-y-5">
          {pagenames.map((item) => (
            <li key={item.name} className="relative group text-2xl flex items-center">
              <Link href={item.href}>
                <div className="text-white transform transition-transform duration-300 group-hover:-translate-y-1.5 mr-4 cursor-pointer">
                  {item.name}
                </div>
              </Link>
            
              <span className="flex w-24 h-px right-0 flex-col bg-white"></span>
              <span className="flex w-3 h-3 right-0 bg-white rounded-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Homepage;
