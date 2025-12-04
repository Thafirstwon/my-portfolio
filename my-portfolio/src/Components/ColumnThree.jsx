import React from "react";

const ColumnThree = () => {
  const items = [
    { title: "WORK", img: "/work.jpg", link: "/work" },
    { title: "PROFILE", img: "/GlaS.jpg", link: "/profile" },
    { title: "LAB", img: "/wire.jpg", link: "/lab" },
  ];

  return (
    <section className="bg-[#0d0e0f] text-white border-t border-b border-white overflow-hidden px-5">
      <div className="w-full pt-6 md:pt-6 pb-16 md:pb-44">
        {/* On mobile: flex-row scrollable horizontally 
            On desktop: 3-column grid layout */}
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="flex-shrink-0 md:flex-shrink md:flex md:flex-col items-start text-left space-y-4 group snap-center w-[97%] sm:w-[70%] md:w-auto"
            >
              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-serif uppercase hover:underline decoration-white decoration-[1px] underline-offset-8 mb-4">
                {item.title}
              </h2>

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[450px] sm:h-[500px] md:h-[650px] object-cover rounded-sm shadow-lg group-hover:opacity-90 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColumnThree;
