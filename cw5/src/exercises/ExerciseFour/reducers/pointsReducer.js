export default function pointsReducer(state, action) {
  switch (action.type) {
    case "ADD_POINT_TO_MAP":
      return {
        mapPoints: [...state.mapPoints, action.point],
        pointsCounter: state.pointsCounter + 1,
      };
    default:
      throw new Error("Invalud Points Reducer Action");
  }
}
