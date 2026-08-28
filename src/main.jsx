import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import RouterProvider from 
import App from "./App.jsx";

// import Login from './Component/Ragistretion-Login/Login.jsx';

// const router = creatBrowserRouter([{
//   path: "/", element: <App/>,
//   path: "loginPgar", element: <Login/>
// }])

 createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
    {/* <RouterProvider router = {router}/> */}
  </StrictMode>,
)
