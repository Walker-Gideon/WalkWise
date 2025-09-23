import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import SignIn from "./authentication/sign-in/SignIn";
import SignUp from "./authentication/sign-up/SignUp";
import ForgetAccount from "./authentication/forget/ForgetAccount";
import Accounts from "./authentication/Accounts";
import AppLayout from "./features/AppLayout";
import Dashboard from "./features/dashboard/Dashboard";
import Note from "./features/note/Note";
import Flashcard from "./features/flashcard/Flashcard";
import Schedules from "./features/schedule/Schedules";
import Inspire from "./features/inspire/Inspire";
import Settings from "./features/settings/Settings";
import Verify from "./authentication/verify/Verify";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<LandingPage />} />

        <Route path="/account" element={<Accounts />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotten" element={<ForgetAccount />} />
        </Route>

        <Route path="verify" element={<Verify />} />

        <Route path="dashboard" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="notes" element={<Note />} />
          <Route path="flashcards" element={<Flashcard />} />
          <Route path="schedule" element={<Schedules />} />
          <Route path="inspire" element={<Inspire />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
