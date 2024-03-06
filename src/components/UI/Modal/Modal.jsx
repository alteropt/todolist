import React, { useState } from 'react'
import classes from './Modal.module.scss';
import classNames from 'classnames';
import { IoMdClose } from "react-icons/io";
import {  useModalHandlerContext } from '../../../contexts/ModalHandlerContext';

const Modal = ({className, children, ...props}) => {

    const [modalOpen, setModalOpen] = useModalHandlerContext()
    
    return (
        <div 
            className={classNames(classes.modal, className, 
            (!modalOpen && classes.modal__hide))} 
            {...props}
            onClick={() => setModalOpen(false)}
            >
            <div className={classes.modal__wrapper} onClick={event => event.stopPropagation()}>
                <button className={classes.modal__close} onClick={() => setModalOpen(false)}>
                    <IoMdClose />
                </button>
                <div className={classes.modal__content}>
                    {children}
                </div>
            </div>
        </div>
)
}

Modal.Header = function ModalHeader({children, className}) {
    return (
        <div className={classNames(classes.modal__header, className)}>
            {children}
        </div>
    )
} 

Modal.Body = function ModalBody({children, className}) {
    return (
        <div className={classNames(className, classes.modal__body)}>
            {children}
        </div>
    )
} 

Modal.Footer = function ModalFooter({children, className}) {
    return (
        <div className={classNames(className, classes.modal__footer)}>
            {children}
        </div>
    )
} 


export default Modal;

