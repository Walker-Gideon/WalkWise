import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const value = {};

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

function useAuthentication() {
    const context = useContext(AuthContext);

    if (context === undefined)
        throw new Error("Authentication context was called outside of it provider");

    return context;
}

export { AuthProvider, useAuthentication };