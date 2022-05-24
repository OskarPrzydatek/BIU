import React from "react";

import collatzReducer from "../reducers/collatzReducer";

import { collatzInitState } from "../state/collatzInitState";

export default function useCollatz() {
  const [state, dispatch] = React.useReducer(
    collatzReducer,
    collatzInitState,
    (init) => init
  );

  const handleCollatzAction = () => {
    if (state.value === 0) {
      alert("You need to put a new value!");
      return "RESET_STATE";
    }

    if (state.value === 1) {
      return "VALUE_ONE";
    }

    return state.value % 2 === 0 ? "EVEN" : "ODD";
  };

  const handleCollatzIt = () => {
    if (state.start && state.value === 1) {
      dispatch({ type: "END_COLLATZ" });
      alert("End of Collatz!");
    }

    dispatch({ type: handleCollatzAction() });
  };

  const handleCollatzReset = () => {
    dispatch({ type: "RESET_STATE" });
  };

  React.useEffect(() => {
    if (!state.start) {
      dispatch({ type: "START_COLLATZ" });
    }
  }, [state.start]);

  return { state, dispatch, handleCollatzIt, handleCollatzReset };
}
