import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { LuLoader } from "react-icons/lu";
import { FiEyeOff, FiEye } from "react-icons/fi";

import Form from "/src/ui/Form";
import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";
import SpanText from "/src/ui/SpanText";
import Conditional from "/src/components/Conditional";
import FormRow from "/src/authentication/components/FormRow";

import { signUpUser } from "/src/service/apiAuth";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { handleSubmit, register, reset, getValues, formState: { errors } } = useForm();
  
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  async function onSubmit(data) {
    setIsLoading(true);

    try {
      await signUpUser(data);
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
      <Form onsubmit={handleSubmit(onSubmit)} classname={"w-full"}>
        <Flex classname={"flex-col"}>
          <FormRow errorsField={errors.email} errorMessage={errors.email?.message}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className={`${styling}`}
              {...register("email", {
                required: "Email is required",
                disabled: isLoading,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </FormRow>

          <FormRow errorsField={errors.username} errorMessage={errors.username?.message}>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              className={`${styling} mt-2`}
              {...register("username", {
                required: "Username is required",
                disabled: isLoading,
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Username must be less than 20 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_-]+$/,
                  message: "Username can only contain letters, numbers, underscores, and hyphens",
                },
              })}
            />
          </FormRow>
        </Flex>

        <FormRow errorsField={errors.password} errorMessage={errors.password?.message} classname={"relative mt-2"}>
          <input
            id="password"
            type={!hidePassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className={`${styling}`}
            {...register("password", {
              required: "Password is required",
              disabled: isLoading,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                message: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
              },
            })}
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
        </FormRow>

        <FormRow errorsField={errors.confirmPassword} errorMessage={errors.confirmPassword?.message} classname={"relative mt-2 mb-6"}>
          <input
            id="confirmPassword"
            type={!hideConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            className={`${styling}`}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              disabled: isLoading,
              validate: (value) => value === getValues("password") || "Passwords do not match",
            })}
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
        </FormRow>

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
  );
}
