export default function mulAction(state, action) {
  const newResult = action.firstNum * action.secondNum;

  return {
    ...state,
    result: newResult,
  };
}
