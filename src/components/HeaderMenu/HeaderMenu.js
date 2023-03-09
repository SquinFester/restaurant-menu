import Cart from "../UI/Cart/Cart";
import classes from "./HeaderMenu.module.css";

const HeaderMenu = () => {
  return (
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <Cart />
    </header>
  );
};

export default HeaderMenu;
