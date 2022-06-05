import React from "react";

import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import ExerciseOne from "./exercises/ExerciseOne/ExerciseOne";
import ExerciseTwo from "./exercises/ExerciseTwo/ExerciseTwo";

import NavBar from "./components/NavBar/NavBar";

import { ExercisesRoutes } from "./consts/exercisesRoutes";

export default function App() {
  let navigate = useNavigate();
  const { pathname } = useLocation();

  const isRedirect =
    pathname !== ExercisesRoutes.E_ONE && pathname !== ExercisesRoutes.E_TWO;

  React.useEffect(() => {
    if (isRedirect) {
      return navigate(ExercisesRoutes.E_ONE);
    }
  }, [isRedirect, navigate]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path={ExercisesRoutes.E_ONE} element={<ExerciseOne />} />
        <Route path={ExercisesRoutes.E_TWO} element={<ExerciseTwo />} />
        <Route
          patt={ExercisesRoutes.REDIRECT}
          element={<Navigate to="/e-one" />}
        />
      </Routes>
    </>
  );
}
