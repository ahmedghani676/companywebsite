import React, { useEffect } from 'react'
import Image from 'next/image';

interface ServicesItem {
  name: string;
  link: string;
}

interface ServicesProps {
  servicesList: ServicesItem[];
}

const Services: React.FC<ServicesProps> = ({ servicesList }) => {
   
  return (
  <div
  className='bg-cover bg-center bg-black'
  // Update the path to your image
>
  <div id='services' className='w-full min-h-screen p-8 bg-opacity-60'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <h1 className='text-3xl lg:text-4xl tracking-widest uppercase text-[#5651e5] mb-8'>
        Services
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {servicesList.map((item, index) => (
          <div
            key={index}
            className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white flex flex-col items-center'
          >
            <div className='flex items-center justify-center mb-4 w-full h-32'>
              <Image
                src={item.link}
                width={150} // Set fixed width for consistency
                height={150} // Set fixed height for consistency
                alt={item.name}
                className='object-contain h-full' // Ensures the image fits the height and maintains aspect ratio
              />
            </div>
            <h3 className='text-lg font-semibold text-center'>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default Services