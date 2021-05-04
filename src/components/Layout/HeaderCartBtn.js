import { useContext } from "react";

import CartIcon from "../UI/CartIcon";
import classes from "./HeaderCartBtn.module.css";
import CartContext from "../../store/cart-contex";

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onCartBtnClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
