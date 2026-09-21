import { useState } from "react";
import style from "./Style.module.css"

function Ragistretion() {
  const user = {
    name: "",
    email: "",
    Phone: "",
    Password: "",
  };

  const [currntName, setName] = useState("");
  const [currntemail, setemail] = useState("");
  const [currnttel, settel] = useState("");
  const [currntpass, setpass] = useState("");

  const Name = (e) => {
    setName(e.target.value);
  };

  const Emai =(e)=>{
    setemail(e.target.value);
  }
  const Phon =(e)=>{
    settel(e.target.value);

  }
  const Paas =(e)=>{
    setpass(e.target.value)
}


  const [currentInfo, setInfo] = useState(user);

  const handelbtn = (e) => {
    e.preventDefault()
    setInfo({currntName, currntemail, currnttel ,currntpass })
    setName("")
    setemail("");
    settel("");
    setpass("")
  };


  return (
    <form onSubmit={handelbtn}
    className={style.ragistretionForm}>


        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your name"
          onChange={Name}
          value={currntName}
          className={style.ragisInp}
        />
        <input type="email" name="" id="" placeholder="Enter your email" onChange={Emai}  className={style.ragisInp}/>
        <input type="tel" name="" id="" placeholder="Enter your Phone Number" onChange={Phon}  className={style.ragisInp}/>
        <input type="password" name="" id="" placeholder="Enter your Paaword" onChange={Paas} className={style.ragisInp}/>
        <p className={style.ragiInfo}>{currntpass.length <= 8 ? "password shoud be 8 charecters":null} </p>
        <button type="submit">Submit</button>
        <p>Have a account <a href="/">Login</a></p>
    </form>
  );
}

export default Ragistretion;
