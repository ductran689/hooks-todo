import React, { useContext, useState } from 'react'
import {TodoContext} from '../context/TodoContext'


const TodoItem = ({todo}) => {
    const {todos,checkComplete,deleteTodo} = useContext(TodoContext)

  

    
    //style
    const titleStyle ={
        textDecoration: todo.completed ?'line-through' : 'none'
    }
    // function handle

    

    return (
        
            <li >
            <input type="checkbox" name="" id={todo.id} onChange= {checkComplete.bind (this,todo.id)} />
            <p style={titleStyle} >{todo.title}</p>
            <button onClick={deleteTodo.bind(this,todo.id)}>Delete</button>
        </li>
        )
    
}

export default TodoItem
