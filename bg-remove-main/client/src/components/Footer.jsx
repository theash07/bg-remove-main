import React from 'react'
import logo from '../assets/logo.jpg' // ← Import your logo
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      {/* Updated Logo */}
      <img className='w-24 sm:w-32' src={logo} alt="Logo" />

      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @ Ashish Yadav | All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-6 flex-wrap">
        {/* GitHub */}
        <div className="relative group">
          <a
            href="https://github.com/theash07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 group-hover:scale-110"
          >
            <img width={28} src={assets.github_icon} alt="GitHub" />
          </a>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
            GitHub
          </div>
        </div>

        {/* Twitter */}
        {/* <div className="relative group">
          <a
            href="https://x.com/Jyotiraditya077"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 group-hover:scale-110"
          >
            <img width={28} src={assets.twitter_icon} alt="Twitter" />
          </a>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
            Twitter
          </div>
        </div> */}

        {/* Portfolio */}
        {/* <div className="relative group">
          <a
            href="https://jyotiradityaportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 group-hover:scale-110"
          >
            <img width={28} src={assets.contact_icon} alt="Portfolio" />
          </a>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
            Portfolio
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
