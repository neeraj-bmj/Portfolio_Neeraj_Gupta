import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "Tailwind", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "React", level: 85 },
    { name: "Node", level: 80 },
    { name: "MongoDB", level: 90 },
    { name: "Express", level: 85 },
  ];

  return (
    <section id="skills" className="bg-green-900 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* heading */}
        <h2 className="text-white poppins-bold font-semibold text-2xl sm:text-3xl lg:text-4xl">
          <span>Why Work </span>
          <span className="text-amber-500">With Me</span>
        </h2>

        <p className="poppins-medium text-white text-sm sm:text-base mt-3">
          I work daily with modern web technologies: HTML, CSS, JavaScript,
          Tailwind, React, Node, MongoDB, Express and more.
        </p>

        <h3 className="poppins-bold text-amber-500 font-semibold text-xl sm:text-2xl mt-8">
          My Skills
        </h3>

        <div className="poppins-medium mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
          {skills.map((skill, i) => (
            <div key={i} className="text-white">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm sm:text-base">
                  {skill.name}
                </span>
                <span className="text-xs sm:text-sm">{skill.level}%</span>
              </div>

              <div
                className="w-full bg-gray-300 rounded-full h-2.5"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} skill level`}
              >
                <div
                  className="bg-amber-400 h-2.5 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
