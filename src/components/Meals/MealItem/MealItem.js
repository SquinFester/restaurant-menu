import { useContext } from "react";
import CartContext from "../../../store/cart-context";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealListItem = (props) => {
  const CartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes["meal-item"]}>
      <div className={classes["meal-info"]}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={classes["meal-info-price"]}>
          ${props.price.toFixed(2)}
        </span>
      </div>
      <MealItemForm onAddToCart={addToCartHandler}>+ Add</MealItemForm>
    </li>
  );
};

export default MealListItem;
