import { useState } from "react";

const useInput = (initialValue, required) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(null)

  return {
    value,
    setValue,
    onBlur: e => {
      if(!e.target.value.trim() && required) {
        setError('Required field')
        setValue('') 
      } 
      else setError(null)
    },
    onChange: e => setValue(e.target.value),
    error, 
    setError,
  }
}

export default useInput;
