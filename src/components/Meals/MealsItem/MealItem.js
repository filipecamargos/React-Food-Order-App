import { useContext } from "react";

import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

//Single component of a meal to be displayed
const MealItem = (props) => {
  const cartCxt = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  //New add to cart to call the add to cart from the context and pass the item
  const addToCartHandler = (amount) => {
    cartCxt.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
