import React from "react";

import "./BelerausMap.css";

import Cursor from "../Cursor/Cursor";
import Map from "../Map/Map";

import useMousePosition from "../../hooks/useMousePosition";
import useClientRect from "../../hooks/useClientRect";
import useCoordinates from "../../hooks/useCoordinates";

import beleraus_map from "../../assets/belarus_map.png";

export default function BelerausMap() {
  const [showCursor, setShowCursor] = React.useState(false);

  const [mouseX, mouseY, mouseRef] = useMousePosition();
  const [rect, mapRef] = useClientRect();
  const coordinates = useCoordinates(rect, mouseX, mouseY);

  return (
    <picture
      className="beleraus-map-3"
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      {showCursor && (
        <Cursor x={coordinates.x} y={coordinates.y} ref={mouseRef} />
      )}
      <Map ref={mapRef} src={beleraus_map} alt="Beleraus Map" />
    </picture>
  );
}
