import React from 'react'

function TodoLists({todos, setTodos}) {
    
    function deleteTodo(index) {
        setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
      }

  return (
    <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {todos && todos.map((todo, index) =>
            <li className="completed" key={index}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo}</label>
                <button className="destroy" onClick={() => deleteTodo(index)}></button>
              </div>
            </li>
           )}
         
          </ul>
        </section>
  )
}

export default TodoLists