import React, { useEffect, useState } from "react";
import heroBg from "../assets/sets.jpg";
import { useNavbar } from "../Context/NavbarContext";

const Hero = () => {
  const {
    setTransparentNavbar,
    setDarkNavbar,
    setMidDarkNavbar,
    menuOpen,
  } = useNavbar();

  const [leftOffset, setLeftOffset] = useState("0px");
  const [rightOffset, setRightOffset] = useState("0px");

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return; // ⛔ Skip if menu open

      const aboutSection = document.getElementById("about-section");
      const toolsSection = document.getElementById("tools-section");

      if (!aboutSection || !toolsSection) return;

      const sectionTop = aboutSection.getBoundingClientRect().top;
      const toolsTop = toolsSection.getBoundingClientRect().top;
      const toolsBottom = toolsSection.getBoundingClientRect().bottom;

      // Your original scroll logic, mapped to semantic setters
      if (toolsTop <= 0 && toolsBottom > 0) {
        setMidDarkNavbar(); // midDark semantic background
      } else if (sectionTop <= 0) {
        setDarkNavbar(); // full dark background
      } else {
        setTransparentNavbar(); // transparent
      }
    };

    const alignTextWithNavbar = () => {
      const menuButton = document.querySelector("nav button");
      const contactLink = document.querySelector("nav a[href='/contact']");

      if (menuButton) {
        const rect = menuButton.getBoundingClientRect();
        setLeftOffset(`${rect.left}px`);
      }

      if (contactLink) {
        const rect = contactLink.getBoundingClientRect();
        const rightEdge = window.innerWidth - rect.right;
        setRightOffset(`${rightEdge}px`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", alignTextWithNavbar);

    // Initial calls
    alignTextWithNavbar();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", alignTextWithNavbar);
    };
  }, [
    setTransparentNavbar,
    setDarkNavbar,
    setMidDarkNavbar,
    menuOpen,
  ]);

  return (
    <section className="relative h-screen w-full bg-[#0d0e0f] text-white overflow-hidden">
      <img
        src={heroBg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="relative h-full flex flex-col justify-center z-10">
        <div
          className="absolute bottom-32 sm:bottom-36 md:bottom-40"
          style={{
            left:
              window.innerWidth < 640
                ? "1rem"
                : `calc(${leftOffset} + 14px)`,
          }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-[100px] lg:text-[120px] font-serif italic leading-tight uppercase drop-shadow-lg">
            Multi¬ <br />
            disciplinary
          </h1>
        </div>

        <div
          className="absolute bottom-8 sm:bottom-10 md:bottom-12 text-right"
          style={{
            right:
              window.innerWidth < 640
                ? "1rem"
                : `calc(${rightOffset} + 0px)`,
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-[100px] lg:text-[120px] font-serif uppercase drop-shadow-lg">
            DEVELOPER
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;


