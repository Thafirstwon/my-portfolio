import React from "react";
import { Link } from "react-router-dom";
import m1 from "../assets/multi.jpg";
import Mozart01 from "../assets/Mozart[1].jpg";

const projects = [
  {
    id: "zedx",
    title: "New portfolio, next chapter",
    description: "Elevating brands, businesses, and creatives.",
    img: m1,
    categories: ["Updates — October 11, 2025"],
    slug: "new-portfolio-next-chapter",
  },
  {
    id: "have",
    title: "New client: Moses Adegunle",
    description: "HAVE homes and services — design meets luxury.",
    img: Mozart01,
    categories: ["New Client — October 11, 2025"],
    slug: "new-client-moses-adegunle",
  },
];

const MoreNotes2 = () => {
  return (
    <div className="mt- overflow-hidden">
      <div className="py-16 px-4 pb-44 bg-white dark:bg-[#0d0e0f] text-black dark:text-white">
        <div className="mx-auto">
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-black dark:border-white mb-6"></div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-serif mb-8">
            MORE NOTES
          </h2>

          {/* Cards */}
          <div
            className="
              flex 
              md:flex-wrap 
              flex-nowrap 
              overflow-x-auto 
              scrollbar-hide 
              gap-6 
              md:gap-8 
              scroll-smooth 
              snap-x 
              snap-mandatory
            "
          >
            {projects.map((note) => (
              <Link
                key={note.id}
                to={`/notes/${note.slug}`}
                state={{ note }}
                className="
                  group 
                  flex-shrink-0 
                  w-[85%] 
                  sm:w-[420px] 
                  md:w-[480px] 
                  lg:w-[520px] 
                  snap-center
                "
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={note.img}
                    alt={note.title}
                    className="
                      w-full 
                      h-[400px] 
                      sm:h-[500px] 
                      md:h-[600px] 
                      lg:h-[640px] 
                      object-cover 
                      transition-transform 
                      duration-500 
                      group-hover:scale-105
                    "
                  />
                </div>
                <h3 className="text-1xl sm:text-2xl md:text-[33px] font-semibold mt-3 group-hover:underline">
                  {note.title}
                </h3>
                <p className="sm:text-xl md:text-[22px] mt-1">
                  {note.categories}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mb-4"></div>
    </div>
  );
};

export default MoreNotes2;
