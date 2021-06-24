import React, { useContext, useState } from 'react'
import Addtodo from './Addtodo'
import TodoItem from './TodoItem'
import {ThemeContext} from '../context/ThemeContext'
import {TodoContext} from '../context/TodoContext'
import {AuthContext} from '../context/AuthContext'

const Todos = () => {
    //load contexts
    const {todos,addTodo} = useContext(TodoContext)
    const {auth} = useContext(AuthContext)

    //useState
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         title: 'Viec 1',
    //         completed: false
    //     },
    //     {
    //         id: 2,
    //         title: 'Viec 2',
    //         completed: false
    //     },
    //     {
    //         id: 3,
    //         title: 'Viec 3',
    //         completed: false
    //     }
    // ])


    
    // // addTodo func
    // const addTodo = (title) => {
    //     const newTodo = [...todos, {
    //         id: 4,
    //         title,
    //         completed: false
    //     }]
    //     setTodos(newTodo)
    // }

    // //deleteTodo
    // const deleteTodo = (id) => {
    //     const newTodo = todos.filter(todo => {
    //         return todo.id !== id

    //     })
    //     setTodos(newTodo)
    // }




    // style
    const {themeTodo} = useContext(ThemeContext)
    const {isLightTodo,light,dark} = themeTodo
    
    const styleTodo = isLightTodo ? light : dark
    
    const pStyle = {
        textAlign: 'center',
        fontSize: '30px'
    }
    
    return (
        <div className="todo-list" style ={styleTodo}>
            <Addtodo addTodoFunc={addTodo} />
            {
            auth ? ( 
            
            <ul >
                

                {todos.map(todo =>
                    <TodoItem key={todo.id} 
                    todo = {todo}
                     />

                )}
            </ul>) : <p style ={pStyle}>Please Login</p>}
            
        </div>
    )
}

export default Todos
