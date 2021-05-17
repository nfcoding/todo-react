import React, { useState } from 'react'
import TodoForm from './TodoForm'
// import { faEdit, faRemoveFormat } from "@fortawesome/free-solid-svg-icons";
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return (

        todos.map((todo, index) => (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index + 1}>
                <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
                <div className="icons">
                    <div onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon'>Edit</div>
                    <div onClick={() => removeTodo(todo.id)} className='delete-icon'>Delete</div>
                </div>
            </div>
        ))
    )
}

export default Todo
