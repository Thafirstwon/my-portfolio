import React from "react";
import img1 from "../assets/stu.jpg"; // large left image
import img2 from "../assets/stud.jpg"; // top-right
import img3 from "../assets/doll.jpg"; // mid-right
import img4 from "../assets/chaiiir.jpg"; // bottom row left
import img5 from "../assets/sets.jpg"; // bottom row right

const Studio = () => {
  return (
    <section className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white overflow-hidden">
      {/* Top border */}
      

      <div className="px-4 sm:px-6 lg:px-6 py-8 md:py-9">
        {/* === Title & Description === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start mb-10 md:mb-16">


          <h2
            className="col-span-12 md:col-span-3 text-4xl sm:text-5xl lg:text-6xl font-serif uppercase mr-0 
    md:mr-[-20px] 
    ml-0 
    md:ml-[-1px]"
          >
            STUDIO
          </h2>

          <p className="col-span-12 md:col-span-9 text-base sm:text-lg md:text-xl leading-relaxed font-medium text-black dark:text-gray-300 mt-4 md:mt-2">

        My home studio is where most of the work happens — calm, creative, and set up for collaboration. It’s got everything I need, and maybe too much comfort… it’s getting harder to leave.
          </p>
        </div>

        {/* === Top Image Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Large left image */}
          <img
            src={img1}
            alt="Studio main"
            className="
              w-full 
              object-cover 
              h-[260px] 
              sm:h-[360px] 
              md:h-[600px] 
              lg:h-[700px] 
              md:col-span-2 
              md:row-span-2 
              rounded-sm
            "
          />

          {/* Top-right image */}
          <img
            src={img2}
            alt="Studio detail top-right"
            className="
              w-full 
              object-cover 
              h-[220px] 
              sm:h-[260px] 
              md:h-[300px] 
              lg:h-[340px] 
              rounded-sm
            "
          />

          {/* Mid-right image */}
          <img
            src={img3}
            alt="Studio detail mid-right"
            className="
              w-full 
              object-cover 
              h-[220px] 
              sm:h-[260px] 
              md:h-[300px] 
              lg:h-[340px] 
              rounded-sm
            "
          />
        </div>

        {/* === Bottom Row (Hidden on mobile) === */}
        <div className="hidden sm:grid grid-cols-2 gap-4 sm:gap-6 mt-6 md:grid-cols-2">
          <img
            src={img4}
            alt="Studio bottom left"
            className="
              w-full 
              object-cover 
              h-[220px] 
              sm:h-[300px] 
              md:h-[360px] 
              lg:h-[380px] 
              rounded-sm
            "
          />
          <img
            src={img5}
            alt="Studio bottom right"
            className="
              w-full 
              object-cover 
              h-[220px] 
              sm:h-[300px] 
              md:h-[360px] 
              lg:h-[380px] 
              rounded-sm
            "
          />
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-whit mt-20 md:mt-40" />
    </section>
  );
};

export default Studio;
