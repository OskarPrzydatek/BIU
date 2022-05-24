import React from "react";

import ExerciseLayout from "../../layouts/ExerciseLayout/ExerciseLayout";

import NumericInput from "./components/NumericInput/NumericInput";
import CounterButton from "./components/CounterButton/CounterButton";

import counterReducer from "./reducers/counterReducer";

export default function ExerciseOne() {
  const [state, dispatch] = React.useReducer(counterReducer, 0, (init) => init);

  const isDisabledDecrementButton = state > 0 ? false : true;

  return (
    <ExerciseLayout title="Exercise One">
      <p>Counter State: {state}</p>
      <NumericInput value={state} dispatch={dispatch} />
      <div>
        <CounterButton
          label="+"
          dispatch={() => dispatch({ type: "INCREMENT" })}
        />
        <CounterButton
          label="-"
          dispatch={() => dispatch({ type: "DECREMENT" })}
          disabled={isDisabledDecrementButton}
        />
      </div>
    </ExerciseLayout>
  );
}
