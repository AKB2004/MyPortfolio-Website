import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import last from "../assets/contactimage.jpg";

export const Contact = () => (
  <section className="relative py-20 px-4 bg-gray-850 min-h-screen" id="Contact">
    <p className="text-white relative z-1 text-3xl ml-8 -mt-15">Get in Touch</p>

    <img
      src={last}
      alt="logo-image"
      className="w-full h-screen object-cover absolute top-0 left-0 z-0"
    />

    <div className="relative z-10 flex flex-col  h-auto -mt-2" >
      {/* Contact Form */}
      <form className="bg-transparent text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-1 font-extralight italic">First Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 font-extralight italic">Last Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-extralight italic">Email</label>
          <input
            type="email"
            required
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-extralight italic">Phone</label>
          <input
            type="tel"
            required
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-extralight italic">Message</label>
          <textarea
            className="w-full p-2 border border-gray-400 rounded h-32"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:cursor-pointer hover:bg-gray-500 hover:text-gray-200"
        >
          Send
        </button>
        {/* <p>Designing with purpose. Developing with precision. Ready to create with you.</p> */}
      </form>

      <footer className="flex justify-between items-center bg-transparent text-white w-full px-6 py-4 -mt-5">
  {/* Left: Quote */}
  <div className="text-left max-w-md">
    <p className="font-thin italic text-transparent bg-gradient-to-r from-blue-500 via-white to-blue-600  bg-[length:200%_200%] bg-clip-text animate-[gradientText_4s_linear_infinite]">
  "Designing with purpose. Developing with precision. Ready to create with you".
</p>

  </div>

  {/* Right: Contact Info */}
  <div className="text-right font-sans">
    <p>Email: <a href="mailto:bejabhinash@gmail.com" className="underline  text-blue-500">bejabhinash@gmail.com</a></p>
    <p>Phone: +91 7019984482</p>
    <p className="text-gray-400 mt-1 ">© {new Date().getFullYear()} Abhinash Kumar Bej. All rights reserved.</p>
  </div>
</footer>

    </div>
    <div className="relative mt-10 flex justify-center">
  <button
    onClick={() => {
      const home = document.getElementById("Home");
      if (home) home.scrollIntoView({ behavior: "smooth" });
    }}
    className=" bg-white text-black w-10 h-10 rounded-full shadow-md hover:bg-gray-300 transition flex items-center justify-center text-lg cursor-pointer "
    aria-label="Scroll to top"
  >
    <FaArrowUp size={18} />
  </button>
</div>

  </section>
  

);
