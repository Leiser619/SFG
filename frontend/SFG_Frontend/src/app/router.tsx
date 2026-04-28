import { createBrowserRouter } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import CreatingHero from "../pages/CreatingHero";

const DashboardPage = () => <div>Dashboard</div>;
const GamePage = () => <div>Gra</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/create-hero",
    element: <CreatingHero />
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