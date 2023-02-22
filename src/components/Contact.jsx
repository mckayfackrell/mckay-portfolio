import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#7b904b] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/0be4ed6d-4ad9-4d16-b3ff-664ee3656bba"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black text-white">
            Contact
          </p>
          <p className="text-black py-4">
            {" "}
            Submit the form below to get in contact with me
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-black group bg-[#5f6f3a] border-[#5f6f3a] border-2 px-6 py-3 hover:border-black my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
