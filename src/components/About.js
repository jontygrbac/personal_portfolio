
import React from "react";
import Github from "../github-mark-white.svg"
import Linkedin from "../LI-In-Bug.png"
import Download from "../download.svg"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hey, I'm Jonty.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          Motivated student completing Bachelor of Software Engineering degree at RMIT University. 
          Experienced in Agile and Scrum environments. Supports project coordination, design and programming needs. School projects included building apps, optimizing programs and validating code.
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/jontygrbac" target="_blank"
              className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              Github&nbsp;&nbsp;
              <img src={Github} className="object-scale-down h-8 pb-1" alt="Github Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonty-grbac-8b92861a1/" target="_blank"
              className="ml-4 text-white inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Linkedin&nbsp;&nbsp;
              <img src={Linkedin} className="object-scale-down h-8 pb-1" alt="Linkedin Logo" />
            </a>
            <a href="Jonathan Grbac Resume.pdf" 
            className="ml-4 text-white inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" download="Jonathan Grbac Resume.pdf">
                Resume&nbsp;&nbsp;
                <img src={Download} className="object-scale-down h-8 pb-1" alt="Download Symbol" />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded App-logo"
            alt="hero"
            src="logo512.png"
          />
        </div>
      </div>
    </section>
  );
}