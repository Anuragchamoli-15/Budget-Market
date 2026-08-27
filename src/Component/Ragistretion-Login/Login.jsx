import { useState } from "react";

function Login(){

    const [currntlogid , setlogid] = useState("")
    const [currntpass , setpass] = useState("")
   
    const userid = (e)=>{
        setlogid(e.target.value)
    }
    const userpass = (e)=>{
        setpass(e.target.value)
    }
    
    const loghandle = (e)=>{
        e.preventDefault()
        console.log(currntlogid)
        console.log(currntpass)

    }

    return(
        <form onSubmit={loghandle}>
            <input type="text" name="" id="" placeholder="enter your email/username/Phone number" onChange={userid}/>
            <input type="text" name="" id="" placeholder="enter your Password" onChange={userpass} />
            <button>Login</button>
            <p>don't have a account <a href="#">Sing up</a></p>
        </form>
    )
}

export default Login;