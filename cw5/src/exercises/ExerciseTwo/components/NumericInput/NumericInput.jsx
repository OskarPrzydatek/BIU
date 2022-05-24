import React from "react";

import "./NumericInput.css";

export default function NumericInput({ value, dispatch }) {
  const invalidChars = ["e", "E", "+", "-"];
  const isValueEqualZero = value === 0 ? "" : value;

  const preventInvalidChars = (event) =>
    invalidChars.includes(event.key) && event.preventDefault();

  const handleOnInput = (event) => {
    dispatch({
      type: "HANDLE_INPUT_VALUE",
      input: Number(event.target.value),
    });
  };

  return (
    <label className="numeric-input">
      <span>Counter</span>
      <input
        type="number"
        value={isValueEqualZero}
        onChange={(event) => handleOnInput(event)}
        onKeyDown={(event) => preventInvalidChars(event)}
      />
    </label>
  );
}
