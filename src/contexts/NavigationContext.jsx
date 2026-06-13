import { createContext, useState } from "react";

export const NavigationContext = createContext();
export { useNav } from "./useNav";

export function NavigationProvider({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuClick, setIsMenuClick] = useState(false);

  function handleToggle() {
    setIsMenuClick(false);
  }

  function collapseOnMobile() {
    if (window.innerWidth <= 650) {
      setIsMenuClick(false);
    }
  }

  const value = {
    isExpanded,
    isMenuClick,
    setIsExpanded,
    setIsMenuClick,

    // Functions
    handleToggle,
    collapseOnMobile,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;
