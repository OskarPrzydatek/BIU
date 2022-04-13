import React from "react";

export default function Instructions({ title, steps }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
    </section>
  );
}
