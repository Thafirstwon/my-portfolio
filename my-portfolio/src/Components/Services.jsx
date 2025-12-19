import React from "react";
import { useNavbarAlignment } from "./useNavbarAlignment";

const items = [
  { title: "Services", img: "/phoneS.jpg", link: "/services" },
  { title: "Profile", img: "/GlaS.jpg", link: "/profile" },
  { title: "Index", img: "/chita.jpeg", link: "#" },
  { title: "Lab", img: "/wire.jpg", link: "/lab" },
  { title: "Contact 1", img: "/trp.jpg", link: "/contact" },
];

const Services = () => {
  const { menuX,  contactX } = useNavbarAlignment();

  const hasPositions = menuX > 0 && contactX < window.innerWidth;

  const sectionStyle = hasPositions
  ? {
    paddingLeft: `${menuX}px`,
    paddingRight: `${window.innerWidth - contactX}px`,
  }
  : {};


  return (
    <div
    className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white overflow-hidden">
      {/* Full width top border */}
      <div className="border-t border-black dark:border-white"></div>

      {/* Scrollable section with snap */}
      <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth" style={sectionStyle}
      >
        <div className="flex space-x-4 sm:space-x-2 px-2 sm:px-2 pt-6 pb-40 sm:pb-56">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col flex-shrink-0 w-[70vw] sm:w-[320px] md:w-[444px] snap-center"
            >
              {/* Title link above image */}
              <a
                href={item.link}
                className="text-2xl sm:text-3xl md:text-4xl font-medium font-suisse text-left mb-4 sm:mb-6 hover:underline decoration-[1px] underline-offset-4"
              >
                {item.title}
              </a>

              {/* Image link */}
              <a href={item.link}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[480px] sm:h-[520px] md:h-[560px] object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

