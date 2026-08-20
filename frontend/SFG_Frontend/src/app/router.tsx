import { createBrowserRouter } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import CreatingHero from "../pages/CreatingHero";
import MapPage from "../pages/MapPage";
import CityPage from "../pages/locations/CityPage";
import ArenaPage from "../pages/locations/ArenaPage";
import ShopPage from "../pages/locations/ShopPage";
import HeroManagementPage from "../pages/HeroManagementPage";

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
    path: "/map",
    element: <MapPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/city/:cityName",
    element: <CityPage />
  },
  {
    path: "/city/arena",
    element: <ArenaPage />
  },
  {
    path:"city/shop",
    element:<ShopPage/>
  },
  {
    path:"/profile/manage",
    element:<HeroManagementPage/>
  },




]);