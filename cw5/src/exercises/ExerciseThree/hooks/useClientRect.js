import React from "react";

export default function useClientRect() {
  const [rect, setRect] = React.useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const ref = React.useCallback((node) => {
    if (node !== null) {
      const { width, height, top, left } = node.getBoundingClientRect();

      setRect({ width, height, top, left });
    }
  }, []);

  return [rect, ref];
}
