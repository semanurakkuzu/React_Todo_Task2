import React, { useState } from 'react'

function TodoLists({ todos, setTodos, filteredTodos }) {
  const [allCompleted, setAllCompleted] = useState(false);

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function checkTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo
        }

        todo.completed = !todo.completed

        return todo
      })
    )
  }

  function toggleAll() {
    setTodos(todos.map(todo => ({
      ...todo,
      completed: !allCompleted
    })));
    setAllCompleted(!allCompleted);
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" checked={allCompleted} onChange={toggleAll} />
      <label htmlFor="toggle-all" onClick={toggleAll}>Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodos &&
          filteredTodos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => checkTodo(todo.id)}
                />
                <label>{todo.text}</label>
                <button
                  className="destroy"
                  onClick={() => deleteTodo(todo.id)}
                ></button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default TodoLists
