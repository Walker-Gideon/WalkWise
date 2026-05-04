import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { sendResetPasswordLink } from "/src/service/apiAuth";

export const useForgetPassword = () => {
    const navigate = useNavigate();
    
    const {mutate:forgetPassword, isPending, isSuccess } = useMutation({
      mutationFn: ({email}) => sendResetPasswordLink(email),
      onSuccess: (data) => {
        toast.success("Password reset link sent successfully");
        navigate("/verify-email", { state: { email: data.email } });
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

    return {forgetPassword, isPending, isSuccess };
}
