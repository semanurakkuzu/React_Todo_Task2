import { useState, useEffect } from 'react'

function AddTodo({ addTodo, todos }) {
  const [inputText, setInputText] = useState('')

  //Clear input text when todo changes
  useEffect(() => {
    setInputText('')
  }, [todos])

  function todoInputChange(e) {
    setInputText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //Empty validation
    if (inputText === '') {
      return false
    }

    //Input text, completed status, and ID information have been added to the todo array.
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
