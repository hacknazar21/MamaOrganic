import * as React from "react";
import { useEffect, useRef, useState } from "react";

export default function Input({
  name,
  defaultValue,
  label,
  type,
  htmlFor,
  changeHandler,
}) {
  const input = useRef();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(defaultValue);
    if (defaultValue !== "") {
      input.current.parentElement.classList.add("full");
    }
  }, [defaultValue]);
  useEffect(() => {
    if (input.current.value !== "") {
      input.current.parentElement.classList.add("full");
    } else {
      input.current.parentElement.classList.remove("full");
    }
  }, [inputValue]);

  const changeInputHandler = (event) => {
    setInputValue(event.target.value);
    changeHandler(event);
  };
  return (
    <div className="input__box">
      <input
        ref={input}
        id={htmlFor}
        name={name}
        value={inputValue}
        type={type}
        onInput={changeInputHandler}
        className="input__item"
      />
      <label htmlFor={htmlFor} className="input__label">
        {label}
      </label>
    </div>
  );
}
