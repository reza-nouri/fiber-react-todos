import React from 'react'

const Todo = () => {
    return (
        <div class="task">
            <div class="content">
                <input value='read book' class="text" type="text" readonly="readonly" />
            </div>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
    )
}

export default Todo