import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const ContactFormFirst = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const submitHandler = (data) => {
    toast.success("Form submitted successfully!");
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full max-w-xl mx-auto py-6 rounded-lg flex flex-col justify-center items-stretch px-2 sm:px-4"
    >
      {/* This is for Name */}
      <div className="text-lg font-semibold  w-full">Your Name*</div>
      <input
        {...register("Name", { required: true })}
        className="w-full border-b outline-0 px-3 py-2 text-base"
        placeholder="Ex. Neeraj Gupta"
      />
      {errors.Name && <p className="text-red-400 text-sm">Name is required.</p>}{" "}
      <br />
      {/* This is for Email */}
      <div className="text-lg font-semibold w-full mt-4">Your Email*</div>
      <input
        {...register("Email", { required: true })}
        className="w-full border-b outline-0 px-3 py-2 text-base"
        placeholder="Ex. neerajguptaica@gmai.com"
      />
      {errors.Email && (
        <p className="text-red-400 text-sm">Email is required.</p>
      )}{" "}
      <br />
      {/* This is for Phone */}
      <div className="text-lg font-semibold w-full mt-4">Your Phone*</div>
      <input
        {...register("Phone", { required: true })}
        type="tel"
        className="w-full border-b outline-0 px-3 py-2 text-base"
        placeholder="Ex. 1234567890"
      />
      {errors.Phone && (
        <p className="text-red-400 text-sm">Phone is required.</p>
      )}{" "}
      <br />
     
      {/* this is textarea  message */}
      <div className="text-lg font-semibold w-full mb-2 mt-4">Message* : </div>
      <textarea
        {...register("message", {
          required: "Description is required",
        })}
        className="w-full border outline-0 px-3 py-3 rounded-2xl min-h-[6rem] text-base"
        placeholder="Write your message here..."
      ></textarea>
      <br />
    
      <div className="btn flex gap-3 items-center justify-end mt-4">
        <button
          type="submit"
          className="px-5 py-3 bg-amber-500 text-white rounded-full font-semibold text-base sm:text-lg"
        >
          Submit
        </button>
        <div className="arrows w-9 h-9 bg-white rounded-full flex justify-center items-center text-lg">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </form>
  );
};

export default ContactFormFirst;
