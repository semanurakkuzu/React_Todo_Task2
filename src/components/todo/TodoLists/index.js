import React from 'react'

function TodoLists({ todos, setTodos }) {
  function deleteTodo(index) {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index))
  }

  function checkTodo(index) {
    setTodos(
      todos.map((todo, todoIndex) => {
        if (todoIndex !== index) {
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
                  onClick={() => checkTodo(index)}
                />
                <label>{todo.text}</label>
                <button
                  className="destroy"
                  onClick={() => deleteTodo(index)}
                ></button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default TodoLists
