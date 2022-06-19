import React from "react";

export default function ActionSign({ action }) {
  return (
    <>
      {
        {
          add: <>+</>,
          sub: <>-</>,
          mul: <>*</>,
          div: <>/</>,
        }[action]
      }
    </>
  );
}
