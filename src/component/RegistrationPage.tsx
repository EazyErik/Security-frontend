import {FormEvent, useState} from "react";
import {registerNow} from "./apiService/Services";
import {useNavigate} from "react-router-dom";

export default function RegistrationPage() {

    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")

    const nav = useNavigate()

    const register = (ev:FormEvent) => {
        ev.preventDefault()
        registerNow(username,password)
            .then(() => nav("/login"))
    }

    return(
        <div>
            <form onSubmit={register}>
                <input type ={"text"} value={username} onChange={ev => setUsername(ev.target.value)} placeholder={"Username"}/>
                <input type={"password"} value={password} onChange={ev => setPassword(ev.target.value)} placeholder={"Password"}/>
                <input type={"submit"} value={"Register now"}/>
            </form>
        </div>
    )
}