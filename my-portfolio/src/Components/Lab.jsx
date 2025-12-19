import React from 'react'
import Footer from './Footer';
import ContactCta from './ContactCta';

const Lab = () => {
  const section = {
    title: "About the lab",
    description:
      "----------------------------------------------------------------Check back another time-------------------------------------------------------",
  };

  return (
    <section className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white overflow-hidden">
      {/* Header Section */}
      <div className=" py-2 pt-40 side-nudge">
        {/* Top full-width border */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-black dark:border-white mb-10"></div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-serif uppercase pb-32 text-center">
          LAB
        </h1>

        {/* Inner border before About section */}
        <div className="mb-4">
          <div className="border-t border-black dark:border-white side-nudge"></div>
        </div>

        {/* About this list section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mt-5">
          <h3 className="font-medium w-full md:w-1/4 text-sm leading-relaxed">
            {section.title}
          </h3>
          <p className="text-sm font-medium w-full md:w-3/4">
            {section.description}
          </p>
        </div>
      </div>

      {/* Bottom full-width border */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-black dark:border-white mt-48"></div>

      {/* ContactCta */}
      <ContactCta />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Lab;

