import React, { useState } from 'react'
import { createTodo } from '../../lib/todo-api';

const AddTodo = () => {
    const [todoTitle, setTodoTitle] = useState('');

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const todo = {
            title: todoTitle,
            completed: false
        }
        const res = await createTodo(todo);
        console.log(res);
    }

    return (
        <form id="new-task-form" onSubmit={formSubmitHandler}>
            <input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} type="text" name="new-task-input" id="new-task-input" placeholder="What do you have planned?" />
            <input type="submit" id="new-task-submit" value="Add task" />
        </form>
    )
}

export default AddTodo