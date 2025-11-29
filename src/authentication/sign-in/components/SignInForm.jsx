import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { FiEyeOff, FiEye } from "react-icons/fi";
import { LuLoader } from "react-icons/lu";

import Conditional from "/src/components/Conditional";
import Container from "/src/ui/Container";
import SpanText from "/src/ui/SpanText";
import Button from "/src/ui/Button";
import Input from "/src/ui/Input";
import Box from "/src/ui/Box";
import Form from "/src/ui/Form";

export default function SignInForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();

  async function onSubmit(data) {
  // take inputs
  // validate inputs
  // sign in
    console.log(data);
  }

  const styling = `w-full rounded-sm border border-stone-300 px-1.5 py-1.5 text-sm text-black transition-all duration-300 placeholder:text-xs hover:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:outline-hidden`;

  return (
    <Container adjust={true} classname={"medium:w-80 mt-4 w-70"}>
      <Form onsubmit={handleSubmit(onSubmit)}>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          disabled={isLoading}
          className={styling}
          {...register("email", { required: true })}
        />
        <Box adjustWidth={true} classname={"relative my-2"}>
          <input
            id="password"
            type={!hidePassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            disabled={isLoading}
            className={styling}
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
        <Button
          type="colors"
          submit={true}
          disabled={isLoading}
          classname={"w-full flex items-center justify-center"}
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
