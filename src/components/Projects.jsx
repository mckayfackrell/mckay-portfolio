import React from "react";
import cashflow from "../assets/projects/cashflow.jpg";
import color from "../assets/projects/color.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import weather from "../assets/projects/weather.jpg";
import password from "../assets/projects/password.jpg";
import quiz from "../assets/projects/quiz.jpg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-[#EBE9E9] bg-[#41565f]"
    >
      <br></br> {/* TODO: Fix the spacing so it isn't <br> */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 text-[#EBE9E9] border-black">
            Projects
          </p>
          <p className="py-4 text-xl md:text-4xl font-bold text-[#546f7a]">
            Check out some of my work
          </p>
        </div>

        {/* container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
          {/* grid item: color */}
          <div
            style={{
              backgroundImage: `url(${color})`,
              backgroundSize: `100% 100%`,
            }}
            className="shadow-lg shadow-[#35454d] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Color Palette Picker
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
            style={{
              backgroundImage: `url(${cashflow})`,
              backgroundSize: `100% 100%`,
            }}
            className="shadow-lg shadow-[#35454d] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                CashFlow
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
            style={{
              backgroundImage: `url(${weather})`,
              backgroundSize: `100% 100%`,
            }}
            className="shadow-lg shadow-[#35454d] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Application
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
            style={{
              backgroundImage: `url(${portfolio})`,
              backgroundSize: `100% 100%`,
            }}
            className="shadow-lg shadow-[#35454d] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="https://mckayfackrell.github.io/mckay-portfolio/">
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
          {/* grid item: password generator */}
          <div
            style={{
              backgroundImage: `url(${password})`,
              backgroundSize: `100% 100%`,
            }}
            className="shadow-lg shadow-[#35454d] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Password Generator
              </span>
              <div className="pt-8 text-center">
                <a href="https://mckayfackrell.github.io/module-03-Password-Generator/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mckayfackrell/module-03-Password-Generator/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${quiz})`,
              backgroundSize: `100% 100%`,
            }}
            className="shadow-lg shadow-[#35454d] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Code Quiz
              </span>
              <div className="pt-8 text-center">
                <a href="https://mckayfackrell.github.io/module-04-Code-Quiz/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mckayfackrell/module-04-Code-Quiz">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br> {/* TODO: Fix the spacing so it isn't <br> */}
    </div>
  );
};

export default Projects;
