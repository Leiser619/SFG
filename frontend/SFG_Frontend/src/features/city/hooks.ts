// src/features/city/hooks.ts
// import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getCityByName } from "./api";

export const useGetCityByName = (name: string) => {
  return useQuery({
    queryKey: ["city", name],
    queryFn: () => getCityByName(name),
  });
};

// export const useRegister = () => {
//   return useMutation({
//     mutationFn: register,
//     onSuccess: () => {
//       window.location.href = "/";
//     },
//   });
// };

// export const useLogin = () => {
//   return useMutation({
//     mutationFn: login
//   });
// };

// export const useMe = () => {
//   return useQuery({
//     queryKey: ["me"],
//     queryFn: getMe,
//     staleTime: 1000 * 60 * 5 
//   });
// };


// export const useLogout = () => {
//   return useMutation({
//     mutationFn: logout,
//     onSuccess: () => {
//       window.location.href = "/";
//     },
//   });
// };