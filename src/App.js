import { useState } from "react";

import Header from "./components/Layout/Header/Header";
import Meal from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown((prevState) => !prevState);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onShowCartOff={showCartHandler} />}
      <Header onShowCartOn={showCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
