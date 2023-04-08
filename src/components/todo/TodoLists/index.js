
import React, { useState } from 'react'

function TodoLists({ todos, setTodos, filteredTodos }) {
  const [allCompleted, setAllCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return { ...todo, completed: !todo.completed };
      })
    );
  };

  const toggleAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
    setAllCompleted(!allCompleted);
  };

  const startEditing = (id, text) => {
    setIsEditing(id);
    setEditedText(text);
  };


  const saveEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: editedText };
        }

        return todo;
      })
    );

    setIsEditing(false);
    setEditedText('');
  };

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        checked={allCompleted}
        onChange={toggleAll}
      />
      <label htmlFor="toggle-all" onClick={toggleAll}>
        Mark all as complete
      </label>

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
                {isEditing === todo.id ? (
                  <>
                    <input
                      className='inputEdit'
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          saveEditing(todo.id);
                        } 
                        
                      }}
                      onClick={() => saveEditing(todo.id)}
                      autoFocus
                    /> 
                  </>
                ) : (
                  <>
                    <label onClick={() => startEditing(todo.id, todo.text)}>
                      {todo.text}
                    </label>
                    <button  className="destroy" onClick={() => deleteTodo(todo.id)}></button>
                  </>
                )}
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default TodoLists;
