import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "/src/service/firebase";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribeDoc = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
        
        // Fetch user data from Firestore
        const userRef = doc(db, "users", user.uid);
        unsubscribeDoc = onSnapshot(
          userRef,
          (snapshot) => {
            if (snapshot.exists()) {
              setUserData(snapshot.data());
            } else {
              setUserData(null);
            }
            setIsLoading(false);
          },
          (error) => {
            console.error("Error fetching user data:", error);
            setIsLoading(false);
          }
        );
      } else {
        setUser(null);
        setUserData(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        if (unsubscribeDoc) unsubscribeDoc();
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeDoc) unsubscribeDoc();
    };
  }, []);

  async function logout() {
    try {
      await signOut(auth);
      setUser(null);
      setUserData(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

  const value = { user, userData, isAuthenticated, isLoading, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthentication() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("Authentication context was called outside of it provider");

  return context;
}

export { AuthProvider, useAuthentication };