export default function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return (state = state + 1);
    case "DECREMENT":
      return (state = state - 1);
    case "HANDLE_INPUT_VALUE":
      return (state = action.input);
    default:
      throw new Error("Counter Reducer unknown action");
  }
}
