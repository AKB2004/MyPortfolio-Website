import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "This website showcasing my skills, projects, and profile.",
    tech: "React, Three.js, Tailwind CSS",
    github: "https://github.com/yourname/portfolio"
  },
  // Add more projects here
];

export const Projects = () => (
  <section className="py-20 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
    <div className="grid gap-6 max-w-4xl mx-auto">
      {projects.map((p, i) => (
        <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm text-gray-300">{p.description}</p>
          <p className="mt-2 text-sm text-gray-400">Tech: {p.tech}</p>
          <a href={p.github} className="mt-3 inline-block text-teal-400 underline">GitHub</a>
        </div>
      ))}
    </div>
  </section>
);