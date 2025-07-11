// src/components/SocialIcons.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="flex space-x-3 justify-center -mt-3 mb-6">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/abhinash_bej22/"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#E1306C] transition-all duration-300 text-white"
      >
        <FaInstagram size={18} />
      </a>

      {/* Facebook */}
      {/* <a
        href="#"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#1877F2] transition-all duration-300 text-white"
      >
        <FaFacebookF size={18} />
      </a> */}

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/abhinash-kumar-bej-59aa27259/"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#0077B5] transition-all duration-300 text-white"
      >
        <FaLinkedinIn size={18} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/AKB2004"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#333] transition-all duration-300 text-white"
      >
        <FaGithub size={18} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917019984482"
        className="bg-gray-800 p-2 rounded-full hover:bg-[#25D366] transition-all duration-300 text-white"
      >
        <FaWhatsapp size={18} />
      </a>
    </div>
  );
}
