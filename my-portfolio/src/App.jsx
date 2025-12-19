import { useEffect, useState } from "react";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Navbar from "./Components/Navbar"
import { useTheme } from "./Context/useTheme";

const App = () => {
  // Lifted modal state (shared between Navbar + Work)
  const [isLockedModalOpen, setIsLockedModalOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const { state } = useTheme()


 useEffect(() => {
  console.log("Applying theme:", state.theme);
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(state.theme);
}, [state.theme]);



  return (
    <div className="min-h-screen bg-[#0d0e0f] text-white">
      {/* Pass modal state + setter to Navbar */}
      <Navbar
        isLockedModalOpen={isLockedModalOpen}
        setIsLockedModalOpenFromNav={setIsLockedModalOpen}
        overlayOpen={overlayOpen}
        setOverlayOpen={setOverlayOpen}
      />

      {/* Pass modal state + setter to all pages via AnimatedRoutes */}
      <AnimatedRoutes
        isLockedModalOpen={isLockedModalOpen}
        setIsLockedModalOpenFromNav={setIsLockedModalOpen}
        overlayOpen={overlayOpen}
        setOverlayOpen={setOverlayOpen}
      />

     
    </div>
  );
};

export default App;






