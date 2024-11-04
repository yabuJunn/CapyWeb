//Import router enum
import { routes } from "../types/routesEnum";

//Import pages

import { LogIn } from "lucide-react";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { Register } from "../pages/Register/Register";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { SavingsPage } from "../pages/savingsPage/savingsPage";

export const mainRoutes = [
    {
        path: routes.landingPage,
        element: <LandingPage></LandingPage>,
    },
    {
        path: routes.login,
        element: <LogIn></LogIn>,
    },
    {
        path: routes.register,
        element: <Register></Register>,
    },
    {
        path: routes.dashboard,
        element: <Dashboard></Dashboard>,
    },
    {
        path: routes.savings,
        element: <SavingsPage></SavingsPage>,
    },
]