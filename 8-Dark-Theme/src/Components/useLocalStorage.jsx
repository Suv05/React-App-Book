import { useState } from "react";

function useLocalStorage({ key, defaultValue }) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
        
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
  });
  return currentValue;
}

export default useLocalStorage;
