import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import { CalcContext } from "../context/CalcContext";

import ActionSign from "../components/ActionSign";

export default function ResultPage() {
  let { action, firstNum, secondNum } = useParams();
  let navigate = useNavigate();

  const { calcState, calcDispatch } = React.useContext(CalcContext);

  const handleCalcDispatch = React.useCallback(() => {
    calcDispatch({
      type: action.toUpperCase(),
      firstNum: Number(firstNum),
      secondNum: Number(secondNum),
    });
  }, [calcDispatch, action, firstNum, secondNum]);

  React.useEffect(() => {
    handleCalcDispatch();
  }, [handleCalcDispatch]);

  return (
    <section>
      <article>
        <h2>Result</h2>
        <strong>
          {firstNum} <ActionSign action={action} /> {secondNum} =
          {calcState.result}
        </strong>
        <button onClick={() => navigate(-1)}>Back to Calculator</button>
      </article>
    </section>
  );
}
