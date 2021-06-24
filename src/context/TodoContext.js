import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios'


export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
    //States
    const [todos, setTodos] = useState([])




    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos?_limit=5'
                )
                console.log(res.data);
                setTodos(res.data)
                
            } catch (error) {
                console.log(error.message);
            }

        }
        getTodos()
    }, [])

    // // save in local storage
     useEffect(() => {
         localStorage.setItem('todos', JSON.stringify(todos)) 
          // JSON.stringify để convert array sang json
     }, [todos])

    // -----------FUNCTIONS-------------
    // checkcompleted
    const checkComplete = async (id) => {
        
        const newTodo = todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo;
        })
        setTodos(newTodo)
        await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
        [...todos]
            
        )
    }

    // addTodo func
    const addTodo = async (title) => {
        const res = await axios.post (
            'https://jsonplaceholder.typicode.com/todos',
            {
                title,
                completed: false
            }
        )

        const newTodo = [...todos, res.data ]
        setTodos(newTodo)
    }

    //deleteTodo
    const deleteTodo = async (id) => {
        await axios.delete(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        )

        const newTodo = todos.filter(todo => {
            return todo.id !== id

        })
        setTodos(newTodo)
    }


    // context data
    const TodoContextData = {
        todos,

        checkComplete,
        addTodo,
        deleteTodo,


    }

    // return

    return (
        <TodoContext.Provider value={TodoContextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider