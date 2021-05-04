import { Fragment } from "react";

import bannerImage from "../../assets/bannerFood.jpg";
import classes from "./Header.module.css";

import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meal Order App</h1>
        <HeaderCartBtn onCartBtnClick={props.onCartBtnClick}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImage} alt="Table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
