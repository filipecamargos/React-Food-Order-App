import { Fragment } from 'react';

import bannerImage from '../../assets/bannerFood.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header>
          <h1>Meal Order App</h1>
          <button>Cart</button>
      </header>
      <div>
          <img src={bannerImage} />
      </div>
    </Fragment>
  );
};

export default Header;
