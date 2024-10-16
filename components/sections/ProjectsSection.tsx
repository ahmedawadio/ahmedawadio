"use client";
import React, { useEffect } from "react";
import { LampContainer } from "../ui/lamp";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "../ui/background-gradient";
import { MdArrowOutward } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";

import { Badge } from "@/components/ui/badge";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TextGradient } from "../ui/text-gradient";
import { BentoGrid } from "../ui/bento-grid";
import { PiHighHeelDuotone } from "react-icons/pi";
import { PiHighHeelBold } from "react-icons/pi";
import { CgHome } from "react-icons/cg";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <div id="projects" className="">
      <div className=" h-5 x-5 my-5" />

      <div
        id="<=md"
        className="flex flex-col items-center justify-center gap-8 mx-auto max-w-7xl lg:hidden"
      >
        {/* Show only on medium screens and below */}
        <div className="bg-gradient-to-br mb-4 from-slate-300 to-slate-500 bg-clip-text text-center text-6xl font-medium tracking-tight text-transparent md:text-7xl px-8 md:px-2">
          Featured Projects
        </div>



        {/* The project cards */}
        <div className="flex flex-col gap-4 w-full items-center">
          <HomeProjectCard />
          <ApolloProjectCard />
        </div>
      </div>

      {/* <div className=" absolute z-50 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ">
    Above Projects
</div> */}

      <div key=">md" className="hidden lg:block ">
        <h2 className="absolute whitespace-nowrap z-50 py-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl">
          Featured Projects
        </h2>

        <div className="hidden md:grid"></div>
        <LampContainer className="mt-2">
          <motion.div
            initial={{ opacity: 0.5, y: 200 }}
            whileInView={{ opacity: 1, y: -20 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="  md:grid flex-row items-center justify-center space-y- md:space-y-0 md:space-x-8"
          >
            {/* <div className="mr-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Featured <br /> Project
            </div>
            */}
            <BentoGrid
              className={cn(
                "grid auto-rows-[18rem] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto"
              )}
            >
              <HomeProjectCard />
              <ApolloProjectCard />
            </BentoGrid>
          </motion.div>
        </LampContainer>
      </div>
    </div>
  );
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
            {/* <Avatar className="w-14 h-14 m-1  ">
          <AvatarImage src="/Profile_Image.png" alt="Profile Image" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
         */}

            <div className="w-14 h-14 m-1 flex justify-center items-center">
              <FaUserAlt className="w-8 h-8 text-black opacity-70 bg-[rgba(255, 255, 255, 0.2)] backdrop-blur-md  " />
            </div>
            {/* Typewriter text */}

            <TypewriterEffectSmooth
              className="items-center flex justify-center"
              words={words}
            />
          </BackgroundGradient>
        </div>

        <p className="text-sm text-neutral-400">
          Developed a full-stack chatbot application for a clinic, enabling
          users to schedule appointments, check prescriptions, manage
          post-surgery care, and handle payments. The system leverages LLMs to
          provide personalized and efficient patient support
        </p>
        <div>
          <Badge variant="outline" className="mt-4">
            Full Stack
          </Badge>
          <Badge variant="outline" className="mt-4">
            LLMs
          </Badge>
          <Badge variant="outline" className="mt-4">
            Edge Functions
          </Badge>
          <Badge variant="outline" className="mt-4">
            Next.js
          </Badge>
          <Badge variant="outline" className="mt-4">
            React
          </Badge>
        </div>

        <div className="flex  space-x-4 my-2">
          <a
            href="https://apollo.ahmedawad.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" mt-8 mb-4 rounded-xl py-2 px-4 text-white flex items-center space-x-20 text-[0.6rem]  text-sm font-bold bg-zinc-800">
              View Site
              <MdArrowOutward className="ml-2" size={18} />
            </button>
          </a>
          <a
            href="https://github.com/ahmedawadio/chat-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" mt-8 mb-4 rounded-xl py-2 px-4 text-white flex items-center space-x-20 bg-zinc-900 text-[0.6rem]  text-sm font-bold ">
              Github
              <IoLogoGithub className="ml-2" size={18} />
            </button>
          </a>
        </div>
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
          Nest ML
        </p>
        <div className="my-5">
          {/* <TextGradient className=""/> */}

          <BackgroundGradient className="flex items-center  ">
            {/* <BouncingHeels/> */}

            <div className="w-14 h-14 m-1 flex justify-center items-center">
              <GoHomeFill className="w-10 h-10 text-black opacity-70 bg-[rgba(255, 255, 255, 0.2)] backdrop-blur-md rounded-full " />
            </div>

            <div className=" sm:text-lg md:text-xl lg:text-xl font-bold text-start">
              There&apos;s no place like home
            </div>
          </BackgroundGradient>
        </div>

        <p className="text-sm text-neutral-400">
          There is no place like home... kinda. Enter your location, and the
          model will use US gov data to find places across the country with
          similar demographics and urban characteristics, helping you discover
          areas that share key traits with your hometown
        </p>
        <div>
          <Badge variant="outline" className="mt-4">
            AI/ML
          </Badge>
          <Badge variant="outline" className="mt-4">
            Next.js
          </Badge>
          <Badge variant="outline" className="mt-4">
            Full Stack
          </Badge>
          <Badge variant="outline" className="mt-4">
            Serverless
          </Badge>
          <Badge variant="outline" className="mt-4">
            Databases
          </Badge>
        </div>
        <div className="flex  space-x-4 my-2">
          <a
            href="https://nest.ahmedawad.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" mt-8 mb-4 rounded-xl py-2 px-4 text-white flex items-center space-x-20 text-[0.6rem]  text-sm font-bold bg-zinc-800">
              View Site
              <MdArrowOutward className="ml-2" size={18} />
            </button>
          </a>
          <a
            href="https://github.com/ahmedawadio/no-place-like-home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" mt-8 mb-4 rounded-xl py-2 px-4 text-white flex items-center space-x-20 bg-zinc-900 text-[0.6rem]  text-sm font-bold ">
              Github
              <IoLogoGithub className="ml-2" size={18} />
            </button>
          </a>
        </div>
      </div>
      {/* <p className="
                  pt-3 text-center text-md leading-normal text-zinc-700">
  
              Featured Project
            </p> */}
    </div>
  );
}
//     const BouncingHeels = () => {
//       const rightTransition = {
//         type: "spring",
//         stiffness: 400,
//         damping: 50,
//         repeat: 5, // Repeat 3 times
//         repeatType: "reverse" as const, // Move back and forth
//         delay: 4, // Delay before starting
//       }
//       const leftTransition = {
//         type: "spring",
//         stiffness: 400,
//         damping: 50,
//         repeat: 5, // Repeat 3 times
//         repeatType: "reverse" as const, // Move back and forth
//         delay: 4, // Delay before starting
//       }

