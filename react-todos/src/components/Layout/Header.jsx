import React from 'react'
import AddTodo from '../Todo/AddTodo'

const Header = () => {
    return (
        <header>
            <h1>Task List</h1>
            <AddTodo />
        </header>
    )
}

export default Header