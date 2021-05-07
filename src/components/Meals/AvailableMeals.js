import { useEffect, useState } from "react";
import { config } from "../../config";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";

//Display the list of meals
const AvailableMeals = () => {
  //The component states
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState();

  //Use effect get run when the component is loaded
  useEffect(() => {
    //Function to fecth the data
    const fetchMeals = async () => {
      //Fecth the data
      const response = await fetch(`${config.db}meals.json`);
      const responseData = await response.json();

      //Check for errors
      if (!response.ok) {
        throw new Error("Sorry something went wrong!");
      }

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsloading(false);
    };

    //Try to fecth
    fetchMeals().catch((error) => {
      setIsloading(false);
      setHttpError(error.message);
    });
  }, []);

  //Set the content based on condition
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsLoading}>
        <p>{httpError}</p>
      </section>
    );
  }

  //Set the meal list
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
