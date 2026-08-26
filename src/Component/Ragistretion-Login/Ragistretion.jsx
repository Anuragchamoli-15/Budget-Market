import { useState } from "react";

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
    <form onSubmit={handelbtn}>


        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your name"
          onChange={Name}
          value={currntName}
        />
        <input type="email" name="" id="" placeholder="Enter your email" onChange={Emai} />
        <input type="tel" name="" id="" placeholder="Enter your Phone Number" onChange={Phon}/>
        <input type="password" name="" id="" placeholder="Enter your Paaword" onChange={Paas}/>
        <p>{currntpass.length <= 8 ? "password shoud be 8 charecters":null}</p>
        {/* <p>{currntpass}</p> */}
        <button type="submit">Submit</button>
    </form>
  );
}

export default Ragistretion;
