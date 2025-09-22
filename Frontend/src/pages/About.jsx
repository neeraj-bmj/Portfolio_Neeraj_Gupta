import React from "react";
import "../styles/Style.css";
import heroImage from "../assets/images/icon_portfolio.jpg";
// import neeraj_gupta_cv  from "../assets/resume/DummyResume1.pdf";

const About = () => {
  return (
    <section
      className="w-full bg-green-900 min-h-screen py-12 px-4 md:px-12"
      id="about"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* first Part */}
        <div className="firstPart w-full h-full flex items-center justify-center hover:scale-125 transition-all duration-600">
          {/* placeholder for image or illustration */}
          <div className="w-48 h-48 md:w-96 md:h-96 bg-white/20 rounded-full overflow-hidden relative">
            <img
              src={heroImage}
              className="w-full h-full object-cover  absolute inset-0 "
              alt="Neeraj Gupta"
            />
          </div>
        </div>

        {/* second part */}
        <div className="secondPart w-full h-full">
          {/* icon */}
          <div className="logo text-lg md:text-2xl font-semibold mt-2 flex items-center">
            <span>
              <i className="fa-solid fa-arrow-right text-amber-500"></i>
            </span>
            <span className="heading px-4 text-white">About Me</span>
          </div>

          {/* heading Question */}
          <div className="headingQuestion poppins-bold  text-2xl md:text-5xl tracking-tighter font-semibold mt-3 hover:scale-105 transition-all duration-200">
            <span className="text-white">Who is </span>
            <span className="text-amber-500 ">Neeraj Gupta?</span>
          </div>

          {/* description */}
          <div className="description poppins-medium text-sm md:text-base tracking-tight text-gray-200 pe-0 md:pe-8 py-4">
            I specialize in designing user experiences, crafting engaging
            interfaces, and building robust web applications that deliver value
            and usability. <br /> <br /> My approach combines creativity and
            technical expertise to deliver solutions that are both visually
            appealing and highly functional for users.
          </div>

          {/* coloms */}
          <div className="column poppins-bold  w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* first */}
            <div className="first text-center hover:scale-105 transition-all duration-200">
              <div className="count text-4xl md:text-5xl font-semibold text-amber-500">
                2+
              </div>
              <div className="category text-lg md:text-2xl font-semibold text-white tracking-tighter">
                Projects
              </div>
            </div>

            {/* second */}
            <div className="second text-center hover:scale-105 transition-all duration-200">
              <div className="count text-4xl md:text-5xl font-semibold text-amber-500">
                0+
              </div>
              <div className="category text-lg md:text-2xl font-semibold text-white tracking-tighter">
                Happy clients
              </div>
            </div>

            {/* third */}
            <div className="third text-center hover:scale-105 transition-all duration-200">
              <div className="count text-4xl md:text-5xl font-semibold text-amber-500">
                0+
              </div>
              <div className="category text-lg md:text-2xl font-semibold text-white tracking-tighter">
                Years of experience
              </div>
            </div>
          </div>

          {/* BTN AND SIGN */}
          <div className="BTNSIGN w-full h-auto py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            <a
              href="#cv"
              // href={`${neeraj_gupta_cv}`}  // put your pdf file path here (public folder or URL)
              download="neeraj_gupta_cv.pdf" // this is the filename user will see when downloading
              className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500 rounded-full hover:scale-105 transition-all duration-200"
            >
              <span className="px-4 py-2 bg-green-900 active:bg-green-700 active:text-blue-600 text-white rounded-full font-semibold">
                Download CV
              </span>
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-gray-800"></i>
              </span>
            </a>
            <div className="btnSECOND text-amber-500 text-2xl md:text-4xl font-thin hover:scale-110 transition-all duration-200 dancing-script-NeerajGuptaSign">
              Neeraj Gupta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
