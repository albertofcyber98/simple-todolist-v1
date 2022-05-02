import './style.css'
import React, { useState } from 'react';

const InputTodo = (props) => {
    const [inputTodo, setInputTodo] = useState('');
    
    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: inputTodo
        }
        props.onInputTodo(newTodo);
        setInputTodo('')
    }

    return (
        <div className='formInput'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputTodo} value={inputTodo}/>
                <button type='submit'> Add Todo </button>
            </form>
        </div>
    )
}
export default InputTodo;