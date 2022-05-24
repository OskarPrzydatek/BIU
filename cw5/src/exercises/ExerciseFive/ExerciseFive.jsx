import ExerciseLayout from "../../layouts/ExerciseLayout/ExerciseLayout";

import SquareBox from "./components/SquareBox/SquareBox";
import SquaresWrapper from "./components/SquaresWrapper/SquaresWrapper";

import useSquares from "./hooks/useSquares";

export default function ExerciseFive() {
  const squares = useSquares();

  return (
    <ExerciseLayout title="Exercise Five">
      <SquaresWrapper>
        {squares && squares.map((id) => <SquareBox key={id} id={id} />)}
      </SquaresWrapper>
    </ExerciseLayout>
  );
}
