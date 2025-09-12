import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import frontendImage from "../assets/images/frontend.jpeg"
import backendImage from "../assets/images/backend.jpeg"
import fullstackImage from "../assets/images/fullstack.jpeg"

const Service = () => {
  const services = [
    {
      img: frontendImage,
      serviceType: "Frontend Development",
      serviceDescription:
        "I provide end-to-end web development services to help businesses and individuals build powerful, user-friendly, and modern digital solutions. As a Frontend Developer, I specialize in creating visually appealing, responsive, and interactive user interfaces using technologies like React, Tailwind CSS, modern JavaScript and other frameworks. My focus is on delivering seamless user experiences across devices.",
    },
    {
      img: backendImage,
      serviceType: "Backend Development",
      serviceDescription:
        "As a Backend Developer, I design and build secure, scalable, and efficient server-side applications. With expertise in Node.js, Express, and database management systems like MongoDB, I ensure strong functionality, smooth integrations, and high performance.",
    },
    {
      img: fullstackImage,
      serviceType: "MERN Full Stack Development",
      serviceDescription:
        "As a Full MERN Stack Developer, I combine both frontend and backend expertise to deliver complete web solutions. From concept to deployment, I can handle every layer of development, ensuring your project is robust, scalable, and ready for real-world use. My goal is to provide reliable, clean, and high-quality code tailored to your needs.",
    },
  ];
  // console.log("services =====>",services)

  return (
    <section className="w-full h-auto" id="service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 poppins-bold ">
        {/* logo */}
        <div className="logo flex items-center text-lg font-semibold pt-2">
          <span>
            <i className="fa-solid fa-arrow-right text-amber-500"></i>
          </span>
          <span className="heading px-3">Services</span>
        </div>

        {/* headings */}
        <div className="headings flex flex-col md:flex-row md:items-center justify-between mt-8 gap-6">
          {/* first part  */}
          <div className="headingFirst text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="text-amber-500 italic">Services</span> I Provide
          </div>

          {/* second part */}
          <div className="group">
            <div className="inline-flex items-center bg-amber-500 rounded-full p-1">
              <button
                type="button"
                className="px-4 py-2 text-sm sm:px-5 sm:py-3 bg-green-900 text-white rounded-full font-semibold hover:scale-105 transition-all duration-200"
              >
                View All Services
              </button>
              <div className="arrows w-9 h-9 bg-white rounded-full flex justify-center items-center ml-2">
                <i className="fa-solid fa-arrow-down text-amber-500"></i>
              </div>
            </div>
          </div>
        </div>

        {/* services */}
        <div className="allService">
          <div className="service w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 py-12">
            {services.map((service, index) => (
              <ServiceCard service={service} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
