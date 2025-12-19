import React from "react";
import { motion } from "framer-motion";
import atupa from "../assets/atupa.png";

const ContactCta2 = () => {
  return (
    <section className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white min-h-screen flex items-center justify-center border-b border-black dark:border-white px-4 sm:px-6 lg:px-12 mt-12 py-36 sm:pb-56">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center flex flex-col items-center"
      >
        {/* Image */}
        <motion.img
          src={atupa}
          alt="Project Preview"
          className="mx-auto w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-6 leading-snug"
        >
          I'd love to hear about <br className="hidden sm:block md:block" /> your next
          project.
        </motion.h2>

        {/* Link with static underline and soft hover glow */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mt-6 inline-block font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl text-black dark:text-white transition-all duration-300 group"
        >
          <span className="relative z-10 group-hover:text-black dark:group-hover:text-gray-100 transition">
            Get in touch
          </span>
          {/* ✅ Static underline (always visible) */}
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black dark:bg-white"></span>
          {/* Soft glow on hover */}
          <span className="absolute -inset-1 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-all duration-500 bg-black dark:bg-white/10"></span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactCta2;