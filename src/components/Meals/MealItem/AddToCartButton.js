import { useState } from "react";

import classes from "./AddToCartButton.module.css";

const AddToCartButton = (props) => {
  const [count, setCount] = useState(0);

  const countHandler = (event) => {
    const { value } = event.target;
    setCount(value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm} className={classes["add-button"]}>
      <div className={classes["add-button-input"]}>
        <label htmlFor={props.id}>Amount</label>
        <input
          id={props.id}
          type="number"
          value={count}
          onChange={countHandler}
        />
      </div>

      <button type="submit">{props.children}</button>
    </form>
  );
};

export default AddToCartButton;
