import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/multi.jpg";
import img2 from "../assets/cam.webp";
import img3 from "../assets/one.jpg";
import { useNavbar } from "../Context/NavbarContext";

const milestones = [
  {
    year: "2025",
    image: img1,
    title: "NEW PORTFOLIO",
    description:
      "This update marks a new chapter in redefining my portfolio.",
  },
  {
    year: "2025",
    image: img2,
    title: "HAVE",
    description:
      "Collaborated with Mozart on the frontend development of the HAVE website and app.",
  },
  {
    year: "2025",
    image: img3,
    title: "ONE",
    description:
      "Contributed as a Frontend Developer in building the ONE web application.",
  },
];

const Milestone = () => {
  const scrollRef = useRef(null);
  const { setDarkNavbar } = useNavbar();

  // Navbar tweak
  useEffect(() => {
    // Milestones section is dark background → dark navbar
    setDarkNavbar();
  }, [setDarkNavbar]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white border-t border-b border-black dark:border-white overflow-hidden relative">
      <div className="w-full px-5 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-6 pt-6 md:pt-6 pb-16 md:pb-44 relative">
        {/* Title + arrows */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-5 font-serif font-bold flex sm:block justify-between items-center">
            MILESTONES
          </h2>

          {/* Scroll arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2 hover:text-gray-400 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 hover:text-gray-400 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable area */}
        <div className="relative">
          {/* Fading edges — only visible on mobile */}
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#0d0e0f] to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#0d0e0f] to-transparent pointer-events-none md:hidden"></div>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="
              flex md:grid md:grid-cols-3 gap-6 
              overflow-x-auto md:overflow-visible 
              snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4
            "
          >
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="
                  flex-shrink-0 md:flex-shrink md:flex md:flex-col 
                  min-w-[85%] sm:min-w-[70%] md:min-w-0 
                  snap-center
                "
              >
                <div className="border-t border-b border-black dark:border-white mb-6 w-full" />
                <h3 className="text-xl font-bold mb-4">{item.year}</h3>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover mb-4 rounded-sm"
                />

                <p className="text-sm md:text-base leading-relaxed">
                  <span className="font-bold">{item.title} </span>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;

