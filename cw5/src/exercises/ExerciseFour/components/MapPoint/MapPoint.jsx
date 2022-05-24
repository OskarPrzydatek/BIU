import React from "react";

import "./MapPoint.css";

const MapPoint = React.memo(({ value, x, y }) => (
  <span
    className="map-point"
    onClick={() => alert(value)}
    style={{
      top: `${y}px`,
      left: `${x}px`,
    }}
  >
    {value}
  </span>
));

export default MapPoint;
