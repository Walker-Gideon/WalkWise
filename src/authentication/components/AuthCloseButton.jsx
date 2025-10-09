import { LuX } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function AuthCloseButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")}>
      <LuX className="text-2xl font-bold" />
    </button>
  );
}
