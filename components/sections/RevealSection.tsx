"use client"
import React, { useEffect } from "react";
import { LampContainer } from "../ui/lamp";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "../ui/background-gradient";
import { MdArrowOutward } from "react-icons/md";
import { Badge } from "@/components/ui/badge"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TextGradient } from "../ui/text-gradient";
import { BentoGrid } from "../ui/bento-grid";



export default function RevealSection() {

    return(
<div>
<div className=" absolute z-50 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ">
    Featured Projects
</div>
  
  <div className="hidden md:grid">

  </div>
        <LampContainer >
        <motion.div
          initial={{ opacity: 0.5, y: 200 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className=" hidden md:grid flex flex-row items-center justify-center space-y- md:space-y-0 md:space-x-8"
          >
          {/* <div className="mr-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Featured <br /> Project
            </div>
   */}
   <BentoGrid  className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto ",
      )}>

          <ApolloProjectCard />
          <HomeProjectCard />
   </BentoGrid>

        </motion.div>
      </LampContainer>
          </div>

        
    )

}



export function ApolloProjectCard() {

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
        {/* <p className="
                pt-3 text-center text-md leading-normal text-zinc-700">

            Featured Project
          </p> */}

      </div>
    );
  }

 export function HomeProjectCard() {

   
    return (
      <div>
  
          <div className="rounded-[22px] border-neutral-900 border max-w-lg px-10 py-5 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm">
   
              
            <p className="font-semibold max-w-5xl mx-auto text-left tracking-tight from-slate-300 to-slate-500 text-xl  md:text-2xl md:leading-snug">
           No Place Like Home Model
            </p>
             <div className="my-5">
              {/* <TextGradient className=""/> */}

              <BackgroundGradient className="flex items-center  h-full">

              <BouncingHeels/>
              <div className="ml-5 sm:text-lg md:text-xl lg:text-xl font-bold text-center">
                Click your heels 3x
              </div>

              </BackgroundGradient>
      
              </div>     
     
            <p className="text-sm text-neutral-600 dark:text-neutral-400">

            There is no place like home... kinda. Enter your location, and the model will use US gov data to find places across the country with similar demographics and urban characteristics, helping you discover areas that share key traits with your hometown
            </p>
                        <div>
  
              <Badge variant="outline" className="mt-4">AI/ML</Badge>
              <Badge variant="outline" className="mt-4">Next.js</Badge>
              <Badge variant="outline" className="mt-4">Full Stack</Badge>
              <Badge variant="outline" className="mt-4">Serverless</Badge>
              <Badge variant="outline" className="mt-4">Databases</Badge>
  
  
            </div>
            
            <a>
  
            <button disabled className=" mt-8 mb-4 rounded-xl py-2 px-4 text-zinc-500 flex items-center space-x-20 bg-zinc-700 text-[0.6rem]  text-sm font-bold dark:bg-zinc-800">
            Coming Soon
             
                <MdArrowOutward className="ml-2"  size={18} />
        
            </button>
            </a>
          </div>
          {/* <p className="
                  pt-3 text-center text-md leading-normal text-zinc-700">
  
              Featured Project
            </p> */}
  
        </div>
      );
    }
    const BouncingHeels = () => {
      const rightTransition = {
        type: "spring",
        stiffness: 400,
        damping: 50,
        repeat: 5, // Repeat 3 times
        repeatType: "reverse" as const, // Move back and forth
        delay: 4, // Delay before starting
      }
      const leftTransition = {
        type: "spring",
        stiffness: 400,
        damping: 50,
        repeat: 5, // Repeat 3 times
        repeatType: "reverse" as const, // Move back and forth
        delay: 4, // Delay before starting
      }

      // const [scopeLeft, animate] = useAnimate();
      // const isInView = useInView(scopeLeft);
      
      // useEffect(() => {
      //   if (isInView) {
      //     animate(
      //       "span",
      //       {
      //         display: "inline-block",
      //         opacity: 1,
      //         width: "fit-content",
      //       },
      //       {
      //         duration: 0.3,
      //         delay: stagger(0.1),
      //         ease: "easeInOut",
      //       }
      //     );
      //   }
      // }, [isInView]);
      return (
        <div className="ml-3 my-2" style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
          {/* Left heel without motion */}
          <motion.span
            transition={leftTransition}
            animate={{ x: ['0%', '20%'],  }} // Moves left by 50% of its width
          >
            👠
          </motion.span>    
          {/* Right heel with spring motion */}
          <motion.span
            transition={rightTransition}
            animate={{ x: ['0%', '-60%'],  }} // Moves left by 50% of its width
          >
            👠
          </motion.span>
        </div>
      );
    };
    
    
