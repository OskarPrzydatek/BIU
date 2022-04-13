import React from "react";
import { TotalStarColorListContext } from "./TotalStarColorListContext";

type TotalStarColorListProviderProps = {
  children: React.ReactNode;
  totalStars?: number;
};

export default function TotalStarColorListProvider({
  children,
  totalStars,
}: TotalStarColorListProviderProps) {
  const defaultTotalStar = 5;

  const [totalStarsValue, setTotalStarsValue] =
    React.useState<number>(defaultTotalStar);

  React.useEffect(() => {
    totalStars !== undefined
      ? setTotalStarsValue(totalStars)
      : setTotalStarsValue(defaultTotalStar);
  }, [totalStars]);

  return (
    <TotalStarColorListContext.Provider
      value={{ totalStarsValue, setTotalStarsValue }}
    >
      {children}
    </TotalStarColorListContext.Provider>
  );
}
