import useNavigateToAction from "../hook/useNavigateToAction";

export default function Button({ children, to }) {
  const navigateTo = useNavigateToAction();

  // default is the navigation button
  return (
    <button onClick={() => navigateTo(to)} className="bg-green-500">
      {children}
    </button>
  );
}
