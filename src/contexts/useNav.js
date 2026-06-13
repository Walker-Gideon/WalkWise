import { useContext } from "react";
import { NavigationContext } from "./NavigationContext";

export function useNav() {
  const context = useContext(NavigationContext);

  if (context === undefined)
    throw new Error("Navigation context was called outside of its provider");

  return context;
}
