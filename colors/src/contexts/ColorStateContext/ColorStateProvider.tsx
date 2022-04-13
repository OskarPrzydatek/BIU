import React from "react";
import colorStateReducer from "../../reducers/colorStateReducer";
import colorData from "../../data/color-data.json";
import { ColorStateContext } from "./ColorStateContext";
import { ContainerComponent } from "../../types/ContainerComponent";

export default function ColorStateProvider({ children }: ContainerComponent) {
  const [colorState, colorDispatch] = React.useReducer(
    colorStateReducer,
    colorData,
    (init) => init
  );

  return (
    <ColorStateContext.Provider value={{ colorState, colorDispatch }}>
      {children}
    </ColorStateContext.Provider>
  );
}
