import React from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { RoutesConst } from "./consts/RoutesConst";

import ExerciseOne from "./ExerciseOne/ExerciseOne";
import ExerciseTwo from "./ExerciseTwo/ExerciseTwo";

import NavBar from "./components/NavBar";

import DataContextProvider from "./ExerciseTwo/providers/DataContextProvider";

export default function App() {
  let navigate = useNavigate();
  const { pathname } = useLocation();

  const isRedirect =
    pathname !== RoutesConst.EXERCISE_ONE &&
    pathname !== RoutesConst.EXERCISE_TWO;

  React.useEffect(() => {
    if (isRedirect) {
      return navigate(RoutesConst.EXERCISE_ONE);
    }
  }, [isRedirect, navigate, pathname]);

  return (
    <div className="App">
      <NavBar />
      <DataContextProvider>
        <Routes>
          <Route path={RoutesConst.EXERCISE_ONE} element={<ExerciseOne />} />
          <Route path={RoutesConst.EXERCISE_TWO} element={<ExerciseTwo />} />
        </Routes>
      </DataContextProvider>
    </div>
  );
}
