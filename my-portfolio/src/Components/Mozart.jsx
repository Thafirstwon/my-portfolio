import React, { useEffect } from 'react'
import MoreNotes from './MoreNotes';
import { useNavbar } from '../Context/NavbarContext';
import Mozart01 from "../assets/Mozart[1].jpg";
import { motion } from "framer-motion";
import Footer from './Footer';
import ContactCta from './ContactCta';

const Mozart = () => {
      const { setDarkNavbar } = useNavbar();
            
              useEffect(() => {
                setDarkNavbar(); // ✅ Dark background for this page
              }, []);
            

  return (
      <div>
    <div className='bg-[#0d0e0f] text-white min-h-screen px-4 py-20 overflow-hidden'>
      <div className='mb-24'>
            <div className='flex justify-end'>
              <div className='relative flex flex-col items-center mt-10 sm:mt-10'>
                  <img
                  src={Mozart01}
                  alt='client'
                  className="max-w-[510px] sm:max-w-[460px] md:max-w-[510px] h-[350px] object-cover mb-1  w-[300px] 
       
            sm:w-[350px] 
            sm:h-[500px] 
            md:w-[450px] 
            md:h-[550px] 
            lg:w-[550px] 
            lg:h-[650px]"
                  />
                  <div className='w-[88%] mx-auto h-[26px] relative'>
                    <div className='absolute bottom-0 left-0 right-0 border-b border-gray-400'></div>
                    <div className='absolute bottom-0 left-0 h-full border-l border-gray-400'></div>
                    <div className='absolute bottom-0 right-0 h-full border-r border-gray-400'></div>
                  </div>

                  </div>
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-[55px] leading-tight text-left mt-16 sm:mt-10 pb-14'>
                  New client: Moses Adegunle
            </h1>
      </div>

      <div className='relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white'></div>

      <div className='flex flex-col md:flex-row justify-between items-start mb-44 mt-5'>
            <p className='text-[27.5px]  mb-4 md:mb-0'>
                  New client  — October 11, 2025
            </p>
             <p className='md:max-w-3xl font-semibold leading-relaxed md:ml-10'>
                 I’m excited to introduce Mozart, a talented UX/UI designer, long-time friend, and now a new client. With years of experience creating seamless digital experiences, Mozart brings an unmatched sense of clarity and craft to every project. We’ve had the chance to collaborate closely on HAVE, and the ONE project—and each time, his attention to detail and design intuition elevate the entire process.
            </p>
      </div>

     
     <div className='relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white pb-44'></div>

    <div className="flex flex-col items-center text-center">
      <p className="text-gray-400 text-xl -mt-36">Link</p>

      {/* group wrapper */}
      <motion.div
        className="flex items-center gap-1.5 text-xl font-light -mt-1 cursor-pointer group"
        whileHover="hover"
      >
        {/* Clickable link */}
        <a
  href="http://mosesadegunle.com"
  target="_blank"
  rel="noopener noreferrer"
  className="relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-white group-hover:after:w-full after:transition-all after:duration-300"
>
  mosesadegunle.com
</a>

        {/* Animated arrow */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5 translate-y-[1px] pointer-events-none"
          variants={{
            hover: { y: -4, rotate: 4 },
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          {/* Smooth curved upward-right arrow ↗ */}
          <path
            d="M5 19 C9 9, 14 6, 19 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 5 L19 5 L19 10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </div>
    </div>

    {/* Morenote */}
    <MoreNotes />

     {/* ContactCta */}
      <ContactCta />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Mozart
