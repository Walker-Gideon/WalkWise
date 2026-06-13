import { useContext } from "react";
import { GeneralContext } from "./GeneralContext";

export function useGeneral() {
  const context = useContext(GeneralContext);

  if (context === undefined)
    throw new Error("General context was called outside of its provider");

  return context;
}
