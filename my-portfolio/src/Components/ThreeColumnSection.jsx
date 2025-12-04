import React from "react";

const ThreeColumnSection = () => {
  const items = [
    { title: "WORK", img: "/work.jpg", link: "/work" },
    { title: "SERVICES", img: "/phoneS.jpg", link: "/services" },
    { title: "PROFILE", img: "/GlaS.jpg", link: "/profile" },
  ];

  return (
  <section className="bg-[#0d0e0f] text-white border-t border-b border-white overflow-hidden">
      <div className="w-full px-6 pt-6 md:pt-6 pb-16 md:pb-72">
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="flex-shrink-0 md:flex-shrink md:flex md:flex-col items-start text-left space-y-4 group snap-center w-[97%] sm:w-[70%] md:w-auto"
            >
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-serif uppercase hover:underline decoration-white decoration-[1px] underline-offset-8 mb-4">
                {item.title}
              </h2>

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[450px] sm:h-[500px] md:h-[700px] object-cover rounded-sm shadow-lg group-hover:opacity-90 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection;

