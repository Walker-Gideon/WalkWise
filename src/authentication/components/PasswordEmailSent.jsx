import { LuCheckCircle, LuMail } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";

export default function PasswordEmailSent() {
  return (
    <Flex classname={"flex-col items-center text-center animate-in fade-in zoom-in duration-300"}>
      <div className="relative mb-6">
        <div className="absolute -inset-1 rounded-full bg-slate-100 animate-pulse" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-slate-500 text-white shadow-lg">
          <LuMail className="h-10 w-10" />
          <LuCheckCircle className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-white text-green-500 shadow-sm" />
        </div>
      </div>

      <HeaderText classname="mb-2 text-2xl font-bold text-slate-900">
        Check your email
      </HeaderText>
      
      <Paragraph classname={"mb-8 text-sm text-slate-500 max-w-sm leading-relaxed"}>
        If a user with that email exists, we’ve sent a password reset link to your inbox. 
        Please check your spam folder if you don't see it within a few minutes.
      </Paragraph>

      <Button 
        to="/sign-in" 
        type="colors" 
        classname="w-full py-3 shadow-md transition-all hover:shadow-lg active:scale-95"
      >
        Back to Login
      </Button>

      <Paragraph classname="mt-6 text-xs text-slate-400">
        Didn't receive the email? Check your spelling or try again.
      </Paragraph>
    </Flex>
  );
}