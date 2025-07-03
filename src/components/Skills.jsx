import React from "react";

const skills = [
  "React.js", "Node.js", "SQL", "JavaScript", "C++", "Tailwind CSS", "Git", "Three.js"
];

export const Skills = () => (
  <section className="py-20 px-4 bg-gray-900 min-h-screen" id="Skills">
    <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {skills.map((skill, i) => (
        <div key={i} className="bg-gray-800 p-4 rounded-xl text-center shadow-lg">
          {skill}
        </div>
      ))}
    </div>
  </section>
);