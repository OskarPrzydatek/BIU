import React from "react";

import "./MealRecipe.css";

import useFormattedString from "../../hooks/useFormattedString";

import RecipeModal from "../RecipeModal/RecipeModal";

export default function MealRecipe({ strMeal, strInstructions }) {
  const [showModal, setShowModal] = React.useState(false);

  const formattedString = useFormattedString(strInstructions);

  return (
    <div className="e-two-meal-recipe">
      <p className="e-two-meal-recipe__recipe">{formattedString}</p>
      <button
        className="e-two-meal-recipe__read-more"
        onClick={() => setShowModal(true)}
      >
        Read More
      </button>
      {showModal && (
        <RecipeModal
          strMeal={strMeal}
          strInstructions={strInstructions}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
