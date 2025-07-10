import React from "react";
import icon from "../assets/a1.png";
import html from "../assets/icon/html-5.png"
import css from "../assets/icon/css-3.png"
import js from "../assets/icon/js.png"
// import react from "../assets/icon/html-5.png"
// import sql from "../assets/icon/html-5.png"
// import mongo from "../assets/icon/html-5.png"
// import postgre from "../assets/icon/html-5.png"


export const Skills = () => (
 
  <section className="py-20 px-4 bg-gray-900 min-h-screen" id="Skills">
  <p className="text-white text-3xl text-center mb-10">Tech Mastery</p>

  {/* Grid layout for skill cards */}
  <div className="grid grid-cols-3 gap-8 px-10">
    {/* One Skill Card */}
    <div className="flex flex-col">
      <p className="text-xl text-white mb-3">Programming</p>
      <div className="bg-transparent p-4 rounded-2xl grid grid-cols-2 gap-4">
        <img src={html} alt="icon1" className="w-16 h-16 object-contain" />
        <img src={css} alt="icon2" className="w-16 h-16 object-contain" />
        <img src={js} alt="icon3" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon4" className="w-16 h-16 object-contain" />
      </div>
    </div>
<div className="flex flex-col">
      <p className="text-xl text-white mb-3">Programming</p>
      <div className="bg-transparent p-4 rounded-2xl grid grid-cols-2 gap-4">
        <img src={icon} alt="icon1" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon2" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon3" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon4" className="w-16 h-16 object-contain" />
      </div>
    </div>
    <div className="flex flex-col">
      <p className="text-xl text-white mb-3">Programming</p>
      <div className="bg-transparent p-4 rounded-2xl grid grid-cols-2 gap-4">
        <img src={icon} alt="icon1" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon2" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon3" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon4" className="w-16 h-16 object-contain" />
      </div>
    </div>
    <div className="flex flex-col">
      <p className="text-xl text-white mb-3">Programming</p>
      <div className="bg-transparent p-4 rounded-2xl grid grid-cols-2 gap-4">
        <img src={icon} alt="icon1" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon2" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon3" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon4" className="w-16 h-16 object-contain" />
      </div>
    </div>
    {/* Repeat for other skill areas */}
    <div className="flex flex-col">
      <p className="text-xl text-white mb-3">Frontend</p>
      <div className="bg-transparent p-4 rounded-2xl grid grid-cols-2 gap-4">
        <img src={icon} alt="icon1" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon2" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon3" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon4" className="w-16 h-16 object-contain" />
      </div>
    </div>

    <div className="flex flex-col">
      <p className="text-xl text-white mb-3">Backend</p>
      <div className="bg-transparent p-4 rounded-2xl grid grid-cols-2 gap-4">
        <img src={icon} alt="icon1" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon2" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon3" className="w-16 h-16 object-contain" />
        <img src={icon} alt="icon4" className="w-16 h-16 object-contain" />
      </div>
    </div>
  </div>
  
  
</section>




);