"use client"
import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"
import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

//components
import VoxelDog from "@/components/VoxelDog"
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import LatestBlogs from "@/components/Latestblogs"
import Footer from "@/components/footer"
import styles from "@/components/GlassmorphicBackground.module.css" 



const GlassmorphicContainer = ({ children }) => (
  <div className="relative  bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-200 rounded-lg shadow-lg p-6">
    {children}
  </div>
);

const HomePage = () => {

  const aboutRef = useRef(null);
  const blogRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (       
    <>
    <section className="relative w-full h-screen">
      {/* Voxel Dog */}    
      <VoxelDog />
  
      {/* Content */}
      <motion.div initial={{opacity:0}}
       animate={{opacity:1 ,transition:{ delay:2.4 , duration:0.4 ,ease:"easeIn"}}}
      className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio </h1>
        <p className="text-xl mb-8">Hello! I"m Amit, a software developer.</p>
        <div className="flex gap-4"> {/* Flex container for buttons */}
    <Button
      href="#about"
      className={"flex-1 px-6 py-3 text-black font-semibold hover:bg-accent-hover"}
      onClick={(e) => {
        e.preventDefault();
        scrollToAbout();
      }}
    >
      Click to Know me
    </Button>
  </div>
  </motion.div>

      <div id="about" ref={aboutRef} className={`container mx-auto h-full`}>
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl  ">Software Developer</span>
           <h1 className="h1">
           Hello I'm <br />
            <span className="text-accent hover-target">Amit Kumar</span>
          </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
            I specialize in designing intuitive user interfaces and have a strong command of front-end frameworks and libraries.
            </p>
            {/*Btn and socials */}
            <div className=" flex flex-col  xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <Link  href={"/resume.pdf"}  target="_blank"  rel="noopener noreferrer" locale={false} download>Download CV</Link>
                <FiDownload className=" text-xl  "/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                items-center text-accent text-base hover:bg-accent
                hover:text-primary hover:transition-all duration-500" />
                </div>
            </div>
          </div>
           {/*photo*/}
          <div className=" order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>

        <div className="w-full mb-8 ">
        <Stats />
       </div>
       <Footer />
      </div>
      
      {/* <div className="w-full" id="latestblog" ref={blogRef}>
        <LatestBlogs />
      </div> */}
      
      

      </section>
    

  </>
  )
}

export default HomePage