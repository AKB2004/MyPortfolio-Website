import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <div className="ml-56 p-6 space-y-32"> 
        <section id="Home"><Hero /></section>
        <section id="About"><About /></section>
        <section id="Projects"><Projects /></section>
        <section id="Skills"><Skills /></section>       
        <section id="Contact"><Contact /></section>
      </div>
    </div>
  );
}
