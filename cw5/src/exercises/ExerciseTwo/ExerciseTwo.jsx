import React from "react";

import ExerciseLayout from "../../layouts/ExerciseLayout/ExerciseLayout";
import CollatzCounter from "./components/CollatzCounter/CollatzCounter";

export default function ExerciseTwo() {
  return (
    <ExerciseLayout title="Exercise Two">
      <CollatzCounter />
    </ExerciseLayout>
  );
}
