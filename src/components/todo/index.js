import { useState, useEffect } from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import Filter from './Filter'
import TodoLists from './TodoLists'
function Todo() {
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filterType, setFilterType] = useState('all')

  useEffect(() => {
    setFilteredTodos(filteredTypeTodos(filterType))
  }, [todos, filterType])

  function filteredTypeTodos(filter) {
    if (filter === 'completed') {
      return todos.filter((item) => item.completed === true)
    } else if (filter === 'active') {
      return todos.filter((item) => item.completed === false)
    } else {
      return todos
    }
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo addTodo={setTodos} todos={todos} />
        </header>
        <TodoLists
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        ></TodoLists>
        <Filter
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
          setFilteredTodos={setFilteredTodos}
          filterType={filterType}
          setFilterType={setFilterType}
          filteredTypeTodos={filteredTypeTodos}
        ></Filter>
      </section>
      <Footer></Footer>
    </>
  )
}

export default Todo
