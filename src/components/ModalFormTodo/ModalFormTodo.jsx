import React, { useEffect, useState } from 'react'
import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './ModalFormTodo.module.scss';
import useInput from '../../hooks/useInput';
import { useModalHandlerContext } from '../../contexts/ModalHandlerContext';

// handleType = {'create' | 'edit'}
const ModalFormTodo = ({handleType, todoCreateHandle, todoEditHandle, currentValue}) => {
  const {value, error, setValue, setError, ...createTodoInputManage} = useInput(currentValue, true)
  const [modalOpen, setModalOpen] = useModalHandlerContext()
  
  useEffect(() => {
    setValue(currentValue)
    return () => {
      setValue('')
      setError('')
    }
  }, [])

  useEffect(() => {
    setValue(currentValue)
    setError('')
  }, [currentValue])

  const formSubmitHandle = (event) => {
    event.preventDefault()
    
    if(value.trim()) {
      if(handleType === 'create') {
        todoCreateHandle(value) 
      } else if(handleType === 'edit') {
        todoEditHandle(value)
      }
      setValue('')
      setModalOpen(false)
    } else {
      setError('Required field!')
    }
  }

  return (
   <Modal>
        <Modal.Header>
          <p>{handleType === 'create' ? 'Add' : 'Edit'} Task</p>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={formSubmitHandle}>            
                <Input
                    labelValue='Title'
                    placeholder='Enter task title'
                    error={error}
                    value={value}
                    {...createTodoInputManage}
                />
                <div className={classes.modal__btns}>
                    <Button className={classes.modal__add}>{handleType === 'create' ? 'Add' : 'Edit'} task</Button>
                    <Button disabledView={true} onClick={() => setModalOpen(false)}>Cancel</Button>
                </div>
            </form>
        </Modal.Body>
      </Modal>
  )
}

export default ModalFormTodo;
