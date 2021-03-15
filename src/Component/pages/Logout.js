import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
    return (
        <div>
            <h1>
                Logout you are
            </h1>
            <Link to="/"><button>Login</button></Link>
        </div>
    )
}

export default Logout
