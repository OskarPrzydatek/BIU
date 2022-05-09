import React from "react";

import Star from "./Star";

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
  const [selectedStars, setSelectedStars] = React.useState(0);

  const createArray = (length) => [...Array(length)];

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      ;
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
