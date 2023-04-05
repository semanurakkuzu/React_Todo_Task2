import { useState, useEffect } from 'react'

function AddTodo({ addTodo, todos }) {
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    setInputText('')
  }, [todos])

  function todoInputChange(e) {
    setInputText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (inputText === '') {
      return false
    }
    addTodo([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 10000)
      }
    ])
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputText}
        autoFocus
        onChange={todoInputChange}
      />
    </form>
  )
}

export default AddTodo
