"use client";
import React from "react";

export default function Content() {
  return (
    <div className="bg-[#afa18f] pt-22 pb-12 pl-[10%] h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex items-end">
      <h1 className="text-[8vw] leading-[0.8] mt-10 uppercase">
        Portfolio <span className="text-[#ec4e39]">JM.</span>
      </h1>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  const styleHoverFooter = `
  relative 
  cursor-pointer 
  after:content-[''] 
  after:block 
  after:absolute 
  after:left-0 
  after:bottom-0 
  after:h-[2px] 
  after:w-full 
  after:origin-left 
  after:scale-x-0 
  after:bg-[#ec4e39] 
  after:transition-transform 
  after:duration-300 
  after:ease-out 
  hover:after:scale-x-100
`;

  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ec4e39]">About</h3>
        <a className={styleHoverFooter}>Home</a>
        <a className={styleHoverFooter}>Tech Stack</a>
        <a className={styleHoverFooter}>Projects</a>
        <a className={styleHoverFooter}>Contact Us</a>
      </div>
    </div>
  );
};
