import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/a4.png"; // Make sure this is correct

export const About = () => {
  return (
    <section
      id="About"
      className="h-screen w-auto
       bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col md:flex-row items-center justify-center px-8 py-20 space-y-12 md:space-y-0 md:space-x-12 overflow-hidden transition-all duration-500"
    >
      {/* Text on the left */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a final-year B.Tech student passionate about software development,
          DSA, and building creative, efficient, and modern web applications.
        </p>
      </motion.div>

      {/* Image on the right */}
      <motion.div
        className="w-full md:w-1/2   flex justify-center"
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
  src={AboutImage}
  alt="About Me"
  className="w-60 md:w-72 lg:w-80 xl:w-70 h-auto rounded-xl  object-cover"
/>

      </motion.div>
    </section>
  );
};
