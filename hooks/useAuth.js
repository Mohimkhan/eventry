import { useContext } from "react";

export const useAuth = () => {
  const { auth, setAuth } = useContext;
  return { auth, setAuth };
};
