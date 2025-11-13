import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LandingPage from "./landingPage/LandingPage";
import SignIn from "./authentication/sign-in/SignIn";
import SignUp from "./authentication/sign-up/SignUp";
import ForgetAccount from "./authentication/forget/ForgetAccount";
import Accounts from "./authentication/Accounts";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./features/dashboard/Dashboard";
import Note from "./features/note/Note";
import Flashcard from "./features/flashcard/Flashcard";
import Schedules from "./features/schedule/Schedules";
import Inspire from "./features/inspire/Inspire";
import Settings from "./features/settings/Settings";
import Verify from "./authentication/verify/Verify";
import PageNotFound from "./ui/PageNotFound";

const queryClient = new QueryClient();
// defaultOptions: {
//   queries: {
//     staleTime: 60 * 1000,
//   },
// },

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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

          <Route element={<AppLayout />}>
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
    </QueryClientProvider>
  );
}
