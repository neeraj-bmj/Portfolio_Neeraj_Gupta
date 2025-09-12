import heroImage from "../assets/images/neerajgupta.jpg";
// import neeraj_gupta_cv  from "../assets/resume/DummyResume1.pdf";

const Hero = () => {
  const email = "neerajguptaica@gmail.com";
  const subject = "Protfolio inquery,";
  const body = "Hii Neeraj, \n \n I saw your portfolio and would like to discuss about hiring ...";


  return (
    <section
      className="hero w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-6 p-6"
      id="hero"
    >
      {/* first part */}
      <div className="firstPart w-full bg-white flex flex-col gap-4 items-start justify-center p-4 md:p-8 rounded-lg">
        {/* greet */}
        <div className="greet text-xl md:text-3xl italic font-semibold text-gray-700">
          Hello There!
        </div>

        {/* heading */}
        <div className="heading poppins-bold text-2xl md:text-5xl font-semibold leading-snug">
          I'm{" "}
          <span className="text-amber-500 italic underline">Neeraj Gupta,</span>
          <br className="hidden md:block" /> MERN Stack Developer based in
          India.
        </div>

        {/* description */}
        <div className="description poppins-medium text-sm md:text-base text-gray-700 leading-relaxed tracking-tight font-medium">
          I am a passionate{" "}
          <span className="font-bold text-gray-800">
            MERN Stack Developer, <br />
          </span>{" "}
          with a strong foundation in building{" "}
          <span className="font-bold text-gray-800">
            scalable, secure, and user-friendly web applications.
          </span>{" "}
          Skilled in working across the full development lifecycle — from{" "}
          <span className="font-bold text-gray-800">
            designing responsive frontends with React and Tailwind CSS,
          </span>{" "}
          to{" "}
          <span className="font-bold text-gray-800">
            {" "}
            building robust backends with Node.js and Express,
          </span>{" "}
          and managing databases using{" "}
          <span className="font-bold text-gray-800"> MongoDB.</span>
        </div>

        {/* buttons */}
        <div className="btns w-full flex flex-col md:flex-row gap-3 md:gap-6 items-start mt-6">
          <a
            href="#resume"  // put your pdf file path here (public folder or URL)
            // href={`${neeraj_gupta_cv}`}  // put your pdf file path here (public folder or URL)
            download="neeraj_gupta_cv.pdf"   // this is the filename user will see when downloading
            className="inline-block px-6 py-3 bg-green-900 rounded-full font-bold text-lg md:text-2xl text-white hover:scale-105 transition-all duration-200 active:bg-green-700 active:text-sky-600"
          >
            View My Resume
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="inline-block px-4 py-2 bg-white rounded-full font-bold border-4 border-gray-700 text-lg md:text-2xl text-gray-700 hover:scale-105 transition-all duration-200 active:bg-rose-300"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* second part */}
      <div className="secondPart w-full bg-rose-300 min-h-[220px] md:min-h-full rounded-lg flex items-center justify-center overflow-hidden relative">
        {/* right side image of Neeraj Gupta */}
        <div className="relative flex-1">
          <img
            src={`${heroImage}`}
            alt="Neeraj Gupta"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg relative z-10 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-700/30 to-black/80 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
