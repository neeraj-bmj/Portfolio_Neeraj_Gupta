import React from "react";
import ContactFormSecond from "../components/ContactFormSecond";

const contact = () => {
  const information = [
    {
      // <i class="ri-phone-fill"></i>
      remixIconLink: "ri-phone-fill",
      content: "+91 8081599934",
    },
    {
      // <i class="ri-mail-fill"></i>
      remixIconLink: "ri-mail-fill",
      content: "neerajguptaica@gamil.com",
    },
    {
      // <i class="ri-map-pin-fill"></i>
      remixIconLink: "ri-map-pin-fill",
      content: "Gorakhpur, Uttar Pradesh, India",
    },
  ];
  return (
    <section
      className="w-full min-h-screen flex flex-col md:flex-row"
      id="contact"
    >
      {/* First Part */}
      <div className="first w-full md:w-1/2 h-full p-8 md:pl-16 md:pr-8 flex flex-col justify-center">
        {/* icon */}
        <div className="logo text-2xl font-semibold pt-8">
          <span>
            <i className="fa-solid fa-arrow-right text-amber-500"></i>
          </span>
          <span className="heading px-4 ">Contact Us</span>
        </div>

        {/* heading Question */}
        <div className="headingQuestion poppins-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter font-semibold">
          <span className="text-gray-900"> Lets Talk for </span>
          <span className="text-amber-500 italic">
            Your <br /> Next Projects.
          </span>
        </div>

        {/* description */}
        <div className="description poppins-medium  text-base sm:text-lg tracking-tighter text-gray-800 pe-8 py-5 ">
          I am a passionate MERN Stack Developer, with a strong foundation in
          building scalable, secure, and user-friendly web applications. Skilled
          in working across the full development lifecycle — from designing
          responsive frontends with React and Tailwind CSS, to building robust
          backends with Node.js and Express, and managing databases using
          MongoDB.
        </div>

        {/*  contact information */}
        <div className="contactInformation poppins-medium mt-6 space-y-3">
          {information.map((data, index) => (
            <div
              key={index}
              className="singlePice w-full h-auto px-2 py-2 font-normal flex gap-4 items-center justify-start"
            >
              <div className="icon w-10 h-10 rounded-full bg-amber-600 flex justify-center items-center text-xl">
                <i className={`${data.remixIconLink}`}></i>
              </div>
              <div className="content">{data.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Part */}
      <div className="second w-full md:w-1/2 h-full flex items-center justify-center px-6 md:px-10 py-8">
        <ContactFormSecond />
      </div>
    </section>
  );
};

export default contact;
