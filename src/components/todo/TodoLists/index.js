import React from 'react'

function TodoLists({todos}) {
    
  return (
    <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {todos && todos.map((todo, i) =>
            <li className="completed" key={i}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo}</label>
                <button className="destroy"></button>
              </div>
            </li>
           )}
         
          </ul>
        </section>
  )
}

export default TodoLists