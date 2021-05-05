import { Fragment } from "react";

import bannerImage from "../../assets/bannerFood.jpg";
import classes from "./Header.module.css";

import HeaderCartBtn from "./HeaderCartBtn";

//The Header component wich holds a banner image
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartBtn onCartBtnClick={props.onCartBtnClick}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerImage} alt="Table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
