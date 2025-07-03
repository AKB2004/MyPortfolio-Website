import React from "react";

export const Hero = () => {
  return (
    <section
      id="Home"
      className="h-screen w-auto  flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white transition-all duration-500"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-all duration-500">
        Hi, I'm <span className="text-blue-400">Abhinash</span>
      </h1>
      <p className="text-xl text-gray-300">
        Final Year B.Tech | Web Developer
      </p>
    </section>
  );
};

