import React, { useEffect } from 'react'
import Html from '../public/html.png';
import Image from 'next/image';

interface ImageItem {
  name: string;
  link: string;
}

interface ImageProps {
  imageList: ImageItem[];
}

const Skills: React.FC<ImageProps> = ({ imageList }) => {
    useEffect(() => {
        console.log(imageList);
     });
  return (
      <div id='skills' className='w-full bg-black lg:h-screen p-8 '>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h1 className='text-3xl mb-5 lg:text-4xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </h1>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
       {imageList.map((item,index) => (
           <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={item.link} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{item.name}</h3>
              </div>
            </div>
          </div>

       ))}           
                 
       </div> 
      </div>
    </div>
  )
}

export default Skills