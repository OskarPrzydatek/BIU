import addAction from "../actions/addAction";
import subAction from "../actions/subAction";
import mulAction from "../actions/mulAction";
import divAction from "../actions/divAction";

export default function calcReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return addAction(state, action);
    case "SUB":
      return subAction(state, action);
    case "MUL":
      return mulAction(state, action);
    case "DIV":
      return divAction(state, action);
    default:
      return state; // ;)
  }
}
