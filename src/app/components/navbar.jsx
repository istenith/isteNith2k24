 "use client"
 import Link from 'next/link';

 import React, { useState } from 'react';

 const Navbar = () => {
    const [menu, setmenu] = useState(false);
    const smcss ='transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer sm:mt-0 mt-6'
    
    return (
        <div>
        <button
          className="block  absolute top-4 right-4 rounded-md bg-[#626262] bg-opacity-[68%] z-50"
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


<nav className={`${menu? 'block  p-4' : 'hidden'}`}>
            <ul className=' sm:bg-[#626262] bg-opacity-[32%] text-white sm:flex sm:text-lg text-4xl md:text-4xl md:gap-6 sm:gap-4 font-sans md:p-6 sm:p-3 mx-10 sm:mt-8 md:mt-14 mt-8 font-light items-center justify-between sm:border-2 rounded-full'>
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
 }


 export default Navbar;