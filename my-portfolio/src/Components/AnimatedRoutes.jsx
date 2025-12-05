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
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const pageTransition = { duration: 0.4, ease: "easeInOut" };

function AnimatedRoutes({
  isLockedModalOpen,
  setIsLockedModalOpenFromNav,
  overlayOpen,
  setOverlayOpen,
}) {
  const location = useLocation();

  return (
    <div className="relative bg-[#0d0e0f] text-white min-h-screen">
      {/* persistent background */}
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
                  isLockedModalOpen={isLockedModalOpen}
                  setIsLockedModalOpenFromNav={setIsLockedModalOpenFromNav}
                  overlayOpen={overlayOpen}
                  setOverlayOpen={setOverlayOpen}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />

            {/* ✅ Catch-all route for unmatched paths */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center p-10">
                  <h1 className="text-4xl">404 — Page Not Found</h1>
                </div>
              }
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;

















































// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect } from "react";

// import Homepage from "./Homepage";
// import ProfilePage from "./ProfilePage";
// import ContactPage from "./ContactPage";
// import ServicePage from "./ServicePage";
// import Work from "./WorkPage";
// import Lab from "./Lab";
// import NotesPage from "./NotesPage";
// import NoteDetail from "./NoteDetail";
// import Download from "./Download";

// const pageVariants = {
//   initial: { opacity: 0, y: 10 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -10 },
// };

// function AnimatedRoutes({
//   isLockedModalOpen,
//   setIsLockedModalOpenFromNav,
//   overlayOpen,
//   setOverlayOpen,
// }) {
//   const location = useLocation();

//   // Redirect "/menu" to "/" for route animation purposes
//   const locationForRoutes =
//     location.pathname === "/menu" ? { ...location, pathname: "/" } : location;

//   // Scroll to top whenever the route changes
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location.pathname]);

//   return (
//     <div className="relative bg-[#0d0e0f] text-white min-h-screen overflow-hidden">
//       {/* Persistent dark background that never unmounts */}
//       <div className="fixed inset-0 bg-[#0d0e0f] -z-10" />

//       <AnimatePresence mode="wait" initial={false}>
//         <motion.div
//           key={locationForRoutes.pathname}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           variants={pageVariants}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="min-h-screen"
//         >
//           <Routes location={locationForRoutes}>
//             <Route path="/" element={<Homepage />} />
//             <Route path="/profile" element={<ProfilePage />} />
//             <Route path="/services" element={<ServicePage />} />
//             <Route path="/lab" element={<Lab />} />
//             <Route path="/notes" element={<NotesPage />} />
//             <Route path="/notes/:slug" element={<NoteDetail />} />
//             <Route path="/download" element={<Download />} />
//             <Route
//               path="/work"
//               element={
//                 <Work
//                   isLockedModalOpen={isLockedModalOpen}
//                   setIsLockedModalOpenFromNav={setIsLockedModalOpenFromNav}
//                   overlayOpen={overlayOpen}
//                   setOverlayOpen={setOverlayOpen}
//                 />
//               }
//             />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// export default AnimatedRoutes;













