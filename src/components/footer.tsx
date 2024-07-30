// src/components/Footer.tsx
import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidContact } from 'react-icons/bi';
import { HiOutlineMailOpen } from 'react-icons/hi';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-4 bg-1616 text-white">
      <div className="contact-details flex flex-col sm:flex-row mt-cnt">
        <div className="flex items-center space-x-4">
          <FaMapLocationDot className="size-16 mb-contactbottom ml-16 sm:ml-36" />
          <div>
            <p className="text-sm">Address</p>
            <p className="text-lg">NIT, Hamirpur<br />Himachal Pradesh, India, 177001</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BiSolidContact className="size-16 mb-contactbottom ml-16 sm:ml-36" />
          <div>
            <p className="text-sm">Phone</p>
            <p className="text-lg">12345578</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <HiOutlineMailOpen className="size-16 mb-contactbottom ml-16 sm:ml-36" />
          <div>
            <p className="text-sm mr-5">Email</p>
            <p className="text-lg mr-5">iste@nith.ac.in</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
