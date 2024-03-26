import { useContext } from "react";
import NavigationContex from "../context/NavigationContext";

function useNavigation() {
  return useContext(NavigationContex);
}

export default useNavigation;
