import { Fragment, useContext, useState } from "react";
import { config } from "../../config";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  //Manage the checkout form conditionally
  const [checkOut, setCheckout] = useState(false);

  //State to handle the submission
  const [isSubmitting, setIssubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  //Context to get the cart used in all the app
  const cartCtx = useContext(CartContext);

  //Set the amount and check for items
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  //handle to remove an item
  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //manage to add an item
  const itemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  //Manage to display the items by maping
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={itemRemoveHandler.bind(null, item.id)}
          onAdd={itemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  //Handler the order by showing the checkout form
  const orderHandler = () => {
    setCheckout(true);
  };

  //Handle the cancel of the order back to the cart
  const onOrderCancel = () => {
    setCheckout(false);
  };

  //Handle the HTTP POST Request to submit the order
  const submitOrderHandler = async (userData) => {
    setIssubmitting(true);
    await fetch(`${config.db}orders.json`, {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });

    setIssubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  //Modal to handle the btn actions dynamicly
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Oder
        </button>
      )}
    </div>
  );

  //the cart display
  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkOut && (
        <Checkout onCancel={onOrderCancel} onConfirm={submitOrderHandler} />
      )}
      {!checkOut && modalActions}
    </Fragment>
  );

  //Get a message while it is submitting
  const isSubmittingModalContent = <p>Processing your order...</p>;

  //Handle a modal with a sucess message and a btn to go back
  const didSubmitModalContent = (
    <Fragment>
      <p>Order Submitted Successfully!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
