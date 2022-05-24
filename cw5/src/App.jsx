import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ExerciseOne from "./exercises/ExerciseOne/ExerciseOne";
import ExerciseTwo from "./exercises/ExerciseTwo/ExerciseTwo";
import ExerciseThree from "./exercises/ExerciseThree/ExerciseThree";
import ExerciseFour from "./exercises/ExerciseFour/ExerciseFour";
import ExerciseFive from "./exercises/ExerciseFive/ExerciseFive";

import PageLayout from "./layouts/PageLayout/PageLayout";

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/exercise-1" element={<ExerciseOne />} />
          <Route path="/exercise-2" element={<ExerciseTwo />} />
          <Route path="/exercise-3" element={<ExerciseThree />} />
          <Route path="/exercise-4" element={<ExerciseFour />} />
          <Route path="/exercise-5" element={<ExerciseFive />} />
          <Route path="*" element={<Navigate to="/exercise-1" />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
