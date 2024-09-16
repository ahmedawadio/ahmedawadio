"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import createGlobe from "cobe";
import { MdDevices } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { FiServer } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { EvervaultCard } from "../ui/evervault-card";

export default function ExperienceSection() {
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-8xl mx-auto">
      <div className="px-8">
      <div className="text-6xl  lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent">
      Experience
        </div>
        <p className="text-lg  max-w-2xl  my-2 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From software development, to machine learning and data science modeling
        </p>
    <BentoGrid className="mb-20 mt-10 max-w-8xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
        key={i}
        title={item.title}
        description={item.description}
        header={item.header}
        className={cn("[&>p:text-xl]", item.className)}
        // icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>

      </div>
  );
}
 
const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return(

    <EvervaultCard text="hover" />

  )
 
  // return (
  //   <motion.div
  //     initial="initial"
  //     whileHover="animate"
  //     className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  //   >
  //     <motion.div
  //       variants={variants}
  //       className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
  //     >
  //       <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
  //       <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
  //     </motion.div>
  //     <motion.div
  //       variants={variantsSecond}
  //       className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
  //     >
  //       <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
  //       <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
  //     </motion.div>
  //     <motion.div
  //       variants={variants}
  //       className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
  //     >
  //       <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
  //       <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
  //     </motion.div>
  //   </motion.div>
  // );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-950 w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
      {/* <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
         */}
        <MdDevices size={60} />

        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
           Mobile/Web App
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          React Native
        </p>
      </motion.div>
      <motion.div variants={first} className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        {/* <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        /> */}
        <FiCheckCircle size={50} />

        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Recommendation Model
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Machine Learning
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
    <FiServer size={50} />

        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Backend
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Azure/GCP
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
<LuLayoutDashboard size={50} />

        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Dashboard Analytics
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-orange-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Analytics
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
 
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex overflow-hidden flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >

      <Globe className=" -right-5 md:-right-10 -bottom-90 md:-bottom-82" />
       
    </motion.div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let glowColor = useRef<[number, number, number]>([0.5, 0.5, 0.5]).current; // UseRef for glow color as a tuple
  let rotationSpeed = useRef(0.006).current; // UseRef to persist speed without triggering re-render
  // let mapBrightness = useRef(2).current; // UseRef for map brightness
  let theta = useRef(0).current; // Persist theta to keep it consistent

  useEffect(() => {
    let phi = 1;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
      width: 300 * 2,
      height: 300 * 2,
      phi: 0,
      theta: theta,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: glowColor,
      markers: [
        { location: [40.7128, -74.006], size: 0.15 }, // New York City, USA
        { location: [34.0522, -118.2437], size: 0.12 }, // Los Angeles, USA
        { location: [41.8781, -87.6298], size: 0.1 }, // Chicago, USA
        { location: [29.7604, -95.3698], size: 0.09 }, // Houston, USA
        { location: [33.4484, -112.074], size: 0.08 }, // Phoenix, USA
        { location: [51.5074, -0.1278], size: 0.12 }, // London, UK
        { location: [48.8566, 2.3522], size: 0.11 }, // Paris, France
        { location: [52.52, 13.405], size: 0.1 }, // Berlin, Germany
        { location: [35.6895, 139.6917], size: 0.15 }, // Tokyo, Japan
        { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco, USA
        { location: [55.7558, 37.6173], size: 0.12 }, // Moscow, Russia
        { location: [39.9042, 116.4074], size: 0.15 }, // Beijing, China
        { location: [23.1291, 113.2644], size: 0.14 }, // Guangzhou, China
        { location: [31.2304, 121.4737], size: 0.15 }, // Shanghai, China
        { location: [28.6139, 77.209], size: 0.14 }, // Delhi, India
        { location: [19.076, 72.8777], size: 0.14 }, // Mumbai, India
        { location: [13.7563, 100.5018], size: 0.12 }, // Bangkok, Thailand
        { location: [35.6762, 139.6503], size: 0.15 }, // Tokyo, Japan
        { location: [19.4326, -99.1332], size: 0.14 }, // Mexico City, Mexico
        { location: [55.8642, -4.2518], size: 0.08 }, // Glasgow, UK
        { location: [-33.8688, 151.2093], size: 0.12 }, // Sydney, Australia
        { location: [43.65107, -79.347015], size: 0.12 }, // Toronto, Canada
        { location: [-23.5505, -46.6333], size: 0.14 }, // São Paulo, Brazil
        { location: [-34.6037, -58.3816], size: 0.12 }, // Buenos Aires, Argentina
        { location: [39.9042, 116.4074], size: 0.15 }, // Beijing, China
        { location: [22.3964, 114.1095], size: 0.12 }, // Hong Kong
        { location: [-26.2041, 28.0473], size: 0.11 }, // Johannesburg, South Africa
        { location: [-33.9249, 18.4241], size: 0.1 }, // Cape Town, South Africa
        { location: [41.3851, 2.1734], size: 0.1 }, // Barcelona, Spain
        { location: [40.4168, -3.7038], size: 0.1 }, // Madrid, Spain
        { location: [35.6762, 139.6503], size: 0.15 }, // Tokyo, Japan
        { location: [25.276987, 55.296249], size: 0.1 }, // Dubai, UAE
        { location: [33.6844, 73.0479], size: 0.1 }, // Islamabad, Pakistan
        { location: [41.9028, 12.4964], size: 0.1 }, // Rome, Italy
        { location: [45.4642, 9.19], size: 0.1 }, // Milan, Italy
        { location: [37.5665, 126.978], size: 0.13 }, // Seoul, South Korea
        { location: [22.3964, 114.1095], size: 0.13 }, // Hong Kong, China
        { location: [21.0285, 105.8542], size: 0.12 }, // Hanoi, Vietnam
        { location: [13.7563, 100.5018], size: 0.12 }, // Bangkok, Thailand
        { location: [3.139, 101.6869], size: 0.12 }, // Kuala Lumpur, Malaysia
        { location: [-6.2088, 106.8456], size: 0.14 }, // Jakarta, Indonesia
        { location: [28.6139, 77.209], size: 0.15 }, // Delhi, India
        { location: [51.1657, 10.4515], size: 0.1 }, // Berlin, Germany
        { location: [45.5017, -73.5673], size: 0.1 }, // Montreal, Canada
        { location: [39.9042, 116.4074], size: 0.15 }, // Beijing, China
        { location: [55.7558, 37.6173], size: 0.14 }, // Moscow, Russia
        { location: [23.8103, 90.4125], size: 0.14 }, // Dhaka, Bangladesh
        { location: [4.710989, -74.072092], size: 0.12 }, // Bogotá, Colombia
        { location: [40.9115, -73.7824], size: 0.06 }, // New Rochelle, New York, USA
        { location: [-15.826691, -47.921822], size: 0.08 }, // Brasília, Brazil
        { location: [14.5995, 120.9842], size: 0.13 }, // Manila, Philippines
        { location: [1.3521, 103.8198], size: 0.13 }, // Singapore
        { location: [31.7683, 35.2137], size: 0.08 }, // Jerusalem, Israel
        { location: [39.1653, -86.5264], size: 0.05 }, // Bloomington, Indiana, USA
        { location: [30.7865, 31.0004], size: 0.07 }, // Tanta, Egypt
        { location: [35.6762, 139.6503], size: 0.15 }, // Tokyo, Japan
        { location: [13.7563, 100.5018], size: 0.12 }, // Bangkok, Thailand
        { location: [19.076, 72.8777], size: 0.14 }, // Mumbai, India
        { location: [-33.4489, -70.6693], size: 0.1 }, // Santiago, Chile
        { location: [-12.0464, -77.0428], size: 0.1 }, // Lima, Peru
        { location: [30.0444, 31.2357], size: 0.15 }, // Cairo, Egypt
        { location: [39.9334, 32.8597], size: 0.1 }, // Ankara, Turkey
        { location: [41.0082, 28.9784], size: 0.13 }, // Istanbul, Turkey
        { location: [40.73061, -73.935242], size: 0.15 }, // New York City, USA
        { location: [34.052235, -118.243683], size: 0.12 }, // Los Angeles, USA
        { location: [51.509865, -0.118092], size: 0.13 }, // London, UK
        { location: [48.856613, 2.352222], size: 0.12 }, // Paris, France
        { location: [55.755825, 37.617298], size: 0.13 }, // Moscow, Russia
        { location: [35.676192, 139.650311], size: 0.15 }, // Tokyo, Japan
        { location: [19.432608, -99.133209], size: 0.14 }, // Mexico City, Mexico
        { location: [-34.603722, -58.381592], size: 0.12 }, // Buenos Aires, Argentina
        { location: [28.70406, 77.102493], size: 0.14 }, // Delhi, India
        { location: [-33.86882, 151.20929], size: 0.12 }, // Sydney, Australia
        { location: [37.774929, -122.419418], size: 0.1 }, // San Francisco, USA
        { location: [35.689487, 139.691711], size: 0.15 }, // Tokyo, Japan
        { location: [1.352083, 103.819836], size: 0.13 }, // Singapore
        { location: [-22.906847, -43.172897], size: 0.13 }, // Rio de Janeiro, Brazil
        { location: [-23.55052, -46.633308], size: 0.14 }, // São Paulo, Brazil
        { location: [34.693738, 135.502165], size: 0.13 }, // Osaka, Japan
        { location: [35.86166, 104.195397], size: 0.15 }, // China (multiple cities)
        { location: [39.904202, 116.407394], size: 0.15 }, // Beijing, China
        { location: [41.878113, -87.629799], size: 0.13 }, // Chicago, USA
        { location: [25.276987, 55.296249], size: 0.1 }, // Dubai, UAE
        { location: [33.684422, 73.047882], size: 0.1 }, // Islamabad, Pakistan
        { location: [51.165691, 10.451526], size: 0.1 }, // Berlin, Germany
        { location: [52.367573, 4.904139], size: 0.1 }, // Amsterdam, Netherlands
      ],

      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += rotationSpeed;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [glowColor,rotationSpeed]);

  return (
    <canvas
      ref={canvasRef}
      onMouseEnter={() => {
        rotationSpeed = 0.03; // Update rotation speed on hover
        // mapBrightness = 2; // Update map brightness on hover
        theta = theta; // Keep theta the same on hover
        glowColor =[0.1, 0.8, 1]; // Change glow color on hover

        // setRotationSpeed(0.03); // Increase rotation speed on hover
        // setMapBrightness(8); // Increase map brightness on hover
        // setGlowColor([0.1, 0.8, 1]); // Change glow color on hover
      }}
      onMouseLeave={() => {
        rotationSpeed = 0.006; // Update rotation speed on hover
        // mapBrightness = 2; // Update map brightness on hover
        theta = theta; // Keep theta the same on hover
        glowColor =[0.5, 0.5, 0.5]; // Change glow color on hover
        // setRotationSpeed(0.005); // Reset rotation speed after hover
        // setMapBrightness(2); // Reset map brightness after hover
        // setGlowColor([0.5, 0.5, 0.5]); // Reset glow color after hover
      }}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};


const items = [
  {
    title: "GymSpott Co-Founder",
    description: (
      <span className="text-sm">
       Built a fitness social network app using React/React Native, Figma, Azure, GCP, SQL, and Python
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Predicting Porpulation at MetroStar",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-s",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "AI Drone Work at Dep of Defense NSIN",
  //   description: (
  //     <span className="text-sm">
  //       Get AI-powered suggestions based on your writing context.
  //     </span>
  //   ),
  //   header: <SkeletonThree />,
  //   className: "md:col-span-1",
  //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  // },
 
 
  {
    title: "COVID Simulation at Centivax",
    description: (
      <span className="text-sm">
        Built a COVID-19 simulation model to predict the spread of the virus
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Drone Work at Dep of Defense NSIN",
    description: (
      <span className="text-sm">
        Developed AI model to analyze and interpred LiDAR data for drone assisted warfighter terrain navigation
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];

