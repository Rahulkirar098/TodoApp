import React, { useEffect, useState } from 'react'
import { Link, Redirect,useHistory } from 'react-router-dom'


function Admin() {

    const token = localStorage.getItem("token");
    const [logged, setLogged] = useState(true);

    const history = useHistory()

    useEffect(() => {
        if (token == null) {
            setLogged(false)
        }
    
    
        if (logged == false) {
            history.push('/');
        }
    
    })

   
    const logout = () =>{
        localStorage.clear()
        history.push('/');
    }

    return (
        <div>
            <h1>WellCome To Todo App</h1>
       
        <input placeholder="What is your task"/>
        <br/>
        <br/>
        



            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Admin
