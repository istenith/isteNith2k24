// src/components/Footer.tsx
import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidContact } from 'react-icons/bi';
import { HiOutlineMailOpen } from 'react-icons/hi';

const Footer: React.FC = () => {
  return (
    <footer className='lg:mb-0 mb-16 lg:mt-20 text-white z-50'>
    <div className=" flex flex-col  lg:flex-row w-full justify-between   mt-16 ">
    <div className=" flex lg:flex-row  mx-20 lg:ml-20 items-center">
      <FaMapLocationDot className=" size-20 lg:size-24  " />
      <div className='lg:ml-8 ml-8'>
        <p className="text-1.2xl font-barlow">Address</p>
        <p className="text-1.2xl font-barlow">NIT, Hamirpur<br />Himachal Pradesh,<br/> India, 177001</p>
      </div>
    </div>
    <div className=" flex lg:flex-row  mx-20 mt-7 items-center ">
      <BiSolidContact className=" size-16 lg:size-24  " />
      <div className=' ml-12 lg:ml-4'>
        <p className="text-1.2xl font-barlow">Phone</p>
        <p className="text-1.2xl font-actor">12345578</p>
      </div>
    </div>
    <div className="lg:mr-20 flex lg:flex-row mt-7 mx-20 items-center">
      <HiOutlineMailOpen className=" size-20 lg:size-24 " />
      <div className='lg:ml-8 ml-8 '>
        <p className="text-1.2xl font-barlow " >Email</p>
        <p className="text-1.2xl font-barlow ">iste@nith.ac.in</p>
      </div>
    </div>

  </div>
  
  </footer>
  );
};

export default Footer;
