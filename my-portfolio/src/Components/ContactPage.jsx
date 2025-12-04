import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ThreeColumnSection from "./ThreeColumnSection";
import Footer from "./Footer";
import img1 from "../assets/sets.jpg";
import img2 from "../assets/sets.jpg";
import img3 from "../assets/sets.jpg";
import img4 from "../assets/sets.jpg";
import img5 from "../assets/sets.jpg";
import { useNavbar } from "../Context/NavbarContext";
import { useNavbarAlignment } from "./useNavbarAlignment";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactPage = () => {
  const { setNavbarStyles } = useNavbar();

useNavbarAlignment();

  return (
    <motion.div
      key="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0d0e0f] text-white overflow-hidden pt-28"
    >
      <div className="flex flex-col min-h-screen">
        {/* CONTACT heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-31 sm:pt-36 md:pt-40 pb-12 sm:pb-8 text-center px-4"
        >
          <div className="w-full h-[1px] bg-white" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif uppercase py-6 sm:py-8 md:py-10 tracking-wider">
            CONTACT
          </h1>
          <div className="w-full h-[1px] bg-white mt-6 sm:mt-24" />
        </motion.div>

        {/* Info grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-4 sm:px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-12 md:gap-16 text-base sm:text-lg md:text-xl"
        >
          {/* Inquiries */}
           <div className="text-left">
    <h3 className="text-3xl sm:text-3xl font-medium font-serif sm:mb-16 md:mb-20">
      Inquiries
    </h3>
  </div>

          {/* Email */}
          <div className="text-left md:text-left">
    <h3 className="text-2xl sm:text-2xl md:text-3xl font-medium font-serif mb-2">
      Email
    </h3>
    <a
      href="mailto:jinadbstefan@gmail.com"
      className="text-lg sm:text-xl md:text-1xl underline underline-offset-4 decoration-[1px] decoration-white hover:decoration-gray-400 transition"
    >
      Jinadbstefan@gmail.com
    </a>
  </div>

          {/* Office */}
          <div className="text-left md:text-right">
    <h3 className="text-2xl sm:text-3xl md:text-3xl font-medium font-serif mb-2">
      Office
    </h3>
    <p className="text-lg sm:text-xl md:text-1xl">Lagos, Nigeria</p>
  </div>
</motion.div>

<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    grid 
    grid-cols-2 
    md:grid-cols-3 
    gap-[6px]
    px-4 
    sm:px-6 
    md:px-8 
    lg:px-8 
    mr-0 
    md:mr-[-20px] 
    ml-1 
    md:ml-[-15px]
    mt-10
    overflow-hidden
  "
>
{[img2, img1, img3, img4, img5, img5].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Gallery image ${i + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`w-full object-cover ${
                i === 1
                  ? "h-[400px] sm:h-[500px] md:h-[600px] row-span-2"
                  : "h-[200px] sm:h-[250px] md:h-[300px]"
              }`}
            />
          ))}
        </motion.div>

        {/* ThreeColumnSection */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-52 mr-[-10px] ml-[-5px]"
        >
          <ThreeColumnSection />
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8"
        >
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
