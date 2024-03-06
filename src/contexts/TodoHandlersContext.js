import { createContext, useContext } from "react"

export const TodoHandlersContext = createContext([])

export const useTodoHandlersContext = () => {
    const todoHandlers = useContext(TodoHandlersContext)

    if (todoHandlers.length !== 4) {
        throw new Error(`Expected 4 function arguments, ${todoHandlers.length} given`)
    }

    return todoHandlers;
}
