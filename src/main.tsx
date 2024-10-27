import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Import pages
import { LandingPage } from './pages/LandingPage/LandingPage.tsx'
import { LogIn } from './pages/LogIn/LogIn.tsx'
import { Register } from './pages/Register/Register.tsx'
import { Rewards } from './pages/Rewards/Rewards.tsx'

const router = createBrowserRouter([
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
    path: "/reward",
    element: <Rewards></Rewards>
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
