import React from "react";

import pointsReducer from "../reducers/pointsReducer";

import { pointsInitState } from "../state/pointsInitState";

export default function useMapPoints() {
  const mapRef = React.useRef(null);

  const [state, dispatch] = React.useReducer(
    pointsReducer,
    pointsInitState,
    (init) => init
  );

  const handleMousePosition = React.useCallback(
    (event) => {
      if (mapRef.current && mapRef.current.contains(event.target)) {
        dispatch({
          type: "ADD_POINT_TO_MAP",
          point: { value: state.pointsCounter, x: event.x, y: event.y },
        });
      }
    },
    [state.pointsCounter]
  );

  React.useLayoutEffect(() => {
    window.addEventListener("click", handleMousePosition);

    return () => {
      window.removeEventListener("click", handleMousePosition);
    };
  }, [handleMousePosition]);

  return [mapRef, state.mapPoints];
}
