import React from "react";

import "./Map.css";

const Map = React.forwardRef(({ src, alt }, ref) => (
  <img ref={ref} className="map" src={src} alt={alt} />
));

export default Map;
