import React from "react";
import useStorage from "./useStorage";// Import the external CSS file

const Input = () => {
  const [inputFieldValue, setInputFieldValue] = useStorage("inputValue");

  const onInputChange = (e) => {
    const newValue = e.target.value;
    setInputFieldValue(newValue);
  };

  return (
    <div className="container">
      <label htmlFor="text_inp" className="label">
        Text Field:
      </label>
      <input
        type="text"
        id="text_inp"
        value={inputFieldValue}
        onChange={onInputChange}
        className="text_input"
      />
      <p className="display_val">Value: {inputFieldValue}</p>
    </div>
  );
};

export default Input;