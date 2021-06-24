import React, { useContext, useState } from 'react'
import {TodoContext} from '../context/TodoContext'

const Addtodo = () => {
    
    const [title, setTitle] = useState('')
    const {addTodo} = useContext(TodoContext)
    //style
    const formStyle = {
        textAlign: 'center',
        margin: 'auto'
    }
    const textStyle = {
        width: '70%',
        margin: '10px',
        padding: '10px'
    }

    const addStyle = {
        padding: '10px 20px'
    }

    // handle functions

    const handleChange = (e) => {
        e.preventDefault();
        if (title !== '') {
            // gọi hàm addTodo đc truyền qua prop 
            addTodo(title)
            setTitle('')
        }


    }
    /* nếu để setTitle (e.target.value) trong hàm handleChange sẽ reRender lại ko print ra new title*/
    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <form style={formStyle} onSubmit={handleChange}>
                <input 
                value={title} // gán state 2 chiều cho input
                style={textStyle} 
                type="text" 
                name="" id=""
                 placeholder="add to do" 
                 onChange={changeTitle} />
                <input style={addStyle} type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Addtodo
