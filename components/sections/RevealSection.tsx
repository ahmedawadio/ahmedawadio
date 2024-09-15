"use client"
import React from "react";
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "../ui/background-gradient";
import { MdArrowOutward } from "react-icons/md";
import { Badge } from "@/components/ui/badge"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function RevealSection() {

    return(

        <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
        >
          <div className="mr-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Featured <br /> Project
          </div>
  
          <ProjectCard />
        </motion.div>
      </LampContainer>

        
    )

}



export function ProjectCard() {

  const words = [
    {
      text: "How",
    },
    {
      text: "much",
    },
    {
      text: "is",
    },
    {
      text: "my",
    },
    {
      text: "copay?",
      // className: "text-blue-500 dark:text-blue-500",
    },
  ];  
  return (
    <div>
        <div className="rounded-[22px] border-neutral-900 border max-w-lg px-10 py-5 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm">

          <p className="font-semibold max-w-5xl mx-auto text-left tracking-tight from-slate-300 to-slate-500 text-xl  md:text-2xl md:leading-snug">
         Apollo Clinic GPT
          </p>
           <div className="my-5">
           <BackgroundGradient className="flex items-center  h-full">
        
        {/* Avatar on the left */}
        <Avatar className="w-14 h-14 m-1 ">
          <AvatarImage src="/Profile_Image.png" alt="Profile Image" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        
        {/* Typewriter text */}
        <TypewriterEffectSmooth className="" words={words} />
    </BackgroundGradient>
            </div>     
   
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Developed a full-stack chatbot application for a clinic, enabling users to schedule appointments, check prescriptions, manage post-surgery care, and handle payments. The system leverages LLMs to provide personalized and efficient patient support          
          </p>
          <div>

            <Badge variant="outline" className="mt-4">Full Stack</Badge>
            <Badge variant="outline" className="mt-4">LLMs</Badge>
            <Badge variant="outline" className="mt-4">Edge Functions</Badge>
            <Badge variant="outline" className="mt-4">Next.js</Badge>
            <Badge variant="outline" className="mt-4">React</Badge>


          </div>
          
          <a href="https://chat-demo-ashy-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">

          <button className=" mt-8 mb-4 rounded-xl py-2 px-4 text-white flex items-center space-x-20 bg-zinc-700 text-[0.6rem]  text-sm font-bold dark:bg-zinc-800">
          View
           
              <MdArrowOutward className="ml-2"  size={18} />
      
          </button>
          </a>
        </div>
      </div>
    );
  }