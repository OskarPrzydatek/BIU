import React from "react";

type TotalStarColorListContextType = {
  totalStarsValue: number;
  setTotalStarsValue: React.Dispatch<React.SetStateAction<number>>;
};

export const TotalStarColorListContext = React.createContext<
  Partial<TotalStarColorListContextType>
>({});
