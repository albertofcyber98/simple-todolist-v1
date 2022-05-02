import './style.css'
import React, { useState } from 'react';
import TodoList from "../todoList/index";
import InputTodo from '../todo-input';

const todo = () => {
    const [todos, setTodos] = useState([]);
    const eventInputTodo = (todo) => {
        setTodos(todos.concat(todo))
    }
    return (
        <div>
            <h3>Simple TodoList</h3>
            <InputTodo onInputTodo={eventInputTodo}/>
            <TodoList todoList={todos}/>
        </div>
    )
}

export default todo;