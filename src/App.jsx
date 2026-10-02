import "./App.css";
import Login from "./Component/Ragistretion-Login/Login.jsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header&Footer/Header";
import Footer from "./Component/Header&Footer/Footer";
import DataContext from "./Component/Store.jsx";

function App() {
  const [log, setlog] = useState("notlog");


  const [currntItem, setItem] =useState([])
  let name = "anurag"

  return (
    <DataContext.Provider value={{name,setItem , currntItem}}>
      {log === "log" ? <Header></Header> : null}
      {log === "log" ? <Outlet></Outlet> : <Login setlog={setlog}></Login>}
      {log === "log" ? <Footer></Footer> : null}
    </DataContext.Provider>
  );
}

export default App;
