import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

const tools = [
  { icon: "fa-brands fa-github", label: "Git & GitHub" },
  { icon: "fa-brands fa-html5", label: "HTML" },
  { icon: "fa-brands fa-react", label: "React" },
  { icon: "fa-solid fa-robot", label: "ChatGPT" },
  { icon: "fa-brands fa-js", label: "JavaScript" },
  { icon: "fa-solid fa-code", label: "TypeScript" },
  { icon: "fa-brands fa-figma", label: "Figma" },
  { icon: "fa-solid fa-code", label: "VS Code" },
  { icon: "fa-solid fa-database", label: "Database" },
];

const CardGrid = () => {
  return (
    <section 
    id="tools-section"
    className="relative overflow-hidden border-b border-white/10 min-h-screen pb-32">
      {/* 🌌 Custom Gradient Background — subtle blue-gray tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e0f] via-[#111217] to-[#141519] animate-gradientMove"></div>

      {/* Content Layer */}
      <div className="relative z-10 text-white pb-24 sm:pb-32 px-5">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl md:text-5xl mb-6 sm:mb-10 font-serif  font-bold sm:text-left mt-8 md:ml-0 -ml-1.5 "
        >
          STACK & TOOLS
        </motion.h2>

        {/* Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-[#111214]/70 text-white flex flex-col justify-center items-center 
                         p-6 sm:p-8 h-44 sm:h-56 md:h-60 overflow-hidden border border-white/10 
                         rounded-xl backdrop-blur-md transition-all duration-500 
                         hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
            >
              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 bg-gradient-to-br 
                              from-white/10 via-transparent to-transparent blur-xl"></div>

              {/* Enlarged hover icon */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 transform scale-75 
                              group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <i className={`${tool.icon} text-5xl sm:text-6xl md:text-7xl text-white`}></i>
              </div>

              {/* Icon + Label */}
              <p className="relative z-10 text-sm sm:text-base md:text-lg font-semibold text-center flex items-center gap-2 
                            transition-opacity duration-300 group-hover:opacity-30">
                <i className={`${tool.icon} text-base sm:text-lg md:text-xl`}></i>
                {tool.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;