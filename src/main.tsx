import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createHashRouter, RouterProvider } from 'react-router-dom'

//Import pages
import { LandingPage } from './pages/LandingPage/LandingPage.tsx'
import { LogIn } from './pages/LogIn/LogIn.tsx'
import { Register } from './pages/Register/Register.tsx'
import { Dashboard } from './pages/Dashboard/Dashboard.tsx'
import { SavingsPage } from './pages/savingsPage/savingsPage.tsx'

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/savings",
    element: <SavingsPage></SavingsPage>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
