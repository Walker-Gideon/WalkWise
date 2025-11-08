import { createContext, useContext } from "react";

const GeneralContext = createContext();

function GeneralProvider({ children }) {
  const value = {};

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}

function useGeneral() {
  const context = useContext(GeneralContext);

  if (context === undefined)
    throw new Error("General context was called outside of it provider");

  return context;
}

export { GeneralProvider, useGeneral };
