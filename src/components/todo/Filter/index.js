import React from 'react'

function Filter({
  todos,
  setTodos,
  setFilteredTodos,
  filterType,
  setFilterType,
  filteredTypeTodos
}) {
    //Modify the filtering method and perform the filtering
  function changeFilter(filter) {
    setFilterType(filter)
    setFilteredTodos(filteredTypeTodos(filter))
  }

  function clearCompleted() {
    setTodos(todos.filter((item) => item.completed === false))
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter((item) => !item.completed).length}</strong> items
        left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filterType === 'all' ? 'selected' : ''}
            onClick={() => changeFilter('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filterType === 'active' ? 'selected' : ''}
            onClick={() => changeFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filterType === 'completed' ? 'selected' : ''}
            onClick={() => changeFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={ clearCompleted}>Clear completed</button>
    </footer>
  )
}

export default Filter
