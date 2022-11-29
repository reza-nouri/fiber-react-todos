import React, { useState } from 'react'

const Todo = (props) => {
    const [title, setTitle] = useState(props.title)
    const deleteHandler = (e) => {
        props.delete(props.id);
    }
    const editdHandler = (e) => {
        const body = {
            id: props.id,
            title: title
        }
        props.edit(body)
    }
    return (
        <div className="task">
            <div className="content">
                <input value={title} className="text" type="text"
                    onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="actions">
                <button className="edit" onClick={editdHandler}>Edit</button>
                <button className="delete" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default Todo