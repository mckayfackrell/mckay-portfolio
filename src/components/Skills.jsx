import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Reacting from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#7b904b]">
      {/* Container */}
      <div>
        <div>
          <p>Experience</p>
          <p>These are the technologies I've worked with</p>
        </div>

        <div>
          <div>
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
