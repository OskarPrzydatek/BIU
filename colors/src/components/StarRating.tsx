import React from "react";
import { TotalStarColorListContext } from "../contexts/TotalStarColorListContext/TotalStarColorListContext";

import Star from "./Star";

type StarRatingProps = { id: string; rating: number };

const starRatingStyle = {
  padding: "0",
  display: "flex",
};

export default function StarRating({ id, rating }: StarRatingProps) {
  const { totalStarsValue } = React.useContext(TotalStarColorListContext);

  const createArray = (length: number) => [...Array(length)];

  const changeIndexToValue = (index: number) => index + 1;

  const handleStarsRatingFill = (starValue: number) =>
    starValue <= rating ? true : false;

  return (
    <ul style={starRatingStyle}>
      {createArray(totalStarsValue!).map((key, starValue) => (
        <Star
          key={`${id}-${key}-${starValue}`}
          id={id}
          isFilled={handleStarsRatingFill(changeIndexToValue(starValue))}
          starValue={changeIndexToValue(starValue)}
        />
      ))}
    </ul>
  );
}
