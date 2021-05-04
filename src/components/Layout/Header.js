import { Fragment } from 'react';

import bannerImage from '../../assets/bannerFood.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>Meal Order App</h1>
          <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
          <img src={bannerImage} alt='Table of food'/>
      </div>
    </Fragment>
  );
};

export default Header;
