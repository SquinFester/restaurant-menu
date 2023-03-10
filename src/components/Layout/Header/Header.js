import { Fragment } from "react";

import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";
import HeaderMain from "./HeaderMain";

const Header = ({ onShowCartOn }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          ReactSalad<span>Store</span>
        </h1>
        <HeaderCartButton onClick={onShowCartOn} />
      </header>
      <HeaderMain />
    </Fragment>
  );
};

export default Header;
