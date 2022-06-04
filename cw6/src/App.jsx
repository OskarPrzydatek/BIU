import React from "react";

import {
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import ExerciseOne from "./exercises/ExerciseOne/ExerciseOne";
import ExerciseTwo from "./exercises/ExerciseTwo/ExerciseTwo";

export default function App() {
  let navigate = useNavigate();
  const { pathname } = useLocation();

  const isRedirect = pathname !== "/e-one" && pathname !== "/e-two";

  React.useEffect(() => {
    if (isRedirect) {
      return navigate("/e-one");
    }
  }, [isRedirect, navigate]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/e-one">Zadanie 1</Link>
          </li>
          <li>
            <Link to="/e-two">Zadanie 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/e-one" element={<ExerciseOne />} />
        <Route path="/e-two" element={<ExerciseTwo />} />
        <Route path="/e-two/meal/:id" element={<ExerciseTwo />} />
        <Route patt="*" element={<Navigate to="/e-one" />} />
      </Routes>
    </>
  );
}
