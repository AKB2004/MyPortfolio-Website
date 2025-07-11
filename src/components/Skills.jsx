import React from "react";
import html from "../assets/icon/html-5.png"
import css from "../assets/icon/css-3.png"
import js from "../assets/icon/js.png"
import react from "../assets/icon/react.png"
import sql from "../assets/icon/mysql.png"
import mongo from "../assets/icon/mongodb.png"
import postgresql from "../assets/icon/postgresql.png"
import node from "../assets/icon/nodejs.png"
import java from "../assets/icon/java.png"
import python from "../assets/icon/python.png"
import c from "../assets/icon/c.png"
import bootstrap from "../assets/icon/boostrap.png"
import flask from "../assets/icon/flask.png"
import typescript from "../assets/icon/typescript.png"
import android from "../assets/icon/android-studio.png"
import docker from "../assets/icon/docker.png"
import eclipse from "../assets/icon/eclipse.png"
import git from "../assets/icon/git.png"
import github from "../assets/icon/github.png"
import intellij from "../assets/icon/intellij.png"
import json from "../assets/icon/json.png"
import linux from "../assets/icon/linux.png"
// import notepad from "../assets/icon/notepad++.png"
import vscode from "../assets/icon/vscode.png"
import wordpress from "../assets/icon/wordpress.png"
import figma from "../assets/icon/figma.png"
import postman from "../assets/icon/postman.png"
import tailwind from "../assets/icon/tailwind.png"
import npm from "../assets/icon/npm.png"
import next from "../assets/icon/next.png"

export const Skills = () => (
  <section className="py-20 px-4 bg-gray-950 min-h-screen" id="Skills">
    <p className="text-white text-4xl text-center mb-14 -mt-10 font-bold">Tech Mastery</p>

    <div className="flex px-10 gap-10">
      {/* Left side: web+mobile dev and programming tools */}
      <div className="flex flex-col gap-10 w-2/3">
        {/* Web and Mobile Dev */}
        <div className="flex flex-col">
          <p className="text-xl font-thin mb-5 italic bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Web and Mobile Development
          </p>
          <div className="bg-transparent p-4 rounded-2xl grid grid-cols-6 gap-8 border border-white shadow-xl shadow-pink-500/40">
            <img src={html} alt="HTML" className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={css} alt="CSS" className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={js} alt="JavaScript" className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={react} alt="React" className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={sql} alt="SQL" className="w-10 h-10 object-contain rounded bg-gray-700 hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={mongo} alt="MongoDB" className="w-10 h-10 object-contain rounded bg-gray-100 hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={postgresql} alt="PostgreSQL" className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={node} alt="NodeJS" className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={flask} alt="Flask" className="w-10 h-10 object-contain rounded bg-gray-300 hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={bootstrap} alt="Bootstrap" className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={typescript} alt="TypeScript" className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200" />
            <img src={tailwind} alt="TailwindCSS" className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200" />
          </div>
        </div>

        {/* Programming Tools and Editor */}
        <div className="flex flex-col">
          <p className="text-xl font-thin mb-5 italic bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Programming Language and IDE
          </p>
          <div className="bg-transparent p-4 rounded-2xl grid grid-cols-4 gap-8 border border-white shadow-xl shadow-blue-400/40">
            {[java, python, c, linux, vscode, intellij, eclipse, android].map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="icon"
                className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right side: Other Tools */}
      <div className="flex flex-col w-1/3">
        <p className="text-xl font-thin mb-5 italic bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
          Editor and Other Tools
        </p>
        <div className="bg-transparent p-4 rounded-2xl grid grid-cols-3 gap-8 h-full border border-white shadow-xl shadow-yellow-300/40">
          {[git, github, docker, json, figma, next, postman, npm, wordpress].map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="icon"
              className="w-10 h-10 object-contain rounded hover:scale-110 hover:shadow-md transition-transform duration-200"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
