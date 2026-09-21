import './App.css'
import Login from './Component/Ragistretion-Login/Login.jsx';
import Home from './Component/Navabar/Home.jsx'
import { useState } from 'react';


function App() {

  const [log , setlog] = useState("notlog")

  return (
    <>
    {log === "log"?<Home></Home> :<Login setlog = {setlog}></Login> }
   
    </>
  )
}

export default App
