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
  const { menuX, contactX } = useNavbarAlignment();

  const hasPositions = menuX > 0 && contactX < window.innerWidth;

  const sectionStyle = hasPositions
    ? {
        paddingLeft: `${menuX}px`,
        paddingRight: `${window.innerWidth - contactX}px`,
      }
    : {};

  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { clientX } = e;
      const mid = window.innerWidth / 2;

      // if mouse is inside container only
      const bounds = container.getBoundingClientRect();
      if (
        e.clientY < bounds.top ||
        e.clientY > bounds.bottom
      ) {
        return;
      }

      if (clientX > mid + 40) {
        container.scrollBy({ left: 15, behavior: "smooth" });
      } else if (clientX < mid - 40) {
        container.scrollBy({ left: -15, behavior: "smooth" });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white overflow-hidden">
      {/* Full width top border */}
      <div className="border-t border-black dark:border-white"></div>

      {/* Scrollable section with snap */}
      <div
        ref={scrollRef}
        className="overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
        style={sectionStyle}
      >
        <div className="flex space-x-6 px-4 pt-6 pb-40 sm:pb-56">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col flex-shrink-0 w-[80vw] sm:w-[340px] md:w-[440px] lg:w-[520px]
 snap-center"
            >
              <a
                href={item.link}
                className="text-2xl sm:text-3xl md:text-4xl font-medium font-suisse text-left mb-4 sm:mb-6 hover:underline decoration-[1px] underline-offset-4"
              >
                {item.title}
              </a>

              <a href={item.link}>
                <img
                  src={item.img}
                  alt={item.title}
                 className="w-full h-[400px] sm:h-[420px] md:h-[520px] lg:h-[560px] object-cover"
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