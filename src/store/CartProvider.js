import { useReducer } from "react";

/*This component manage the Cart context data and provide 
it to all the components that will neeed it*/
import CartContext from "./cart-contex";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    
    const existingCartItem = state.items[existingCartItemIndex];

    let updateItem;
    let updateItems;

    if(existingCartItem) {
      updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    }
    else {
      updateItem = {...action.item};
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

//The CartProvider Component
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
