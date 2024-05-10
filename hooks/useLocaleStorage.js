"use client";

import { useState, useEffect } from "react";

const useLocalStorage = (key = "todos", initialValue = []) => {
  const isClient = typeof window !== "undefined";
  // retrieve the stored value from localStorage
  const storedValue = isClient ? localStorage.getItem(key) : null;
  // console.log(`local`, localStorage.getItem(key));
  // initialize the state with the stored value or the initial value
  const [value, setValue] = useState(
    storedValue !== null ? JSON.parse(storedValue) : initialValue
  );

  // update the localStorage whenever the value changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isClient]);

  // function to update the value in localStorage and state
  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return [value, updateValue];
};

export default useLocalStorage;
