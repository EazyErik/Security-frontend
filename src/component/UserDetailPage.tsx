import {useEffect, useState} from "react";
import {getUserDetails} from "./apiService/Services";


export function UserDetailPage() {

    const [loggedInUsername, setLoggedInUsername] = useState("")
    useEffect(() => {
        getUserDetails()
            .then(response => setLoggedInUsername(response))

    }, [])

    return (
        <div>
            {loggedInUsername ?? "Not logged in"}
        </div>
    )
}