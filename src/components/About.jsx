import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#41565f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-black text-[#EBE9E9]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-[#546f7a]">
            <p>I'm McKay, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-xl">
              I'm skilled in both front-end and back-end development,
              specifically in HTML, CSS, JavaScript, Bootstrap, React, Node.js,
              MERN, MySQL, and GraphQL. I'm highly motivated, detail-oriented,
              and always learning new web development technologies and best
              practices. I'm a strong team player with excellent communication
              and collaboration skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
