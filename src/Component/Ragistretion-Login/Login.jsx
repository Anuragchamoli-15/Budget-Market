import { use, useState } from "react";

function Login(){

    const [currntlogid , setlogid] = useState("")
    const [currntpass , setpass] = useState("")
   
    const userid = (e)=>{
        setlogid(e.target.value)
    }
    const userpass = (e)=>{
        setpass(e.target.value)
    }
    
    let userinfo = {
        name: "Anurag",
        password: "151515"
    }
    const [currntloginfo, setloginfo] = useState({})
    const loghandle = (e)=>{
        e.preventDefault()

        if(userinfo.name === currntlogid && userinfo.password === currntpass){
            console.log("ok")
        }
        setloginfo({currntlogid, currntpass}) 
    }

    return(
        <form onSubmit={loghandle}>
            <input type="text" name="" id="" placeholder="enter your email/username/Phone number" onChange={userid}/>
            <input type="text" name="" id="" placeholder="enter your Password" onChange={userpass} />
            <button>Login</button>
            <p>don't have a account <a href="/">Sing up</a></p>
            <p>{currntlogid.value === userinfo.name? "succes": null}</p>
        </form>
    )
}

export default Login;