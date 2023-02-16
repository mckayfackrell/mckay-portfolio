import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#7b904b]">
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
          <div className="sm:text-right text-4xl font-bold text-[#495b67]">
            <p>Hi, I'm McKay, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I have a strong foundation in both front-end and back-end
              development, including HTML, CSS, JavaScript, Bootstrap, React,
              Node.js, MERN, MySQL, and GraphQL. I am highly motivated,
              detail-oriented, and continuously learning the latest web
              development technologies and best practices. I am a great team
              player with strong communication and collaboration skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
