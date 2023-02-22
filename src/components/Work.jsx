import React from "react";
import cashflow from "../assets/projects/cashflow.jpg";
import color from "../assets/projects/color.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import weather from "../assets/projects/weather.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#EBE9E9] bg-[#7b904b]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#EBE9E9] border-black">
            Work
          </p>
          <p className="py-4 text-2xl sm:text-2xl font-bold text-[#495b67]">
            Check out some of my work
          </p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* grid item: color */}
          <div
            style={{ backgroundImage: `url(${color})` }}
            className="shadow-lg shadow-[#5f6f3a] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://jacee94.github.io/image-color-picker/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mckayfackrell/image-color-picker/tree/main">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item: cashflow */}
          <div
            style={{ backgroundImage: `url(${cashflow})` }}
            className="shadow-lg shadow-[#5f6f3a] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://cashflow.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mckayfackrell/CashFlow">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item: weather */}
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className="shadow-lg shadow-[#5f6f3a] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mckayfackrell.github.io/module-06-Weather-Dashboard/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mckayfackrell/module-06-Weather-Dashboard">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item: portfolio */}
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#5f6f3a] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mckayfackrell/mckay-portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
