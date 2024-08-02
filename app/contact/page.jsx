"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "@/components/GlassmorphicBackground.module.css";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 78489 96748",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "amitkb.1323@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Q/R - B/661 Nalconagar Angul-759145, Odisha, India",
  }
];

const Contactpage = () => {
  const [state, handleSubmit] = useForm("xanwopwv");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            {state.succeeded ? (
              <p className="text-white text-2xl">Thanks for your message!</p>
            ) : (
              <form onSubmit={handleSubmit} className={`flex flex-col gap-6 p-10 ${styles.glassmorphic} rounded-xl`}>
                <h3 className="text-4xl text-accent">Let's Work Together</h3>
                <p className="text-white/60">Get in touch with me</p>
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="bg-[#27272c] text-white"
                    required
                  />
                  <Input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="bg-[#27272c] text-white"
                    required
                  />
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="bg-[#27272c] text-white"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                  <Input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="bg-[#27272c] text-white"
                  />
                </div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here."
                  className="h-[200px] bg-[#27272c] text-white"
                  required
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <Button type="submit" disabled={state.submitting} size="md" className="max-w-40">
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contactpage;
