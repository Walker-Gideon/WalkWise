import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ForgetAccount from "./authentication/forget/ForgetAccount";
import Dashboard from "./features/dashboard/Dashboard";
import Flashcard from "./features/flashcard/Flashcard";
import Schedules from "./features/schedule/Schedules";
import SignIn from "./authentication/sign-in/SignIn";
import SignUp from "./authentication/sign-up/SignUp";
import Settings from "./features/settings/Settings";
import LandingPage from "./landingPage/LandingPage";
import Verify from "./authentication/verify/Verify";
import Accounts from "./authentication/Accounts";
import Inspire from "./features/inspire/Inspire";
import ProtectedRoute from "./ui/ProtectedRoute";
import PageNotFound from "./ui/PageNotFound";
import Note from "./features/note/Note";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient();
// defaultOptions: {
//   queries: {
//     staleTime: 60 * 1000,
//   },
// },

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />

          <Route element={<Accounts />}>
            <Route index element={<Navigate replace to="sign-in" />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forgotten" element={<ForgetAccount />} />
            <Route path="verify" element={<Verify />} />
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
            <Route path="settings" element={<Settings />} />
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
            padding: "14px 24px",
            background: "#fff",
            color: "#374151",
          },
        }}
      />
    </QueryClientProvider>
  );
}
