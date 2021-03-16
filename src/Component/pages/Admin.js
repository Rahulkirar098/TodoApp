import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Todo from "./Todo";


function Admin() {

    const token = localStorage.getItem("token");
    const [logged, setLogged] = useState(true);

    
    const [inputset, setInputset] = useState("");
    const [show, setShow] = useState([]);

    const history = useHistory()

    useEffect(() => {
        if (token == null) {
            setLogged(false)
        }
    
        if (logged === false) {
            history.push('/');
        }
    
    })

    const logout = () =>{
        localStorage.clear()
        history.push('/');
    }

    const shows = () =>{
       setShow((olditem)=>{
           return[...olditem, inputset]
       })
       setInputset("")
    }
 
    const deleteitem = (id) =>{
            setShow((olditem)=>{
                return olditem.filter((arritem,index)=>{
                    return index !== id;
                })
            })
    }
    return (

        <div>

            <h1>WellCome To Todo App</h1>
       
       <from>

        <input placeholder="What is your task" value={inputset} onChange={(e) =>setInputset(e.target.value)}/>
       <button onClick={shows}> Add</button>
        <br/>
        <br/>

        {show.map((item,index) => { 
            return <Todo
            key={index} 
            id={index}
            text={item}
            onSelect={deleteitem}/>

        }
            )}
        
        </from>


            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Admin
