"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

import Head from 'next/head';
import { BiSolidContact } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";        
import React, { useState } from 'react';
import DomainPage from './domainspage/page';
import Image from 'next/image'





const Homepage = () => {

  const pagenames = [

  { name: 'HOME', href: '/' },
  { name: 'MEMBERS', href: '/members' },
  { name: 'EVENTS', href: '/events' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'BLOGS', href: '/blogs' },
  { name: 'PROJECTS', href: '/projects' },];

  const [menu, setmenu] = useState(false);



 
  const [domain,setdomain] = useState<{ title: string; description: string; } | null>(null);
  



return (



  <div className="h-screen bg-[#171616] text-white">
  

  <Image src="/assets/images/util/iste_logo-01-removebg-preview.webp" 
  height={200}
  width ={200}
  className=" -left-1 logo-44 relative w-20 h-auto z-50 text-white/70" alt="ISTE Logo" / >
  <span className="text-[#ffffff] font-actor ml-nith text-7xl">NITH</span>

  <div className="flex flex-col items-center justify-center absolute top-iste left-1/4">
    <h1 className="text-iste font-barlowlight ml-iste -mt-60 :text-4xl">ISTE</h1>
    <h1 className="text-white/30  font-barlowlight text-iste ml-iste -mt-iste2 " style={{ clipPath: 'inset(60% 0 0 0)' }}>ISTE</h1>
    <h1 className="text-white/10  font-barlowlight text-iste ml-iste -mt-iste3" style={{ clipPath: 'inset(60% 0 0 0)' }}>ISTE</h1>
  </div>
  <div className="relative">
  
      <button
        className="block md:hidden absolute top-4 right-4 p-2 bg-gray-700 rounded-md z-50"
        onClick={() => setmenu(!menu)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {menu && (
        <div className="fixed inset-0 bg-[#171616] z-0" onClick={() => setmenu(false)}></div>
      )}


  <nav className={`absolute top-44 right-0 pr-20 text-white  md: md:flex md:space-y4 ${menu? 'block bg-1e1e1e p-4' : 'hidden'}`}>
    <ul className="flex flex-col md:space-y-8 md:flex md:items-center">
      {pagenames.map((item) => (
        <li key={item.name} className="relative group text-3xl flex items-center ">
          <Link href={item.href}>
            <div className="text-white/60 font-actor hover:text-white transition-transform duration-300 group-hover:-translate-y-1.5 mr-4 cursor-pointer">
              {item.name}
            </div>
          </Link>
          <span className=" hidden md:flex w-24 h-px right-0 flex-col bg-white"></span>
          <span className="hidden md:flex w-3 h-3 right-0 bg-white rounded-full"></span>
        </li>
      ))}
    </ul>
  </nav>


</div>



<div className="mt-isteimg relative text-white">
  <div className="relative mt-10">
    <Image
      src="/assets/images/util/Copy of DCS_0632 (1).webp"
      alt =""
      layout='responsive'
      width ={200}
      height={200}
      className="w-full h-auto flex opacity-50 mx-auto object-cover object-center sm:w-isteimg sm:h-isteimg sm:mt-isteimg"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute text-3xl font-barlowmedium ml-about mt-about z-10  lg:text-[108px] ">
        ABOUT US
      </div>
      
    </div>
  </div>

  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="relative max-w-2xl mx-auto bg-aboutus opacity-100 p-4 rounded-lg shadow-lg mt-4 ml-4 sm:mt-aboutcontent sm:ml-aboutcontent sm:w-full sm:left-1/2">
      <p className="text-xl text-white opacity-100 font-actor text-center sm:text-2xl sm:text-left md:text-2xl lg:text-3xl">
        The Indian Society for Technical Education (ISTE) is the leading
        National Professional non-profit making Society for the Technical
        Education System in our country. The Students Chapter NIT Hamirpur is
        the representative at NIT Hamirpur to promote such technical culture in
        our college. We at NITH, conduct various events within the college and
        also participate in inter-college fests.
      </p>
      </div>

<div className="relative mt-64 ml-72 h-80 w-auto">
  <div className="relative inset-grey bg-gray-700 opacity-70 z-0 h-96 w-56 right-20 top-20  hidden sm:block "></div> 
  
  <Image src="/assets/images/util/aboutuspage.webp" 
  height={200}
  width ={200}
  alt ="" className="relative z-10 h-img2 w-full mt-img2 right-img2 top-6 right-5  hidden sm:block" />
</div>
</div>
</div>







<DomainPage/>






{/* CONTACT PAGEEEEEE*/}








      <div className="flex flex-col items-center justify-center min-h-screen  text-white  -mt-16 lg:mt-0">
      <h1 className=" text-5xl lg:text-[170px] font-barlowmedium mb-12">CONTACT</h1>
      <p className=" lg:text-[32px] text-2xl px-12 lg:px-32  text-[#FFFFFF]  mb-0 lg:mb-116 text-center font-actor">
        Have a question or need assistance? Our team is always ready to help.
        Feel free to reach out, and we will be delighted to aid you by providing heartfelt support.
      </p>

    </div>

    <footer className='  lg:-mt-40 -mt-20 text-white z-50'>
    <div className=" flex flex-col  lg:flex-row w-full justify-between   mt-0 ">
    <div className=" flex lg:flex-row  mx-12 lg:ml-20 items-center">
      <FaMapLocationDot className=" size-20 lg:size-24  " />
      <div className='lg:ml-8 ml-8'>
        <p className="text-1.2xl font-barlow">Address</p>
        <p className="text-1.2xl font-barlow">NIT, Hamirpur<br />Himachal Pradesh,<br/> India, 177001</p>
      </div>
    </div>
    <div className=" flex lg:flex-row  mx-12 mt-7 items-center ">
      <BiSolidContact className=" size-16 lg:size-24  " />
      <div className=' ml-12 lg:ml-4'>
        <p className="text-1.2xl font-barlow">Phone</p>
        <p className="text-1.2xl font-actor">12345578</p>
      </div>
    </div>
    <div className="lg:mr-20 flex lg:flex-row mt-7 mx-12 items-center">
      <HiOutlineMailOpen className=" size-20 lg:size-24 " />
      <div className='lg:ml-8 ml-8  '>
        <p className="text-1.2xl font-barlow " >Email</p>
        <p className="text-1.2xl font-barlow ">iste@nith.ac.in</p>
      </div>
    </div>

  </div>
  
  </footer>

 </div> 
);};


export default Homepage;