import { Outlet, Navigate } from "react-router-dom";

import Spinner from "/src/ui/Spinner";

import { useAuthentication } from "/src/authentication/context/AuthContext";

export default function PublicRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuthentication();

    if (isLoading) return <Spinner styling="min-h-screen w-full bg-slate-50 dark:bg-slate-800" label="Preparing your workspace..." />;

    if (isAuthenticated) return <Navigate to="/dashboard" replace={true} />;

    return children || <Outlet />;
}
