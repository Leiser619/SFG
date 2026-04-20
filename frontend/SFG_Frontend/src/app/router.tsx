import { createBrowserRouter } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";

const LoginPage = () => <div>Login (do zrobienia)</div>;
const DashboardPage = () => <div>Dashboard</div>;
const GamePage = () => <div>Gra</div>;
const ProfilePage = () => <div>Profil</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  },
  {
    path: "/game",
    element: <GamePage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
]);