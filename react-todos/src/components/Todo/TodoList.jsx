import React, { useEffect, useState } from 'react'
import { createTodo, deleteTodo, getTodos } from '../../lib/todo-api';
import AddTodo from './AddTodo';
import Todo from './Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    async function getTodo() {
      const res = await getTodos();
      setTodos(res)
    }
    getTodo();
  }, [])

  const deleteHandler = async (id) => {
    const res = await deleteTodo(id);
    if (res.message === 'Todo Deleted') {
      const tempTodos = todos.filter(todo => todo.id !== id);
      setTodos(tempTodos);
    }
    console.log(res);
  }

  const addHandler = async (todo) => {
    const res = await createTodo(todo);
    if(res.id !== 0){
      setTodos(oldTodos => [...oldTodos, res])
    }
    console.log(res);
  }

  const todosList = todos.map((todo) =>
    <Todo delete={deleteHandler} key={todo.id} id={todo.id} title={todo.title} />
  );

  return (
    <React.Fragment>
      <header>
        <h1>Task List</h1>
        <AddTodo add={addHandler}/>
      </header>
      <main>
        <section className="task-list">
          <h2>Tasks</h2>

          <div id="tasks">
            {todosList}
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default TodoList