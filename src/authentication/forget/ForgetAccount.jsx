import { useForm } from "react-hook-form";

import Form from "/src/ui/Form";
import Flex from "/src/ui/Flex";
import Label from "/src/ui/Label";
import Input from "/src/ui/Input";
import Button from "/src/ui/Button";
import Paragraph from "/src/ui/Paragraph";
import Container from "/src/ui/Container";
import AuthHeader from "/src/authentication/components/AuthHeader";
import AuthCloseButton from "/src/authentication/components/AuthCloseButton";

import { useForgetPassword } from "/src/authentication/hooks/useForgetPssword";

export default function ForgetAccount() {
  const { forgetPassword, isPending } = useForgetPassword();
  const { handleSubmit, register, formState: { errors } } = useForm();

  function onSubmit(data) {
    forgetPassword(data);
  }


  return (
    <Container 
      adjust={true} 
      classname={"flex items-center justify-center flex-col"}
    >
      <AuthCloseButton showBack={true} />
      <Flex 
        variant="center" 
        classname={"min-h-dvh flex-col w-full max-w-md md:max-w-lg px-8 medium:px-0"}
      >
        <AuthHeader type="forget" />
        <Paragraph classname={"mb-4 text-sm text-slate-500"}>
          Enter the email you signed up with. We'll send you a link to log in and reset your password.
        </Paragraph>
        <Form onsubmit={handleSubmit(onSubmit)} classname={"w-full"}>
          <Flex classname="mb-4 flex-col">
            <Label classname={"medium:text-sm mb-1 text-xs"}>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="user@email.com"
              {...register("email", { 
                required: "Email is required", 
                disabled: isPending,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              required={true}
              classname="w-full disabled:opacity-50"
            />
            {errors?.email && <span className="text-xs text-red-500 ml-1 mt-1">{errors?.email?.message}</span>}
          </Flex>
          <Button 
            type="colors" 
            ariaLabel="Send Link"
            classname={"w-full py-3"}
            disabled={isPending}
          >
            {isPending ? "Sending Link..." : "Send Link"}
          </Button>
        </Form>
      </Flex>
    </Container>
  );
}
