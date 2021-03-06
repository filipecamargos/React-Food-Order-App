import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  //Manage the cart display
  const [showCart, setShowCart] = useState(false);

  //Show the cart
  const showCartHandler = () => {
    setShowCart(true);
  };

  //Hide the cart
  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={closeCartHandler} />}
      <Header onCartBtnClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
