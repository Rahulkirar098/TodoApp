import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'


function Login() {

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [logged, setLogged] = useState(false)
  const token = localStorage.getItem("token");


  const loggedIn = (e) => {
    e.preventDefault();
    if(user === "rahul" && password === "password"){

      setLogged(true)

    }

    localStorage.setItem("token","iloveindia")

  }
if(logged == true){
  return<Redirect to="/admin"/>
}
    return (
      <form onSubmit={(e)=>loggedIn(e)}>

      <h1>WellCome</h1>

          <input placeholder="user" type="text" name="username" value={user} 
          onChange={(e)=>
            setUser(e.target.value)
          }
          />
          <br/><br/>
          <input placeholder="Password"
          type="password" name="username" value={password} 
          onChange={(e)=>
            setPassword(e.target.value)
          }/>
          <br/><br/>
          <button>Login</button>

      </form>
    )
}

export default Login
