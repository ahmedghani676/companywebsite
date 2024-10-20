import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import { frontendProjects, CMSProjects } from '../data/ProjectList';

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  
  // Use the correct category for the condition
  const projectsToDisplay = selectedCategory === 'frontend' ? frontendProjects : CMSProjects;

  return (
    <div id='projects' className='w-full py-20' style={{ minHeight: '60vh' }}>
      <div className='max-w-[1240px] mx-auto px-2 py-20'>
        <h1 className='text-3xl lg:text-4xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </h1>
        <h2 className='py-4'>What We Have Built</h2>
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('frontend')} // Use lowercase
            className={`px-4 py-2 ${selectedCategory === 'frontend' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Software Development
          </button>
          <button
            onClick={() => setSelectedCategory('cmsProjects')} // Use lowercase
            className={`px-4 py-2 ${selectedCategory === 'cmsProjects' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            CMS Development
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {projectsToDisplay.map((project, index) => (
            <ProjectItem
              key={index}
              description={project.description}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              title={project.title}
              backgroundImg={project.backgroundImg}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
