import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const CartCtx = useContext(CartContext);

  const addItemToCartHandler = () => {
    CartCtx.addItem({
      id: props.id,
      price: props.price,
      amount: 1,
    });
  };

  const removeItemFromCartHandler = () => {
    CartCtx.removeItem(props.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["cart-info"]}>
        <h3>{props.name}</h3>
        <div className={classes["cart-count"]}>
          <span className={classes.price}>${props.price.toFixed(2)}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.action}>
        <button className={classes.btn} onClick={removeItemFromCartHandler}>
          -
        </button>
        <button className={classes.btn} onClick={addItemToCartHandler}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
