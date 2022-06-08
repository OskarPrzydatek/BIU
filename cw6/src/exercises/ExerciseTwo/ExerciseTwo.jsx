import React from "react";

import useMeals from "./hooks/useMeals";

import PageLayout from "./layouts/PageLayout/PageLayout";
import MealsList from "./components/MealsList/MealsList";
import MealListItem from "./components/MealListItem/MealListItem";
import MealDescription from "./layouts/MealDescription/MealDescription";
import Loading from "./components/Loading/Loading";

import { ExerciseTwoContent } from "./consts/exerciseContent";

export default function ExerciseTwo() {
  const meals = useMeals();

  return (
    <PageLayout
      title={ExerciseTwoContent.PAGE_LAYOUT_TITLE}
      exerciseContent={ExerciseTwoContent.EXERCISE_CONTENT}
    >
      <MealsList title={ExerciseTwoContent.MEALS_LIST_TITLE}>
        {meals !== undefined ? (
          <>
            {meals.map(({ idMeal, strMeal, strMealThumb }) => (
              <MealListItem
                key={`${idMeal}-${strMeal}`}
                strMeal={strMeal}
                strMealThumb={strMealThumb}
              >
                <MealDescription idMeal={idMeal} strMeal={strMeal} />
              </MealListItem>
            ))}
          </>
        ) : (
          <Loading />
        )}
      </MealsList>
    </PageLayout>
  );
}
