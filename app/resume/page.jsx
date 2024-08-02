"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiStreamlit } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import styles from "@/components/GlassmorphicBackground.module.css";
import { cn } from "@/lib/utils";
//about data
const about = {
  title: "About me",
  description:
    "Welcome to the About me Section . You will find details of contact here . ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Amit Kumar",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "amitkb.1323@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Bhubaneswar",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Hindi,Odia",
    },
  ],
};

const education = {
  icon: "/assets/cap.svg",
  title: "My Education",
  description: "Here are my Educational Milestones`",
  items: [
    {
      institution: "IIIT Bhubaneswar",
      branch: "Computer Science Engineering UnderGraduate",
      duration: "Nov 2022 - Present",
      grade: { CG: "8.32" },
    },
    {
      institution: "Delhi Public School, Damanjodi",
      branch: "Student",
      duration: "March 2008 - March 2022",
      grade: { X: "97.2 %", XII: "95.8 %" },
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Here are some of my skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <TbBrandCpp />,
      name: "C++",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiStreamlit />,
      name: "Streamlit",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resumepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6  ">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/*Content */}
          <div className="min-h-[70vh] w-full">
            {/*about me */}
            <TabsContent value="skills" className={`w-full`}>
              <div className="flex flex-col  gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className={`w-full h-[150px] border border-[#232329] hover:border-accent rounded-xl flex justify-center items-center group ${styles.glassmorphic}`}
                            >
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className={`w-full text-center xl:text-left ${styles.glassmorphic}`}
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-accent text-semibold">:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className={`w-full`}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={`${styles.glassmorphic} h-[210px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1`}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.branch}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="text-white/60 ">
                              {item.grade.X ? `X - ${item.grade.X}` : " "}
                              {item.grade.XII
                                ? ` XII - ${item.grade.XII}`
                                : " "}
                              {item.grade.CG ? ` CG - ${item.grade.CG}` : " "}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resumepage;
