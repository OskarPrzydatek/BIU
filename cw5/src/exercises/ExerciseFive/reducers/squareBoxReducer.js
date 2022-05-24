export default function squareBoxReducer(state, action) {
  switch (action.type) {
    case "SQUARE_1":
      return {
        ...state,
        isClicked: true,
        red: state.red - 5,
      };
    case "SQUARE_2":
      return {
        ...state,
        isClicked: true,
        green: state.green + 10,
      };
    case "SQUARE_3":
      return {
        ...state,
        isClicked: true,
        red: state.red - 5,
        blue: state.blue + 5,
      };
    case "SQUARE_4":
      return {
        ...state,
        isClicked: true,
        green: state.green + 10,
        blue: state.blue + 10,
      };
    case "SQUARE_5":
      return {
        isClicked: true,
        red: state.green,
        green: state.blue,
        blue: state.red,
      };
    case "SQUARE_6":
      return {
        ...state,
        isClicked: true,
        red: Math.floor(state.red / 2),
      };
    default:
      throw new Error("Invalid square box reducer action type");
  }
}
