import { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";

import classes from "./AvailableMeals.module.css";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, useSendRequest: fetchRequest } = useHttp();

  useEffect(() => {
    const dataHandler = (data) => {
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({ id: key, ...data[key] });
      }
      setMeals(loadedMeals);
    };

    fetchRequest(
      {
        url: "https://react-sw-ad600-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },

      dataHandler
    );
  }, [fetchRequest]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.MealsLoading}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
