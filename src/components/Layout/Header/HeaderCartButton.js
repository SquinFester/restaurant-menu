import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";

import { FaShoppingCart } from "react-icons/fa";
import CardContext from "../../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const [btnAnim, setBtnAnim] = useState(false);

  const cartCtx = useContext(CardContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnim ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnAnim(true);

    const timer = setTimeout(() => {
      setBtnAnim(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span>
        <FaShoppingCart />
      </span>
      <span className={classes.counter}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
