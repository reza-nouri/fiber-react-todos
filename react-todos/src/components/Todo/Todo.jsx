import React from 'react'

const Todo = (props) => {
    const deleteHandler = async (e) => {
        props.delete(props.id);
    }
    return (
        <div className="task">
            <div className="content">
                <input value={props.title} className="text" type="text" readOnly/>
            </div>
            <div className="actions">
                <button className="edit">Edit</button>
                <button className="delete" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default Todo