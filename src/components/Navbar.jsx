

import React, { useEffect, useState } from 'react';
import Image1 from '../assets/img.png';
// import sign from '../assets/sign.png'
import SocialIcons from './SocialIcons';
import {
  FiHome,
  FiUser,
  FiFolder,
  FiCode,
  FiFileText,
  FiMail,
} from 'react-icons/fi';

function Navbar() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
             console.log("Visible section:", entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { id: 'Home', icon: <FiHome />, label: 'Home' },
    { id: 'About', icon: <FiUser />, label: 'About' },
    { id: 'Projects', icon: <FiFolder />, label: 'Projects' },
    { id: 'Skills', icon: <FiCode />, label: 'Skills' },
    // { id: 'Resume', icon: <FiFileText />, label: 'Resume' },
    { id: 'Contact', icon: <FiMail />, label: 'Contact me' },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-60 bg-black text-white flex flex-col p-4 space-y-8 shadow-lg">
      <img
        src={Image1}
        alt="profile"
        className="rounded-full w-25 h-26 ml-11 mt-2 border-4 border-gray-700"
      />
      {/* <img
        src={sign}
        alt="signature"
        className="rounded-full w-28 h-28 ml-11 mt-2  "
      /> */}
      <SocialIcons />

      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="group flex items-center ml-4 space-x-2 transition-colors duration-200"
        >
          <span
            className={`text-xl transition-colors duration-200 ${
              activeSection === item.id
                ? 'text-blue-500'
                : 'text-white group-hover:text-blue-500'
            }`}
          >
            {item.icon}
          </span>
          <span className="text-white group-hover:text-blue-500 transition-colors duration-200">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}

export default Navbar;
