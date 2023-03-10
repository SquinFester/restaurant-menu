import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const CardModal = ({ onShowCartOff }) => {
  const CartCtx = useContext(CartContext);
  const hasItems = CartCtx.items.length > 0;

  const itemsList = () =>
    CartCtx.items.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
      />
    ));

  return (
    <Modal onShowCartOff={onShowCartOff}>
      <div className={classes.orders}>
        <ul>{itemsList()}</ul>
      </div>
      <div className={classes.price}>
        <span>Total Amount</span>
        <span>${CartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.active}>
        <button
          className={`${classes.btn} ${classes["btn-close"]}`}
          onClick={onShowCartOff}
        >
          Close
        </button>
        {hasItems && (
          <button className={`${classes.btn} ${classes["btn-order"]}`}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default CardModal;
