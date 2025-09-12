import React from "react";

const ServiceCard = (props) => {
  const { service } = props;
  // console.log("servicecard=========>",service)

  return (
    <div className="card w-full h-auto flex flex-col gap-4 rounded-2xl bg-gray-100 overflow-hidden shadow hover:shadow-lg transition-all duration-200 px-4 py-5">
      {/* logo */}
      <div className="logo w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-amber-400 flex-shrink-0">
        <img
          src={`${service.img}`}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* heading */}
      <div className="heading poppins-bold  text-lg sm:text-2xl text-gray-800 font-semibold tracking-tight">
        {service.serviceType}
      </div>

      {/* description */}
      <div className="description poppins-medium text-sm sm:text-sm text-gray-600 tracking-tight leading-relaxed">
        {service.serviceDescription}
      </div>

      {/* Learn More */}
      <div className="mt-auto font-semibold text-sm text-gray-800 flex items-center gap-2">
        <span>Learn More</span>
        <i className="fa-solid fa-arrow-right text-amber-500"></i>
      </div>
    </div>
  );
};

export default ServiceCard;
