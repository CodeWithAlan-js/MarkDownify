import { createContext, useContext, useState } from "react";
import { baseValue } from "../helper";

const AreaValueContext = createContext();

export const useAreaValueContext = () => {
  return useContext(AreaValueContext);
};

export const AreaValueProvider = ({ children }) => {
  const storedValue = localStorage.getItem("value");
  const [value, setValue] = useState(
    storedValue !== null ? storedValue : baseValue
  );

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem("value", newValue);
  };

  const handleReset = () => {
    setValue("");
    localStorage.removeItem("value");
  };

  return (
    <AreaValueContext.Provider
      value={{ value, handleChange, handleReset, baseValue }}
    >
      {children}
    </AreaValueContext.Provider>
  );
};
