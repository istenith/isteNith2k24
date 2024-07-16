"use client";
import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from 'next/link';
import { profileDetails } from "../../../data/member_data";

const Team = () => {
  const [initialYear, setYear] = useState("finalyear");

  const filteredProfiles = profileDetails.filter(profile => profile.section === initialYear);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">

<div className=' bg-[#1E1E1E] w-full fixed top-0 z-50 '>
        <div className="mx-10 pt-12 text-4xl md:text-6xl font-r2">ISTE NITH</div>
        <div className="border-t-2 border-white my-4 mx-10"></div>
      </div>

      <div className='flex mt-16 pt-24 sm:flex-col lg:flex-row'>
        <div className="grid w-full lg:w-3/4 ml-10 md:grid-cols-2 lg:grid-cols-4  ">
          {filteredProfiles.map((details, index) => (
            <div className="w-full " key={index}>
              <div className="flex flex-col relative">
                <img
                  src={details.img}
                  alt=""
                  className="h-64 w-64 drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                />
                <div className="bg-[#1E1E1E] absolute bottom-2  lg:right-4 flex  text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Link href={details.instagram} className="flex items-center justify-center ml-2 h-8 w-8">
                    <FaInstagram />
                  </Link>
                  <Link href={details.linkedin} className="flex items-center justify-center mr-2  h-8 w-8">
                    <TiSocialLinkedin />
                  </Link>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row'>
                <div className="mt-2 w-4/5">
                  <h1 className="font-f2 ">{details.name}</h1>
                  <p className="font-f2 text-white font-bold">{details.post}</p>
                  <p className="font-f2 tracking-expanded ">{details.branch}</p>
                  <p className="font-f2 tracking-expanded  mb-4">{details.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col fixed right-16 '>
          <div className='text-5xl lg:text-7xl font-r2'>
            {initialYear.toUpperCase().substring(0, 5)}<br />
            {initialYear.toUpperCase().substring(5, 11)}
          </div>
          <div className="border-t-2 border-white mt-20 lg:mt-80 mr-4"></div>
          <div className="text-xl lg:text-2xl mt-2 text-slate-300 font- hover:brightness-150">
            <button onClick={() => setYear('finalyear')}>FINAL YEAR</button>
          </div>
          <div className="text-xl lg:text-2xl mt-2 mb-1 text-slate-300 font-sans hover:brightness-150">
            <button onClick={() => setYear('Thirdyear')}>THIRD YEAR</button>
          </div>
          <div className="text-xl lg:text-2xl mb-1 text-slate-300 font-sans hover:brightness-150">
            <button onClick={() => setYear('secondyear')}>SECOND YEAR</button>
          </div>
          <div className="text-xl lg:text-2xl mb-1 text-slate-300 font-sans hover:brightness-150">
            <button onClick={() => setYear('firstyear')}>FIRST YEAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;