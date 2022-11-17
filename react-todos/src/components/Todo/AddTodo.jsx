import React from 'react'

const AddTodo = () => {
    return (
        <form id="new-task-form">
            <input type="text" name="new-task-input" id="new-task-input" placeholder="What do you have planned?" />
            <input type="submit" id="new-task-submit" value="Add task" />
        </form>
    )
}

export default AddTodo