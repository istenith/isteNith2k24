import React from 'react';

import { FaInstagram } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";

import Link from 'next/link';
import { profileDetails } from "../../../data/member_data";

const team4 = () => {
  return (
    <div className=" min-h-screen ">
<div className='sticky top-16 z-50'>
<div className="   mt-16 mx-10 text-6xl font-sans ">ISTE NITH</div>
      <div class="border-t-2 border-white my-4  mx-10 sticky top-0"></div>
</div>
<div className='flex flex-row '>
<div className="grid  w-3/4 mx-10 md:grid-cols-2 lg:grid-cols-4 ">
        {/* cards */}
        {profileDetails.slice(0, 60).map((details, index) => (
          <div className="w-full  " key={index}>
            <div className="flex flex-col ">
              
              <img
                src={details.img}
                alt=""
                className=" h-64 w-64 drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
              />
        <div className='flex flex-row'>

              <div className="mt-2 w-4/5 ">
                <h1 className="font-sans tracking-expanded text-slate-400  ">
                  {details.name}
                </h1>
                <p className=" font-sans tracking-expanded text-white text-bold  ">
                  {details.post}
                </p>
                <p className=" font-sans tracking-expanded text-slate-400  ">
                  {details.branch}
                </p>
                <p className="font-sans tracking-expanded  text-slate-400 mb-2 ">
                  {details.location}
                </p>
              </div>
              <div className="flex opacity-80 hover:opacity:100 transition-opacity duration-300 mr-4 w-1/5">
                <Link
                  href={details.instagram}
                  className=" flex items-center justify-center h-9 w-9 text-white"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={details.linkedin}
                  className="  flex items-center justify-center h-9 w-9 text-white"
                >
                  <TfiLinkedin />
                </Link>

              </div>
          </div>

            </div>
          </div>
        ))}
      </div>
<div className='flex flex-col fixed right-10 '>
<div className='text-8xl font-sans'> 
       FINAL <br></br>YEAR
      </div>
      <div class="border-t-2 border-white mt-80  mr-10  "></div>
      <div className="text-2xl mt-2 mb-1 text-slate-300 font-sans">THIRD YEAR</div>
      <div className="text-2xl mb-1 text-slate-300 font-sans">SECOND YEAR</div>
      <div className="text-2xl mb-1 text-slate-300 font-sans">FIRST YEAR</div>

</div>
</div>
    </div>
  );
};

export default team4;