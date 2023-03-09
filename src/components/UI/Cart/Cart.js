import classes from "./Cart.j.module.css";

import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className={classes.cart}>
      <FaShoppingCart />
      <p>Your Cart</p>
      <span className={classes.counter}>0</span>
    </div>
  );
};

export default Cart;
