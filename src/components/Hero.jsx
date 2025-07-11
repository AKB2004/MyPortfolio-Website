import React from "react";
import { Typewriter } from "react-simple-typewriter";
  
export const Hero = () => {
  return (
    <section
  id="Home"
  className="h-screen w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-950 via-gray-800 to-black text-gray-200 transition-all duration-500 px-4"
>
  {/* Greeting Line */}
  <p className="text-lg md:text-xl text-gray-400 mb-2 font-light tracking-wide">
    Hi, welcome to my portfolio
  </p>

  {/* Name Line */}
  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 transition-all duration-500">
    <span className="text-blue-400">Abhinash Kumar Bej</span>
  </h1>

  {/* Typewriter Effect Line */}
  {/* <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent font-mono"> */}
  <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-emerald-400 to-yellow-300 bg-clip-text text-transparent font-mono">

    <Typewriter
      words={[
        "Frontend developer",
        "UI/UX designer",
        "Full stack developer",
      ]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </p>
</section>

  );
};

