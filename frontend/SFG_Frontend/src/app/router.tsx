import { createBrowserRouter } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

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