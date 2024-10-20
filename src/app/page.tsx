"use client"
import Main from "../app/components/Main";
import { navItems } from "../app/data/NavigationList";
import '../app/globals.css';
import dynamic from 'next/dynamic';
import About from "../app/components/About";
import Contact from "../app/components/Contact";
import Skills from "../app/components/Skills";
import { imageList } from "../app/data/ImageList";
import { ServicesList } from "../app/data/ServicesList";
import Services from "../app/components/Services";
import Project from "../app/components/Project";
import Footer from "../app/components/Footer";
import Testimonial from "../app/components/Testimonial";
const FloatingNav = dynamic(() => import('../app/components/FloatingNavbar'), { ssr: false });

export default function Home() {
  return (
    
      
    <div>
        <FloatingNav navItems={navItems} />
      <Main/>
      <About /> 
      <Skills imageList={imageList } />
      <Services servicesList={ServicesList} />
      <Project />
      <Testimonial/>
      <Contact />
      <Footer/>
     </div>
      
     
      
  );
}
