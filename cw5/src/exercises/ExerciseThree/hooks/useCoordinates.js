import React from "react";

/**
 *
 * @top = 56.4
 * @bottom = 51.1
 * @left = 22.9
 * @right = 33.0
 *
 * @mapSteps calculations
 * Map height in cartograph = 56.1 - 51.1 = 5.3
 * Map width in cartograph = 33.0 - 22.9 10.1
 *
 */
const mapBordersCoordinates = {
  top: 56.4,
  left: 22.9,
  vericalStep: 5.3,
  horizontalStep: 10.1,
};

export default function useCoordinates(rect, mouseX, mouseY) {
  const [mapY, setMapY] = React.useState(0);
  const [mapX, setMapX] = React.useState(0);

  const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });

  const mapBorders = React.useMemo(() => {
    return {
      top: Math.floor(rect.top),
      bottom: Math.floor(rect.top) + rect.height,
      left: Math.floor(rect.left),
      right: Math.floor(rect.left) + rect.width,
    };
  }, [rect]);

  const mapSteps = React.useMemo(() => {
    return {
      vertical: rect.height / mapBordersCoordinates.vericalStep,
      horizontal: rect.width / mapBordersCoordinates.horizontalStep,
    };
  }, [rect]);

  const handleCoordinates = React.useCallback(() => {
    // Top
    if (mapBorders.top === mouseY) setMapY(0);

    // Bottom
    if (mapBorders.bottom === mouseY) setMapY(rect.height);

    // Left
    if (mapBorders.left === mouseX) setMapX(0);

    // Right
    if (mapBorders.right === mouseX) setMapX(rect.width);

    setMapX(mouseX - rect.left);
    setMapY(mouseY - rect.top);

    setCoordinates({
      x: mapBordersCoordinates.left + mapX / mapSteps.horizontal,
      y: mapBordersCoordinates.top - mapY / mapSteps.vertical,
    });
  }, [mapBorders, mapSteps, mapX, mapY, mouseX, mouseY, rect]);

  React.useLayoutEffect(() => {
    window.addEventListener("mousemove", handleCoordinates);

    return () => {
      window.removeEventListener("mousemove", handleCoordinates);
    };
  }, [handleCoordinates]);

  return coordinates;
}
