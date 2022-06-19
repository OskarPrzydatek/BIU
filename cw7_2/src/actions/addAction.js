export default function addAction(state, action) {
  const newResult = action.firstNum + action.secondNum;

  return {
    ...state,
    result: newResult,
  };
}
