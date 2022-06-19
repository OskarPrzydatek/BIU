import React from "react";

import Navbar from "../components/Navbar";
import NumInput from "../components/NumInput";

export default function HomePage() {
  const [firstNum, setFirstNum] = React.useState(0);
  const [secondNum, setSecondNum] = React.useState(0);

  return (
    <article>
      <h1>Simple Calculator</h1>
      <Navbar firstNum={firstNum} secondNum={secondNum} />
      <NumInput
        label="First Num"
        onInput={(e) => setFirstNum(e.target.value)}
      />
      <NumInput
        label="Second Num"
        onInput={(e) => setSecondNum(e.target.value)}
      />
    </article>
  );
}
