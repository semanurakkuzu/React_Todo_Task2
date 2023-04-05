import React from 'react'

function TodoLists({ todos, setTodos}) {
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

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos &&
          todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onClick={() => checkTodo(todo.id)}
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
