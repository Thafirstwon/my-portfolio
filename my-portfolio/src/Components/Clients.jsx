import React from "react";
import { useNavbarAlignment } from "./useNavbarAlignment";

const Clients = () => {
  const columns = [
    {
      title: "Arts & Culture",
      direction: "up",
      clients: ["Mozart", "Dior", "Mozart", "Hermès", "Balenciaga", "Givenchy"],
    },
    {
      title: "Fashion & Beauty",
      direction: "down",
      clients: [
        "Vogue",
        "IMAGINATION",
        "Cosmopolitan",
        "Harper’s Bazaar",
        "GQ",
      ],
    },
    {
      title: "Luxury & Lifestyle",
      direction: "up",
      clients: ["Rolex", "Cartier", "Tiffany & Co.", "Have", "Bulgari",  "Prada"],
    },
  ];

  const section = {
    title: "About this list",
    description:
      "When the scope calls for more than one, I assemble and lead custom teams tailored to your project goals—bringing together product managers, designers, copywriters, and developers I know and trust to deliver cohesive, full-stack solutions with clarity and precision.",
  };

  const animationClass = (dir) =>
    dir === "down" ? "animate-scroll-down" : "animate-scroll-up";

  useNavbarAlignment();

  
  return (
<section className="relative bg-[#0d0e0f] text-white overflow-hidden py-16 side-nudge">
  {/* Full-width top border */}
  <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white"></div>

  {/* Content wrapper */}
  <div className="mx-auto">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight mt-8 mb-16 sm:text-left px-">
      BRANDS
    </h2>

    {/* Columns */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 pb-16 px-1">
      {columns.map((col, idx) => {
        const anim = animationClass(col.direction);
        return (
          <div key={idx} className="overflow-hidden relative h-56 sm:h-64 md:h-72 lg:h-80">
            <div
              className={`absolute left-0 top-0 w-full h-[200%] ${anim} transform-gpu`}
              style={{ willChange: "transform" }}
            >
              <div className="h-1/2 flex flex-col justify-start space-y-2 sm:space-y-3 pt-2 sm:pt-3">
                <h3 className="text-xs sm:text-sm md:text-base uppercase tracking-wider text-white border-t border-white/80 pt-2 sm:pt-3">
                  {col.title}
                </h3>
                {col.clients.map((client, i) => (
                  <p
                    key={i}
                    className="text-base sm:text-lg md:text-xl tracking-wide text-white"
                  >
                    {client}
                  </p>
                ))}
              </div>

              {/* Duplicate for smooth scroll */}
              <div
                aria-hidden="true"
                className="h-1/2 flex flex-col justify-start space-y-2 sm:space-y-3 pt-2 sm:pt-3"
              >
                <h3 className="text-xs sm:text-sm md:text-base uppercase tracking-wider text-white border-t border-white/80 pt-2 sm:pt-3">
                  {col.title}
                </h3>
                {col.clients.map((client, i) => (
                  <p
                    key={i + col.clients.length}
                    className="text-base sm:text-lg md:text-xl tracking-wide text-white"
                  >
                    {client}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* Full-width bottom border */}
  <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white/80"></div>

  {/* About this list */}
{/* About this list */}
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-20 mt-4 pr-[0.75rem] sm:pr-[1rem] md:pr-[1.5rem]">
  <div className="w-full md:w-1/4">
    <h3 className="font-medium text-xs sm:text-sm leading-relaxed text-gray-300 uppercase tracking-widest ml-1">
      {section.title}
    </h3>
  </div>
  <div className="w-full md:w-3/4">
    <p className="text-sm sm:text-base font-suisse text-gray-50 leading-relaxed">
      {section.description}
    </p>
  </div>
</div>

</section>


);

};

export default Clients;

