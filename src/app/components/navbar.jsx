 "use client"
 import Link from 'next/link';
 import { useRouter } from 'next/navigation'
 import Image from 'next/image';
 import Head from 'next/head'
 import React, { useState } from 'react';






const Navbar = () => {

  const pagenames = [

  { name: 'HOME', href: '/' },
   { name: 'MEMBERS', href: '/members' },
   { name: 'EVENTS', href: '/events' },
   { name: 'GALLERY', href: '/gallery' },
   { name: 'BLOGS', href: '/blogs' },
   { name: 'PROJECTS', href: '/projects' },];

  const [menu, setmenu] = useState(false);


  return (
     <div className='bg-black h-screen w-full'>
     <button
       className="block  absolute top-4 right-4  rounded-md bg-[#626262] z-50"
       onClick={() => setmenu(!menu)}
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
      <div className=" w-[98%]  bg-opacity-100 z-0" onClick={() => setmenu(false)}></div>)}

<nav className={`absolute mt-12 mx-14 text-white font-head font-extralight space-y4 ${menu? 'block bg-1e1e1e p-4' : 'hidden'}`}>
     <ul className="md:flex items-center justify-center border-2 rounded-full bg-[#626262] bg-opacity-[68%]">
       {pagenames.map((item) => (
         <li key={item.name} className="relative group text-4xl flex items-center ">
           <Link href={item.href}>
             <div className="text-white font-extralight font-sans p-6 transition-transform duration-300 group-hover:-translate-y-1.5 mr-4 cursor-pointer">
               {item.name}
             </div>
           </Link>
           
         </li>
       ))}
     </ul>
   </nav>
    
 </div>
     );
 }


 export default Navbar;
