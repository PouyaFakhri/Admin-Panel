import { useMutation} from "@tanstack/react-query";
import api from "./axiosConfig";

export const UseRegisterUser = () => {
  const registerUser = (data) => {
    return api.post("/auth/register", data);
  };
  return useMutation({
    mutationKey: ["registerUser"],
    mutationFn: registerUser
  });
};
