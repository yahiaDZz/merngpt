import React from "react";
import robothome from "../assets/robothome.png";
import gpt from "../assets/gpt.png";
import { TypeAnimation } from "react-type-animation";

const HomeHeader = () => {
  return (
    <div className="text-white font-display">
      <div className="px-16 mt-10">
        <div className="text-center text-6xl">
          <TypeAnimation
            sequence={[
              "Chat with your own AI",
              1000,
              "Built with OpenAI 🤖",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-center xxs:text-xl sm:text-xl lg:text-2xl"
            repeat={Infinity}
          />
        </div>
        <div className="flex justify-between px-36 items-center">
          <img
            src={robothome}
            className="xxs:hidden sm:hidden md:block lg:block w-80"
          />
          <img
            src={gpt}
            className="xxs:hidden sm:hidden md:block lg:block w-80 spin"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
