import { useState } from "react"
import { getDateInNormalFormat } from "../calculatingFunc/getDateInNormalFormat";

export const useTodoList = (todos, setTodos, setCurrentModalFormValue) => {
  const todoCreateHandle = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      isCompleted: false,
      createdAt: getDateInNormalFormat()
    }
    setTodos(prev => ([
      ...prev,
      newTodo
    ]))

    window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
  }

  const todoGetTitle = (title) => {
    setCurrentModalFormValue(title)
  }

  const [currentTodoId, setCurrentTodoId] = useState(0)
  const todoEditHandle = (newTitle) => {
    const todosCopy = [...todos]
    const currentTodo = todosCopy.find(todo => todo.id === currentTodoId)
    currentTodo.title = newTitle
    setTodos(todosCopy)
    window.localStorage.setItem('todos', JSON.stringify(todosCopy))
  }

  const todoGetCurrent = (id) => {
    setCurrentTodoId(id)
  }

  const todoCompleteHandle = (todoId) => {
    const todosCopy = [...todos]
    const currentTodo = todosCopy.find(todo => todoId === todo.id)
    currentTodo.isCompleted = !currentTodo.isCompleted
    if(currentTodo.isCompleted) {
      currentTodo.doneAt = getDateInNormalFormat()
    }
    setTodos(todosCopy)

    window.localStorage.setItem('todos', JSON.stringify(todosCopy))
  }

  const todoDeleteHandle = (todoId) => {
    const todosCopy = [...todos]
    const newTodos = todosCopy.filter(todo => todo.id !== todoId) 
    setTodos(newTodos)
    window.localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  return {
    todoCreateHandle,
    todoGetTitle,
    todoEditHandle,
    todoGetCurrent,
    todoCompleteHandle,
    todoDeleteHandle
  }
}
