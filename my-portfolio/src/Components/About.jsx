import React from "react";
import { useNavbar } from "../Context/NavbarContext";

const About = () => {
  const { setNavbarStyles } = useNavbar();

  return (
    <section
      id="about-section"
      className="
       bg-white dark:bg-[#0d0e0f] dark:text-white text-black font-bold 
        py-20 sm:py-28 lg:py-32 
        px-4 sm:px-8 md:px-16 
        overflow-hidden
      "
    >
      <div
        className="
          flex flex-col sm:flex-row justify-center sm:justify-end 
          items-center sm:items-start text-center sm:text-left
        "
      >
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg md:text-3xl font-medium font-serif mb-6 leading-relaxed">
            With over 2 years of experience, I build high-performing web applications that enhance user experience and help businesses grow. My focus is on speed, usability, and developing systems that convert users into customers.
          </p>

          <a
            href="/contact"
            className="
              underline font-semibold decoration-white 
              hover:decoration-gray-400 transition 
              text-xl sm:text-2xl md:text-[27.5px]
            "
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;








//  className={`fixed top-0 w-full flex justify-between items-center px-3 sm:px-3 py-4 sm:py-6 
//     font-semibold z-[400] transition-colors duration-500 overflow-hidden
//     ${
//       state.theme === "dark" ||
//       navbarStyles.background === "bg-[#0d0e0f]" || navbarStyles.background === "bg-transparent"
//         ? "text-white"
//         : "text-black"
//     } ${location.pathname === "/contact" ? "bg-[#0d0e0f]" : navbarStyles.background}`}