import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import ProjectPopUp from './ProjectPopUp';

interface ProjectList{
    title: string,
    backgroundImg: string,
    tech: string,
    description: string;
    demoUrl: string;
    githubUrl: string;
}



const ProjectItem : React.FC<ProjectList> = ({title, backgroundImg, tech,description,demoUrl,githubUrl}) => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const handleOpenPopup = () => setIsPopupOpen(true);
   const handleClosePopup = () => setIsPopupOpen(false);
   
    const project = {
    title,
    backgroundImg,
    tech,
    description,
    demoUrl,
    githubUrl
  };
    return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' width={600} height={200}/> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <p className='relative text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer' onClick={handleOpenPopup}>More Info</p>
    </div>
 <ProjectPopUp isOpen={isPopupOpen} onClose={handleClosePopup} project={project}
 />
 </div>
  )
}

export default ProjectItem