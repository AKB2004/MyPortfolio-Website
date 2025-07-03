import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "VaLiDiFy",
    github: "https://github.com/yourname/portfolio",
    color: "bg-indigo-600",
  },
  {
    title: "SecuResidences",
    github: "https://github.com/yourname/todo-app",
    color: "bg-emerald-600",
  },
  {
    title: "My Portfolio",
    github: "https://github.com/yourname/blog-platform",
    color: "bg-rose-600",
  },
];

export const Projects = () => {
  return (
    <section
      id="Projects"
      className="h-screen w-full bg-black text-white overflow-hidden relative"
    >
      <h2 className="text-4xl font-bold text-center pt-10 mb-2 z-10 relative">
        My Projects
      </h2>

      <div className="flex overflow-x-auto snap-x snap-mandatory h-full px-10 gap-10 scroll-smooth scrollbar-hide">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="snap-center flex-shrink-0 w-full h-full flex flex-col items-center justify-center relative"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {/* Solid Background Card */}
            <div
              className={`w-full h-4/5 ${p.color} rounded-xl shadow-lg flex items-end justify-center`}
            >
              {/* Overlay content */}
              <div className="bg-black bg-opacity-60 w-full text-center py-6 rounded-b-xl">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <a
                  href={p.github}
                  className="text-teal-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
