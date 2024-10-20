import React,{useState} from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import propertyImg from '../public/property.jpg';

interface Project {
  title: string;
  backgroundImg: string;
  tech: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
}

interface PopupProps {
  isOpen: boolean;
    onClose: () => void;
    project : Project
}

const ProjectPopUp: React.FC<PopupProps> = ({ isOpen, onClose ,project}) => {
     if (!isOpen) return null;
  return (
   <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center" style={{ zIndex: 9999 }}>
      <div className="bg-white max-w-4xl w-full h-[80vh] rounded-lg relative flex flex-col md:flex-row">
        <button
          className="absolute top-2  text-gray-500 bg-white p-2 rounded-full hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold py-2">{project.title}</h2>
          <h3 className="text-xl mb-4">{project.tech}</h3>
          <p>
            {project.description}
          </p>
          <div className="mt-4 flex flex-col gap-2">
           
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Demo
              </button>
            </a>
             <a
              href='/#contact'
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Contact Us
              </button>
            </a>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-4">Back</p>
          </Link>
        </div>

        <div className="w-full md:w-1/2 relative h-[50%] md:h-full">
          <Image
            className="object-cover w-full h-full"
            layout="fill"
            src={project.backgroundImg}
            alt="Property Image"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectPopUp