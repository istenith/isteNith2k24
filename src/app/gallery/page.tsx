"use client";
import React from 'react';
import { data } from '../../../data/data';
import { useState } from 'react';



const Gallery: React.FC = () => {
  
const [Property, setProperty] = useState("pahal");
const filteredEvents = data.filter(item => item.event === Property);
const gridcss = "sm:h-16 h-9 w-[28%] text-md sm:text-4xl rounded-full hover:cursor-pointer font-head justify-center items-center flex" ;

  return (
    
    <div className="  background-color: #1E1E1E; text-white min-h-screen">
      <div className="text-desc sm:text-9xl text-5xl font-extralight mx-24 mt-11 mb-11">
        GALLERY
      </div>
     
      <div className="flex gap-3 sm:mx-24 mx-6">
        <div onClick={() => setProperty('pahal')} className={`${gridcss} ${Property ==='pahal' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}>pahal</div>
        <div onClick={() => setProperty('hult')} className={`${gridcss} ${Property ==='hult' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}>hult prize</div>
        <div onClick={() => setProperty('prody')} className={`${gridcss} ${Property ==='prody' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}>prodyogiki</div>
        <div onClick={() => setProperty('prarambh')} className={`${gridcss} ${Property ==='prarambh' ? 'bg-[#535353]' : 'bg-[#D9D9D9] bg-opacity-65'}`}>prarambh</div>
</div>
       

       {/* grid section  */}
      <div className="grid grid-cols-2 sm:grid-cols-8 sm:grid-rows-7 mt-8 h-[650px] sm:mx-24 mx-6 gap-3">
        {filteredEvents.map((item, i) => (
          <div
            key={i}
            className={`bg-white border-2 rounded-xl flex flex-col items-center justify-center  ${
            i === 2 || i===3  ? 'sm:col-span-2 col-span-1' : ''
            }  ${
            i === 0 ? 'sm:col-span-2 col-span-2 ' : ''
            } 
            ${i=== 6? 'sm:col-span-3 col-span-2' : ''}
            ${
            i === 1 ||i===4 ? 'sm:col-span-4 col-span-1' : ''
            }  ${i === 5 ? 'sm:col-span-3 col-span-1' : ''}

            ${i === 0 || i=== 1? 'sm:row-span-3' : ''} 
            ${i === 2 ? 'sm:row-span-5' : ''} 
            ${i=== 3? 'sm:row-span-4  row-span-2' : ''}
            ${i=== 4 ||i=== 5 ||i=== 6? 'sm:row-span-2' : ''}
          
            `}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full rounded-xl object-cover"/>
            </div>
        ))}
      </div>
    </div>
    
  
  );
};

export default Gallery ;