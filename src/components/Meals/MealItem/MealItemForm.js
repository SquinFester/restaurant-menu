import { useRef } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form onSubmit={submitHandler} className={classes["meal-form"]}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />

      <button>{props.children}</button>
    </form>
  );
};

export default MealItemForm;
