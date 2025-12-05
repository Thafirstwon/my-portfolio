import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useNavbar } from "../Context/NavbarContext";

import workImg from "../assets/work.jpg";
import notesImg from "../assets/22book.jpg";
import servicesImg from "../assets/stud.jpg";
import profileImg from "../assets/GlaS.jpg";
import labImg from "../assets/wire.jpg";
import contactImg from "../assets/trp.jpg";

const menuItems = [
  { label: "WORK", img: workImg, path: "/work" },
  { label: "NOTES", img: notesImg, path: "/notes" },
  { label: "SERVICES", img: servicesImg, path: "/services" },
  { label: "PROFILE", img: profileImg, path: "/profile" },
  { label: "LAB", img: labImg, path: "/lab" },
  { label: "CONTACT", img: contactImg, path: "/contact" },
];

const Navbar = ({
  isLockedModalOpen,
  setIsLockedModalOpenFromNav,
  overlayOpen,
  setOverlayOpen,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);

  const { navbarStyles, setDarkNavbar } = useNavbar();

  const toggleTheme = () => setIsDark((prev) => !prev);


  useEffect(() => {
    if (location.pathname === "/contact") {
      setDarkNavbar();
    }
  }, [location.pathname]);
  
  
  useEffect(() => {
    if (location.pathname === "/lab") {
      setDarkNavbar();
    }
  }, [location.pathname]);


  useEffect(() => {
    if (location.pathname === "/menu") {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    if (!menuOpen) {
      navigate("/menu");
    } else {
      if (window.history.state && window.history.state.idx > 0) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 w-full flex justify-between items-center px-3 sm:px-3 py-4 sm:py-6
          text-base font-semibold z-[400] transition-colors duration-500 overflow-hidden
           ${location.pathname === "/contact" ? "bg-[#0d0e0f]" : navbarStyles.background}`}
      >
        {/* Left: Menu Button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <div className="relative w-7 sm:w-8 h-4 flex items-center justify-center">
            <motion.span
              initial={false}
              animate={{
                y: menuOpen ? 0 : -4,
                rotate: menuOpen ? 45 : 0,
              }}
              transition={{
                y: { duration: 0.45, ease: "easeInOut", delay: menuOpen ? 0 : 0.3 },
                rotate: { duration: 0.45, ease: "easeInOut", delay: menuOpen ? 0.3 : 0 },
              }}
              className="absolute left-[6%] sm:left-1/4 -translate-x-1/2 w-6 h-[2px] bg-white rounded"
            />
            <motion.span
              initial={false}
              animate={{
                y: menuOpen ? 0 : 4,
                rotate: menuOpen ? -45 : 0,
              }}
              transition={{
                y: { duration: 0.45, ease: "easeInOut", delay: menuOpen ? 0 : 0.3 },
                rotate: { duration: 0.45, ease: "easeInOut", delay: menuOpen ? 0.3 : 0 },
              }}
              className="absolute left-[6%] sm:left-1/4 -translate-x-1/2 w-6 h-[3px] bg-white rounded"
            />
          </div>

          {/* Label — hidden on mobile */}
          <div className="relative hidden sm:block">
            <motion.span
              initial={false}
              animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? -6 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-[1.125rem] sm:text-[1.325rem] font-suisse font-thin hover:underline underline-offset-4"
            >
              Menu
            </motion.span>
            <motion.span
              initial={false}
              animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : 6 }}
              transition={{ duration: 0.25 }}
              className="text-[1.125rem] sm:text-[1.325rem] font-suisse font-thin absolute left-0 top-0 hover:underline underline-offset-2"
              aria-hidden={menuOpen ? "false" : "true"}
            >
              Close
            </motion.span>
          </div>
        </button>

        {/* Center: Logo */}
        <span className="text-2xl sm:text-2xl md:text-3xl tracking-widest text-center mx-auto">
          JINAD STEFAN
        </span>

        {/* Right: Contact / Close X — hidden on mobile */}
        <div>
          <div className="hidden sm:block">
            {(isLockedModalOpen || overlayOpen) ? (
              <button
                onClick={() => {
                  if (isLockedModalOpen) setIsLockedModalOpenFromNav(false);
                  else if (overlayOpen) setOverlayOpen(false);
                }}
                className="text-[1.125rem] sm:text-[1.325rem] font-suisse font-thin hover:underline underline-offset-4 mt-1"
              >
                Close X
              </button>
            ) : (
              <Link
                to="/contact"
                className="text-[1.125rem] sm:text-[1.325rem] font-suisse font-medium hover:underline underline-offset-4 mr-1"
              >
                Contact
              </Link>
            )}
          </div>

          {/* Mobile: only show X when overlay or modal is open */}
          <div className="sm:hidden">
            {(isLockedModalOpen || overlayOpen) && (
              <button
                onClick={() => {
                  if (isLockedModalOpen) setIsLockedModalOpenFromNav(false);
                  else if (overlayOpen) setOverlayOpen(false);
                }}
                className="text-[1.125rem] font-suisse font-thin hover:underline underline-offset-4 mr-1"
              >
                X
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // ✅ FIXED: force solid background color
            className="fixed inset-0 z-[300] bg-[#0d0e0f] text-white overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row h-full w-full px-4 sm:px-6">
              {/* Left: Menu Links */}
              <div className="flex flex-col justify-center items-start w-full lg:w-1/2 mt-[4.5rem]">
                <div className="flex flex-col gap-2 md:gap-4">
                  {menuItems.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.45,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        to={m.path}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => {
                          setActiveIndex(i);
                          setMenuOpen(false);
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl font-serif cursor-pointer hover:text-gray-400 select-none"
                      >
                        {m.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Image Preview */}
              <div className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 mt-6 lg:mt-[4.5rem]">
                <div className="relative w-[240px] sm:w-[320px] md:w-[420px] lg:w-[540px] h-[340px] sm:h-[440px] md:h-[520px] lg:h-[620px]">
                  {menuItems.map((m, i) => {
                    const visible = hoverIndex === i || activeIndex === i;
                    return (
                      <motion.img
                        key={m.label}
                        src={m.img}
                        alt={`${m.label} preview`}
                        initial={false}
                        animate={{
                          opacity: visible ? 1 : 0,
                          scale: visible ? 1 : 0.95,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-xl"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm md:text-base gap-2 sm:gap-0">
              <div>&copy; 2025 Jinad Stefan</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="px-2 py-1 border-white/20 rounded hover:bg-white/5"
                >
                  Theme: {isDark ? "dark" : "light"}
                </button>
                <a className="hover:underline" href="https://www.instagram.com/jinad.stefan/" target="_blank" rel="noreferrer">
                  Instagram,
                </a>
                <a className="hover:underline" href="https://www.linkedin.com/in/stefan-jinad47" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

