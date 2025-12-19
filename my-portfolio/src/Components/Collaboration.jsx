import React from "react";
import { useNavbarAlignment } from "./useNavbarAlignment";

const Collaboration = () => {
  const { sectionStyle } = useNavbarAlignment();

  const sections = [
    {
      title: "Solo",
      description:
        "When one developer is all you need, I can work independently or integrate seamlessly into your existing team—remote or on-site, agency-side or in-house. My experience spans freelance projects, agency collaborations, and full-time roles, delivering robust, scalable full-stack solutions that bring both front-end precision and back-end reliability to every build.",
    },
    {
      title: "Team",
      description:
        "When the scope calls for more than one, I assemble and lead custom teams tailored to your project goals—bringing together product managers, designers, copywriters, and developers I know and trust to deliver cohesive, full-stack solutions with clarity and precision.",
    },
    {
      title: "Agent",
      description:
        "If I’m not available, I won’t leave you hanging. I can connect you with the right developer or assemble a capable team from my trusted network. With over a decade in the field, I’ve built strong relationships with skilled freelancers, agency partners, and in-house talents—ensuring every recommendation is thoughtful, relevant, and rooted in a deep understanding of your project’s technical and creative needs.",
    },
    {
      title: "Join the roster",
      description:
        'I’m always looking to connect with new collaborators—whether to round out a team for an upcoming project or to make the right introduction to a client. If you’re passionate about your craft and driven to push boundaries, <a href="/contact" class="underline hover:text-gray-300 transition-colors">get in touch</a>.',
    },
  ];

  return (
    <section
      style={{
        ...sectionStyle,
        transition: "padding 0.4s ease-in-out",
      }}
      className="
        overflow-hidden bg-white dark:bg-[#0d0e0f] text-black dark:text-white
        py-16 sm:py-20 lg:py-2  
        px-6 sm:px-8 md:px-0   /* 👈 ensures balance on small screens */
      "
    >
        {/* Temporary guide for testing alignment
   <div className="absolute inset-y-0 right-3 border-l border-red-500 opacity-70 z-[9999] pointer-events-none"></div> */}
      {/* Top border line */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-black dark:border-white"></div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight mt-8 mb-12 sm:mb-20 md:text-left ml-[-13px] sm:ml-[10px]">
        COLLABORATION
      </h2>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mb-12 sm:mb-16 pb-24 collab-nudge-left">
          {/* Line above each section */}
        
           <div className="border-t border-black dark:border-white mb-4 sm:mb-6"></div>

          {/* Content */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-44 collab-nudge-left">
            <h3
              className={`font-medium font-suisse w-full md:w-1/4 md:ml-2 ${
                section.title === "Join the roster"
                  ? "text-base sm:text-lg"
                  : "text-2xl sm:text-3xl md:text-[50px] lg:ml-2"
              }`}
            >
              {section.title}
            </h3>

            <p
              className={`w-full md:w-3/2 leading-relaxed ${
                section.title === "Join the roster"
                  ? "text-sm sm:text-base"
                  : "text-base sm:text-lg md:text-[22px] font-suisse"
              }`}
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Collaboration;



