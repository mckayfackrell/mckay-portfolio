import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#7b904b]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#EBE9E9] text-3xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-black">
          McKay Fackrell
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#495b67]">
          I'm a Full Stack Developer.
        </h2>
        <p className="py-4 max-w-[700px]">
          I'm a motivated and skilled junior full-stack developer. With
          experience in both front-end and back-end development, I'm ready to
          get out there and make a difference.
        </p>
        <div>
          <button className="text-black group bg-[#5f6f3a] border-none border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EBE9E9]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;