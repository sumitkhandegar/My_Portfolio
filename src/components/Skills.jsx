import React from "react";
import { skills } from "../data/Skills";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center bg-gray-900 text-white py-10"
    >
      <div className="flex flex-col items-center w-full max-w-5xl gap-3 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-400 mt-5">
          Skills
        </h1>
        <h3 className="text-lg lg:text-xl max-w-2xl text-gray-300 mb-5 md:text-base text-center">
          Here are some of the skills in which I am proficient.
        </h3>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 mt-7 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-purple-600 shadow-lg rounded-lg p-4 md:p-6 w-full max-w-[90%] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(32%-1rem)] mb-4 ml-4 sm:ml-6 md:ml-0"
            >
              <h2 className="text-2xl font-semibold text-indigo-400 mb-2 text-center">
                {skill.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-2 text-center">
                {skill.skills.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center bg-gray-700 border border-gray-600 rounded-full 
                    px-3 py-2 text-gray-300 text-sm md:text-base"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6 mr-2"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
