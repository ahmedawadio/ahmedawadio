
import React from 'react'
import { TextHoverEffect } from '../ui/text-hover-effect'
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

export default function FooterSection() {
    return (
        <footer className='py-10'>
          
          <svg width="0" height="0" >
        <defs>
          <linearGradient id="icon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#171717" offset="20%" />
            <stop stopColor="#525252" offset="80%" />
          </linearGradient>
        </defs>
      </svg>
      {/* Top row: Text hover effect */}
      
      <div className="w-[80%] mx-auto border-t my-10  border-neutral-900 "></div>

      <div className="h-[5rem] ">
        <TextHoverEffect text="👋 Thanks for stopping by " />
      <div className="flex justify-center items-center space-x-8  pb-20">
      <a href="https://github.com/ahmedawadio" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub  style={{ fill: "url(#icon-gradient)" }} className="text-4xl" />
              </a>
              <a href="https://www.linkedin.com/in/ahmedhawad/" target="_blank" rel="noopener noreferrer">
                <IoLogoLinkedin className="text-4xl  hover:fill-white" style={{ fill: "url(#icon-gradient)" }}/>
              </a>
              <a href="https://twitter.com/ahmedawadio" target="_blank" rel="noopener noreferrer">
              
                <BsTwitterX style={{ fill: "url(#icon-gradient)" }}
                 className="text-3xl"
                  />
              </a>
      </div>
      </div>
      {/* Bottom row: Icons */}
    </footer>
    )
}
