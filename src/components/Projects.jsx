import React from "react";
import ProjectCard from "./cards/ProjectCard";
import { projects } from "../data/Projects";

const Projects = () => {
  const [openModal, setOpenModal] = React.useState({
    state: false,
    project: null,
  });

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center gap-6 p-6 bg-gray-900"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-400 mt-5 md:text-3xl">
        Projects
      </h1>
      <h3 className="text-lg lg:text-xl max-w-2xl text-gray-300 mb-5 md:text-base text-center mx-2">
        A showcase of some projects I have contributed to and developed.
      </h3>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 mx-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setOpenModal={setOpenModal}
          />
        ))}

        {openModal.state && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="relative bg-gray-800 p-3 md:p-6 rounded-lg shadow-lg w-full max-w-[300px] md:max-w-2xl lg:max-w-3xl">
              <button
                className="absolute top-4 right-4 font-extrabold text-gray-400"
                onClick={() => setOpenModal({ state: false, project: null })}
              >
                ✕
              </button>
              <img
                src={openModal.project.image}
                alt={openModal.project.title}
                className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
