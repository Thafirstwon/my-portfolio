
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/solo.png", "/multi.jpg", "/cam.webp"];

const skills = [
  "Front-end development",
  "Creative direction",
  "Responsive UI implementation",
  "UX-focused design integration",
  "Interactive prototyping",
  "Performance optimization",
  "Animation and motion design",
];

const Design = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Autoplay with pause
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const next = () => setCurrent((p) => (p + 1) % images.length);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) prev();
    else if (info.offset.x < -swipeThreshold) next();
    setIsPaused(false);
  };

  return (
    <section className="bg-[#0d0e0f] text-white border-t border-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-3.5 sm:px-5 lg:px-5 py-6 sm:py-16 lg:py-8">
        {/* Left: Text */}
        <div className="flex flex-col justify-start">
          {/* Moved closer to top border */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-2 sm:mb-4 tracking-tight">
            FRONTEND
          </h2>

          <p className="font-suisse leading-relaxed max-w-3xl text-base sm:text-lg md:text-xl lg:text-[20.5px]">
            My approach is personal and meticulous, carefully attending to every
            detail and transforming code into experiences that feel intuitive and
            alive.
          </p>

          <ul className="space-y-2 sm:space-y-3 mt-6 sm:mt-3 ml-1 sm:ml-0">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-base sm:text-lg md:text-xl lg:text-[24px] font-normal"
              >
                <span className="w-1.5 h-1.5 bg-white flex-shrink-0"></span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image + controls */}
        <div className="flex flex-col items-center md:items-end">
          {/* Image */}
          <div
            className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-56 sm:h-72 md:h-[550px] lg:h-[750px] overflow-hidden shadow-lg rounded-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {images.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Service ${i + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === current ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
                style={{ zIndex: i === current ? 1 : 0 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={handleDragEnd}
              />
            ))}
          </div>

          {/* Counter + Arrows */}
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-4 flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-400 tracking-wide ml-2 sm:ml-4">
              {current + 1}/{images.length}
            </span>
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={prev}
                className="p-2 text-gray-400 hover:text-gray-200 transition"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={next}
                className="p-2 text-gray-400 hover:text-gray-200 transition"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;

