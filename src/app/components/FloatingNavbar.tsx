"use client";
import Image from 'next/image';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

interface NavItem {
  name: string;
  link: string;
}

interface FloatingNavProps {
  navItems: NavItem[];
}

const FloatingNav: React.FC<FloatingNavProps> = ({ navItems }) => {
  const [nav, setNav] = useState(false);
  
  const Handle = () => {
    setNav(!nav);  
    console.log(nav);
  };

  return (
   
     <div
    
      className={
         'fixed w-full h-30 shadow-xl z-[100] ease-in-out duration-300 bg-black'
        
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>         
            <Image
              src='/imge.jpg'
              alt='/'
              width={125}
              height={30}
              className='cursor-pointer background-hidden'
            />
        </Link>

        <div>
          <ul  className='hidden md:flex'>
           {navItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <ul className="text-blue-500 text-lg hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-bold ">
                  {item.name}
                </ul>
              </Link>
            ))}
           
          </ul>

          <div
           
            onClick={Handle}
            className='md:hidden '
          >
            <AiOutlineMenu color = "purple" size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : ' hidden md:hidden'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
              
                  <Image
                    src='/imge.jpg'
                    width='87'
                    height='35'
                    alt='/'
                  />
             
              </Link>
              <div
                onClick={Handle}
                className='rounded-full shadow-lg text-black shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              {navItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <li className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"  onClick={() => setNav(!nav)}>
                  {item.name}
                </li>
              </Link>
            ))}
           
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/nexus-system-461674320/'
                  target='_blank'
                  rel='noopener'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
              
                <Link href='https://mail.google.com/mail/?view=cm&fs=1&to=nexussystem83@gmail.com&su=Subject&body=Body%20text'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
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
          </div>
        </div>
      </div>
    </div>
        
    
  );
};

export default FloatingNav;

