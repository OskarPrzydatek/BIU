import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ColorStateContext } from "../contexts/ColorStateContext/ColorStateContext";
import { Actions } from "../models/actions";

type StarProps = {
  id: string;
  isFilled: boolean;
  starValue: number;
};

const starButton = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
};

const color = {
  filled: "#FF0000",
  noFilled: "#000000",
};

export default function Star({ id, isFilled, starValue }: StarProps) {
  const fill = isFilled ? color.filled : color.noFilled;
  const { colorDispatch } = React.useContext(ColorStateContext);

  const handleRatingChange = () => {    
    colorDispatch!({
      type: Actions.CHANGE_COLOR_RATING,
      id: id,
      rating: starValue,
    });
  };

  return (
    <li>
      <button style={starButton} onClick={handleRatingChange}>
        <AiFillStar fill={fill} />
      </button>
    </li>
  );
}
