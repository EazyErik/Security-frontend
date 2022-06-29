
import {LoginResponse} from "../Model";
import axios, {AxiosResponse} from "axios";


export function registerNow(username:string,password:string) {
   return axios.post("/api/user",{username:username,password:password} )
}

export function loginNow(username:string,password:string,) {

   return axios.post("/api/login",{username:username,password:password})
       .then((response:AxiosResponse<LoginResponse>) => response.data)

}
export function getUserDetails() {
   return axios.get("/api/user", {
      headers: {
         Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
   })
       .then(response => response.data)
}
