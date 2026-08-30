import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from "./App.jsx";

import Login from './Component/Ragistretion-Login/Login.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "loginPage", element: <Login/>}
])

 createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
