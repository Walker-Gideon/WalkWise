import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Spinner from "/src/ui/Spinner";
import AppLayout from "./ui/AppLayout";
import PublicRoute from "./utils/PublicRoute";
import ProtectedRoute from "./utils/ProtectedRoute";

// LAZY-LOADED PAGES (Vite splits these into separate, tiny bundles)
const LandingPage = lazy(() => import("./landingPage/LandingPage"));
const Accounts = lazy(() => import("./authentication/Accounts"));
const SignIn = lazy(() => import("./authentication/sign-in/SignIn"));
const SignUp = lazy(() => import("./authentication/sign-up/SignUp"));
const ForgetAccount = lazy(() => import("./authentication/forget/ForgetAccount"));
const PasswordEmailSent = lazy(() => import("./authentication/components/PasswordEmailSent"));

const Dashboard = lazy(() => import("./features/dashboard/Dashboard"));
const Note = lazy(() => import("./features/note/Note"));
const Flashcard = lazy(() => import("./features/flashcard/Flashcard"));
const Schedules = lazy(() => import("./features/schedule/Schedules"));
const Inspire = lazy(() => import("./features/inspire/Inspire"));
const Settings = lazy(() => import("./features/settings/Settings"));
const PageNotFound = lazy(() => import("./ui/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function PageLoader() {
  return <Spinner styling="min-h-screen w-full bg-slate-50 dark:bg-slate-800" label="Loading your workspace..." />;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              index
              element={
                <PublicRoute>
                  <LandingPage />
                </PublicRoute>
              }
            />

            <Route element={
              <PublicRoute>
                <Accounts />
              </PublicRoute>
            }>
              <Route index element={<Navigate replace to="sign-in" />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="forget-password" element={<ForgetAccount />} />
              <Route path="verify-email" element={<PasswordEmailSent />} />
            </Route>

            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="notes" element={<Note />} />
              <Route path="flashcards" element={<Flashcard />} />
              <Route path="schedule" element={<Schedules />} />
              <Route path="inspire" element={<Inspire />} />
              <Route path="profile" element={<Settings />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>

      <Toaster
        position="top-center"
        gutter={12}
        reverseOrder={false}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "14px",
            maxWidth: "500px",
            padding: "8px 20px",
            background: "#fff",
            color: "#374151",
          },
        }}
      />
    </QueryClientProvider>
  );
}
