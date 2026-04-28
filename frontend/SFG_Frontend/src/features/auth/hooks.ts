//src/features/auth/hooks.ts
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { logout, register } from "./api";
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
    staleTime: 1000 * 60 * 5 
  });
};


export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      window.location.href = "/";
    },
  });
};