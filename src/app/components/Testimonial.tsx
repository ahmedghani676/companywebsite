import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import propertyImg from '../public/property.jpg';
import Slider from "react-slick";
import { reviewItems } from "../data/reviewList";
import { it } from 'node:test';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,  // Changed to 2 for better responsiveness
    slidesToScroll: 2,  // Changed to 2 for better responsiveness
    autoplay: true,  // Optional: Adds autoplay for a better user experience
    autoplaySpeed: 3000,  // Optional: Duration for each slide
    responsive: [
      {
        breakpoint: 768,  // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div id='testimonial' className='bg-slate-50 w-full  p-8 mx-auto py-16 px-4'>
      <h2 className='text-3xl font-bold text-center mb-8 text-[#333]'>What Our Clients Say</h2>
      <Slider {...settings} className="overflow-hidden">
        {reviewItems.map((item, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg p-6 mx-4'>
            <div className='flex justify-center items-center mb-4'>
              <Image src={item.link} width={100} height={100} alt={item.name} className='rounded-full border-4 border-indigo-500' />
            </div>
            <div className='text-center'>
              <p className='text-lg font-semibold mb-2'>{item.name}</p>
              <p className='text-gray-600'>{item.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default Testimonial