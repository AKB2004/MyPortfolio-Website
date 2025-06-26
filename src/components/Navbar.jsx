import React from 'react'
import Image1 from '../assets/img.png';
import SocialIcons from './SocialIcons';
import { FiHome, FiUser, FiFolder, FiCode, FiFileText, FiMail } from 'react-icons/fi';


function Navbar() {
  return (
    
     <div className='fixed top-0 left-0 h-full w-56 bg-black text-white flex flex-col p-4 space-y-8 shadow-lg'>
    <img src={Image1} alt="profile-image" className='rounded-full w-25 h-26 ml-11 mt-2 border-4 border-gray-600' />
    <p className='font-medium text-3xl ml-14 -mt-4'>AKB</p>
    <SocialIcons/>
    
  {/* Nav Links with Icons */}
  <a href="#Home" className='flex items-center ml-4 space-x-2 hover:text-blue-500'>
    <FiHome className="text-xl" />
    <span>Home</span>
  </a>

  <a href="#About" className='flex items-center ml-4 space-x-2 hover:text-blue-500'>
    <FiUser className="text-xl" />
    <span>About</span>
  </a>

  <a href="#Projects" className='flex items-center ml-4 space-x-2 hover:text-blue-500'>
    <FiFolder className="text-xl" />
    <span>Projects</span>
  </a>

  <a href="#Skills" className='flex items-center ml-4 space-x-2 hover:text-blue-500'>
    <FiCode className="text-xl" />
    <span>Skills</span>
  </a>

  <a href="#Resume" className='flex items-center ml-4 space-x-2 hover:text-blue-500'>
    <FiFileText className="text-xl" />
    <span>Resume</span>
  </a>

  <a href="#Contact" className='flex items-center ml-4 space-x-2 hover:text-blue-500'>
    <FiMail className="text-xl" />
    <span>Contact me</span>
    </a>
    
    </div>
    
  )
}

export default Navbar