// src/components/SocialIcons.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="flex space-x-2 justify-center -mt-3 mb-6">
      {/* Instagram */}
      <a
        href="#"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#E1306C] transition-all duration-300 text-white"
      >
        <FaInstagram size={14.5} />
      </a>

      {/* Facebook */}
      <a
        href="#"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#1877F2] transition-all duration-300 text-white"
      >
        <FaFacebookF size={14.5} />
      </a>

      {/* LinkedIn */}
      <a
        href="#"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#0077B5] transition-all duration-300 text-white"
      >
        <FaLinkedinIn size={14.5} />
      </a>

      {/* GitHub */}
      <a
        href="#"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#333] transition-all duration-300 text-white"
      >
        <FaGithub size={14.5} />
      </a>

      {/* WhatsApp */}
      <a
        href="#"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#25D366] transition-all duration-300 text-white"
      >
        <FaWhatsapp size={14.5} />
      </a>
    </div>
  );
}
