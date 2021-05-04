import { useContext } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-contex";
import CartItem from "./CartItem";

const Cart = (props) => {
  //Context to get the cart used in all the app
  const cartCtx = useContext(CartContext);

  //Set the amount and check for items
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  //handle to remove an item
  const itemRemoveHandler = id => {

  };

  //manage to add an item
  const itemAddHandler = item => {

  };


  //Manage to display the items by maping
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={itemRemoveHandler.bind(null, item.id)}
          onAdd={itemAddHandler(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Oder</button>}
      </div>
    </Modal>
  );
};

export default Cart;
