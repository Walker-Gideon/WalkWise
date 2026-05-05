import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Note from "./features/note/Note";
import PageNotFound from "./ui/PageNotFound";
import Inspire from "./features/inspire/Inspire";
import Accounts from "./authentication/Accounts";
import Settings from "./features/settings/Settings";
import LandingPage from "./landingPage/LandingPage";
import SignUp from "./authentication/sign-up/SignUp";
import SignIn from "./authentication/sign-in/SignIn";
import Schedules from "./features/schedule/Schedules";
import Dashboard from "./features/dashboard/Dashboard";
import Flashcard from "./features/flashcard/Flashcard";
import ForgetAccount from "./authentication/forget/ForgetAccount";
import PasswordEmailSent from "./authentication/components/PasswordEmailSent";

import PublicRoute from "./utils/PublicRoute";
import ProtectedRoute from "./utils/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

      <BrowserRouter>
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
      </BrowserRouter>

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
