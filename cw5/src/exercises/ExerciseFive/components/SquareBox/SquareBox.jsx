import "./SquareBox.css";

import useSquareColor from "../../hooks/useSquareColor";

export default function SquareBox({ id }) {
  const { squareColorStyle, handleChangeColor } = useSquareColor(id);

  return (
    <div
      id={id}
      className="square"
      style={squareColorStyle}
      onClick={handleChangeColor}
    />
  );
}
