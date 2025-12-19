import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import im1 from '../assets/Tm.jpg'

// Example quotes and images
const quotes = [
  {
    text: "A man who has no imagination has no wings. No matter how big the talent, ambition or determination is.",
    author: "Napoleon Hill",
    img: "/grow.webp",
  },
  {
    text: "The highest human act is to inspire.",
    author: "Nipsey Hussle",
    img: "/the great.png",
  },
  {
    text: "Art enables us to find ourselves and lose ourselves at the same time.",
    author: "Thomas Merton",
    img: "/Tm.jpg",
  },
  {
    text: "A quitter never wins - And a winner never quits.",
    author: "Napoleon Hill",
    img: "/grow.webp",
  },
];

const Fav = () => {
  const [activeAuthor, setActiveAuthor] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
  <section className="bg-white dark:bg-[#0d0e0f] text-black dark:text-white py-20 pb-48 px-0 overflow-hidden">
  {/* Title */}
  <motion.h2
    variants={fadeIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-serif mb-16 text-center tracking-wide"
  >
    Favourite Quotes
  </motion.h2>

  {/* Full-width bordered container */}
  <div className="relative  px-3 sm:px-15 max-w-[96vw] mx-auto md:px-20 lg:px-32 py-12">
    {/* Glowing border effect */}
    <div className="absolute inset-0 rounded-none border border-[#3a3b3b] lg:-mr-1 lg:-ml-1.5 md:ml-1.5 md:mr-1.5"/>

    {/* Content */}
    <div className="relative flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-center">
      {/* LEFT SIDE - QUOTES */}
      <div className="flex-1 space-y-10">
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <p className="text-lg sm:text-xl italic text-black dark:text-gray-300 leading-relaxed mb-4">
              “{quote.text}”
            </p>
            <motion.span
              onMouseEnter={() => setActiveAuthor(quote)}
              onMouseLeave={() => setActiveAuthor(null)}
              className="block text-base sm:text-lg font-medium text-black dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              — {quote.author}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* RIGHT SIDE - IMAGE PREVIEW */}
      <div className="flex-1 hidden md:flex justify-center items-center relative min-h-[420px]">
        <AnimatePresence mode="wait">
          {activeAuthor ? (
            <motion.img
              key={activeAuthor.author}
              src={activeAuthor.img}
              alt={activeAuthor.author}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-2xl shadow-xl object-cover w-[380px] h-[420px]"
            />
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-[380px] h-[420px] bg-[#141516] rounded-2xl flex items-center justify-center text-gray-500"
            >
              Hover a name →
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  </div>
</section>

  );
};

export default Fav;


