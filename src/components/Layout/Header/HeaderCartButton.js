import { useContext } from "react";

import classes from "./HeaderCartButton.module.css";

import { FaShoppingCart } from "react-icons/fa";
import CardContext from "../../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CardContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.cart} onClick={onClick}>
      <span>
        <FaShoppingCart />
      </span>
      <span className={classes.counter}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
