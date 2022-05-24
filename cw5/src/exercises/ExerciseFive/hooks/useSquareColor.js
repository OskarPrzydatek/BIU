import React from "react";

import squareBoxReducer from "../reducers/squareBoxReducer";

import { squareBoxInitState } from "../state/squareBoxInitState";

export default function useSquareColor(id) {
  const [state, dispatch] = React.useReducer(
    squareBoxReducer,
    squareBoxInitState,
    (init) => init
  );

  const squareColorStyle = {
    backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
  };

  const handleChangeColor = () =>
    !state.isClicked && dispatch({ type: `SQUARE_${id}` });

  return { squareColorStyle, handleChangeColor };
}
