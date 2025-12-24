import { useAuthentication } from "/src/authentication/context/AuthContext";

export function useUserData() {
  const { user: firebaseUser, userData, isLoading: loading, logout } = useAuthentication();
  const error = null; // AuthContext handles errors internally for now

  return { firebaseUser, userData, loading, error };
}