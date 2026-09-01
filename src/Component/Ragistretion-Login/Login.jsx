import {  useState } from "react";

function Login({setlog}) {
  const [currntlogid, setlogid] = useState("");
  const [currntpass, setpass] = useState("");
  
  const userid = (e) => {
    setlogid(e.target.value);
  };
  const userpass = (e) => {
    setpass(e.target.value);
  };
  
  let userinfo = {
    name: "Anurag",
    password: "151515",
  };

  const [submitted, setSubmitted] = useState(false);
  const [currntloginfo, setloginfo] = useState({});
  
  
  const loghandle = (e) => {
    e.preventDefault();

    if(currntlogid === userinfo.name && currntpass === userinfo.password){
      setlog("log")
    }

    setSubmitted(true)
    setloginfo({ currntlogid, currntpass });
  };
  

  return (
    <form onSubmit={loghandle}>
      <input
        type="text"
        name=""
        id=""
        placeholder="enter your email/username/Phone number"
        onChange={userid}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="enter your Password"
        onChange={userpass}
      />
      <p>
        { submitted === true &&
        currntlogid !== "" &&
          currntpass !== "" &&
          ( userinfo.name !== currntlogid || userinfo.password !== currntpass) &&
          "user not found"}
      </p>
      <button>Login</button>
      <p>
        don't have a account <a href="ragister">Sing up</a>
      </p>
    </form>
  );
}

export default Login;
