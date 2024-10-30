import React from "react";

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div
      className="w-[300px] md:w-[330px] sm:mx-2 md:mx-0 h-[490px] bg-gray-800 cursor-pointer rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out overflow-hidden p-6 flex flex-col gap-4"
      onClick={() => setOpenModal({ state: true, project })}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[180px] object-cover bg-white rounded-lg shadow-lg"
      />
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium text-indigo-300 bg-indigo-700 px-2 py-1 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 px-1">
        <div className="text-lg font-semibold text-gray-300 line-clamp-2">
          {project.title}
        </div>
        <div className="text-xs text-gray-400">{project.date}</div>
        <p className="text-sm text-gray-400 mt-2 line-clamp-3">
          {project.description}
        </p>
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2 mt-4 bg-indigo-400 text-white text-sm font-semibold rounded-lg text-center"
      >
        View Code
      </a>
    </div>
  );
};

export default ProjectCard;
