import { ColorArray } from "../types/ColorArrayType";
import { Actions } from "../models/actions";
import { ColorAction } from "../types/ColorAction";
import { Color } from "../types/ColorType";

export default function colorStateReducer(
  state: ColorArray,
  action: ColorAction
) {
  switch (action.type) {
    case Actions.REMOVE_COLOR: {
      const updatedColorState = state.filter((color) => color.id !== action.id);

      return updatedColorState;
    }
    case Actions.CHANGE_COLOR_RATING: {
      const colorChangedRating = state.find(
        (color) => color.id === action.id
      ) as Color;

      if (action.rating) {
        colorChangedRating.rating = action.rating;
      }

      return [...state];
    }
    default:
      throw new Error("Invalid action type");
  }
}
