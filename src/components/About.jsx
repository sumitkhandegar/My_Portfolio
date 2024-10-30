import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gray-900 text-white py-20 pt-28 w-full lg:px-20 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left lg:mr-8 md:mr-4">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Sumit Khandegar</h1>
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Web Developer & Competitive Programmer
          </h2>
          <h4 className="text-lg mb-6">
            I am a passionate web developer with experience in designing and
            building responsive, dynamic websites. I specialize in frontend
            design, backend development using Node.js, and creating seamless
            user experiences. Additionally, I am a competitive programmer
            skilled in C++, tackling complex challenges with efficient and
            optimized solutions.
          </h4>

          <div className="flex flex-shrink justify-center lg:justify-start">
            <NavLink to="https://github.com/sumitkhandegar">
              <button className="bg-indigo-500 text-white px-4 py-3 rounded-md hover:bg-indigo-600 transition mr-2">
                GitHub Profile
              </button>
            </NavLink>
            <NavLink to="https://drive.google.com/file/d/1zkaAMGimJFn1O9McyvGtTr5wwhQMM1Kg/view?usp=sharing">
              <button className="bg-indigo-500 text-white px-4 py-3 rounded-md hover:bg-indigo-600 transition">
                Download Resume
              </button>
            </NavLink>
          </div>
        </div>

        {/* Right Side: Image and Profiles */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex flex-col justify-center items-center lg:items-end">
          <div className="rounded-full overflow-hidden h-56 w-56 md:h-64 md:w-64 lg:h-96 lg:w-96 border-4 border-indigo-500">
            <img
              src="../../my_img.png"
              alt="Sumit Khandegar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
