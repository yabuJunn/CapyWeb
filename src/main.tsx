import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { mainRoutes } from './routes/mainRoutes';


const router = createHashRouter([
  ...mainRoutes
]);

// Renderiza la aplicación envuelta en el Provider de Redux
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
