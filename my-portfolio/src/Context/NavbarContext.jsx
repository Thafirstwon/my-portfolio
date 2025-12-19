import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");
    const [isTransparentOverDark, setIsTransparentOverDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const setDarkNavbar = () => setNavbarBackground("dark");
  const setTransparentNavbar = () => setNavbarBackground("transparent");
  const setMidDarkNavbar = () => setNavbarBackground("midDark");

  return (
     <NavbarContext.Provider
      value={{
        navbarBackground,
        setDarkNavbar,
        setTransparentNavbar,
        setMidDarkNavbar,
        isTransparentOverDark,
        setIsTransparentOverDark,
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </NavbarContext.Provider> 
  );
};

export const useNavbar = () => useContext(NavbarContext);


