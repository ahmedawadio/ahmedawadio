import React from "react"
import { FlipWords } from "../ui/flip-words"
import { Spotlight } from "../ui/spotlight"
import { BackgroundGradient } from "../ui/background-gradient";


export default function first() {

  const words = ["full stack apps","marketplaces", "ML models", "startups", "llm apps","mobile apps","social networks", "recommendation systems"];


    return( 
      <div className="overflow-visible w-full h-full  ">


        <Spotlight className=" pl-50 ml-10 overflow-visible"/>
      <div className="  w-screen 
      px-2 py-10 ">  

        <div className="
         bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text tracking-tight text-transparent md:text-7x
        
        ml-10 mt-20 text-7xl md:text-7xl sm:text-6xl xs:text-2xl  mx-auto font-normal text-left text-neutral-200">
        
          Build<FlipWords words={words} /> <br />
          with Ahmed Awad
        </div>

        </div>

          </div>
    )
}

