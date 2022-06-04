import React from "react";

export default function ExerciseTwo() {
  const [meals, setMeals] = React.useState();
  const [mealDetails, setMealDetails] = React.useState();

  React.useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      .then((result) => result.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleMealDetailsOnAPI = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json())
      .then((data) => setMealDetails(data.meals[0]));
  };

  return (
    <section>
      <h2>Zadanie 2</h2>

      <article>
        <h3>Sea Food</h3>
        <ul>
          {meals !== undefined ? (
            <>
              {meals.map(({ idMeal, strMeal, strMealThumb }) => (
                <li key={idMeal} onClick={() => handleMealDetailsOnAPI(idMeal)}>
                  <p>{strMeal}</p>
                  <picture>
                    <img src={strMealThumb} alt={`${strMeal} - ${idMeal}`} />
                  </picture>

                  {mealDetails && mealDetails.idMeal === idMeal && (
                    <ul>
                      <li>Area: {mealDetails.strArea}</li>
                      <li>Category {mealDetails.strCategory}</li>
                      <li>Tags: {mealDetails.strTags}</li>
                      <li>
                        <a
                          href={mealDetails.strYoutube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          YoutubeTutorial Here!
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </>
          ) : (
            <li key="loading">Loading</li>
          )}
        </ul>
      </article>
    </section>
  );
}
