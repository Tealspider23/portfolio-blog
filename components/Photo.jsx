"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Circle */}
      <motion.svg
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[500px]"
        fill="transparent"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="250"
          cy="250"
          r="195"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "15 120 25 25", rotate: 0 }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        // Add this line for hover animation
        className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] xl:w-[350px] xl:h-[350px] border-4 border-white rounded-full z-10"
      >
        <Image
          src="/pf_final.jpeg"
          priority
          quality={100}
          fill
          alt="Profile Photo"
          className="object-contain rounded-full mix-blend-darken"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
