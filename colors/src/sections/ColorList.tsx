import React from "react";
import ColorBox from "../components/ColorBox";
import { ColorStateContext } from "../contexts/ColorStateContext/ColorStateContext";
import TotalStarColorListProvider from "../contexts/TotalStarColorListContext/TotalStarColorListProvider";

type ColorListProps = { totalStars?: number };

export default function ColorList({ totalStars }: ColorListProps) {
  const { colorState } = React.useContext(ColorStateContext);

  return (
    <TotalStarColorListProvider totalStars={totalStars}>
      <ul>
        {colorState !== undefined ? (
          colorState.map(({ id, title, color, rating }) => (
            <ColorBox
              key={id}
              id={id}
              title={title}
              color={color}
              rating={rating}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </TotalStarColorListProvider>
  );
}
