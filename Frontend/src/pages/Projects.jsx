import React from "react";
import ProjectCard from "../components/ProjectCard";
import recipiesImage from "../assets/images/recipies.jpeg";
import cricketImage from "../assets/images/cricket.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Virat Elite Series",
      summary: "Full CRUD, charts, role-based auth",
      tech: ["React", "Tailwind", "Vite"],
      image: cricketImage,
      live: "#LIVEURL",
      source: "#GITHUB",
      impact: "Cut manual ops by 40%",
    },
    {
      title: "Recipes Info",
      summary: "Full CRUD, charts, role-based auth",
      tech: ["React", "Node", "MongoDB", "Tailwind"],
      image: recipiesImage,
      live: "#LIVEURL",
      source: "#GITHUB",
      impact: "Cut manual ops by 40%",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
        {/* upper Part */}
        <div className="flex flex-col gap-4 poppins-bold ">
          {/* logo */}
          <div className="logo flex items-center text-lg font-semibold pt-2">
            <span>
              <i className="fa-solid fa-arrow-right text-amber-500"></i>
            </span>
            <span className="heading px-3">Projects</span>
          </div>

          {/* headings */}
          <div className="headings flex flex-col md:flex-row md:items-center md:justify-between mt-4 md:mt-8 gap-6">
            {/* first part  */}
            <div className="headingFirst text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              <span>My Latest </span>
              <span className="text-amber-500 italic">Projects</span>
            </div>

            {/* second part */}
            <div className="group inline-flex items-center bg-amber-500 rounded-full p-1 self-start md:self-auto">
              <button
                type="button"
                className="px-4 py-2 text-sm sm:px-5 sm:py-3 bg-green-900 text-white rounded-full font-semibold hover:scale-105 transition-all duration-200"
              >
                View All Projects
              </button>
              <div className="arrows w-9 h-9 md:w-10 md:h-10 bg-white rounded-full flex justify-center items-center ml-2">
                <i className="fa-solid fa-arrow-down text-amber-500"></i>
              </div>
            </div>

          </div>

          {/* comming soon */}
          <div className="commingSoon text-2xl sm:text-xl">
            <span className="text-gray-800">Comming</span>
            <span className="text-amber-500">Soon</span>
          </div>
        </div>

        {/* all cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
