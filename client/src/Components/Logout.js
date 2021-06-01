import React, {useEffect} from 'react'
import { useHistory } from 'react-router'

function Logout() {
    const history = useHistory();
    useEffect(() => {
        fetch("http://localhost:5000/logout", {
            method: "GET",
            headers:{
                Accept: "application/json",
              "Content-Type": "application/json"
            },
            withCredentials: true,
            credentials: 'include'
        })
        .then((res)=>{
            history.push("/signin", {replace:true})
            if(!res.status === 200){
                const error = new error(res.error);
                throw error;
            }
        }).catch((err)=>{console.log(err);})
    })

    return (
        <>
            <h1>Logout Page</h1>
        </>
    )
}

export default Logout
