import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CalcContextProvider from "./context/CalcContextProvider";

import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";

export default function App() {
  return (
    <CalcContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=":action/:firstNum/:secondNum" element={<ResultPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </CalcContextProvider>
  );
}
