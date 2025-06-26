import React from "react";

export const Contact = () => (
  <section className="py-20 px-4 bg-gray-900 text-center">
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <p className="text-lg">Let's connect! Reach me at:</p>
    <p className="mt-2 text-teal-400">your.email@example.com</p>
    <div className="mt-4 space-x-4">
      <a href="https://linkedin.com/in/yourname" className="underline">LinkedIn</a>
      <a href="https://github.com/yourname" className="underline">GitHub</a>
    </div>
  </section>
);
