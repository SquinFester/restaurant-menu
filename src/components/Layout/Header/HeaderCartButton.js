import classes from "./HeaderCartButton.module.css";

import { FaShoppingCart } from "react-icons/fa";

const HeaderCartButton = () => {
  return (
    <button className={classes.cart}>
      <span>
        <FaShoppingCart />
      </span>
      <span className={classes.counter}>0</span>
    </button>
  );
};

export default HeaderCartButton;
