import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { LuLoader } from "react-icons/lu";
import { FiEyeOff, FiEye } from "react-icons/fi";

import Form from "/src/ui/Form";
import Button from "/src/ui/Button";
import SpanText from "/src/ui/SpanText";
import Conditional from "/src/components/Conditional";
import FormRow from "/src/authentication/components/FormRow";

import { loginUser } from "/src/service/apiAuth";

export default function SignInForm() {
  const navigate = useNavigate();
  const { handleSubmit, register, reset, formState: { errors } } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  async function onSubmit(data) {
    const { email, password } = data;

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      await loginUser({ email, password });
      toast.success("Logged in successfully");
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
        <FormRow errorsField={errors.email} errorMessage={errors.email?.message}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className={styling}
            {...register("email", { 
              required: "Email is required", 
              disabled: isLoading 
            })}
          />
        </FormRow>

        <FormRow errorsField={errors.password} errorMessage={errors.password?.message} classname={"relative mt-2 mb-6"}>
          <input
            id="password"
            type={!hidePassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className={styling}
            {...register("password", { 
              required: "Password is required", 
              disabled: isLoading 
            })}
          />
          <Button 
            variant="secondary"
            ariaLabel="Toggle Password Visibility"
            classname={"absolute top-2.5 right-2"} 
            disabled={isLoading}
            onclick={(e) => {
              e.preventDefault();
              setHidePassword(!hidePassword);
            }}
          >
            <Conditional condition={hidePassword}>
              <FiEye className={"text-sm"} />
            </Conditional>
            <Conditional condition={!hidePassword}>
              <FiEyeOff className={"text-sm"} />
            </Conditional>
          </Button>
        </FormRow>

        <Button
          submit={true}
          type="colors"
          ariaLabel="Log in"
          disabled={isLoading}
          classname={"w-full flex items-center justify-center"}
        > 
          <Conditional condition={!isLoading}>
            <SpanText>Log in</SpanText>
          </Conditional>
          <Conditional condition={isLoading}>
            <LuLoader className={"for spinning h-5 w-5 animate-spin"} />
          </Conditional> 
        </Button>
      </Form>
  );
}
