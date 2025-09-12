import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <article className="w-full bg-gray-400 rounded-2xl overflow-hidden shadow-sm hover:scale-102 transition-all duration-200">
      <div className="flex flex-col">
        {/* image */}
        <div className="w-full md:w-full px-5 pt-5 md:px-10 md:pt-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 md:h-full object-cover rounded-2xl"
          />
        </div>

        {/* content */}
        <div className="p-4 md:p-6 w-full  flex flex-col justify-between poppins-bold ">
          <div>
            {/* project title */}
            <h4 className="text-xl md:text-2xl font-bold text-gray-900">
              {project.title}
            </h4>
            {/* project summary */}
            <p className="text-sm md:text-base text-gray-700 mt-2">
              {project.summary}
            </p>

            {/* tech badges */}
            {project.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.isArray(project.tech) ? (
                  project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs md:text-sm px-2 py-1 bg-zinc-200 rounded-full text-gray-800"
                    >
                      {t}
                    </span>
                  ))
                ) : (
                  <span className="text-xs md:text-sm px-2 py-1 bg-zinc-200 rounded-full text-gray-800">
                    {project.tech}
                  </span>
                )}
              </div>
            )}

            {/* project impact */}
            {project.impact && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                {project.impact}
              </p>
            )}
          </div>

          {/* actions */}
          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row justify-between gap-3">
            <a
              href={project.live || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center px-4 py-2 text-sm md:text-base bg-green-800 text-white rounded-lg active:bg-green-500"
            >
              Live Demo
            </a>

            <a
              href={project.source || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center px-4 py-2 text-sm md:text-base bg-amber-500 active:bg-amber-600 text-white rounded-lg"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
