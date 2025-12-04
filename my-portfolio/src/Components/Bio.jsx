import React, { useEffect, useState } from "react";
import img1 from "../assets/bolu.JPG";
import img2 from "../assets/stand firm.jpg";
import { useNavbar } from "../Context/NavbarContext";
import { useNavbarAlignment } from "./useNavbarAlignment";

const Bio = () => {
  const { setNavbarStyles } = useNavbar();
  const [showMore, setShowMore] = useState(false)

  // Navbar tweak
  useEffect(() => {
    setNavbarStyles({ background: "black" });
  }, [setNavbarStyles]);

  useNavbarAlignment();

  return (
    <section className="bg-[#0d0e0f] text-white overflow-x-hidden border-t border-white">
      <div
        className="
          w-full
          px-4 sm:px-5 md:px-6 lg:px-8 xl:px-6 
          pt-10 md:pt-16 pb-24 md:pb-40
        "
      >
        {/* Title */} 
        {/* text-6xl md:text-7xl font-serif uppercase mb-12 -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8" */}
        <h2
          className="
            text-5xl sm:text-6xl md:text-7xl font-serif uppercase
            mb-12 md:mb-20 -ml-0. sm:ml-[-4px] tracking-tight
          "
        >
          BIO
        </h2>

        {/* Bio text aligned right */}
        <div className="flex justify-end">
          <div
            className="
              w-full 
    max-w-[525px] lg:max-w-[1050px] 
    space-y-6 md:space-y-8
    text-base sm:text-lg md:text-xl
    leading-relaxed font-semibold
            "
          >
            <p>
              I'm a code-curious software developer who’s always wanted to
              understand how things work. I spend most of my time experimenting
              with modern technologies like React, Node.js, and TypeScript —
              refining the small details and pushing every project beyond
              expectations.
            </p>
            <p>
              My journey began with formal training and countless late nights of
              self-learning, but the real growth came from the teams I
              joined — especially at ONE, where I had the chance to collaborate
              with talented developers and designers who shaped how I think
              about scalable, user-focused solutions.
            </p>
            <p>
              Since then, I’ve kept {" "}
              {!showMore && (
                <button
                onClick={() => setShowMore(true)}
                className="text-sm md:text-base font-medium text-gray-400 hover:text-white transition"
                >
                  <span className="text-white text-xl">...</span> Show More
                </button>
              )}
              {showMore && (
                <>
                 iterating, optimizing, and building with one
              goal in mind — to create fast, intuitive, and reliable software
              that people love to use. I use my imagination to create meaningful
              digital experiences that bridge ideas and technology. This is what
              I do. And I love it.{" "}
              <button
              onClick={() => setShowMore(false)}
              className="text-sm md:text-base font-medium text-gray-400 hover:text-white transition underline underline-offset-2"
              >
                Show Less
              </button>
              </>
              )}
            </p>
          </div>
        </div>

        {/* Images */}
        <div
          className="
            flex justify-end flex-wrap sm:flex-nowrap gap-1 sm:gap-6 md:gap-1
            mt-16 md:mt-24
          "
        >
          <div
            className="
              flex-1 min-w-[160px] max-w-[420px] md:max-w-[520px]
            "
          >
            <img
              src={img1}
              alt="bio-img-1"
              className="w-full h-[305px] sm:h-[550px] md:h-[600px] object-cover rounded-sm"
            />
          </div>

          <div
            className="
              flex-1 min-w-[160px] max-w-[420px] md:max-w-[520px]
            "
          >
            <img
              src={img2}
              alt="bio-img-2"
              className="w-full h-[305px] sm:h-[550px] md:h-[600px] object-cover object-[center_10%] rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;

