import { useState } from "react";

const useSelect = (initialValue) => {
  const [currentOption, setCurrentOption] = useState(initialValue)

  return {
    currentOption,
    onChange: e => setCurrentOption(e.target.value)
  }
}

export default useSelect;
