import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Homepage from "./Homepage";
import ProfilePage from "./ProfilePage";
import ContactPage from "./ContactPage";
import ServicePage from "./ServicePage";
import Work from "./WorkPage";
import Lab from "./Lab";
import NotesPage from "./NotesPage";
import NoteDetail from "./NoteDetail";
import Download from "./Download";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.4, ease: "easeInOut" };

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="relative bg-[#0d0e0f] text-white min-h-screen">
      {/* persistent background if needed */}
      <div className="fixed inset-0 bg-[#0d0e0f] -z-10" />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen"
        >
          <Routes location={location}>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/:slug" element={<NoteDetail />} />
            <Route path="/download" element={<Download />} />
            <Route
              path="/work"
              element={
                <Work
                  isLockedModalOpen={false}
                  setIsLockedModalOpenFromNav={() => {}}
                  overlayOpen={false}
                  setOverlayOpen={() => {}}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
