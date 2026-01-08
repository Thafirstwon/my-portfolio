import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Content from './Content';
import ThirdVersion from './ThirdVersion';
import ContactCta from './ContactCta';
import Footer from './Footer';
import { useNavbar } from '../Context/NavbarContext';

const downloads = [
  {
    category: "Resume",
    items: [
      {
        title: "",
        images: "/downloads/jb.jpg",
        file: "/downloads/jb.pdf",
      },
      {
        title: "",
        images: "/downloads/jb.jpg",
        file: "/downloads/jb.pdf",
      },
    ],
  },
];

const Download = () => {
    const { setDarkNavbar } = useNavbar();


  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

    useEffect(() => {
       setDarkNavbar(); // keep dark navbar
     }, [setDarkNavbar]);

  return (
    <section className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white py-16 pt-36">
      {/* Top Divider */}
      <div className='px-3 md:px-3'>
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-black dark:border-white mb-8"></div>

      {/* Header */}
      <h1 className="text-5xl md:text-8xl font-serif text-center mb-16 pb-16">
        DOWNLOADS
      </h1>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-black dark:border-white mb-6"></div>

      {/* Download Sections */}
      {downloads.map((section, index) => (
        <div key={index} className="mb-20">
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl  font-serif mb-6 border-b border-black dark:border-white pb-8  sm:pl-1.5">
            {section.category.toUpperCase()}
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-10 px-1 md:px-1 md:pl-2">
            {section.items.map((item, idx) => (
              <div key={idx} className={`${idx === 0 ? "" : ""}`}>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                <a
                  href={item.file}
                  download
                  className="group block relative overflow-hidden rounded-sm border border-black dark:border-white hover:border-gray-300 transition duration-500"
                >
                  <img
                    src={item.images || "/downloads/placeholder.png"}
                    alt={item.title}
                    className="w-[80%] md:w-[70%] lg:w-[50%] mx-auto shadow-lg border border-gray-700 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                    <span className="text-lg font-medium tracking-wide">
                      Download PDF
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>

      {/* Other Components */}
            <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=""
      >
        <Content />
      </motion.div>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] border-t border-black dark:border-white w-screen"></div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=""
      >
        <ThirdVersion />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=""
      >
        <ContactCta />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=""
      >
        <Footer />
      </motion.div>
    </section>
  );
};

export default Download;