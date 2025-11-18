import React from 'react'

const WorkMode = () => {
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
        "If I’m not available, I won’t leave you hanging. I can connect you with the right developer or assemble a capable team from my trusted network. With over 2 years in the field, I’ve built strong relationships with skilled freelancers, agency partners, and in-house talents—ensuring every recommendation is thoughtful, relevant, and rooted in a deep understanding of your project’s technical and creative needs.",
    },
    {
      title: "Inquiries",
      description:
        'Big or small, your project matters. Let’s connect and find the best way to move forward — quickly and together. If you’re passionate about your craft and driven to push boundaries, <a href="/contact" class="underline hover:text-gray-300 transition-colors">get in touch</a>.',
    },
  ];

  return (
    <div> 
       <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white"></div>
    <section className="text-white md:px-[6px] px- overflow-hidden">
      {/* Top line */}

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mt-6 mb-20">
        WORK MODES
      </h2>

      {/* Bottom line under heading */}
      {/* <div className="border-t border-white mb-20"></div> */}

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mb-16 pb-10">
          {/* Line above each section */}
          <div className="border-t border-white mb-2"></div>

          {/* Content under line */}
          
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 "> <h3 className={`font-medium font-serif w-full md:w-1/4 ${ section.title === "Inquiries" ? "text-5xl " : "text-[44px]" }`}>

              {section.title}
            </h3>
            <p className={`${
                  section.title === "Join the roster"
                  ? "text-xl font-medium"
                  : "ext-base sm:text-lg md:text-[22px] font-medium"
            } leading-relaxed w-full md:w-3/4`}
              dangerouslySetInnerHTML={{ __html: section.description}}>
            </p>
          </div>
        </div>
      ))}

      {/* Bottom line after last section */}
     
    </section>
    </div>
  );
};

export default WorkMode
