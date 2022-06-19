import React from "react";

import { CalcContext } from "./CalcContext";

import calcReducer from "../reducers/calcReducer";
import { calcInitState } from "../state/calcInitState";

export default function CalcContextProvider({ children }) {
  const [calcState, calcDispatch] = React.useReducer(
    calcReducer,
    calcInitState,
    (init) => init
  );

  const calcContextValue = React.useMemo(
    () => ({
      calcState,
      calcDispatch,
    }),
    [calcState]
  );

  return (
    <CalcContext.Provider value={calcContextValue}>
      {children}
    </CalcContext.Provider>
  );
}
