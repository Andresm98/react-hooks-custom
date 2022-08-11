import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };
  const decrement = (value = 1) => {
    if (counter === 1) return;
    setCounter((current) => current - value);
  };
  const reset = () => {
    setCounter(1);
  };

  const setValue = (value) => {
    setCounter(value);
  };
  return {
    counter,
    increment,
    decrement,
    setValue,
    reset,
  };
};
