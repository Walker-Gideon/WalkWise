import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { LuLoader } from "react-icons/lu";

import Flex from "/src/ui/Flex";

import { useAuthentication } from "/src/authentication/context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/sign-in");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <Flex variant="center" classname="h-screen bg-slate-50">
        <LuLoader className="h-10 w-10 animate-spin text-slate-500" />
      </Flex>
    );

  if (isAuthenticated) return children;
}
