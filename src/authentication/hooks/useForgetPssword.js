import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { sendResetPasswordLink } from "/src/service/apiAuth";

export const useForgetPassword = () => {
    const {mutate:forgetPassword, isPending, isSuccess } = useMutation({
      mutationFn: ({email}) => sendResetPasswordLink(email),
      onSuccess: () => {
        toast.success("Password reset link sent successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

    return {forgetPassword, isPending, isSuccess };
}