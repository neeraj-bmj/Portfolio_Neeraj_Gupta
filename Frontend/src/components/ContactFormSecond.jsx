// Important Note : There are using formspree for sending data directly on you personal email neerajguptaica@gmail.com

import { useForm, ValidationError } from "@formspree/react";

const ContactFormSecond = () => {
  const [state, handleSubmit] = useForm("mldwzpqy");

  if (state.succeeded) {
    return <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="text-4xl text-green-900 poppins-bold">Thanks for message me!</div>
    </div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto py-6 rounded-lg flex flex-col justify-center items-stretch px-2 sm:px-4"
    >
      {/* This is for Name */}
      <div className="text-lg font-semibold  w-full poppins-bold">Your Name*</div>
      <input
        id="Full_Name"
        name="Full_Name"
        required
        type="text"
        className="w-full border-b outline-0 px-3 py-2 text-base"
        placeholder="Ex. Neeraj Gupta"
      />
      <ValidationError
        prefix="Full_Name"
        field="Full_Name"
        errors={state.errors}
      />

      {/* This is for Email */}
      <div className="text-lg font-semibold w-full mt-4 poppins-bold">Your Email*</div>
      <input
        id="Email"
        name="Email"
        required
        type="email"
        className="w-full border-b outline-0 px-3 py-2 text-base"
        placeholder="Ex. neerajguptaica@gmai.com"
      />
      <ValidationError prefix="Email" field="Email" errors={state.errors} />

      {/* This is for Phone */}
      <div className="text-lg font-semibold w-full mt-4 poppins-bold">Your Phone*</div>
      <input
        id="Contact_Number"
        name="Contact_Number"
        required
        type="tel"
        className="w-full border-b outline-0 px-3 py-2 text-base"
        placeholder="Ex. 1234567890"
      />
      <ValidationError
        prefix="Contact_Number"
        field="Contact_Number"
        errors={state.errors}
      />


      {/* this is textarea  message */}
      <div className="text-lg font-semibold w-full mb-2 mt-4 poppins-bold">Message* : </div>
      <textarea
        required
        id="Messages"
        name="Messages"
        className="w-full border outline-0 px-3 py-3 rounded-2xl min-h-[6rem] text-base"
        placeholder="Write your message here..."
      ></textarea>
      <ValidationError
        prefix="Messages"
        field="Messages"
        errors={state.errors}
      />

      {/* BUTTONS */}
      <div className="btn flex justify-end mt-4">
        <button
          type="submit"
          disabled={state.submitting}
          className="px-5 py-3 bg-green-900 active:bg-green-700 text-white active:text-amber-500 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactFormSecond;
