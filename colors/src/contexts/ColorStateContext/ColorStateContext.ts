import React from "react";
import { ColorAction } from "../../types/ColorAction";
import { ColorArray } from "../../types/ColorArrayType";

type ColorStateContextType = {
  colorState: ColorArray;
  colorDispatch: React.Dispatch<ColorAction>;
};

export const ColorStateContext = React.createContext<
  Partial<ColorStateContextType>
>({});
