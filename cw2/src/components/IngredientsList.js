import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({ list }) {
  return (
    <ul>
      {list.map((ingredient) => (
        <Ingredient key={ingredient.name} {...ingredients} />
      ))}
    </ul>
  );
}
