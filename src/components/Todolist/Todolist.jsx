import React, { useEffect, useState } from 'react';
import classes from './Todolist.module.scss';
import Button from '../UI/Button/Button';
import Select from '../UI/Select/Select';
import TodoItem from '../TodoItem/TodoItem';
import { dataOptionValues } from '../../data/dataOptionsValues';
import { useModalHandlerContext } from '../../contexts/ModalHandlerContext';
import useSelect from '../../hooks/useSelect';

const Todolist = ({todos, setModalFormType, ...props}) => {
    const optionsValues = dataOptionValues;

    const {currentOption, onChange} = useSelect(optionsValues[0].value)
    const [currentTodos, setCurrentTodos] = useState(todos)

    useEffect(() => {
        const filteredTodos = todos.filter(todo => {
            if(currentOption === 'All') {
                return todo
            } else if(currentOption === 'Complete') {
                return todo.isCompleted
            } else if(currentOption === 'Incomplete') {
                return !todo.isCompleted
            }
        })
        setCurrentTodos(filteredTodos)
    }, [currentOption, todos])

    const [modalOpen, setModalOpen] = useModalHandlerContext() 
    const addButtonHandle = () => {
        setModalOpen(true)
        setModalFormType('create')
    }

    return (
        <div className={classes.todolist} {...props}>
            <div className={classes.todolist__control}>
                <Button className="button" onClick={addButtonHandle}>Add Task</Button>
                <Select 
                    name="todosFilterType" 
                    optionsValues={optionsValues}
                    value={currentOption}
                    onChange={onChange}
                >
                </Select>
            </div>
            { currentTodos.length ? 
                <div className={classes.todolist__list}>
                    {currentTodos.map(todo => (
                        <TodoItem 
                            todo={todo} 
                            setModalFormType={setModalFormType}
                            key={todo.id}
                        />
                    ))}
                </div>
                :
                <div className={classes.todolist__empty}>
                    No Todo Found
                </div>
            }
        </div>
    )
}

export default Todolist;
