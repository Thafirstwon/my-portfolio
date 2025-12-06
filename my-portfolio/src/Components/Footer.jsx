import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#0d0e0f] text-white flex flex-col justify-between min-h-[85vh] md:min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated Names */}
      <motion.div
        className="flex flex-col items-center justify-center flex-grow font-serif leading-none text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.35 } },
        }}
      >
        <motion.h1
          className="text-[28vw] xs:text-[30vw] sm:text-[25vw] md:text-[20vw] lg:text-[15vw] origin-top-right"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          whileHover={{ skewX: 6, x: 24 }}
          transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
        >
          JINAD
        </motion.h1>

        <motion.h1
          className="text-[26vw] xs:text-[30vw] sm:text-[25vw] md:text-[20vw] lg:text-[15vw] origin-bottom-left"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          whileHover={{ skewX: -6, x: -24 }}
          transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
        >
          STEFAN
        </motion.h1>
      </motion.div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center md:flex-row md:justify-between  sm:text-xl md:text-base border-t border-white px-6 py-6 space-y-8 md:space-y-0 font-semibold">
        {/* Links Grouped for Mobile */}
        <div className="flex flex-col items-center md:flex-row md:gap-x-4 text-center">
          <div>
            <a href="/download" className="hover:underline">
              Downloads
            </a>,
            <a href="https://github.com/bigboy-dgreat" 
            target="_blank"
            className="hover:underline">
              GitHub
            </a>
          </div>
          <div>
            
            <a
              href="https://www.instagram.com/jinad.stefan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/stefan-jinad47"
            target="_blank"
            className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center md:text-right">© 2025 ThaGreat</p>
      </div>
    </motion.footer>
  );
}


