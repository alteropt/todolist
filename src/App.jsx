import { useState } from "react";
import Todolist from "./components/Todolist/Todolist";
import { TodoHandlersContext } from "./contexts/TodoHandlersContext";
import ModalFormTodo from "./components/ModalFormTodo/ModalFormTodo";
import { ModalHandlerContext } from "./contexts/ModalHandlerContext";
import { useTodoList } from "./hooks/useTodoItem";

const App =  () => {
  const [todos, setTodos] = useState(() => {
    if (window.localStorage.getItem('todos')) {
      return JSON.parse(window.localStorage.getItem('todos'))
    } else {
      return []
    }
  })

  const [currentModalFormValue, setCurrentModalFormValue] = useState('')
  const {
    todoCreateHandle,
    todoGetTitle,
    todoEditHandle,
    todoGetCurrent,
    todoCompleteHandle,
    todoDeleteHandle
  } = useTodoList(todos, setTodos, setCurrentModalFormValue)

  const [modalOpen, setModalOpen] = useState(false)
  const [modalFormType, setModalFormType] = useState('create') // 'create' | 'edit'
  
  return (
    <ModalHandlerContext.Provider value={[modalOpen, setModalOpen]}>
      <div className="wrapper">
        <h1 className="app-title">Todo list</h1>
        {modalOpen &&
          modalFormType === 'create' ?
          <ModalFormTodo
            todoCreateHandle={todoCreateHandle}     
            handleType={modalFormType}
            currentValue=''
          /> : modalFormType === 'edit' ? 
          <ModalFormTodo
            todoEditHandle={todoEditHandle}     
            handleType={modalFormType}
            currentValue={currentModalFormValue}
          /> : null
        }
        <TodoHandlersContext.Provider value={[todoCompleteHandle, todoDeleteHandle, todoGetCurrent, todoGetTitle]}>
          <Todolist
            todos={todos}
            setModalFormType={setModalFormType}
          />
        </TodoHandlersContext.Provider>
      </div>
    </ModalHandlerContext.Provider>
  )
}

export default App;
