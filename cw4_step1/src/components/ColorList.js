import React from "react";

import Color from "./Color";

export default function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  return (
    <>
      {!colors.length ? (
        <div>No Colors Listed. (Add a Color)</div>
      ) : (
        <div className="color-list">
          {colors.map((color) => (
            <Color
              key={color.id}
              {...color}
              onRemove={onRemoveColor}
              onRate={onRateColor}
            />
          ))}
        </div>
      )}
    </>
  );
}
