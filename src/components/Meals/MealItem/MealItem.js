import AddToCartButton from "./AddToCartButton";
import classes from "./MealItem.module.css";

const MealListItem = (props) => {
  return (
    <li className={classes["meal-item"]}>
      <div className={classes["meal-info"]}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span className={classes["meal-info-price"]}>
          ${props.price.toFixed(2)}
        </span>
      </div>
      <AddToCartButton>+ Add</AddToCartButton>
    </li>
  );
};

export default MealListItem;
