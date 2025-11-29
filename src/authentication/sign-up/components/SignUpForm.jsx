import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

import { FiEyeOff, FiEye } from "react-icons/fi";
import { LuLoader } from "react-icons/lu";

import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";
import SpanText from "/src/ui/SpanText";
import Button from "/src/ui/Button";
import Flex from "/src/ui/Flex";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";

import { signUpUser } from "/src/service/apiAuth";

export default function SignUpForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();

  async function onSubmit(data) {
    const { email, username, password, confirmPassword } = data;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const trimmedUsername = username.trim();
    if (!trimmedUsername) {
      toast.error("Username is required");
      return;
    }

    if (trimmedUsername.length < 3) {
      toast.error("Username must be at least 3 characters long");
      return;
    }

    if (trimmedUsername.length > 20) {
      toast.error("Username must be less than 20 characters");
      setIsLoading(false);
      return;
    }

    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!usernameRegex.test(trimmedUsername)) {
      toast.error(
        "Username can only contain letters, numbers, underscores, and hyphens",
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    if (!hasUpperCase || !hasLowerCase || !hasNumbers) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      );
      return;
    }

    setIsLoading(true);

    try {
      await signUpUser({ email, username, password });
      toast.success("Account created successfully");
      navigate("/dashboard", { replace: true });
      reset();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const styling = `w-full rounded-sm border border-stone-300 px-1.5 py-1.5 text-sm text-black transition-all duration-300 placeholder:text-xs hover:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:outline-hidden`;

  return (
    <Container adjust={true} classname={"medium:w-80 mt-4 w-70"}>
      <Form onsubmit={handleSubmit(onSubmit)}>
        <Flex classname={"flex-col"}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            disabled={isLoading}
            className={`${styling}`}
            {...register("email", { required: true })}
          />

          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            disabled={isLoading}
            className={`${styling} mt-2`}
            {...register("username", { required: true })}
          />
        </Flex>

        <Box adjustWidth={true} classname={"relative my-2"}>
          <input
            id="password"
            type={!hidePassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            disabled={isLoading}
            className={`${styling}`}
            {...register("password", { required: true })}
          />
          <Button
            variant="secondary"
            classname={"absolute top-2.5 right-2"}
            disabled={isLoading}
            onclick={(e) => {
              e.preventDefault();
              setHidePassword(!hidePassword);
            }}
          >
            <Conditional condition={hidePassword}>
              <FiEye className="text-sm" />
            </Conditional>
            <Conditional condition={!hidePassword}>
              <FiEyeOff className="text-sm" />
            </Conditional>
          </Button>
        </Box>

        <Box adjustWidth={true} classname={"relative pb-2"}>
          <input
            id="confirmPassword"
            type={!hideConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            disabled={isLoading}
            className={`${styling}`}
            {...register("confirmPassword", { required: true })}
          />
          <Button
            variant="secondary"
            classname={"absolute top-2.5 right-2"}
            disabled={isLoading}
            onclick={(e) => {
              e.preventDefault();
              setHideConfirmPassword(!hideConfirmPassword);
            }}
          >
            <Conditional condition={hideConfirmPassword}>
              <FiEye className="text-sm" />
            </Conditional>
            <Conditional condition={!hideConfirmPassword}>
              <FiEyeOff className="text-sm" />
            </Conditional>
          </Button>
        </Box>

        <Button
          type="colors"
          submit={true}
          disabled={isLoading}
          classname="w-full flex items-center justify-center"
        >
          <Conditional condition={!isLoading}>
            <SpanText>Sign up</SpanText>
          </Conditional>
          <Conditional condition={isLoading}>
            <LuLoader className="for spinning h-5 w-5 animate-spin" />
          </Conditional>
        </Button>
      </Form>
    </Container>
  );
}
