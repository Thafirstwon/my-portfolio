import React from 'react'

const works = [
  {
    title: "New Update",
    description: "Shaping the new standards of an iconic agency",
    img: "/multi.jpg",
    link: "/work",
    full: true,
  },
  {
    title: "HAVE",
    description: "Shaping the new standards of an iconic agency",
    img: "/hhh.webp",
    link: "/work",
    full: false,
  },
  {
    title: "ONE",
    description: "Defining the foundations of a new academy",
    img: "/on.png",
    link: "/work",
    full: false,
  },
];

const Work = () => {
  return (
    <div className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white px-[19px] sm:px-5 py-4 overflow-hidden border-t border-black dark:border-white">
      {/* Section Header */}
      <div className="flex flex-row justify-between item-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-3">Work</h2>
        <a
          href="/work"
          className="text-base sm:text-lg underline underline-offset-4 decoration-[1px] font-semibold decoration-white hover:decoration-gray-400 transition mt-5"
        >
          View all work
        </a>
      </div>

      {/* Projects */}
      <div className="space-y-10 mb-32">
        {works.map(
          (work, idx) =>
            work.full && (
              <div key={idx}>
                <a href={work.link} className="group block">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-[400px] sm:h-[600px] lg:h-[800px] object-cover"
                  />
                  <p className="mt-2 font-semibold group-hover:underline decoration-[1px]">
                    {work.title},
                  </p>
                  <p className="text-sm text-black  dark:text-gray-300 group-hover:underline decoration-[1px]">
                    {work.description}
                  </p>
                </a>
              </div>
            )
        )}

        {/* Two-column row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works
            .filter((work) => !work.full)
            .map((work, idx) => (
              <div
                key={idx}
                className={idx === 1 ? "md:col-span-1" : "md:col-span-2"}
              >
                <a href={work.link} className="group block">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-[400px] sm:h-[550px] lg:h-[700px] object-cover"
                  />
                  <p className="mt-2 font-semibold group-hover:underline decoration-[1px]">
                    {work.title},
                  </p>
                  <p className="text-sm text-black dark:text-gray-300 group-hover:underline decoration-[1px]">
                    {work.description}
                  </p>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

