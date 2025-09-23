import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import SignIn from "./authentication/sign-in/SignIn";
import SignUp from "./authentication/sign-up/SignUp";
import ForgetAccount from "./authentication/forget/ForgetAccount";
import Accounts from "./authentication/Accounts";

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
      </Routes>
    </BrowserRouter>
  );
}
