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

        <Route path="dashboard" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="notes" element={<Note />} />
          <Route path="flashcards" element={<Flashcard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
