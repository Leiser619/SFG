import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080/api",
    withCredentials: true
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url;

    if (status === 401) {
      if (
        url?.includes("/auth/login") ||
        url?.includes("/auth/register") ||
        url?.includes("/auth/logout")
      ) {
        return Promise.reject(error);
      }
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);