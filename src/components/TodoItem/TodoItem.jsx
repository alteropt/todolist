import { useState } from 'react'
import Checkbox from '../UI/Checkbox/Checkbox';
import { FaTrash } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import classes from './TodoItem.module.scss'
import classNames from 'classnames';
import { getDateInNormalFormat } from '../../calculatingFunc/getDateInNormalFormat';
import { useTodoHandlersContext } from '../../contexts/TodoHandlersContext';
import { useModalHandlerContext } from '../../contexts/ModalHandlerContext';

// todo = {title: String, createdAt: DD.MM.YYYY, id: number, isCompleted: boolean}
const TodoItem = ({todo, setModalFormType, ...props}) => {
    const [isDone, setIsDone] = useState(todo.isCompleted)

    const [todoCompleteHandle, todoDeleteHandle, todoGetCurrent, todoGetTitle] = useTodoHandlersContext()
    const [, setModalOpen] = useModalHandlerContext()

    const onTodoCompleteChange = () => {
        setIsDone(prev => !prev)
        todoCompleteHandle(todo.id)
    }

    const todoItemEditClicked = () => {
        setModalFormType('edit')
        setModalOpen(true)
        todoGetTitle(todo.title)
        todoGetCurrent(todo.id)
    }
    return (
        <div className={classes.todo} {...props}>
            <div className={classes.todo__info}>
                <Checkbox 
                    checked={isDone}
                    onClick={onTodoCompleteChange}
                />
                <div className={classes.todo__text}>
                    <div className={classNames(classes.todo__title, (isDone && classes.done))}>{todo.title}</div>
                    <div className={classes.todo__date}>Created at {todo.createdAt} {isDone && ('| Done at ' + todo.doneAt)}</div>
                </div>
            </div>
            <div className={classes.todo__buttons}>
                <button onClick={() => todoDeleteHandle(todo.id)}><FaTrash /></button>
                <button onClick={todoItemEditClicked}><RiPencilFill/></button>
            </div>
        </div>
    )
}

export default TodoItem;
