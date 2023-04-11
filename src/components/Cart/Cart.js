import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import DeliveryForm from "./Checkout/Checkout";
import useHttp from "../../hooks/use-http";

const CardModal = ({ onShowCartOff }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const { isLoading: isSubmitting, useSendRequest: onSendRequest } = useHttp();

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

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    await onSendRequest({
      url: "https://react-sw-ad600-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: { user: userData, order: CartCtx.items },
    });

    CartCtx.clearItems();
    setIsCheckout(false);
    setIsSent(true);
  };

  const modalActions = (
    <div className={classes.active}>
      <button
        className={`${classes.btn} ${classes["btn-close"]}`}
        onClick={onShowCartOff}
      >
        Close
      </button>
      {hasItems && (
        <button
          className={`${classes.btn} ${classes["btn-order"]}`}
          onClick={checkoutHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      <div className={classes.orders}>
        <ul>{itemsList()}</ul>
      </div>

      {isSent && <p className={classes.sent}>Thanks for your order! :) </p>}
      {!isSent && (
        <div className={classes.price}>
          <span>Total Amount</span>
          <span>${CartCtx.totalAmount.toFixed(2)}</span>
        </div>
      )}

      {!isCheckout ? (
        modalActions
      ) : (
        <DeliveryForm onClick={onShowCartOff} onConfirm={submitOrderHandler} />
      )}
    </>
  );

  const isSubmittingContent = <p>Sending...</p>;

  return (
    <Modal onShowCartOff={onShowCartOff}>
      {!isSubmitting && cartModalContent}
      {isSubmitting && isSubmittingContent}
    </Modal>
  );
};

export default CardModal;
