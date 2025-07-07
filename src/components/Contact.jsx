import React from "react";
import last from '../assets/contactimage.jpg'
export const Contact = () => (
  <section className="relative py-20 px-4 bg-black min-h-screen mb-2" id="Contact">
    <p className="text-white relative z-1 text-4xl ml-10 ">Get in Touch</p>
  <img
    src={last}
    alt=""
    className="w-full h-screen object-cover absolute top-0 left-0 z-0"
  />

  <div className="relative z-10 flex h-auto ">
    <form className=" bg-transparent text-white p-8 rounded-lg shadow-lg w-full max-w-md mt-10">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 mb-4 border border-gray-600200 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border border-gray-400 rounded"
      />
      <textarea
        placeholder="Message"
        className="w-full p-2 mb-4 border border-gray-400 rounded h-32"
      />
      <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-500 hover:text-gray-200">
        Send
      </button>
    </form>
  </div>
</section>

);
