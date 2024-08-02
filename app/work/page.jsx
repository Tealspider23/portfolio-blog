'use client'

import {motion} from "framer-motion";
import React , { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight , BsGithub } from "react-icons/bs";

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";
import WorkSliderbtns from "@/components/WorkSliderbtns";

const projects =[
  {
    num:'01',
    category:'frontend',
    title:'project 1',
    description:'Lemillion Note Manager . This is a note taking app',
    stack:[
      {name:'NextJs'},{name:'Tailwind CSS'},{name:'Shadcn/ui'}
    ],
    image:'/thumb1.png',
    live:'https://lemillion-notemanager-fp836ru75-tealspider23s-projects.vercel.app/',
    github:"https://github.com/Tealspider23/Lemillion-notemanager",
  },
  {
    num:'02',
    category:'Full Stack',
    title:'project 2',
    description:'Convoz. This is a video conferencing app built upon Stream services.',
    stack:[
      {name:'NextJs'},{name:'Stream'},{name:'TailwindCSS'}
    ],
    image:'/thumb2.png',
    live:'https://convoz-video-conference-m5d5.vercel.app/sign-in?redirect_url=https%3A%2F%2Fconvoz-video-conference-m5d5.vercel.app%2F',
    github:"https://github.com/Tealspider23/Convoz_Video_Conference",
  },
  {
    num:'03',
    category:'AI and Machine Learning',
    title:'project 3',
    description:'InsightMaster.This is an AI leveraged Streamlit App that provides insights from Classification Datasets .',
    stack:[
      {name:'Streamlit'},{name:'Gemini'},{name:'Python Libraries'}
    ],
    image:'/thumb3.png',
    live:'https://insightmasters.streamlit.app/',
    github:"https://github.com/tejas122125/intel",
  },
  {
    num:'04',
    category:'Machine Learning and Web Development',
    title:'project 3',
    description:'Simulation Rail-Safe Development Web App . This is currently under development',
    stack:[
      {name:'NextJs'},{name:'Firebase'},{name:'Maps'}
    ],
    image:'/thumb4.png',
    live:'',
    github:"https://github.com/Tealspider23/Realtime-RailSafety-Simulation-Alerts-Application/tree/main",
  },
]


const Workpage = () => {

  const  [project ,setProject] = useState(projects[0]);

  const handleSlideChange = (swiper)=>{
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1 ,transition:{ delay:2.4 , duration:0.4 ,ease:'easeIn'}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%] ">
            {/*outline num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/*project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">{project.category} project</h2>
           {/*project description */}
           <p className="text-white/60">{project.description}</p>
           {/*Stack */}
           <ul className="flex gap-4 ">
            {project.stack.map((item,index)=>{
              return <li key={index} className="text-xl text-accent">
                {item.name}
                {/*Remove the last comma */}
                {index !== project.stack.length -1 && ","}
              </li>
            })}
           </ul>
           <div className="border border-white/20"></div>
           {/*Buttons */}
           <div className="flex items-center gap-4 ">
            {/*Live Project Button*/}
            <Link href={project.live}> 
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                  <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p> Live project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>

            {/*Github Button */}
            <Link href={project.github}> 
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                  <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p> Github repository </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>


           </div>
          </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30}
            slidesPerView={1} 
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/*overlay */}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  {/*image */}
                  <div className="relative w-full h-full ">
                  <Image src= {project.image} fill className="object-cover rounded-2xl" alt="" />
                  </div>
                  </div>
                </SwiperSlide>
              })}
            
            <WorkSliderbtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
             btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Workpage;