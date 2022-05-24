import React from "react";

import "./BelerausMap.css";

import beleraus_map from "../../assets/belarus_map.png";

import MapPoint from "../MapPoint/MapPoint";

import useMapPoints from "../../hooks/useMapPoints";

export default function BelerausMap() {
  const [mapRef, mapPoints] = useMapPoints();

  return (
    <picture className="beleraus-map-4">
      <img ref={mapRef} src={beleraus_map} alt="Beleraus Map" />
      {mapPoints.length > 0 &&
        mapPoints.map(({ value, x, y }) => (
          <MapPoint key={`${value}-${x}x${y}`} value={value} x={x} y={y} />
        ))}
    </picture>
  );
}
