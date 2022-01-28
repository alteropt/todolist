import React, { useState } from 'react';
import TodoList from './components/TodoList';
import removeTodoContext from './context/removeTodoContext';
import completeTodoContext from './context/completeTodoContext';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Программирование 2 часа', completed: false },
    { id: 2, title: 'Чтение 60 минут', completed: false },
    { id: 3, title: 'Английский 30 минут', completed: false },
  ]);

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }
    ))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }


  return (
    <div className="app">
      <h1>Todo List</h1>

      <AddTodo onCreate={addTodo}/>

      <completeTodoContext.Provider value={{ toggleTodo }}>
        <removeTodoContext.Provider value={{ removeTodo }}>
          {todos.length ? <TodoList todos={todos} />
            : <p style={{ textAlign: 'center' }}>No todos!</p>}
        </removeTodoContext.Provider>
      </completeTodoContext.Provider>
    </div>
  );
}

export default App;
