"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function ExperienceSection() {
  const features = [
    {
      title: "GymSpott Co-Founder",
      description:
        "Built a fitness social network app using React/React Native, Azure, GCP, SQL, and Python. I implemented data-driven features to improve user retention and interaction, and developed a recommendation model that boosted friend requests by 100%.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Predicting Porpulation at MetroStar",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "AI Drone Work at Dep of Defense NSIN",
      description:
        "Developed AI model to analyze and interpred LiDAR data for drone assisted warfighter terrain navigation",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "COVID Simulation at Centivax",
      description:
        "Built a COVID-19 simulation model to predict the spread of the virus",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent">
          Work that I've done
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-2 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From software development, to machine learning and data science
          modeling
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" font-semibold max-w-5xl mx-auto text-left tracking-tight from-slate-300 to-slate-500 text-xl  md:text-2xl md:leading-snug">
      {/*  <div className="
        bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text tracking-tight text-transparent md:text-7x
        
        ml-20 mt-40 text-8xl mx-auto font-normal text-left text-neutral-200"> */}
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/linear.webp"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          {/* <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " /> */}
          <Image
            src="https://assets.aceternity.com/fireship.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 mt-10 flex flex-col items-center relative bg-transparent dark:bg-transparent">
      <Globe className="absolute -right-5 md:-right-10 -bottom-90 md:-bottom-82" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.5, 0.5, 0.5],
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
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
