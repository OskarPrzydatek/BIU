import React from "react";

export default function useSquares() {
  const numOfSquares = 6;

  const [squares, setSquares] = React.useState();

  const createSquares = React.useCallback(() => {
    setSquares(Array.from({ length: numOfSquares }, (_, i) => i + 1));
  }, []);

  React.useEffect(() => {
    createSquares();
  }, [createSquares]);

  return squares;
}
