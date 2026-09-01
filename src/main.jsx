import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from "./App.jsx";

import Ragistretion from './Component/Ragistretion-Login/Ragistretion.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "ragister", element: <Ragistretion/>}
])

 createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
