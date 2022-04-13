import React from "react";
import { FaTrash } from "react-icons/fa";
import { ColorStateContext } from "../contexts/ColorStateContext/ColorStateContext";
import { Actions } from "../models/actions";

import StarRating from "./StarRating";

type ColorBoxProps = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

export default function ColorBox({
  id,
  title,
  color,
  rating,
}: ColorBoxProps) {
  const { colorDispatch } = React.useContext(ColorStateContext);

  const handleDeleteColorAction = () => {
    colorDispatch!({ type: Actions.REMOVE_COLOR, id: id });
  };

  return (
    <article>
      <h2>{title}</h2>
      <button onClick={handleDeleteColorAction}>
        <FaTrash />
      </button>
      <div style={{ background: color, height: "15vh" }} />
      <StarRating id={id} rating={rating} />
      <p>{rating} of 5 stars</p>
    </article>
  );
}
