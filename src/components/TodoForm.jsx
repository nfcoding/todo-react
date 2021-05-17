import React, { useState, useEffect, useRef, Fragment } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='todo-form'>
                {
                    props.edit ? (
                        <Fragment>
                            <input className='todo-input edit' type="text" name="text" value={input} placeholder="Update To Do..." onChange={handleChange} ref={inputRef} />
                            <button type="submit" className='todo-button edit'>Update</button>
                        </Fragment>
                    ) :
                        (
                            <Fragment>
                                <input className='todo-input' type="text" name="text" value={input} placeholder="Add To Do..." onChange={handleChange} ref={inputRef} />
                                <button type="submit" className='todo-button'>Add</button>
                            </Fragment>
                        )
                }

            </form>
        </div>
    )
}

export default TodoForm
