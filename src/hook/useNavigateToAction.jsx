import { useNavigate } from "react-router-dom";

export default function useNavigateToAction(delay = 500) {
  const navigate = useNavigate();
  const startToNavigate = (to) => {
    setTimeout(() => {
      navigate(to);
    }, delay);
  };
  return startToNavigate;
}
