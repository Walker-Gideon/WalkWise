import { createContext, useContext } from "react";

const InspireContext = createContext();

function InspireProvider({ children }) {
  const value = {};

  return (
    <InspireContext.Provider value={value}>{children}</InspireContext.Provider>
  );
}

function useInspire() {
  const context = useContext(InspireContext);

  if (context === undefined)
    throw new Error("Inspire context was called outside of it provider");

  return context;
}

export { InspireProvider, useInspire };
