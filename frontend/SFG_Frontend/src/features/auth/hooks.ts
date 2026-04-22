import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { register } from "./api";
import { login } from "./api";
import { getMe } from "./api";

export const useRegister = () => {
  return useMutation({
    mutationFn: register
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login
  });
};

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    staleTime: 1000 * 60 * 5 // 5 min cache
  });
};