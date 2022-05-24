export default function collatzReducer(state, action) {
  switch (action.type) {
    case "VALUE_ONE":
      return state;
    case "EVEN":
      return {
        ...state,
        value: state.value / 2,
        moves: state.moves + 1,
      };
    case "ODD":
      return {
        ...state,
        value: state.value * 3 + 1,
        moves: state.moves + 1,
      };
    case "HANDLE_INPUT_VALUE":
      return {
        ...state,
        value: action.input,
      };
    case "RESET_STATE":
      return {
        value: 0,
        moves: 0,
        start: false,
        end: false,
      };
    case "START_COLLATZ":
      return {
        ...state,
        start: true,
        end: false,
      };
    case "END_COLLATZ":
      return {
        value: 0,
        moves: 0,
        start: false,
        end: true,
      };
    default:
      throw new Error("Collatz reducer invalid action type");
  }
}
