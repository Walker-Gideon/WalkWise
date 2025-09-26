import { useNavigate } from "react-router-dom";

export default function useNavigateToAction(delay = 300) {
  const navigate = useNavigate();
  const startToNavigate = (to) => {
    setTimeout(() => {
      navigate(to);
    }, delay);
  };
  return startToNavigate;
}
