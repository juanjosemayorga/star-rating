import { useContext } from "react";
import { ColorsContext } from "../context/ColorContext";

export const useColors = (): ColorsContextProps => {
  const context = useContext(ColorsContext);
  if (!context) {
    throw new Error("useColors must be used within a ColorsProvider");
  }
  return context;
}
