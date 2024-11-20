
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center px-4">
        <div>
          <h3 className="text-lg font-semibold">Nexus System</h3>
          <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div className='flex space-x-4 pt-4'>
                <a
                  href='https://www.linkedin.com/in/nexus-system-448a13321/' // Replace with your LinkedIn URL
                  target='_blank'
                  rel='noopener'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                    <FaLinkedinIn className='text-blue-600' />
                  </div>
                </a>
    
                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=nexussystem83@gmail.com&su=Subject&body=Body%20text' // Replace with your email address
                  target='_blank'
                  rel='noopener'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
                    <AiOutlineMail className='text-red-500' />
                  </div>
                </a>
                 <Link href='https://www.facebook.com/profile.php?id=61567123534919'>
                <div className='rounded-full shadow-lg bg-white p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300'>
                  <FaFacebook className='text-blue-600' />
                </div>
              </Link>
              <Link href='https://www.instagram.com/nexussystem83?igsh=cGJ1OHJhcDljZGl0'>
                <div className='rounded-full shadow-lg bg-white p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300'>
                  <FaInstagram className='text-pink-600' />
                </div>
              </Link>
              </div>
      </div>
    </footer>
  );
};

export default Footer;
