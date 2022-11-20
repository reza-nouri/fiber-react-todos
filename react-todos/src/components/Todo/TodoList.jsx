import React, { useEffect, useState } from 'react'
import { getTodos } from '../../lib/todo-api';
import Todo from './Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    async function getTodo(){
      const res = await getTodos();
      setTodos(res)
    }
    getTodo();
  }, [])

  const todosList = todos.map((todo) => <Todo key={todo.id} title={todo.title} /> );
  
  return (
    <main>
		<section className="task-list">
			<h2>Tasks</h2>

			<div id="tasks">
        {todosList}
			</div>
		</section>
	</main>
  )
}

export default TodoList