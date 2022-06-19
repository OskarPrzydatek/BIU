export default function subAction(state, action) {
  const newResult = action.firstNum - action.secondNum;

  return {
    ...state,
    result: newResult,
  };
}
