import { Outlet, Navigate } from "react-router-dom";
import { LuLoaderCircle } from "react-icons/lu";

import Flex from "/src/ui/Flex";

import { useAuthentication } from "/src/authentication/context/AuthContext";

export default function PublicRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuthentication();

    if (isLoading)
    return (
      <Flex variant="center" classname="h-screen bg-slate-50">
        <LuLoaderCircle className="h-10 w-10 animate-spin text-slate-500" />
      </Flex>
    );

    if (isAuthenticated) return <Navigate to="/dashboard" replace={true} />;

    return children || <Outlet />;
}