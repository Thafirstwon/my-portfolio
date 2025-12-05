import React, { useState, useMemo, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import workImg from "../assets/multi.jpg";
import notesImg from "../assets/one.jpg";
import servicesImg from "../assets/Have1.jpg";
import profileImg from "../assets/audio.jpg";
import labImg from "../assets/oltim.png";
import { useNavbar } from "../Context/NavbarContext";
import ContactCta from "./ContactCta";
import Footer from "./Footer";
import { useNavbarAlignment } from "./useNavbarAlignment";

const Work = ({
  isLockedModalOpen,
  setIsLockedModalOpenFromNav,
  overlayOpen,
  setOverlayOpen,
}) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const { setNavbarStyles } = useNavbar();

  useEffect(() => {
    setNavbarStyles({
      background: "bg-[#0d0e0f]",
      text: "text-white",
    });
    return () => setNavbarStyles({ background: "bg-transparent" }); // ✅ Proper cleanup
  }, [setNavbarStyles]);

  useNavbarAlignment();

  const sectors = [
    "Arts & Culture",
    "Commerce & Retail",
    "Design & Architecture",
    "Food & Drink",
    "Hospitality & Travel",
    "Entertainment",
    "Professional Services",
    "Technology",
    "Banking & Finance",
    "Construction",
    "Fashion & Beauty",
    "Healthcare",
    "News & Media",
    "Publishing",
  ];

  const disciplines = [
    "Brand design",
    "Business & brand strategy",
    "Creative direction",
    "Design systems",
    "Motion design",
    "Organizational design",
    "Product & digital strategy",
    "Product design",
    "Prototyping",
    "Spatial design",
    "Team management",
    "UX & UI design",
  ];

  const projects = [
    {
      id: "channel",
      title: "New Update",
      description: "Elevating brands, businesses, and creatives",
      status: "Case study",
      img: workImg,
      categories: ["Brand design", "Fashion & Beauty"],
      layout: "full",
      link: "https://jinadstefan-dev.vercel.app/",
    },
    {
      id: "studio-a",
      title: "ONE",
      description:
        "Enhance your nursing career with OMOZE's Accelerated Programs",
      status: "Case locked",
      img: notesImg,
      categories: ["Technology", "Healthcare"],
      locked: true,
    },
    {
      id: "studio-b",
      title: "HAVE",
      description: "Have Homes and Services",
      status: "Case locked",
      img: servicesImg,
      categories: ["Construction", "Product design"],
      locked: true,
    },
    {
      id: "brand-c",
      title: "BRAND C",
      description: "Business & Brand Strategy for an international brand",
      status: "Case locked",
      img: profileImg,
      categories: ["Business & brand strategy"],
      locked: true,
    },
    {
      id: "lab",
      title: "PORTFOLIO",
      description: "My first portfolio as a frontend-developer",
      status: "Case study",
      img: labImg,
      categories: ["Arts & Culture"], // ✅ fixed category match
      link: "https://thagreat-dev.vercel.app/",
    },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter.length === 0) return projects;
    return projects.filter((p) =>
      p.categories.some((c) =>
        selectedFilter.some(
          (filter) => c.toLowerCase() === filter.toLowerCase()
        )
      )
    );
  }, [selectedFilter, projects]);

  const handleProjectClick = (project) => {
    if (project.link) {
      setSelectedProject(project); // ✅ Needed for dynamic overlay
      setOverlayOpen(true);
    } else if (project.locked) {
      setSelectedProject(project);
      setIsLockedModalOpenFromNav(true);
      setShowError(false);
    }
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);

    setTimeout(() => {
      setIsLoading(false);
      if (password === "1234") {
        alert("Unlocked!");
        setIsLockedModalOpenFromNav(false);
        setPassword("");
      } else {
        setShowError(true);
      }
    }, 1500);
  };

  return (
    <section className="bg-[#0d0e0f] text-white overflow-hidden">
      {/* Header */}
      <div className="w-full py-2 pt-48">
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mb-5"></div>

        <h1 className="text-6xl md:text-7xl font-serif uppercase mb-20 text-center">
          WORK
        </h1>

        {/* Filters */}
        <div className="flex items-center justify-between mt-8 relative px-4 md:px-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen((prev) => !prev)}
              className="flex items-center gap-2 text-lg font-medium hover:underline relative ml-0 md:ml-[26px]"
            >
              <span>Filters</span>
              <FaChevronDown
                className={`text-[15px] transition-transform ${
                  filtersOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {selectedFilter.length > 0 && (
                <motion.div
                  key={selectedFilter.length}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute -top-3 left-20 bg-white/70 text-black font-bold w-6 h-6 flex items-center justify-center shadow-md"
                >
                  {selectedFilter.length}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {selectedFilter.length > 0 && (
            <button
              onClick={() => setSelectedFilter([])}
              className="text-lg hover:underline underline-offset-2 mr-4 md:mr-0"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filtersOpen && (
        <div className="max-w-[1858px] mx-auto border-t border-white"></div>
      )}

      <div className="p-4">
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="py-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-96 gap-y-8 ml-1 md:ml-10">
                {/* Sectors */}
                <div>
                  <h4 className="mb-4 text-lg font-medium text-gray-600 uppercase">
                    Sectors
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-64 gap-y-2">
                    {sectors.map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setSelectedFilter((prev) =>
                            prev.includes(s)
                              ? prev.filter((f) => f !== s)
                              : [...prev, s]
                          );
                        }}
                        className="flex items-center gap-3 text-[1.25rem] font-medium text-left hover:text-gray-300 whitespace-nowrap"
                      >
                        <span className="relative w-5 h-5 border flex-shrink-0 border-white">
                          {selectedFilter.includes(s) && (
                            <span className="absolute inset-[5px] bg-white"></span>
                          )}
                        </span>
                        <span>{s}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Disciplines */}
                <div className="md:col-span-1">
                  <h4 className="mb-4 text-lg font-medium text-gray-600 uppercase">
                    Disciplines
                  </h4>
                  <div className="flex flex-col gap-4">
                    {disciplines.map((d) => (
                      <button
                        key={d}
                        onClick={() => {
                          setSelectedFilter((prev) =>
                            prev.includes(d)
                              ? prev.filter((f) => f !== d)
                              : [...prev, d]
                          );
                        }}
                        className="flex items-center gap-3 text-[1.25rem] font-medium text-left hover:text-gray-300 whitespace-nowrap"
                      >
                        <span className="relative w-5 h-5 border flex-shrink-0 border-white">
                          {selectedFilter.includes(d) && (
                            <span className="absolute inset-[5px] bg-white"></span>
                          )}
                        </span>
                        <span>{d}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Single Projects Section */}
        <div className="">
          {filteredProjects.length > 0 ? (
            <div className="w-full space-y-10 ml-0">
              {filteredProjects.map((p) => (
                <article
                  key={p.id}
                  className="cursor-pointer"
                  onClick={() => handleProjectClick(p)}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-[105vw] sm:w-full  h-[500px] sm:h-[800px] object-cover rounded-sm shadow-lg -ml-[1.vw] sm:ml-1"
                  />
                  <div className="mt-6 hover:underline">
                    <h3 className="uppercase font-semibold text-[22px] sm:text-[33px]">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[18px] sm:text-[33px]">{p.description}</p>
                  </div>
                  <div className="text-xl text-gray-400 mt-2">{p.status}</div>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-7xl mx-auto p-12 text-center border rounded-md border-white/5">
              <p className="text-lg mb-4">
                Sorry, no project found matching these filters
              </p>
              <button
                onClick={() => setSelectedFilter([])}
                className="underline decoration-white underline-offset-4"
              >
                Clear your filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Overlay — now dynamic */}
      <AnimatePresence>
        {overlayOpen && selectedProject?.link && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0d0e0f] z-50 flex flex-col"
          >
            <motion.iframe
              key="iframe"
              src={selectedProject.link}
              className="flex-grow w-full h-full border-0"
              title={`${selectedProject.title} Case Study`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Locked Modal */}
      {isLockedModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-[#0d0e0f] flex flex-col items-center justify-start z-40 pt-32 overflow-hidden">
          <div className="w-screen border-t border-white"></div>
          <div className="max-w-7xl w-full px-4">
            <div className="pt-8 flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-serif uppercase">
                  CASE LOCKED
                </h3>
              </div>

              <div className="w-3/4">
                <p className="text-gray-50 mb-10 text-[27.5px] font-semibold">
                  Sorry, this case study is password protected.
                </p>
                <form onSubmit={handleSubmitPassword} className="flex gap-4">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-grow bg-transparent border-b border-white focus:outline-none focus:border-white/80 text-white py-2 w-full"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-2 border border-white/40 hover:border-white font-medium flex items-center justify-center min-w-[120px]"
                  >
                    {isLoading ? (
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        {[...Array(8)].map((_, i) => (
                          <span
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-gray-400 rounded-full"
                            style={{
                              transform: `rotate(${i * 45}deg) translate(8px)`,
                              animation: "spinDots 1s linear infinite",
                              animationDelay: `${i * 0.12}s`,
                            }}
                          ></span>
                        ))}
                      </div>
                    ) : (
                      "Unlock"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {showError && (
            <div className="fixed bottom-0 left-0 w-full bg-white text-black text-center py-3 text-sm tracking-wide">
              Sorry, wrong password. Please{" "}
              <Link
                to="/contact"
                className="underline underline-offset-2 hover:text-gray-700"
              >
                contact me
              </Link>{" "}
              if you need help.
            </div>
          )}
        </div>
      )}

      <style>
        {`
          @keyframes spinDots {
            0% { opacity: 1; transform: rotate(0deg) translate(8px); }
            100% { opacity: 1; transform: rotate(360deg) translate(8px); }
          }
        `}
      </style>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mt-36 mb-12"></div>

      <ContactCta />
      <Footer />
    </section>
  );
};

export default Work;


