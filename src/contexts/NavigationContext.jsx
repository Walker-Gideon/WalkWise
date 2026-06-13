import { createContext, useState } from "react";

export const NavigationContext = createContext();
export { useNav } from "./useNav";

export function NavigationProvider({ children }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function collapseOnMobile() {
    if (window.innerWidth <= 650) {
      closeMobileMenu();
    }
  }

  const value = {
    isSidebarExpanded,
    isMobileMenuOpen,
    setIsSidebarExpanded,
    setIsMobileMenuOpen,

    // Functions
    closeMobileMenu,
    collapseOnMobile,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;
