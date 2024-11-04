import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Importa Provider
import { store } from './store/store.tsx'; // Importa el store de Redux

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importa las páginas
import { LandingPage } from './pages/LandingPage/LandingPage.tsx';
import { LogIn } from './pages/LogIn/LogIn.tsx';
import { Register } from './pages/Register/Register.tsx';
import { Rewards } from './pages/Rewards/Rewards.tsx';
import { Dashboard } from './pages/Dashboard/Dashboard.tsx';

// Configuración del router
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
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  },
  {
    path: "/reward",
    element: <Rewards></Rewards>
  },
]);

// Renderiza la aplicación envuelta en el Provider de Redux
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Envolvemos con Provider */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
