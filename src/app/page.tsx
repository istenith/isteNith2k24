"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';
import Head from 'next/head';
import { BiSolidContact } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import React, { useState } from 'react';

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
  <div className="h-screen bg-[#1e1e1e] text-white">
  

  <img src="iste_logo-01-removebg-preview.webp" className=" relative w-20 h-auto z-50 " alt="ISTE Logo" />
  <span className="text-white text-opacity-60 font-thin ml-nith text-7xl">NITH</span>

  <div className="flex flex-col items-center justify-center absolute top-iste left-1/4">
    <h1 className="text-iste font-bold raleway-regular ml-iste -mt-60 :text-4xl  ">ISTE</h1>
    <h1 className="text-white text-opacity-50 font-bold raleway-regular text-iste ml-iste -mt-iste2 " style={{ clipPath: 'inset(60% 0 0 0)' }}>ISTE</h1>
    <h1 className="text-white text-opacity-20 font-bold raleway-regular text-iste ml-iste -mt-iste3" style={{ clipPath: 'inset(60% 0 0 0)' }}>ISTE</h1>
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
        <div className="fixed inset-0 bg-nav bg-opacity-100 z-0" onClick={() => setmenu(false)}></div>
      )}


  <nav className={`absolute top-44 right-0 pr-20 text-white  md: md:flex md:space-y4 ${menu? 'block bg-1e1e1e p-4' : 'hidden'}`}>
    <ul className="flex flex-col md:space-y-8 md:flex md:items-center">
      {pagenames.map((item) => (
        <li key={item.name} className="relative group text-4xl flex items-center ">
          <Link href={item.href}>
            <div className="text-white opacity-70 transition-opacity duration-300 hover:opacity-100 transition-transform duration-300 group-hover:-translate-y-1.5 mr-4 cursor-pointer">
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
  <div className="relative">
    <img
      src="/Copy of DCS_0632 (1).webp"
      className="w-isteimg h-isteimg mt-isteimg flex opacity-50 mx-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute text-6xl font-bold raleway-regular ml-about mt-about z-10">
        ABOUT US
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="relative max-w-2xl mx-auto bg-aboutus opacity-70 p-4 rounded-lg shadow-lg mt-aboutcontent ml-aboutcontent ">
      <p className="text-3xl text-white opacity-100 sm:text-xl sm:text-center md:text-2xl lg:text-3xl ">
        The Indian Society for Technical Education (ISTE) is the leading
        National Professional non-profit making Society for the Technical
        Education System in our country. The Students' Chapter NIT Hamirpur is
        the representative at NIT Hamirpur to promote such technical culture in
        our college. We at NITH, conduct various events within the college and
        also participate in inter-college fests.
      </p>
    </div>

    <div className="absolute bottom-0 left-0 ml-12 mb-img2">
      <img src="/aboutuspage.webp" className="hidden md:mt-64 ml-72 h-80 w-auto" />
      <div className=" hidden md:absolute mt-60 inset-0 bg-aboutus h-96 w-img2 ml-64 opacity-50"></div>
    </div>
  </div>
</div>























  <div className="min-h-screen bg-1e1e1e mt-domainpage text-white flex flex-col 
  items-center justify-center  p-4">
      <h1 className="text-7xl mb-8 font-bold raleway-regular py-10">DOMAINS</h1>
      <div className="flex space-x-4  snap-x snap-mandatory 
      sm:flex-wrap sm:justify-center">
        
        {/* Card 1 */}
        <div
          onClick={() => setdomain({
            title: 'Design ',
            description: "The design team is the creative force to elevate society`s visual, artistic and aesthetic aspects. The Design team works develop imaginatively captivating posters, graphics and event branding."
          })}
          className={`cursor-pointer p-4 bg-cover bg-center transition-transform transform hover:scale-105 
            hover-translate-z-30 snap-center rotate-12 h-cards w-cards  `}
          style={{  backgroundImage: 'url(https://i.pinimg.com/564x/df/ab/86/dfab862519becd6970a10c1369efdcf3.jpg)' }}
        >
          
        </div>
        
        {/* Card 2 */}
        <div
          onClick={() => setdomain({
            title: 'Finance',
            description: "The management of ISTE's financial activities falls within the purview of the Finance domain. It oversees activities such as accounting, financial reporting, and budgeting"
          })}
          className={`cursor-pointer p-4 bg-cover bg-center  transition-transform transform hover:scale-105 hover-translate-z-20 snap-center -rotate-1 h-cards w-cards `}
          style={{  backgroundImage: 'url(https://i.pinimg.com/564x/68/7c/69/687c6904b364e3c8bf539b7d15a581d4.jpg)' }}
        >
         
        </div>
        
        {/* Card 3 */}
        <div
          onClick={() => setdomain({
            title: 'Public Relations',
            description: 'The Public Relations domain of ISTE is committed to providing the best possible communication with its members, institutions and the public.'
          })}
          className={`cursor-pointer p-4 bg-cover bg-center  transition-transform transform hover:scale-105 snap-center -rotate-6 h-cards w-cards `}
          style={{  backgroundImage: 'url(https://i.pinimg.com/564x/7a/cc/85/7acc8503086b3a2d7448b8be7058292d.jpg)' }}
        >
     
        </div>
        
        {/* Card 4 */}
        <div
          onClick={() => setdomain({
            title: 'TECH',
            description: "Welcome to ISTE's Tech Domain! Serving as the organization's technological backbone, the Tech domain is responsible for delivering essential technical resources and support. "
          })}
          className={`cursor-pointer p-4 bg-cover bg-center  transition-transform transform hover:scale-105 snap-center -rotate-12 h-cards w-cards `}
          style={{ backgroundImage: 'url(https://i.pinimg.com/564x/96/6f/21/966f212c46f1d4831b82ed2698ce7953.jpg)' }}
        >
          
        </div>
      </div>
      {domain && (
        <div className="mt-8 p-4  rounded-lg text-center">
          <h2 className="text-2xl mb-4">{domain.title}</h2>
          <p>{domain.description}</p>
        </div>
      )}
    </div>
  




















{/* CONTACT PAGEEEEEE*/}






{/* 

      <div className="flex flex-col items-center justify-center min-h-screen bg-1616 text-white">
      <h1 className="text-contact font-bold raleway-regular mb-8">CONTACT</h1>
      <p className="text-cnt  text-white opacity-70 mb-16  p-7 text-center font-sans">
        Have a question or need assistance? Our team's always ready to help.
        Feel free to reach out, and we'll be delighted to aid you by providing heartfelt support.
      </p>
      <div className="contact-details flex flex-row items-center space-x-10">
        <div className="flex items-center space-x-4">
          <FaMapLocationDot className="size-16 mb-contactbottom ml-60" />
          <div>
            <p className="text-sm">Address</p>
            <p className="text-lg">NIT, Hamirpur<br />Himachal Pradesh, India, 177001</p>
          </div>
        </div>
        <div className="flex items-center space-x-16">
          <BiSolidContact className="size-16 mb-contactbottom ml-60" />
          <div>
            <p className="text-sm">Phone</p>
            <p className="text-lg">12345578</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <HiOutlineMailOpen className="size-16 mb-contactbottom ml-60" />
          <div>
            <p className="text-sm mr-5" >Email</p>
            <p className="text-lg mr-5">iste@nith.ac.in</p>
          </div>
        </div>
      </div>
    </div>*/}
 </div> 
);};


export default Homepage;