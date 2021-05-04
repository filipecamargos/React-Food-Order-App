/*This component manage the Cart context data and provide 
it to all the components that will neeed it*/
import CartContext from "./cart-contex";

const CartProvider = (props) => {
  const addItemToCartHandler = (items) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
