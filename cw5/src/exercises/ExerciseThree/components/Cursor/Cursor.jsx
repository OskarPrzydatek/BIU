import React from "react";

import "./Cursor.css";

const Cursor = React.forwardRef(({ x, y }, ref) => (
  <div ref={ref} className="cursor">
    {x.toFixed(2)} &deg;E, {y.toFixed(2)} &deg;N
  </div>
));

export default Cursor;
