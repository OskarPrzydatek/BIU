import { Actions } from "../models/actions";

export type ColorAction = {
  type: Actions;
  id: string;
  rating?: number;
};
