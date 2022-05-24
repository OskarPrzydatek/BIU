import React from "react";

export default function useMousePosition() {
  const cursorRef = React.useRef(null);

  const [mousePosition, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMousePosition = (event) => {
    if (cursorRef.current !== null) {
      cursorRef.current.style.left = `${event.x}px`;
      cursorRef.current.style.top = `${event.y}px`;

      setPosition({ x: event.x, y: event.y });
    }
  };

  React.useLayoutEffect(() => {
    window.addEventListener("mousemove", handleMousePosition);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  return [mousePosition.x, mousePosition.y, cursorRef];
}
