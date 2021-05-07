import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";

//Display the list of meals
const AvailableMeals = () => {
  const listMeals = DUMMY_MEALS.map((meal) => (
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
        <ul>{listMeals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
