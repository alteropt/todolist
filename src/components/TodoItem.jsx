import React, { useContext } from 'react';
import removeTodoContext from '../context/removeTodoContext';
import completeTodoContext from '../context/completeTodoContext';

const TodoItem = (props) => {
    const {removeTodo} = useContext(removeTodoContext);
    const {toggleTodo} = useContext(completeTodoContext);

    const classes = [];

    if (props.todo.completed) {
        classes.push('done')
    }

    return (
        <div className="app__todo-item">
            <span className={classes.join(' ')}>
                <input checked={props.todo.completed} type="checkbox" onClick={toggleTodo.bind(null, props.todo.id)}/>
                <b>{props.index + 1}.</b>
                &nbsp; {props.todo.title}
            </span>
            <button onClick={removeTodo.bind(null, props.todo.id)}>&times;</button>
        </div>
    )
}

export default TodoItem;
