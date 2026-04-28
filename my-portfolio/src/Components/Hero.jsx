import React from "react";
import heroBg from "../assets/sets.jpg";
import { useNavbar } from "../Context/NavbarContext";
import heroDesktop from "../assets/hero-desktop.webp";
import heroMobile from "../assets/hero-mobile.webp";


const Hero = () => {
  const {
    setTransparentNavbar,
    setDarkNavbar,
    setMidDarkNavbar,
    menuOpen,
  } = useNavbar();

  const [leftOffset, setLeftOffset] = React.useState("0px");
  const [rightOffset, setRightOffset] = React.useState("0px");
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 640)

  React.useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return; // ⛔ Skip if menu open

      const aboutSection = document.getElementById("about-section");
      const toolsSection = document.getElementById("tools-section");

      if (!aboutSection || !toolsSection) return;

      const sectionTop = aboutSection.getBoundingClientRect().top;
      const toolsTop = toolsSection.getBoundingClientRect().top;
      const toolsBottom = toolsSection.getBoundingClientRect().bottom;

      //  original scroll logic, mapped to semantic setters
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

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  },[])



  return (
    <section className="relative h-screen w-full bg-[#0d0e0f] text-white overflow-hidden">
   <div className="absolute inset-0 scale-105 animate-[slowZoom_20s_linear_infinite]">
  <picture>
    <source
      srcSet={heroMobile}
      media="(max-width: 640px)"
    />
    <img
      src={heroDesktop}
      alt="Hero background"
      loading="eager"
      fetchPriority="high"
      className="w-full h-full object-cover scale-105"
    />
  </picture>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
</div>

      <div className="relative h-full flex flex-col justify-center z-10 px-6 sm:px-10 md:px-16">
        <div
          className="absolute bottom-32 sm:bottom-36 md:bottom-40 mb-10"
          style={{
            left:
              isMobile ? "1rem" : `calc(${leftOffset} + 14px)`
          }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-[110px] font-serif italic uppercase leading-tight tracking-tight">
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
          <h1 className="text-5xl sm:text-7xl md:text-[110px] font-serif uppercase tracking-tight">
            DEVELOPER
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;


