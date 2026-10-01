import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from "./App.jsx";
import Basket from './Component/Navabar/Basket.jsx';
import  Home from "./Component/Navabar/Home.jsx"
import WishList from "./Component/Navabar/WishList.jsx"
import Profile from "./Component/Navabar/Profile.jsx"


import Ragistretion from './Component/Ragistretion-Login/Ragistretion.jsx';
import Login from './Component/Ragistretion-Login/Login.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App/> ,children:[
    {index: true , element: <Home/>},
    {path: "wishList", element:<WishList/>},
    {path: "profile", element:<Profile/>},
    {path: "basket", element: <Basket/>}, 
    
  ]},
  {path: "ragister", element: <Ragistretion/>},
  {path: "login", element:<Login/>}
])

 createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
