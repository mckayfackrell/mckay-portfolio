import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#41565f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-black text-[#EBE9E9]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-xl md:text-4xl font-bold text-[#546f7a]">
            <p>I'm McKay, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="md:text-xl lg:text-2xl">
              I have experience in developing both front-end and back-end of
              websites using HTML, CSS, JavaScript, Bootstrap, React, Node.js,
              MERN, MySQL, and GraphQL. I enjoy learning new technologies and
              web development best practices. I am a collaborative team player
              with strong communication skills and attention to detail.
            </p>
            <p className="md:text-xl lg:text-2xl mt-8">
              Take a look at my certificate:
              <a
                href="https://www.credly.com/earner/earned/badge/ae1bd2b0-123b-4b8d-9b31-5c502fe74fbe"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="mt-4 hover:scale-110 transition-all duration-300"
                  src="https://user-images.githubusercontent.com/110206514/228938636-ce4e4055-8d64-4b19-a10a-7e29aa18e7fb.png"
                  alt="University of Utah Badge"
                  width="150"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
