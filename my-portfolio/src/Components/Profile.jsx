import React from 'react'
import work from '../assets/wokspa.jpg'

const Profile = () => {
  return (
    <section className="relative bg-white dark:bg-[#0d0e0f] text-black dark:text-white border-b border-white overflow-hidden">
      {/* Top Bar */}
      <div
        className="
          absolute top-0 left-0 w-full z-10 
          flex flex-row justify-between items-center
          px-3 sm:px-6 md:px-8 pt-4 sm:pt-6
          side-nudge text-white
        "
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold tracking-wide md:-ml-3">
          PROFILE
        </h2>

        <a
          href="/profile"
          className="
            text-sm sm:text-base md:text-lg
            underline underline-offset-4 decoration-[1px] text-white font-semibold decoration-white
            hover:decoration-gray-400 transition
           md:-mr-4"
        >
          Discover my profile
        </a>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-[70vh] sm:h-[85vh] md:h-screen">
        <img
          src={work}
          alt="profile visual"
          className="w-full h-full object-cover"
        />

        {/* Text inside image (bottom-left) */}
        <div
          className="
            absolute bottom-6 sm:bottom-10 md:bottom-14 
            left-3 sm:left-6 md:left-8 
            max-w-[85%] sm:max-w-md md:max-w-xl
            ml-[2px] sm:-ml-3 text-white
          "
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-lg">
            Driven by curiosity and a passion for technology, I strive to build
            solutions that balance creativity, performance, and usability.
          </p>
        </div>
      </div>

      {/* Space below image with light background */}
      <div className="bg-[#cacaca17] h-24 sm:h-32 md:h-44"></div>
    </section>
  )
}

export default Profile

