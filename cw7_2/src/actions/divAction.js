export default function divAction(state, action) {
  const newResult = action.firstNum / action.secondNum;

  return {
    ...state,
    result: newResult,
  };
}
