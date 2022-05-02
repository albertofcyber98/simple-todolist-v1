import './style.css'

const TodoList = (props) => {
    return (
        <ul>
            {
                props.todoList.map((todos) => {
                    return <li key={todos.id}>{todos.title}</li>
                })
            }
        </ul>
    )
}

export default TodoList;