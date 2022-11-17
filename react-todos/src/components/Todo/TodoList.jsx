import React from 'react'
import Todo from './Todo'

const TodoList = () => {
  return (
    <main>
		<section className="task-list">
			<h2>Tasks</h2>

			<div id="tasks">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
			</div>
		</section>
	</main>
  )
}

export default TodoList