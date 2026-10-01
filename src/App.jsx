import "./App.css";
import Login from "./Component/Ragistretion-Login/Login.jsx";
import Home from "./Component/Navabar/Home.jsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header&Footer/Header";
import Footer from "./Component/Header&Footer/Footer";

function App() {
  const [log, setlog] = useState("notlog");

  return (
    <>
      {log === "log" ? <Header></Header> : null}
      {log === "log" ? <Outlet></Outlet> : <Login setlog={setlog}></Login>}
      {log === "log" ? <Footer></Footer> : null}
    </>
  );
}

export default App;
