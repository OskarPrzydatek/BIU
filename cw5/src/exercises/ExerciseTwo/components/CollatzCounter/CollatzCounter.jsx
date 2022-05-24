import NumericInput from "../NumericInput/NumericInput";

import useCollatz from "../../hooks/useCollatz";

export default function CollatzCounter() {
  const { state, dispatch, handleCollatzIt, handleCollatzReset } = useCollatz();

  return (
    <>
      <p>Collatz Counter Value: {state.value}</p>
      <p>Moves: {state.moves}</p>
      <NumericInput value={state.value} dispatch={dispatch} />
      <button onClick={handleCollatzIt}>Collatz It!</button>
      <button onClick={handleCollatzReset}>Reset</button>
    </>
  );
}
