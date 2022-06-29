import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginNow} from "./apiService/Services";


export default function LoginPage() {

    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")

    const nav = useNavigate()



   const login = (ev:FormEvent) => {
        ev.preventDefault()
        loginNow(username,password)
            .then(response => localStorage.setItem("jwt", response.token))
            .then(() => nav("/userdetails"))


   }

    return(
        <div><h1>Login</h1>
            <form onSubmit={login}>
                <input type ={"text"} value={username} onChange={ev => setUsername(ev.target.value)} placeholder={"Username"}/>
                <input type={"password"} value={password} onChange={ev => setPassword(ev.target.value)} placeholder={"Password"}/>
                <input type={"submit"} value={"Login now"}/>
            </form>
        </div>
    )
}