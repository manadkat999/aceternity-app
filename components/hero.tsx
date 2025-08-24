"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import ComputersCanvas from "@/components/canvas/Computers";

export const Hero = () => {
  const ref = React.useRef(null);
  return (
    <section
      ref={ref}
      className="h-[100vh] overflow-hidden antialiased relative self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <div
          className={`w-full flex gap-5 z-10 items-center xl:items-center md:items-start max-w-7xl mx-auto`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#e60cc1]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div className="w-full mt-10 flex flex-col gap-2">
            <h1 className="text-7xl font-bold text-gray-500">
              Hi, We are <br />{" "}
              <span className="text-[#e60cc1]">One Step Stronger</span>
            </h1>

            <p className={`text-gray-500 mt-2 text-4xl font-bold`}>
              <span>Helping you feel</span>
              <TypeAnimation
                cursor={false} // omit the default css typing animation class, otherwise we won't be able to manipulate it manually
                className={"text-[#e60cc1] text-4xl font-bold"} // pass custom cursor className that will be manipulated (defaults below)
                sequence={[
                  " More Confident ",
                  500,
                  " Healthier ",
                  500,
                  " At Home in the gym ",
                  500,
                  " ",
                  100,
                ]}
                repeat={Infinity}
              />
            </p>
          </div>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
