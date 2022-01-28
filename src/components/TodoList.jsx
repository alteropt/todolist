import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    return (
        todos.map((todo, idx) => {
            return <TodoItem index={idx} key={todo.id} todo={todo}/>
        })
    )
}

export default TodoList;
