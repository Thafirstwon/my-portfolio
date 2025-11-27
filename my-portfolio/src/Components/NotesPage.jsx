import React, { useState, useMemo, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import m1 from "../assets/multi.jpg";
import solo from "../assets/solo.png";
import Mozart01 from "../assets/Mozart[1].jpg";
import { useNavbar } from "../Context/NavbarContext";
import ContactCta from "./ContactCta";
import Footer from "./Footer";
import { useNavbarAlignment } from "./useNavbarAlignment";

const NotesPage = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const { setDarkNavbar } = useNavbar();
  const { sectionStyle } = useNavbarAlignment();

  useEffect(() => {
    setDarkNavbar(); // keep dark navbar
  }, [setDarkNavbar]);

  const types = [
    "Awards",
    "Freelancing Tips",
    "New Client",
    "New Project",
    "Updates",
  ];

  const projects = [
    {
      id: "New",
      title: "New portfolio, next chapter",
      description: "Elevating brands, businesses, and creatives.",
      img: m1,
      categories: ["Updates — October 11, 2025"],
      slug: "new-portfolio-next-chapter",
    },
    {
      id: "Solo",
      title: "More than a solo Developer",
      description:
        "Enhance your nursing career with OMOZE's Accelerated Programs.",
      img: solo,
      categories: ["Updates — October 11, 2025"],
      slug: "solo-developer",
    },
    {
      id: "Client",
      title: "New client: Moses Adegunle",
      description: "HAVE homes and services — design meets luxury.",
      img: Mozart01,
      categories: ["New Client — October 11, 2025"],
      slug: "new-client-moses-adegunle",
    },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter.length === 0) return projects;
    return projects.filter((p) =>
      p.categories.some((cat) => {
        const categoryType = cat.split("—")[0].trim().toLowerCase();
        return selectedFilter.some(
          (filter) => categoryType === filter.toLowerCase()
        );
      })
    );
  }, [selectedFilter, projects]);

  const toggleFilter = (filter) => {
    setSelectedFilter((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };


  return (
    <section className="bg-[#0d0e0f] text-white overflow-hidden">
      {/* === Header + Filters Section === */}
      <div
        className="mx-auto px-4 sm:px-6 md:px-10 pt-32 sm:pt-40 pb-0"
        style={sectionStyle}
      >
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mt-11 sm:mt-20"></div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif uppercase mt-8 sm:mb-12 text-center">
          NOTES
        </h1>

        {/* === Filters === */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-6 sm:mt-10 relative">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen((prev) => !prev)}
              className="flex items-center gap-2 text-lg font-medium hover:underline relative -ml-1 md:ml-[12px]"
            >
              <span>Filters</span>
              <FaChevronDown
                className={`text-[15px] transition-transform ${
                  filtersOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Selected Filter Count */}
            <AnimatePresence>
              {selectedFilter.length > 0 && (
                <motion.div
                  key={selectedFilter.length}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute -top-2 left-24 bg-white/80 text-black text-xs sm:text-sm font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shadow-md"
                >
                  {selectedFilter.length}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {selectedFilter.length > 0 && (
            <button
              onClick={() => setSelectedFilter([])}
              className="text-xl sm:text-[27.5px] hover:underline underline-offset-2 mr-[-5px]"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {filtersOpen && <div className="max-w-[1860px] mx-auto border-t border-white px-4 sm:px-6 md:px-10"></div>}
      {/* === Filter Dropdown === */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="px-4 sm:px-5 pt-4 pb-4 md:ml-3"
            style={sectionStyle}
          >
            <h4 className="mb-4 text-base sm:text-lg font-medium text-gray-400 uppercase">
              Types
            </h4>
            <div className="grid grid-cols gap-3 sm:gap-4">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => toggleFilter(t)}
                  className="flex items-center gap-3 text-lg sm:text-2xl font-medium text-left hover:text-gray-300"
                >
                  <span className="relative w-4 h-4 sm:w-5 sm:h-5 border flex-shrink-0 border-white">
                    {selectedFilter.includes(t) && (
                      <span className="absolute inset-[4px] sm:inset-[5px] bg-white"></span>
                    )}
                  </span>
                  <span>{t.split("—")[0].trim()}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Projects Section === */}
      <div
        className="px-4 sm:px-10 md:px-10 mt-6 sm:mt-10 pb-20 ml-2 mr-[-5px]"
        style={sectionStyle}
      >
        {selectedFilter.length > 0 && filteredProjects.length === 0 ? (
          <div className="text-center border border-white/10 p-4 sm:p-12 rounded-sm">
            <p className="text-base sm:text-lg mb-4">
              Sorry, no project found matching these filters.
            </p>
            <button
              onClick={() => setSelectedFilter([])}
              className="underline underline-offset-4 decoration-white"
            >
              Clear your filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-4 -mx-4 sm:mx-0">
            {filteredProjects.map((p) => (
              <Link
                key={p.id}
                to={`/notes/${p.slug}`}
                className="group block hover:opacity-90 transition"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[360px] sm:h-[500px] md:h-[580px] object-cover rounded-sm shadow-lg"
                />
                <p className="mt-4 text-2xl sm:text-[28px] font-semibold group-hover:underline decoration-white">
                  {p.title}
                </p>
                <p className="text-gray-100 mt-1 text-base sm:text-lg">
                  {p.categories.join(", ")}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* === Divider + Footer === */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mt-16 sm:mt-28"></div>
      <ContactCta />
      <Footer />
    </section>
  );
};

export default NotesPage;