//       // const [scopeLeft, animate] = useAnimate();
//       // const isInView = useInView(scopeLeft);

//       // useEffect(() => {
//       //   if (isInView) {
//       //     animate(
//       //       "span",
//       //       {
//       //         display: "inline-block",
//       //         opacity: 1,
//       //         width: "fit-content",
//       //       },
//       //       {
//       //         duration: 0.3,
//       //         delay: stagger(0.1),
//       //         ease: "easeInOut",
//       //       }
//       //     );
//       //   }
//       // }, [isInView]);
//       return (
//         <div className="ml-3 my-2" style={{ display: 'flex', justifyContent: 'center', fontSize: '30px' }}>

//           {/* Left heel without motion */}
//           <motion.span
//             transition={leftTransition}
//             animate={{ x: ['0%', '20%'],  }} // Moves left by 50% of its width
//           >
//             👠
//           </motion.span>
//           {/* Right heel with spring motion */}
//           <motion.span
//             transition={rightTransition}
//             animate={{ x: ['0%', '-60%'],  }} // Moves left by 50% of its width
//           >
//             {/* 👠 */}

//             <PiHighHeelDuotone
//   size={30}
//   color="black"         // Outer color for the high heel
//   // secondaryColor="#00bfff"  // Cool inside color (light blue)
//   style={{ fill: "none" }}  // Ensures only the inside takes the secondary color
// />          </motion.span>
//         </div>
//       );
//     };
