import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuClick, setIsMenuClick] = useState(false)

  const value = { 
    isExpanded, 
    isMenuClick, 
    setIsExpanded, 
    setIsMenuClick 
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

function useNav() {
  const context = useContext(NavigationContext);

  if (context === undefined)
    throw new Error("Navigation context was called outside of it provider");

  return context;
}

export { NavigationProvider, useNav };
