import React from 'react'

function Todo(props) {
    
    return (
        <div>
        <h1>{props.text}<button onClick={()=>{props.onSelect(props.id)}}>delete</button></h1>
        </div>
    )
}

export default Todo
