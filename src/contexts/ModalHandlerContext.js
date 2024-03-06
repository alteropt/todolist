import { createContext, useContext } from "react";

export const ModalHandlerContext = createContext([]);

export const useModalHandlerContext = () => {
  const modalHandlers = useContext(ModalHandlerContext)
  
  if(modalHandlers.length !== 2) {
    throw new Error(`Expected 2 arguments in ModalHandlerContext, ${modalHandlers.length} given`)
  }

  return modalHandlers;
}

